import { Bai_Jamjuree } from 'next/font/google';
import Hero from '../components/clipboardComponents/Hero';
import Snippets from '../components/clipboardComponents/Snippets';
import Features from '../components/clipboardComponents/Features';
import AccessAnywhere from '../components/clipboardComponents/AccessAnywhere';
import SuperCharge from '../components/clipboardComponents/SuperCharge';
import References from '../components/clipboardComponents/Refrences';
import ButtomCTA from '../components/clipboardComponents/BottomCTA';
import Footer from '../components/clipboardComponents/Footer';

const bai = Bai_Jamjuree({
	subsets: ['latin'],
	style: ['normal', 'italic'],
	weight: ['400', '600'],
	variable: '--font-bai',
});

export default function Clipboard() {
	return (
		<main className={`${bai.variable} font-sans`} id='clipboard'>
			<Hero />
			<Snippets />
			<Features />
			<AccessAnywhere />
			<SuperCharge />
			<References />
			<ButtomCTA />
			<Footer />
		</main>
	);
}
