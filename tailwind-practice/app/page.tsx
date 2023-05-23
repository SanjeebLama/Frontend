import { Josefin_Sans } from 'next/font/google';

const joseFin = Josefin_Sans({
	subsets: ['latin'],
	weight: '300',
});

const Home = () => {
	const projectList = [
		{
			name: 'Clipboard',
			link: '/clipboard',
		},
		{
			name: 'Loopstudios',
			link: '/loopstudios',
		},
	];
	return (
		<main
			className={`flex flex-col items-center min-h-screen ${joseFin.className} py-2`}
		>
			<div className='max-w-6xl my-10 text-center'>
				<h4 className='text-2xl md:text-4xl'>Welcome to </h4>
				<h2 className='text-3xl mt-2 md:text-6xl md:mb-8 md:mt-4'>
					Tailwind CSS Projects
				</h2>
			</div>

			<div className='flex flex-row items-center my-4 space-x-20'>
				{projectList.map((project) => (
					<div className='text-2xl h-10 group' key={project.name}>
						<a href={project.link} className='max-w-md rounded-md '>
							{project.name}
						</a>
						<div className='mx-2 group-hover:border-b group-hover:border-blue-500 group-hover:border-2'></div>{' '}
					</div>
				))}
			</div>
		</main>
	);
};

export default Home;
