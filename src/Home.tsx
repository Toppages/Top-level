import './App.css';
import ImportarnP from './Components/ImportarnP';
import AboutBanner from './Components/AboutBanner';
import TabsProductM from './Components/TabsProductM';
import BannerCarrousel from './Components/BannerCarrousel'; 
function Home() {

  return (
    <>
      <BannerCarrousel />
      <ImportarnP />
      <AboutBanner />
      <TabsProductM />
      
    </>
  );
}

export default Home;