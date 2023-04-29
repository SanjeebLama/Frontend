interface SuperChargerItems {
	image: string;
	alt: string;
	heading: string;
	details: string;
}
const SuperCharge = () => {
	const items: SuperChargerItems[] = [
		{
			image: 'assets/clipboard/images/icon-blacklist.svg',
			alt: 'Black list icon',
			heading: 'Create Blacklist',
			details:
				'Easily Search your snippets by content, category, web address, application and more.',
		},
		{
			image: 'assets/clipboard/images/icon-text.svg',
			alt: 'Text icon',
			heading: 'Plain Text Snippets',
			details: 'Remove unwanted formatting and add your own text. ',
		},
		{
			image: 'assets/clipboard/images/icon-preview.svg',
			alt: 'Preivew icon',
			heading: 'Sneak Preview',
			details:
				' You can preview your snippets in a new tab without saving them. ',
		},
	];
	return (
		<section id='supercharge'>
			<div className='section-container my-20'>
				<h3>Supercharge your workflow</h3>
				<p className='section-content mb-16'>
					With our powerful toolset, you can build a fully automated workflow
					that will help you achieve your goals.
				</p>
				{/* Items Container */}

				<div className='flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12'>
					{/* Items */}

					{items.map((item, index) => (
						<div className='flex flex-col items-center space-y-5' key={index}>
							<img src={item.image} alt={item.alt} />
							<h5>{item.heading}</h5>
							<p className='max-w-md text-grayishBlue'>{item.details}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SuperCharge;
