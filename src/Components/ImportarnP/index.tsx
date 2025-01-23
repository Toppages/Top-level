import { Carousel, Embla } from '@mantine/carousel';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState, useRef } from "react";
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Card, Image, Divider, Title, ActionIcon, Group } from '@mantine/core';

function ImportarnP() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [embla, setEmbla] = useState<Embla | null>(null);
    const [showControls, setShowControls] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
        if (!embla) return;
        const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
        setScrollProgress(progress * 100);
    }, [embla]);

    useEffect(() => {
        if (embla) {
            embla.on('scroll', handleScroll);
            handleScroll();
        }
    }, [embla, handleScroll]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    const handlePrev = () => embla && embla.scrollPrev();
    const handleNext = () => embla && embla.scrollNext();

    const cards = [
        { title: "texto", image: "https://www.extintoresromagnoli.com/imgs/productos/productos35_2489.jpg" },
        { title: "texto", image: "https://www.extintoresromagnoli.com/imgs/productos/productos35_2489.jpg" },
        { title: "texto", image: "https://www.extintoresromagnoli.com/imgs/productos/productos35_2489.jpg" },
        { title: "texto", image: "https://www.extintoresromagnoli.com/imgs/productos/productos35_2489.jpg" },
        { title: "texto", image: "https://www.extintoresromagnoli.com/imgs/productos/productos35_2489.jpg" },
        { title: "texto", image: "https://www.extintoresromagnoli.com/imgs/productos/productos35_2489.jpg" },
        { title: "texto", image: "https://www.extintoresromagnoli.com/imgs/productos/productos35_2489.jpg" },
    ];

    return (
        <>
            <Group position='center'>
                <Title mt='5%' mb='2%' order={1}>Productos Destacados</Title>
            </Group>
            <Divider my="sm" mx='sm' />

            <div
                ref={componentRef}
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
                style={{ position: 'relative' }}
            >
                <Carousel
                    dragFree
                    slideSize="20%"
                    slideGap={5}
                    mt={45}
                    mb={45}
                    mr="2%"
                    ml="2%"
                    height="auto"
                    getEmblaApi={setEmbla}
                    withControls={false}
                    breakpoints={[
                        { maxWidth: 'lg', slideSize: '25%', slideGap: 10 },
                        { maxWidth: 'md', slideSize: '33.33%', slideGap: 10 },
                        { maxWidth: 'sm', slideSize: '50%', slideGap: 10 },
                        { maxWidth: 'xs', slideSize: '100%', slideGap: 10 },
                    ]}
                    loop
                    align="center"
                >
                    {cards.map((card, index) => (
                        <Carousel.Slide key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5 }}
                            >
                                <Card mr={10} p="lg" radius="lg">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fit="contain"
                                        radius="md"
                                        width="100%"
                                        height="100%"
                                        style={{ objectFit: 'contain', maxHeight: '650px' }}
                                    />
                                    <Title ta="center" order={4}>{card.title}</Title>
                                </Card>
                            </motion.div>
                        </Carousel.Slide>
                    ))}
                </Carousel>


                <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    display: 'none',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                    color: '#3486eb',
                    fontWeight: 'bold'
                }}>
                    {Math.round(scrollProgress)}% Scrolled
                </div>

                <AnimatePresence>
                    {showControls && (
                        <>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '10px',
                                    transform: 'translateY(-50%)',
                                    zIndex: 1
                                }}
                            >
                                <ActionIcon
                                    variant="default"
                                    ml={15}
                                    onClick={handlePrev}
                                    size="xl"
                                    radius="xl"
                                >
                                    <IconChevronLeft color='red' size={24} />
                                </ActionIcon>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '10px',
                                    transform: 'translateY(-50%)',
                                    zIndex: 1
                                }}
                            >
                                <ActionIcon
                                    variant="default"
                                    onClick={handleNext}
                                    size="xl"
                                    mr={15}
                                    radius="xl"
                                >
                                    <IconChevronRight color='red' size={24} />
                                </ActionIcon>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

export default ImportarnP;
