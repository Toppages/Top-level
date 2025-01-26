import axios from 'axios';
import { IconAdjustments } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { ActionIcon, Modal, Table } from '@mantine/core';

function TableC() {
  const [opened, setOpened] = useState(false);
  const [collections, setCollections] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

  useEffect(() => {

    const fetchCollections = async () => {
      try {
        const response = await axios.get('https://stock.hype.games/api/catalog/collections', {
          headers: {
            Authorization: 'Bearer ACCESS-TOKEN-HERE',
            'Content-Type': 'application/json',
          },
        });
        setCollections(response.data);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };

    fetchCollections();
  }, []);

  const fetchProducts = async (collectionId: number) => {
    try {
      const response = await axios.get(`https://stock.hype.games/api/catalog/collections/${collectionId}`, {
        headers: {
          Authorization: 'Bearer ACCESS-TOKEN-HERE',
          'Content-Type': 'application/json',
        },
      });
      setProducts(response.data.products);
      setSelectedCollection(response.data.name);
      setOpened(true);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const rows = collections.map((collection) => (
    <tr key={collection.id}>
      <td>{collection.id}</td>
      <td>{collection.name}</td>
      <td>{collection.description || 'N/A'}</td>
      <td>{collection.products.length}</td>
      <td>
        <ActionIcon onClick={() => fetchProducts(collection.id)} color="indigo" size="lg" variant="filled">
          <IconAdjustments size={26} />
        </ActionIcon>
      </td>
    </tr>
  ));

  const productRows = products.map((product) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.salesPrice}</td>

    </tr>
  ));

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={selectedCollection || 'Productos'}
        size="lg"
      >
        <Table striped highlightOnHover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre del Producto</th>
              <th>Descripción</th>
              <th>Precio</th>

            </tr>
          </thead>
          <tbody>{productRows}</tbody>
        </Table>
      </Modal>

      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Colección</th>
            <th>Descripción</th>
            <th>Productos</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
}

export default TableC;
