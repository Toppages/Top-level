import axios from 'axios';
import { IconAdjustments } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { ActionIcon, Modal, Table } from '@mantine/core';

function TableC() {
  const [opened, setOpened] = useState(false);
  const [collections, setCollections] = useState<any[]>([]);
  const [productDetails, setProductDetails] = useState<any | null>(null);

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

  const fetchProductDetails = async (productId: number) => {
    try {
      const response = await axios.get(`https://stock.hype.games/api/catalog/products/${productId}`, {
        headers: {
          Authorization: 'Bearer ACCESS-TOKEN-HERE', 
          'Content-Type': 'application/json',
        },
      });
      setProductDetails(response.data);
      setOpened(true); 
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  const rows = collections.map((collection) => (
    <tr key={collection.id}>
      <td>{collection.id}</td>
      <td>{collection.name}</td>
      <td>{collection.description || 'N/A'}</td>
      <td>{collection.products.length}</td>
      <td>
        <ActionIcon onClick={() => fetchProductDetails(collection.products[0]?.id)} color="indigo" size="lg" variant="filled">
          <IconAdjustments size={26} />
        </ActionIcon>
      </td>
    </tr>
  ));

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={productDetails ? productDetails.name : 'Cargando...'}
      >
        {productDetails ? (
          <div>
            <img src={productDetails.image} alt={productDetails.name} style={{ width: '100%' }} />
            <p>{productDetails.description}</p>
            <p><strong>Price: </strong>{productDetails.salesPrice} {productDetails.salesCurrencySymbol}</p>
            <p><strong>How to Redeem: </strong>{productDetails.howToRedeem}</p>
            <p><strong>Terms and Conditions: </strong>{productDetails.termsAndConditions}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </Modal>

      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Collection Name</th>
            <th>Description</th>
            <th>Products Count</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
}

export default TableC;
