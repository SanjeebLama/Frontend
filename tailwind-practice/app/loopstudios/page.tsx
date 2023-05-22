import { Josefin_Sans, Alata } from 'next/font/google';

const joseFin = Josefin_Sans({
	subsets: ['latin'],
	weight: '300',
});

const alata = Alata({
	subsets: ['latin'],
	weight: '400',
});

const LoopStudios = () => {
	return (
		<main className={`${joseFin.className} `} id='LoopStudios'>
			<div className='flex flex-col items-center justify-center h-screen'>
				<h1 className='text-4xl font-semibold text-gray-600'>Loop Studios</h1>
			</div>
		</main>
	);
};

export default LoopStudios;
