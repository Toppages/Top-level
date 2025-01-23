import Drawer from '../Drawer';
import { useCart } from '../../CartContext';
import { useMediaQuery } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { IconUser, IconSearch } from '@tabler/icons-react';
import { Group, Divider, ActionIcon, Indicator, Title } from '@mantine/core';

function Navbar() {
    const isMobile = useMediaQuery('(min-width: 1000px)');
    const { cart } = useCart();

    return (
        <>
            <div style={{ width: '100%' }}>
                <Drawer />
                <Group position={isMobile ? "apart" : "center"} style={{ flexDirection: isMobile ? "row" : "column", width: "100%" }}>

                    <Title mt='5%' style={{ display: isMobile ? "none" : "flex" }} mb='2%' order={1}>Top level</Title>



                    {isMobile && (
                        <>
                            <Group spacing="xl" position="center">
                                <Title ml={750} mt={15} mb='2%' order={1}>Top level</Title>


                            </Group>
                        </>
                    )}

                    <Group align='end' mr={15} spacing="lg" position={isMobile ? "apart" : "center"}>

                        <ActionIcon radius="xl">
                            <IconSearch color="blue" size={34} />
                        </ActionIcon>
                        {cart.length > 0 ? (
                            <Indicator label={cart.length} withBorder showZero={false} inline color="blue" overflowCount={999} size={20}>
                                <Link to="/profierecalanding/Cart">
                                    <ActionIcon mr={8} radius="xl">
                                        <IconUser color="blue" size={34} />
                                    </ActionIcon>
                                </Link>
                            </Indicator>
                        ) : (
                            <Link to="/profierecalanding/Cart">
                                <ActionIcon mr={8} radius="xl">
                                    <IconUser color="blue" size={34} />
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
