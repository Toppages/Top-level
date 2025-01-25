import { IconGauge, IconFingerprint, IconActivity } from '@tabler/icons-react';
import './App.css';
import { Card, Group, NavLink } from '@mantine/core';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mantine/hooks';
import TableC from './Components/TableC/Index';

function Home({ navOpen }: { navOpen: boolean }) {
  const data = [
    { icon: IconGauge, label: 'Dashboard', description: 'Item with description' },
    { icon: IconFingerprint, label: 'Security' },
    { icon: IconActivity, label: 'Activity' },
  ];

  const [active, setActive] = useState(0);
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

        active={index === active}
        label={item.label}
        description={item.description}
        icon={<item.icon size={16} stroke={1.5} />}
        onClick={() => setActive(index)}
      />
    </motion.div>
  ));

  return (
    <>
      <Group
        mt={15}
        mx="sm"
        style={{
          display: 'flex',
          flexDirection: 'row', // Alinea los elementos en una fila
          alignItems: 'flex-start', // Alinea los elementos al principio del contenedor
          gap: 15, // Espacio entre los elementos
        }}
      >
        {!isMobile && (
          <Card
            style={{
              flexShrink: 0,
              display: navOpen ? 'block' : 'none',
              width: 'auto', 
            }}
            radius="md"
          >
            {items}
          </Card>
        )}

        <Card
          radius="md"
          style={{
            flexGrow: 1
          }}
        >
          <TableC />
        </Card>
      </Group>
    </>
  );
}

export default Home;
