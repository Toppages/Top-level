import Drawer from '../Drawer';
import { Link } from 'react-router-dom';
import { useCart } from '../../CartContext';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { IconUser,IconMenu2, IconSearch } from '@tabler/icons-react';
import { Group, ActionIcon, Indicator, Title, Card } from '@mantine/core';

function Navbar({ setNavOpen }: { setNavOpen: (open: boolean) => void }) {
    const isMobile = useMediaQuery('(max-width: 1000px)');
    const { cart } = useCart();
    const [opened, setOpened] = useState(false);


    const handleBurgerClick = () => {
        setOpened((prev) => !prev);
        setNavOpen(!opened);
    };

    return (
        <>
        <Card mx='sm' radius='md' mt={15}>

            <Group position="apart" style={{ width: '100%' ,background:'white' }}>
                <Drawer />

                {!isMobile && (
                     <ActionIcon mr={8} radius="xl" 
                     onClick={handleBurgerClick}>

                         <IconMenu2
                         size={34}
                         color='blue'
                         />
                     </ActionIcon>
                )}

                <Title order={1} style={{ marginBottom: 5, textAlign: isMobile ? 'left' : 'center' }}>
                    Top level
                </Title>

                <Group spacing="lg" position="apart" style={{ width: 'auto' }}>
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
        </Card>

        </>
    );
}

export default Navbar;
