import { IconEye } from '@tabler/icons-react';
import { useState } from 'react';
import { Modal, ActionIcon, Title, Image, Group, Button, NumberInput, Card, Text } from '@mantine/core';

function ProductsU() {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size="70%"
        withCloseButton={false}
        centered
       
      >
        <Group position="apart" align="flex-start">
          <div style={{ width: '35%' }}>
            <Image
              fit="contain"
              src="https://media.assettype.com/eisamay/2024-10-26/072vkhry/100209239.jpg?w=640&auto=format,compress"
              style={{ marginBottom: 20, borderRadius: 8 }}
            />
          </div>

          {/* Sección de opciones */}
          <div style={{ width: '60%' }}>
            <Title order={2} style={{   marginBottom: 20 }}>
              Free Fire (EEUU / LATAM)
            </Title>
            <Text size="lg" mb="md">
              Ingresa tus datos
            </Text>
            <NumberInput
              min={1}
              type="number"
              placeholder="Coloca aquí tu ID"
              radius="md"
              size="md"
              styles={{
                input: {
                  backgroundColor: '#282828',
                  border: '1px solid #444',
                  color: '#fff',
                },
              }}
            />

            <Text size="lg" mt="lg" mb="sm">
              Selecciona un plan
            </Text>
            <Group position="left" spacing="sm" mb="md">
              {[...Array(6)].map((_, index) => (
                <Card
                  key={index}
                  shadow="sm"
                  radius="md"
                  style={{
                    width: 120,
                    height: 160,
                    backgroundColor: '#202020',
                    color: '#fff',
                    textAlign: 'center',
                    padding: 10,
                    border: '1px solid #444',
                  }}
                >
                  <Text size="sm" mb="xs">
                    XX Diamantes
                  </Text>
                  <Text size="sm" mb="xs" style={{ color: '#28a745' }}>
                   XX $
                  </Text>
                </Card>
              ))}
            </Group>

            <Button
              size="lg"
              color="green"
              fullWidth
              mt={15}
              radius="md"
            >
              Añadir al carrito
            </Button>
          </div>
        </Group>
      </Modal>

      <ActionIcon onClick={() => setModalOpened(true)}>
        <IconEye color="green" size={34} />
      </ActionIcon>
    </>
  );
}

export default ProductsU;
