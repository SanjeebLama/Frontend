const References = () => {
	const images = ['google', 'ibm', 'microsoft', 'hp', 'vector-graphics'];

	return (
		<section id='refrences'>
			<div className='flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0'>
				{images.map((image, index) => (
					<img
						key={index}
						src={`assets/clipboard/images/logo-${image}.png`}
						alt={image}
					/>
				))}
			</div>
		</section>
	);
};

export default References;
