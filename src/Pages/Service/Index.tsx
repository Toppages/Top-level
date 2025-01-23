import { Anchor, Breadcrumbs, Title, Text } from "@mantine/core";
import "./Service.scss";

function Service() {
  const items = [
    { title: "Inicio", href: "/profierecalanding" },
    { title: "Catalogo", href: "#" },
  ].map((item, index) => (
    <Anchor c="black" href={item.href} key={index}>
      <Text c="black" fw={700}>
        {item.title}
      </Text>
    </Anchor>
  ));

  const cards = [
    {
      title: "VENTA MANTENIMIENTO E INGENIERÍA DE SISTEMAS FIJOS CONTRA INCENDIO",
      description: "What does the perfect trip look like for you? Explore the Pacific Northwest on your terms.",
      imageSrc: "https://placehold.co/400x350/png",
      link: "#"
    },
    {
      title: "VENTA MANTENIMIENTO E INGENIERÍA DE SISTEMAS DE DETECCIÓN DE INCENDIO ANÁLOGO E INTELIGENTE",
      description: "Explore the Pacific Northwest on your terms with our custom tours.",
      imageSrc: "https://placehold.co/400x350/png",
      link: "#"
    },  
    {
      title: "INSTALACIÓN Y VENTA DE LÁMPARAS DE EMERGENCIA, BATERÍAS,SEÑALIZACIÓN",
      description: "Experience the best tours in the world.",
      imageSrc: "https://placehold.co/400x350/png",
      link: "#"
    },
    {
      title: "VENTA Y RECARGA DE TODO TIPO DE EXTINTORES",
      description: "Explore the Pacific Northwest on your terms with our custom tours.",
      imageSrc: "https://placehold.co/400x350/png",
      link: "#"
    },
    {
      title: "EQUIPOS DE PROTECCIÓN PERSONAL Y BIOSEGURIDAD",
      description: "Explore the Pacific Northwest on your terms with our custom tours.",
      imageSrc: "https://placehold.co/400x350/png",
      link: "#"
    },
    {
      title: "ASESORÍA Y CAPACITACIÓN EN SEGURIDAD Y SALUD LABORAL",
      description: "Explore the Pacific Northwest on your terms with our custom tours.",
      imageSrc: "https://placehold.co/400x350/png",
      link: "#"
    },
    {
      title: "CONTROL DE PLAGAS, FUMIGACIÓN Y SANITIZACION RESIDENCIAL,COMERCIAL E INDUSTRIAL",
      description: "Explore the Pacific Northwest on your terms with our custom tours.",
      imageSrc: "https://placehold.co/400x350/png",
      link: "#"
    }
  ];

  return (
    <>
      <Breadcrumbs mt={10} ml={15}>{items}</Breadcrumbs>
      <Title mt={15} mb={15} ta="center" order={1}>
        Servicios
      </Title>
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-image-wrapper">
              <img
                src={card.imageSrc}
                alt={card.title}
                className="card-image"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="card-wave"
              >
                <path
                  fill="#ffffff"
                  fillOpacity="1"
                  d="M0,192L1440,32L1440,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div className="card-content">
                  <Title ta='center' order={3}>{card.title}</Title>
                        <Text ta='center' mt={3} c="dimmed">{card.description}</Text>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Service;