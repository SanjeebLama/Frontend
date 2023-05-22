import { Alata } from 'next/font/google';

const alata = Alata({
	subsets: ['latin'],
	weight: '400',
});

const menuItems = [
	{
		title: 'About',
		href: '#',
	},
	{
		title: 'Careers',
		href: '#',
	},
	{
		title: 'Events',
		href: '#',
	},
	{
		title: 'Products',
		href: '#',
	},
	{
		title: 'Support',
		href: '#',
	},
];

const Hero = () => {
	return (
		<section id='hero'>
			{/* Hero Container  */}
			<div className='container max-w-6xl mx-auto px-6 py-12 '>
				{/* Menu / Logo Container  */}
				<nav className='flex justify-between items-center'>
					{/* Logo  */}
					<img src='/assets/loopstudios/logo.svg' alt='' />

					{/* Menu  */}
					<div
						className={`hidden h-10 ${alata.className} md:flex text-white md:space-x-8`}
					>
						{menuItems.map((item) => (
							<div className='group' key={item.title}>
								<a href={item.href}>{item.title}</a>
								<div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
							</div>
						))}
					</div>

					{/* TODO : Hamburger Button  */}
				</nav>

				{/* TODO : Mobile Menu  */}

				{/* Text Secion  */}
				<div className='max-w-lg mt-32 mb-32 p-4 text-4xl uppercase text-white border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl'>
					Impressive Experiences That Deliver
				</div>
			</div>
		</section>
	);
};

export default Hero;
