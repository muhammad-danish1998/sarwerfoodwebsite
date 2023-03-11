import Footer from '@/components/Footer';
import Hero from '@/components/Home/Hero';
import HotItem from '@/components/Home/HotItem';
import Section from '@/components/Home/Section';
import { Outlet } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<Hero />
			<HotItem />
			<Section />
			<Footer />
		</>
	);
};

export default Home;
