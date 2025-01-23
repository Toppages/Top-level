import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from '@mantine/hooks';
import { Drawer as MantineDrawer, Burger, Text, Container } from '@mantine/core';

function Drawer() {
    const [opened, setOpened] = useState(false);
    const isMobile = useMediaQuery('(min-width: 1000px)');
    const location = useLocation();
    const closeDrawer = () => setOpened(false);

    const getLinkStyle = (path: string) => ({
        color: location.pathname === path ? 'red' : 'black',
        borderBottom: location.pathname === path ? '2px solid red' : 'none',
        textDecoration: 'none',
        outline: 'none'
    });

    return (
        <>
            {!isMobile && (
                <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    title={opened ? 'Close navigation' : 'Open navigation'}
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
                <Container mt={15} style={{ display: 'flex'}}>
                    <div>
                        <Link
                            to="/profierecalanding/Catalogo"
                            style={getLinkStyle('/profierecalanding/Catalogo')}
                            onClick={closeDrawer}
                        >
                            <Text mr={15} fw={700}>
                                Catalogo
                            </Text>
                        </Link>
                        <Link
                            to="/profierecalanding/Nosotros"
                            style={getLinkStyle('/profierecalanding/Nosotros')}
                            onClick={closeDrawer}
                        >
                            <Text mt={15} fw={700}>
                                Nuestra empresa
                            </Text>
                        </Link>
                        <Link
                            to="/profierecalanding/contacto"
                            style={getLinkStyle('/profierecalanding/contacto')}
                            onClick={closeDrawer}
                        >
                            <Text mt={15} fw={700}>
                                Contactanos
                            </Text>
                        </Link>
                        <Link
                            to="/profierecalanding/Servicio"
                            style={getLinkStyle('/profierecalanding/Servicio')}
                            onClick={closeDrawer}
                        >
                            <Text mt={15} fw={700}>
                                Servicios
                            </Text>
                        </Link>
                    </div>
                </Container>
            </MantineDrawer>
        </>
    );
}

export default Drawer;
