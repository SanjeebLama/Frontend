import { Josefin_Sans } from 'next/font/google';
import Hero from '../components/LoopStudiosComponents/Hero';
import Features from '../components/LoopStudiosComponents/Features';
import CreationSection from '../components/LoopStudiosComponents/CreationSection';

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
		</main>
	);
};

export default LoopStudios;
