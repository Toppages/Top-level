import { Carousel } from "@mantine/carousel";
import { Image } from '@mantine/core';
import Banner1 from '../../assets/BANNER PROFIRECA WEB 1.png';
import Banner2 from '../../assets/BANNER PROFIRECA WEB 2.png';
import Banner3 from '../../assets/BANNER PROFIRECA WEB 3.png';

function BannerCarrousel() {
    return (
        <div style={{ height: 'auto', display: 'flex', overflow: 'hidden' }}>
            <Carousel
                mb={15}
                mt={25}
                sx={{ width: '100%' }}
                withIndicators
                loop
                styles={{
                    indicator: {
                        width: 12,
                        height: 4,
                        transition: 'width 250ms ease',
                        '&[data-active]': {
                            width: 40,
                        },
                    }
                }}
            >
                <Carousel.Slide>
                    <Image
                        height="auto"
                        width="100%"
                        fit="contain"
                        src={Banner1}
                        alt="With default placeholder"
                        withPlaceholder
                        className="carousel-image"
                        style={{ objectPosition: 'center' }} 
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image
                        height="auto"
                        width="100%"
                        fit="contain"
                        src={Banner2}
                        alt="With default placeholder"
                        withPlaceholder
                        className="carousel-image"
                        style={{ objectPosition: 'center' }}
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <Image
                        height="auto"
                        width="100%"
                        fit="contain"
                        src={Banner3}
                        alt="With default placeholder"
                        withPlaceholder
                        className="carousel-image"
                        style={{ objectPosition: 'center' }}
                    />
                </Carousel.Slide>
            </Carousel>
        </div>
    );
}

export default BannerCarrousel;
