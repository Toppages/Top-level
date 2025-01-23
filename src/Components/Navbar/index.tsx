import Logo from '../../assets/PROFIRECA Negro.png'
import Drawer from '../Drawer';
import { motion } from 'framer-motion';
import { useCart } from '../../CartContext';
import { useMediaQuery } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import { IconBrandInstagram, IconShoppingCart, IconBrandWhatsapp, IconBrandFacebook } from '@tabler/icons-react';
import { Card, Text, Group, HoverCard, Divider, ActionIcon, Indicator, Image } from '@mantine/core';

function Navbar() {
    const isMobile = useMediaQuery('(min-width: 1000px)');
    const location = useLocation();
    const { cart } = useCart();

    const isActive = (path: string): string => location.pathname === path ? 'red' : 'black';
    return (
        <>
            <div style={{ width: '100%' }}>
                <Drawer />
                <Group position={isMobile ? "apart" : "center"} style={{ flexDirection: isMobile ? "row" : "column", width: "100%" }}>



                                <Image
                                    width="200px"
                                     style={{ display: isMobile ? "none" : "flex" }}
                                    height="130px"
                                    src={Logo}
                                />

                    {isMobile && (
                        <>
                            <Group ml='27%' spacing="xl" position="center">
                                <HoverCard width={320} radius="lg" shadow="md" openDelay={250}>
                                    <HoverCard.Target>
                                        <motion.div
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1, scale: 1.1 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <Text
                                                mr={15}
                                                fw={700}
                                                component={motion.div}
                                                whileHover={{ color: 'red' }}
                                                transition={{ duration: 0 }}
                                                style={{ color: isActive('/profierecalanding/Catalogo') }}
                                            >
                                                Catalogo
                                            </Text>
                                        </motion.div>
                                    </HoverCard.Target>
                                    <HoverCard.Dropdown ml={15}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Card radius="md">
                                                <Link to="/profierecalanding/Catalogo" style={{ textDecoration: 'none', outline: 'none' }}>
                                                    <Text c='black' mr={15} fw={700}>
                                                        Productos
                                                    </Text>
                                                </Link>
                                            </Card>
                                        </motion.div>
                                    </HoverCard.Dropdown>
                                </HoverCard>

                                <HoverCard width={320} radius="lg" shadow="md" openDelay={250}>
                                    <HoverCard.Target>
                                        <motion.div
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1, scale: 1.1 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <Text
                                                mr={15}
                                                fw={700}
                                                component={motion.div}
                                                whileHover={{ color: 'red' }}
                                                transition={{ duration: 0 }}
                                                style={{ color: isActive('/profierecalanding/Nosotros') }}
                                            >
                                                Nuestra empresa
                                            </Text>
                                        </motion.div>
                                    </HoverCard.Target>
                                    <HoverCard.Dropdown ml={15}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Card radius="md">
                                                <Link to="/profierecalanding/Nosotros" style={{ textDecoration: 'none', outline: 'none' }}>
                                                    <Text c='black' mr={15} fw={700}>
                                                        Nosotros
                                                    </Text>
                                                </Link>
                                            </Card>
                                        </motion.div>
                                    </HoverCard.Dropdown>
                                </HoverCard>

                                <Image
                                    width="200px"
                                    height="130px"
                                    src={Logo}
                                />

                                <HoverCard width={320} radius="lg" shadow="md" openDelay={250}>
                                    <HoverCard.Target>
                                        <motion.div
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1, scale: 1.1 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <Text
                                                mr={15}
                                                fw={700}
                                                component={motion.div}
                                                whileHover={{ color: 'red' }}
                                                transition={{ duration: 0 }}
                                                style={{ color: isActive('/profierecalanding/contacto') }}
                                            >
                                                Contactanos
                                            </Text>
                                        </motion.div>
                                    </HoverCard.Target>
                                    <HoverCard.Dropdown ml={15}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Card radius="md">
                                                <Link to="/profierecalanding/contacto" style={{ textDecoration: 'none', outline: 'none' }}>
                                                    <Text c='black' mr={15} fw={700}>
                                                        Contactanos
                                                    </Text>
                                                </Link>
                                            </Card>
                                        </motion.div>
                                    </HoverCard.Dropdown>
                                </HoverCard>

                                <HoverCard width={320} radius="lg" shadow="md" openDelay={250}>
                                    <HoverCard.Target>
                                        <motion.div
                                            initial={{ opacity: 0.8 }}
                                            whileHover={{ opacity: 1, scale: 1.1 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <Text
                                                mr={15}
                                                fw={700}
                                                component={motion.div}
                                                whileHover={{ color: 'red' }}
                                                transition={{ duration: 0 }}
                                                style={{ color: isActive('/profierecalanding/Servicio') }}
                                            >
                                                Servicios
                                            </Text>
                                        </motion.div>
                                    </HoverCard.Target>
                                    <HoverCard.Dropdown ml={15}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Card radius="md">
                                                <Link to="/profierecalanding/Servicio" style={{ textDecoration: 'none', outline: 'none' }}>
                                                    <Text c='black' mr={15} fw={700}>
                                                        Servicios
                                                    </Text>
                                                </Link>
                                            </Card>
                                        </motion.div>
                                    </HoverCard.Dropdown>
                                </HoverCard>
                            </Group>
                        </>
                    )}

                    <Group align='end' mr={15} spacing="lg" position={isMobile ? "apart" : "center"}>
                        <ActionIcon radius="xl">
                            <IconBrandInstagram color="red" size={34} />
                        </ActionIcon>
                        <ActionIcon radius="xl">
                            <IconBrandWhatsapp color="red" size={34} />
                        </ActionIcon>
                        <ActionIcon radius="xl">
                            <IconBrandFacebook color="red" size={34} />
                        </ActionIcon>
                        {cart.length > 0 ? (
                            <Indicator label={cart.length} withBorder showZero={false} inline color="red" overflowCount={999} size={20}>
                                <Link to="/profierecalanding/Cart">
                                    <ActionIcon mr={8} radius="xl">
                                        <IconShoppingCart color="red" size={34} />
                                    </ActionIcon>
                                </Link>
                            </Indicator>
                        ) : (
                            <Link to="/profierecalanding/Cart">
                                <ActionIcon mr={8} radius="xl">
                                    <IconShoppingCart color="red" size={34} />
                                </ActionIcon>
                            </Link>

                        )}
                    </Group>



                </Group>
                <Divider mx='sm' />
            </div>
        </>
    );
}

export default Navbar;
