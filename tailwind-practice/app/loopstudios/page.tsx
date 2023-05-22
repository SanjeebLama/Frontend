import { Josefin_Sans } from 'next/font/google';
import Hero from '../components/LoopStudiosComponents/Hero';
import Features from '../components/LoopStudiosComponents/Features';

const joseFin = Josefin_Sans({
	subsets: ['latin'],
	weight: '300',
});

const LoopStudios = () => {
	return (
		<main className={`${joseFin.className} `} id='LoopStudios'>
			<Hero />
			<Features />
		</main>
	);
};

export default LoopStudios;
