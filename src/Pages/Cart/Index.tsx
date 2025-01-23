import { useCart } from '../../CartContext';
import { useForm } from '@mantine/form';
import { IconTrash } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { Card, Group, Title, Text, Image, ActionIcon, Grid, TextInput, Button, Flex, Textarea, Select } from '@mantine/core';

interface CartItem {
    title: string;
    src: string;
    quantity?: number;
}

function Cart() {
    const { cart, removeFromCart } = useCart();
    const isMobile = useMediaQuery('(max-width: 1000px)');
    const form = useForm({
        initialValues: {
            name: '',
            message: '',
            branch: '',
        },

        validate: {
            name: (value) => (value ? null : 'El nombre es requerido'),
            message: (value) => (value ? null : 'El mensaje es requerido'),
            branch: (value) => (value ? null : 'Sucursal es requerida'),
        },
    });
    const groupedItems = cart.reduce<CartItem[]>((acc, item) => {
        const existingItem = acc.find((i) => i.title === item.title);
        if (existingItem) {
            existingItem.quantity! += 1;
        } else {
            acc.push({ ...item, quantity: 1 });
        }
        return acc;
    }, []);

    const handleRemove = (title: string) => {
        removeFromCart(title);
    };

    const handleSubmit = (values: typeof form.values) => {
        const selectedBranch = branches.find((branch) => branch.value === values.branch);
        if (selectedBranch) {
            const itemsList = groupedItems.map((item, index) =>
                `${index + 1}. ${item.title} - ${item.quantity} unidades`
            ).join('\n');

            const finalMessage = `Hola soy ${values.name}, ${values.message}\n\nQuisiera cotizar los siguientes elementos:\n${itemsList}`;

            const waUrl = `https://wa.me/${selectedBranch.phone}?text=${encodeURIComponent(finalMessage)}`;
            window.open(waUrl, '_blank');
            clearCart();
            window.location.reload();
        }
    };

    // const handleSubmit = async (values: typeof form.values) => {
    //     const selectedBranch = branches.find((branch) => branch.value === values.branch);
    //     if (selectedBranch) {
    //         const itemsList = groupedItems.map((item, index) =>
    //             `${index + 1}. ${item.title} - ${item.quantity} unidades`
    //         ).join('\n');

    //         const finalMessage = `Hola soy ${values.name}, ${values.message}\n\nQuisiera cotizar los siguientes elementos:\n${itemsList}`;

    //         // Enviar los datos al Webhook de Make
    //         const payload = {
    //             name: values.name,
    //             message: finalMessage,
    //             phone: selectedBranch.phone,
    //         };

    //         try {
    //             // Realizar la solicitud POST al webhook de Make
    //             const response = await fetch('https://hook.us2.make.com/9ri96jmohh4c1jwlyxpteidfswwqpush', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify(payload),
    //             });

    //             // Si la solicitud fue exitosa, podemos limpiar el carrito
    //             if (response.ok) {
    //                 clearCart();
    //                 window.location.reload(); // Recargar la página
    //                 alert("Mensaje enviado con éxito!");
    //             } else {
    //                 alert("Hubo un error al enviar el mensaje.");
    //             }
    //         } catch (error) {
    //             console.error("Error al enviar el mensaje:", error);
    //             alert("Hubo un error al enviar el mensaje.");
    //         }
    //     }
    // };
    const clearCart = () => {
        cart.forEach(item => removeFromCart(item.title));
    };

    const branches = [
        { value: 'Zulia', label: 'Zulia', phone: '+584127341636' },
        { value: 'Caracas', label: 'Caracas', phone: '+584127341637' },
        { value: 'Anzoategui', label: 'Anzoategui', phone: '+584127341638' },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <Title order={2}>Tu Carrito</Title>
            <Grid gutter="xl">
                <Grid.Col span={12} sm={6} md={6}>
                    {cart.length === 0 ? (
                        <Text ta='center' my={40}>No hay productos en tu carrito.</Text>
                    ) : (
                        <Grid gutter="md">
                            {groupedItems.map((item, index) => (
                                <Grid.Col span={6} key={index}>
                                    <Card shadow="xl" radius="md">
                                        <Card.Section>
                                            <Group
                                                style={{
                                                    top: '10px',
                                                    left: '0',
                                                    right: '0',
                                                    zIndex: 1,
                                                    justifyContent: 'end',
                                                    padding: '0 10px',
                                                }}
                                            >
                                                <ActionIcon radius="xl" onClick={() => handleRemove(item.title)}>
                                                    <IconTrash color="red" size={34} />
                                                </ActionIcon>
                                            </Group>

                                            {item.src && (
                                                <Image
                                                    src={item.src}
                                                    alt={item.title}
                                                    style={{
                                                        width: '100%',
                                                        height: 'auto',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                            )}
                                        </Card.Section>
                                        <Group position="apart" mt="xs" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                            <Title order={6} style={{ wordBreak: 'break-word' }}>
                                                {item.title}
                                            </Title>
                                            <Text size="sm" color="dimmed">
                                                {item.quantity} {item.quantity! > 1 ? 'unidades' : 'unidad'}
                                            </Text>
                                        </Group>
                                    </Card>
                                </Grid.Col>
                            ))}
                        </Grid>
                    )}
                </Grid.Col>

                <Grid.Col span={12} sm={6} md={6}>
                    <Flex
                        direction={isMobile ? 'column' : 'row'}
                        align="flex-start"
                        justify="space-between"
                        style={{ height: '100%' }}
                    >
                        <Card shadow="sm" radius="md" p="lg" style={{ background: '#f9f9f9', flex: 1 }}>
                            <Title order={3}>Datos del Cliente</Title>

                            <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                                <Group position="center">
                                    <TextInput
                                        radius={15}
                                        mt={15}
                                        w="38%"
                                        size="md"
                                        placeholder="Nombre"
                                        aria-label="Nombre"
                                        {...form.getInputProps('name')}
                                    />
                                    <Select
                                        radius={15}
                                        mt={10}
                                        w="30%"
                                        size="md"
                                        placeholder="Sucursal"
                                        aria-label="Sucursal"
                                        data={branches}
                                        {...form.getInputProps('branch')}
                                    />
                                </Group>
                                <Group position="center">
                                    <Textarea
                                        mt={15}
                                        size="xl"
                                        radius={15}
                                        placeholder="Mensaje.........."
                                        aria-label="Mensaje"
                                        {...form.getInputProps('message')}
                                        style={{ width: '70%' }}
                                    />
                                </Group>

                                <Group mb={15} position="center" mt={15}>
                                    <Button
                                        mt={15}
                                        variant="outline"
                                        color="green"
                                        type="submit"
                                        radius="md"
                                        size="lg"
                                        disabled={!form.isValid() || cart.length === 0}
                                    >
                                        Cotización por WhatsApp
                                    </Button>
                                </Group>
                            </form>
                        </Card>
                    </Flex>
                </Grid.Col>
            </Grid>
        </div>
    );
}

export default Cart;
