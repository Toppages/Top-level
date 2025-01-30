import axios from 'axios';
import { IconEye, IconShoppingBag } from '@tabler/icons-react';
import { ActionIcon, Modal, Table, Loader } from '@mantine/core';
import { useEffect, useState, useCallback, useMemo } from 'react';

function TableC() {
  const [opened, setOpened] = useState(false);
  const [collections, setCollections] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const accessToken = localStorage.getItem('accessToken');

  const authenticate = useCallback(async () => {
    if (!accessToken) {
      console.error('No token found, please login');
      return;
    }
  }, [accessToken]);

  const [loading, setLoading] = useState<boolean>(false);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(false);

  const country = 'CO';
  const currency = 'COP';
  const language = 'es-CO';



  useEffect(() => {
    authenticate();
  }, [authenticate]);

  const fetchCollections = useCallback(async () => {
    if (!accessToken) return;

    setLoading(true);

    try {
      const { data } = await axios.get('/api/catalog', {
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        params: { country, currency, language },
      });
      setCollections(data);
    } catch (error) {
      console.error('Error fetching collections:', error);
    } finally {
      setLoading(false);
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) fetchCollections();
  }, [accessToken, fetchCollections]);

  const fetchProducts = useCallback(async (collectionId: number) => {
    if (!accessToken) return;

    setLoadingProducts(true);

    try {
      const { data } = await axios.get(`/api/catalog/collections/${collectionId}`, {
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        params: { country, currency, language },
      });
      setProducts(data.products);
      setSelectedCollection(data.name);
      setOpened(true);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoadingProducts(false);
    }
  }, [accessToken]);

  const rows = useMemo(() => collections.map(({ id, name, products }) => (
    <tr key={id}>
      <td style={{ textAlign: "center" }}>{id}</td>
      <td style={{ textAlign: "center" }}>{name}</td>
      <td style={{ textAlign: "center" }}>{products.length}</td>
      <td>
        <ActionIcon onClick={() => fetchProducts(id)} color="indigo" size="lg" variant="filled">
          <IconEye size={26} />
        </ActionIcon>
      </td>
    </tr>
  )), [collections, fetchProducts]);

  const productRows = useMemo(() => products.map(({ id, name, salesPrice }) => (
    <tr key={id}>

      <td style={{ textAlign: "center" }}>{name}</td>
      <td style={{ textAlign: "center" }}>{salesPrice} Cop</td>
      <td>
        <ActionIcon color="indigo" size="lg" variant="filled">
          <IconShoppingBag size={26} />
        </ActionIcon>
      </td> 
    </tr>
  )), [products]);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title={selectedCollection || 'Productos'} size="xl">
        <Table striped highlightOnHover>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Nombre del Producto</th>
              <th style={{ textAlign: "center" }}>Precio</th>
              <th style={{ textAlign: "center" }}></th>
            </tr>
          </thead>
          <tbody>
            {loadingProducts ? (
              <tr>
                <td colSpan={3} style={{ textAlign: 'center' }}>
                  <Loader color="indigo" size="xl" variant="dots" />
                </td>
              </tr>
            ) : productRows}
          </tbody>
        </Table>
      </Modal>

      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Colección</th>
            <th style={{ textAlign: "center" }}>Productos</th>
            <th style={{ textAlign: "center" }}></th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={4} style={{ textAlign: 'center' }}>
                <Loader color="indigo" size="xl" variant="dots" />
              </td>
            </tr>
          ) : rows}
        </tbody>
      </Table>
    </>
  );
}

export default TableC;