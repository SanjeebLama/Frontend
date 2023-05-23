import { Josefin_Sans } from 'next/font/google';
import Hero from '../components/LoopStudiosComponents/Hero';
import Features from '../components/LoopStudiosComponents/Features';
import CreationSection from '../components/LoopStudiosComponents/CreationSection';
import Footer from '../components/LoopStudiosComponents/Footer';

const joseFin = Josefin_Sans({
	subsets: ['latin'],
	weight: '300',
});

const LoopStudios = () => {
	return (
		<main className={`${joseFin.className} `} id='LoopStudios'>
			<Hero />
			<Features />
			<CreationSection />
			<Footer />
		</main>
	);
};

export default LoopStudios;
