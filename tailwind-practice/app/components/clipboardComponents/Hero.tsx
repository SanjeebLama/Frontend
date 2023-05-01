import Button from './Button';

const Hero = () => {
	return (
		<>
			<section id='hero'>
				<div className='section-container pt-16'>
					<img
						src='assets/clipboard/images/logo.svg'
						alt='SVG Logo'
						className='mx-auto my-16 '
						min-height={'125px'}
						min-width={'125px'}
					/>

					<h3>A history of everything you copy</h3>

					<p className='section-content mb-10 !text-2xl'>
						Clipboard allows you to track and organize everything you copy.
						Instantly access your clipboard on all your devices.
					</p>

					{/* button Component */}
					<div className='flex flex-col justify-center  w-full space-y-6 text-white text-lg md:flex-row md:space-y-0 md:space-x-4'>
						<Button content='Download on iOS' bgColor={'bg-strongCyan'} />

						<Button content='Download on MAC' bgColor={'bg-lightBlue'} />
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
