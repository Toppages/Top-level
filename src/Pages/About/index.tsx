import { Title, Text, Grid, Col, Card, Image, Anchor, Breadcrumbs } from '@mantine/core';

function About() {
  const items = [
    { title: 'Inicio', href: '/profierecalanding' },
    { title: 'Nuestra empresa ', href: '#' },
  ].map((item, index) => (
    <Anchor c='black' href={item.href} key={index}>
      <Text c='black' fw={700}>
        {item.title}
      </Text>
    </Anchor>
  ));
  return (
    <>
      <Breadcrumbs mt={10} ml={15}>{items}</Breadcrumbs>

      <Image mt={5} radius='md' src="https://placehold.co/1920x500?text=1920x500\n\nProfireca\n'lema'" alt="Imagen 1" mb="md" />

      <Grid gutter="xl" grow mt="xl" mr={15} ml={15}>
        <Col span={12} md={6}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Title order={3} ta="center" mb="md" fz={32}>
              Visión
            </Title>
            <Text fz={18} color="dimmed" align="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto tempora commodi aliquid animi vel atque voluptates, quia quos perspiciatis iure deleniti ipsa rerum sed? Nemo inventore quam numquam molestiae?
            </Text>
          </Card>
        </Col>

        <Col span={12} md={6}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Title order={3} ta="center" mb="md" fz={32}>
              Misión
            </Title>
            <Text fz={18} color="dimmed" align="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto tempora commodi aliquid animi vel atque voluptates, quia quos perspiciatis iure deleniti ipsa rerum sed? Nemo inventore quam numquam molestiae?
            </Text>
          </Card>
        </Col>

        <Col span={12}>
          <Image mt={10} radius='md' src="https://placehold.co/1920x920?text=1920x920\n\n ¿Por qué nos identificamos?\n'texto'" alt="Imagen 1" mb="md" />

        </Col>

        <Col span={12}>
          <Title order={3} ta="center" mb="md" fz={32}>
            Nuestros Valores
          </Title>
        </Col>

        <Grid gutter="xl">
          <Col span={12} sm={6} md={6}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Title order={4} ta="center" mb="md" fz={24}>
                RESPETO
              </Title>
              <Text fz={18} color="dimmed">
                Aceptar las diferencias de cada individuo mejorando sus cualidades para lograr un gran trabajo en equipo.
              </Text>
            </Card>
          </Col>

          <Col span={12} sm={6} md={6}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Title order={4} ta="center" mb="md" fz={24}>
                LIDERAZGO
              </Title>
              <Text fz={18} color="dimmed">
                Influir en otros de la mejor manera posible logrando sus objetivos planificados conjuntamente.
              </Text>
            </Card>
          </Col>

          <Col span={12} sm={6} md={6}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Title order={4} ta="center" mb="md" fz={24}>
                SERVICIO
              </Title>
              <Text fz={18} color="dimmed">
                Buscar siempre la forma de conseguir la meta trazada, superando todas las situaciones que se presenten.
              </Text>
            </Card>
          </Col>

          <Col span={12} sm={6} md={6}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Title order={4} ta="center" mb="md" fz={24}>
                PERSEVERANCIA
              </Title>
              <Text fz={18} color="dimmed">
                Entregar siempre lo mejor de cada uno, con la firme intención de generar bienestar a los demás.
              </Text>
            </Card>
          </Col>
        </Grid>
      </Grid>
      <Grid gutter="xl" grow mt="xl" mr={15} ml={15}>
        <Grid.Col span={4}>
          <img
            src="https://placehold.co/500x300"
            alt="Imagen 1"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <img
            src="https://placehold.co/500x300"
            alt="Imagen 2"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <img
            src="https://placehold.co/500x300"
            alt="Imagen 3"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <img
            src="https://placehold.co/500x300"
            alt="Imagen 4"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <img
            src="https://placehold.co/500x300"
            alt="Imagen 5"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid.Col>
      </Grid>
    </>
  );
}

export default About;
