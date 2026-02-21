import Hero from '../components/home/Hero'
import ShopByBrand from '../components/home/ShopByBrand'
import BannerSection from '../components/home/BannerSection'
import FeaturedCollection from '../components/home/FeaturedCollection'
import CustomServiceBanners from '../components/home/CustomServiceBanners'
import ShopTheLook from '../components/home/ShopTheLook'
import NewArrivals from '../components/home/NewArrivals'
import Testimonials from '../components/home/Testimonials'

const Home = () => {
  return (
    <main>
      <Hero />
      <ShopByBrand />
      <BannerSection />
      <FeaturedCollection />
      <CustomServiceBanners />
      <ShopTheLook />
      <NewArrivals />
      <Testimonials />
    </main>
  );
};

export default Home;
