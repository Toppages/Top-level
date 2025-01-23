import { IconEye } from '@tabler/icons-react';
import { useCart } from '../../CartContext'; 
import { useState, useEffect } from 'react';
import { Modal, ActionIcon, Title, Image, Group, Button, NumberInput } from '@mantine/core';

function ProductsU({ product }: { product: any }) {
  const [modalOpened, setModalOpened] = useState(false);
  const [quantity, setQuantity] = useState<number>(1); 
  const { addToCart } = useCart(); 

  // Reiniciar la cantidad a 1 cuando se abre el modal
  useEffect(() => {
    if (modalOpened) {
      setQuantity(1); // Reinicia la cantidad a 1
    }
  }, [modalOpened]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product); 
    }
    setModalOpened(false); // Cierra el modal después de añadir el producto al carrito
  };

  const handleQuantityChange = (value: number | undefined) => {
    if (value !== undefined) {
      setQuantity(value);
    }
  };

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size="70%"
        withCloseButton={false}
        centered
      >
        <Group position="apart">
          <div style={{ width: '40%' }}>
            <Image
              fit="contain"
              src={product.src}
              alt={product.title}
              style={{ marginBottom: 20 }}
            />
          </div>

          <div style={{ width: '50%' }}>
            <Title>{product.title}</Title>

            <NumberInput
              min={1}
              type="number"
              value={quantity}
              onChange={handleQuantityChange} 
              style={{ marginTop: 20 }}
              label="Cantidad a agregar"
              radius="md"
              size="lg"
            />

            <Group position="center">
              <Button
                size="lg"
                color="red"
                mt={15}
                onClick={handleAddToCart}
              >
                Añadir
              </Button>
            </Group>
          </div>
        </Group>
      </Modal>

      <ActionIcon onClick={() => setModalOpened(true)}>
        <IconEye color="red" size={34} />
      </ActionIcon>
    </>
  );
}

export default ProductsU;
