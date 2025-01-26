import axios from 'axios';
import { useState } from 'react';
import { Button, Group, Table, Text, Title } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Reports() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [finishDate, setFinishDate] = useState<Date | null>(null);
  const [reports, setReports] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchReports = async () => {
    if (!startDate || !finishDate) {
      setError('Por favor, selecciona ambas fechas.');
      return;
    }

    const formattedStartDate = startDate.toISOString().split('T')[0];
    const formattedFinishDate = finishDate.toISOString().split('T')[0];

    if (new Date(finishDate).getTime() - new Date(startDate).getTime() > 31 * 24 * 60 * 60 * 1000) {
      setError('El rango entre fechas no puede exceder 31 días.');
      return;
    }

    try {
      setError(null); 
      const response = await axios.get(
        `https://stock.hype.games/api/report/${formattedStartDate}/${formattedFinishDate}`,
        {
          headers: {
            Authorization: 'Bearer ACCESS-TOKEN-HERE',
            'Content-Type': 'application/json',
          },
        }
      );
      setReports(response.data); 
    } catch (error) {
      console.error('Error fetching reports:', error);
      setError('Hubo un error al obtener los reportes.');
    }
  };

  const reportRows = reports.map((report) => (
    <tr key={report.transactionId}>
      <td>{report.transactionId}</td>
      <td>{report.partnerReference}</td>
      <td>{report.productName}</td>
      <td>{report.salesPrice}</td>
      <td>{report.status}</td>
      <td>{report.transactionDate}</td>
      <td>
        <span>{report.keySentToCustomer ? 'Enviado' : 'No enviado'}</span>
      </td>
    </tr>
  ));

  return (
    <>
    <div style={{
      
      height: '89.5vh',
    }}>


      <Title ta='center' weight={700} mb="md" order={2}>Reportes de Ventas por Período</Title>

     <Group position='center'  mb="md" >

        <DatePicker
          placeholder="Fecha de inicio"
          label="Inicio"
          value={startDate}
          radius="md"
          size="lg"
          onChange={setStartDate}
        />
        <DatePicker
          placeholder="Fecha de fin"
          label="Fin"
          value={finishDate}
          radius="md"
          size="lg"
          onChange={setFinishDate}
        />
     </Group>
     <Group position='center'  mb="md" >

        <Button onClick={fetchReports} color="indigo">
          Obtener Reportes
        </Button>
     </Group>

      {error && (
        <Text color="red" mb="md">
          {error}
        </Text>
      )}

      {reports.length > 0 ? (
        <Table striped highlightOnHover>
          <thead>
            <tr>
              <th>ID Transacción</th>
              <th>Referencia</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Fecha</th>
              <th>Clave Enviada</th>
            </tr>
          </thead>
          <tbody>{reportRows}</tbody>
        </Table>
      ) : (
        <>
        </>
      )}
    </div>
    </>
  );
}

export default Reports;
