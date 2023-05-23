import { Alata } from 'next/font/google';

const alata = Alata({
	subsets: ['latin'],
	weight: '400',
});

interface CreationItem {
	name: string;
	desktopImage: string;
	mobileImage: string;
	id: number;
}

interface CreationContainer {
	[key: string]: CreationItem[];
}

const creationItems: CreationContainer[] = [
	{
		container1: [
			{
				name: 'Deep Earth',
				desktopImage: '/assets/loopstudios/desktop/image-deep-earth.jpg',
				mobileImage: '/assets/loopstudios/mobile/image-deep-earth.jpg',
				id: 1,
			},
			{
				name: 'Night Arcade',
				desktopImage: '/assets/loopstudios/desktop/image-night-arcade.jpg',
				mobileImage: '/assets/loopstudios/mobile/image-night-arcade.jpg',
				id: 2,
			},
			{
				name: 'Soccer Team VR',
				desktopImage: '/assets/loopstudios/desktop/image-soccer-team.jpg',
				mobileImage: '/assets/loopstudios/mobile/image-soccer-team.jpg',
				id: 3,
			},
			{
				name: 'The Grid',
				desktopImage: '/assets/loopstudios/desktop/image-grid.jpg',
				mobileImage: '/assets/loopstudios/mobile/image-grid.jpg',
				id: 4,
			},
		],
		container2: [
			{
				name: 'From Up above VR',
				desktopImage: '/assets/loopstudios/desktop/image-from-above.jpg',
				mobileImage: '/assets/loopstudios/mobile/image-from-above.jpg',
				id: 1,
			},
			{
				name: 'Pocket Borealis',
				desktopImage: '/assets/loopstudios/desktop/image-pocket-borealis.jpg',
				mobileImage: '/assets/loopstudios/mobile/image-pocket-borealis.jpg',
				id: 2,
			},
			{
				name: 'The Curiosity',
				desktopImage: '/assets/loopstudios/desktop/image-curiosity.jpg',
				mobileImage: '/assets/loopstudios/mobile/image-curiosity.jpg',
				id: 3,
			},
			{
				name: 'Make it FishEye',
				desktopImage: '/assets/loopstudios/desktop/image-fisheye.jpg',
				mobileImage: '/assets/loopstudios/mobile/image-fisheye.jpg',
				id: 4,
			},
		],
	},
];

const CreationSection = () => {
	return (
		<section id='creation'>
			{/* Creation Container  */}
			<div className='container max-w-6xl my-32 mx-auto px-6 text-gray-900 md:px-0'>
				{/* Creation Header  */}
				<div className='flex justify-center mb-20 md:justify-between'>
					{/* Heading  */}
					<h2 className='text-4xl text-center uppercase md:text-left md:text-5xl'>
						Our Creations
					</h2>
					<button className={`hidden see-all-btn ${alata.className} md:block`}>
						See All
					</button>
				</div>

				{/* Item Container 1  */}

				<div className='flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8'>
					{/* Container 1 */}
					{creationItems[0].container1.map((item) => (
						<div
							key={item.id}
							className='group relative overflow-hidden md:w-1/4'
						>
							{/* Image For desktop  */}
							<img
								src={item.desktopImage}
								alt=''
								className='hidden w-full duration-200 md:block group-hover:scale-110'
							/>

							{/* Image for Mobile  */}
							<img
								src={item.mobileImage}
								alt=''
								className='w-full duration-200 md:hidden group-hover:scale-110'
							/>

							{/* Item Gradient  */}
							<div className='absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70'></div>

							{/* Text Item  */}
							<h5 className='absolute px-6 w-52 bottom-4 text-white duration-200 uppercase md:px-10 md:bottom-8 group-hover:text-black group-hover:scale-110'>
								{item.name}
							</h5>
						</div>
					))}
				</div>

				{/* Item Container 2  */}

				<div className='flex flex-col justify-between w-full   space-y-6 mt-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8  '>
					{/* Container 1 */}
					{creationItems[0].container2.map((item) => (
						<div
							key={item.id}
							className='group relative overflow-hidden md:w-1/4'
						>
							{/* Image For desktop  */}
							<img
								src={item.desktopImage}
								alt=''
								className='hidden w-full duration-200 md:block group-hover:scale-110'
							/>

							{/* Image for Mobile  */}
							<img
								src={item.mobileImage}
								alt=''
								className='w-full duration-200 md:hidden group-hover:scale-110'
							/>

							{/* Item Gradient  */}
							<div className='absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70'></div>

							{/* Text Item  */}
							<h5 className='absolute px-6 w-52 bottom-4 text-white duration-200 uppercase md:px-10 md:bottom-8 group-hover:text-black group-hover:scale-110'>
								{item.name}
							</h5>
						</div>
					))}
				</div>

				<div className='flex justify-center mt-10 md:hidden'>
					<button className={`see-all-btn w-full ${alata.className} md:hidden`}>
						See All
					</button>
				</div>
			</div>
		</section>
	);
};

export default CreationSection;
