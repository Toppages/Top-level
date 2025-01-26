import Drawer from '../Drawer';
import { useState } from 'react';
import { IconMenu2 } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { Group, ActionIcon, Title, Card } from '@mantine/core';

function Navbar({
    setNavOpen,
    setActiveLink,
  }: {
    setNavOpen: (open: boolean) => void;
    setActiveLink: (index: number) => void;
  }) {
    const isMobile = useMediaQuery("(max-width: 1000px)");
    const [opened, setOpened] = useState(false);
  
    const handleBurgerClick = () => {
      setOpened((prev) => !prev);
      setNavOpen(!opened);
    };
  
    return (
      <>
        <Card mx="sm" radius="md" mt={15}>
          <Group position="apart" style={{ width: "100%", background: "white" }}>
            <Drawer setActiveLink={setActiveLink} />
  
            {!isMobile && (
              <ActionIcon
                mr={8}
                radius="xl"
                onClick={handleBurgerClick}
              >
                <IconMenu2 size={34} color="blue" />
              </ActionIcon>
            )}
  
            <Title
              order={1}
              style={{
                marginBottom: 5,
                textAlign: isMobile ? "left" : "center",
              }}
            >
              Top level
            </Title>
          </Group>
        </Card>
      </>
    );
  }
  
  export default Navbar;
  