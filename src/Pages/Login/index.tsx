import './index.css';
import { useNavigate } from 'react-router-dom'; 
import { IconUserFilled } from '@tabler/icons-react';
import { Card, Text, TextInput, PasswordInput, Button, Stack, ThemeIcon } from '@mantine/core';

function Login() {
  const navigate = useNavigate(); 

  const handleLogin = () => {
    navigate('/Top-level');
  };

  return (
    <div className="login-background">
      <Card
        shadow="md"
        p="lg"
        radius="md"
        style={{ width: 350, textAlign: 'center', margin: 'auto', marginTop: '100px' }}
      >
        <Text size="lg" weight={500}>
          Bienvenido
        </Text>
        <ThemeIcon radius="xl" size="xl" color="indigo">
          <IconUserFilled />
        </ThemeIcon>

        <Stack mt="lg" spacing="sm">
          <TextInput label="Usuario" placeholder="Tu usuario" />
          <PasswordInput label="Contraseña" placeholder="Tu contraseña" />
          <Button fullWidth mt="md" color="indigo" onClick={handleLogin}>
            Iniciar Sesión
          </Button>
        </Stack>
      </Card>
    </div>
  );
}

export default Login;
