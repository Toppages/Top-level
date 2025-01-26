import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import {
  Drawer as MantineDrawer,
  Burger,
  Container,
  NavLink,
} from "@mantine/core";
import { motion } from "framer-motion";
import { IconGauge, IconBuildingStore, IconReport } from "@tabler/icons-react";

function Drawer({ setActiveLink }: { setActiveLink: (index: number) => void }) {
    const [opened, setOpened] = useState(false);
    const [active, setActive] = useState(0);
    const isMobile = useMediaQuery("(min-width: 1000px)");
  
    const data = [
      { icon: IconGauge, label: "Dashboard" },
      { icon: IconBuildingStore, label: "Productos" },
      { icon: IconReport, label: "Reportes" },
    ];
  
    const items = data.map((item, index) => (
      <motion.div
        key={`${item.label}-${opened}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
      >
        <NavLink
          variant="subtle"
          color="indigo"
          active={index === active}
          label={item.label}
          disabled={item.label === 'Dashboard'}
          icon={<item.icon size={20} stroke={1.5} />}
          onClick={() => {
            setActive(index);
            setActiveLink(index); 
            setOpened(false);
          }}
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            marginBottom: "8px",
            backgroundColor: index === active ? "#EEF2FF" : "transparent",
            color: index === active ? "#4F46E5" : "#4A5568",
          }}
        />
      </motion.div>
    ));
  
    return (
      <>
        {!isMobile && (
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={opened ? "Cerrar navegación" : "Abrir navegación"}
          />
        )}
  
        <MantineDrawer
          opened={opened}
          onClose={() => setOpened(false)}
          padding="xl"
          size="lg"
          position="left"
          overlayOpacity={0.55}
          overlayBlur={3}
        >
          <Container mt={15} style={{ display: "flex", flexDirection: "column" }}>
            {items}
          </Container>
        </MantineDrawer>
      </>
    );
  }
  
  export default Drawer;