interface Items {
	title: string;
	descriptions: string;
}
const Features = () => {
	const items: Items[] = [
		{
			title: 'Quick Search',
			descriptions:
				'Easily Search your snippets by content, category, web address, application, and more.',
		},
		{
			title: 'iCloud Sync',
			descriptions:
				'Instantly saves and syncs snippets across all your devices.',
		},
		{
			title: 'Complete History',
			descriptions: 'Keep track of all your snippets for easy access.',
		},
	];

	return (
		<section id='features'>
			<div className='section-container my-20'>
				<div className='relative flex flex-col md:flex-row md:space-x-32'>
					{/* Image */}
					<div className='md:w-1/2'>
						<img
							src='assets/clipboard/images/image-computer.png'
							alt='Computer Image'
							className='md:absolute top-0 right-[50%]'
						/>
					</div>

					{/* Items Container  */}

					<div className='flex flex-col mt-12 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16'>
						{/* Items */}
						{items.map((item, index) => (
							<div key={index}>
								<h5>{item.title}</h5>
								<p className='max-w-md text-grayishBlue'>{item.descriptions}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
