import bannerc from '../../assets/SERVICIO COMERCIAL WEB.png';
import banneri from '../../assets/SERVICIO INDUSTRAL WEB.png';
import bannerr from '../../assets/SERVICIO RESIDENCIAL WEB.png';

function AboutBanner() {
    return (
        <>
            <img
                src={bannerc}
                alt="Servicio Comercial"
                style={{
                    marginBottom: 20,
                    objectFit: 'contain',
                    width: '100%',
                    height: 'auto'
                }}
            />
            <img
                src={bannerr}
                alt="Servicio Residencial"
                style={{
                    marginBottom: 20,
                    objectFit: 'contain',
                    width: '100%',
                    height: 'auto'
                }}
            />
            <img
                src={banneri}
                alt="Servicio Industrial"
                style={{
                    marginBottom: 20,
                    objectFit: 'contain',
                    width: '100%',
                    height: 'auto'
                }}
            />
        </>
    );
}

export default AboutBanner;
