import { AspectRatio, Button, Card, Group, Select, Tabs, Title, TextInput, Textarea, Text, Anchor, Breadcrumbs } from "@mantine/core";
import { IconPhone, IconMail, IconPhotoPin, IconBuildingBridge } from "@tabler/icons-react";
import { useForm } from '@mantine/form';
import { useState } from "react";

interface ContactCardProps {
    icon: React.ReactNode;
    title: string;
    text: string;
}

function Contact() {
const ContactCard = ({ icon, title, text }: ContactCardProps) => (
    <Card shadow="sm" p={30} radius={15} withBorder style={{ flex: '1 1 calc(100% / 3 - 20px)', minWidth: '280px', maxWidth: '350px', backgroundColor: '#FFFFFF' }}>
        <Group position="center">
            {icon}
            <Title ta="center" order={3}>{title}</Title>
        </Group>
        <Text mt={15} ta="center" style={{ fontSize: '12px', color: '#7D879C' }}>{text}</Text>
    </Card>
);

const MapEmbed = ({ src }: { src: string }) => (
    <AspectRatio mt={15} ratio={16 / 9} style={{ width: '100%', maxWidth: '1235px', height: '50vh', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <iframe src={src} loading="lazy" style={{ border: 0, width: '100%', height: '100%' }}></iframe>
    </AspectRatio>
);

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

    const branches = [
        { value: 'Zulia', label: 'Zulia', phone: '+584127341636' },
        { value: 'Caracas', label: 'Caracas', phone: '+584127341637' },
        { value: 'Anzoategui', label: 'Anzoategui', phone: '+584127341638' },
    ];

    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const items = [
        { title: 'Inicio', href: '/profierecalanding' },
        { title: 'Contacto', href: '#' },
    ].map((item, index) => (
        <Anchor c='black' href={item.href} key={index}>
            <Text c='black' fw={700}>
                {item.title}
            </Text>
        </Anchor>
    ));
    const handleSubmit = (values: typeof form.values) => {
        const selectedBranch = branches.find((branch) => branch.value === values.branch);
        if (selectedBranch) {
            setPhoneNumber(selectedBranch.phone);
            setMessage(`Hola soy ${values.name} ${values.message}`);
        }
    };

    const handleWhatsAppClick = () => {
        if (phoneNumber && message) {
            const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(waUrl, '_blank');
        }
    };
    const contactDetails = [
        {
            branch: 'Zulia',
            phone: "(+58 412) 734-1636",
            email: "Mail@gmail.com",
            address: "Lorem ipsum",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.559664596235!2d-71.61429906032714!3d10.691246572862605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89997a04389231%3A0x327497681a0c38c4!2sEXTINTORES%20PROFIRECA!5e0!3m2!1ses!2sve&zoom=100"
        },
        {
            branch: 'Caracas',
            phone: "(+58 412) 555-5555",
            email: "Mail@gmail.com",
            address: "Lorem ipsum",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3923.036985885686!2d-66.91113362496202!3d10.497750589634602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDI5JzUxLjkiTiA2NsKwNTQnMzAuOCJX!5e0!3m2!1ses!2sve!4v1737401092181!5m2!1ses!2sve"
        },
        {
            branch: 'Anzoategui',
            phone: "(+58 412) 555-5555",
            email: "Mail@gmail.com",
            address: "Lorem ipsum",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.559664596235!2d-71.61429906032714!3d10.691246572862605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89997a04389231%3A0x327497681a0c38c4!2sEXTINTORES%20PROFIRECA!5e0!3m2!1ses!2sve&zoom=100"
        },
    ];

    return (
        <>
            <Breadcrumbs mt={10} ml={15}>{items}</Breadcrumbs>
            <Title mt={15} mb={15} ta="center" order={1}>Contactanos</Title>

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
                        disabled={!form.isValid()}
                        onClick={handleWhatsAppClick}
                    >
                        Enviar por WhatsApp
                    </Button>
                </Group>
            </form>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', padding: '20px' }}>
                <Tabs mt={25} color="red" defaultValue="Zulia">
                    <Tabs.List grow position="center">
                        {branches.map((branch) => (
                            <Tabs.Tab
                                key={branch.value}
                                fz={{ base: 'md', sm: 'lg', lg: 'xl' }}
                                value={branch.value}
                                icon={<IconBuildingBridge size={28} />}
                                sx={{
                                    textAlign: 'center',
                                }}
                            >
                                {branch.label}
                            </Tabs.Tab>
                        ))}
                    </Tabs.List>

                    {contactDetails.map(({ branch, phone, email, address, mapSrc }) => (
                        <Tabs.Panel key={branch} value={branch} pl="xs">
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', padding: '20px' }}>
                                <Group mt={15} spacing={20} style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <ContactCard icon={<IconPhone size={20} />} title={phone} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                                    <ContactCard icon={<IconMail size={20} />} title={email} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                                    <ContactCard icon={<IconPhotoPin size={20} />} title={address} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                                </Group>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                                <MapEmbed src={mapSrc} />
                            </div>
                        </Tabs.Panel>
                    ))}
                </Tabs>
            </div>
        </>
    );
}

export default Contact;
