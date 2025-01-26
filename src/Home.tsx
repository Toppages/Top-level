import './App.css';
import TableC from './Components/TableC/Index';
import Reports from './Components/Reports';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mantine/hooks';
import { Card, Group, NavLink } from '@mantine/core';
import { IconGauge, IconBuildingStore, IconReport } from '@tabler/icons-react';

interface HomeProps {
  navOpen: boolean;
  activeLink: number;
  setActiveLink: (index: number) => void;
}

function Home({ navOpen, activeLink, setActiveLink }: HomeProps) {
  const data = [
    { icon: IconGauge, label: 'Dashboard' },
    { icon: IconBuildingStore, label: 'Productos' },
    { icon: IconReport, label: 'Reportes' },
  ];

  const isMobile = useMediaQuery('(max-width: 1000px)');

  const items = data.map((item, index) => (
    <motion.div
      key={`${item.label}-${navOpen}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
    >
      <NavLink
        variant="subtle"
        color="indigo"
        active={index === activeLink}
        label={item.label}
        icon={<item.icon size={20} stroke={1.5} />}
        onClick={() => setActiveLink(index)}
        disabled={item.label === 'Dashboard'}
        style={{
          padding: '10px 15px',
          borderRadius: '8px',
          marginBottom: '8px',
          backgroundColor: index === activeLink ? '#EEF2FF' : 'transparent',
          color: index === activeLink ? '#4F46E5' : '#4A5568',
          cursor: item.label === 'Dashboard' ? 'not-allowed' : 'pointer',
          opacity: item.label === 'Dashboard' ? 0.5 : 1,
        }}
      />
    </motion.div>
  ));

  const renderContent = () => {
    if (data[activeLink].label === 'Reportes') {
      return <Reports />;
    }
    return <TableC />;
  };

  return (
    <>
      <Group
        mt={15}
        mx="sm"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: 15,
        }}
      >
        {!isMobile && (
          <Card
            style={{
              width: 250,
              height: '95vh',
              padding: '20px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              display: navOpen ? 'block' : 'none',
            }}
            radius="md"
          >
            {items}
          </Card>
        )}

        <Card
          radius="md"
          style={{
            flexGrow: 1,
            padding: '20px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          {renderContent()}
        </Card>
      </Group>
    </>
  );
}

export default Home;
