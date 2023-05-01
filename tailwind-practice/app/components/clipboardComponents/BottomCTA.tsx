import Button from './Button';

const ButtomCTA = () => {
	return (
		<section id='ButtomCTA'>
			<div className='section-container my-20'>
				<h3>Clipboard for iOS and MAC</h3>
				<p className='section-content mb-10'>
					Available free on App Store. Download for Mac or iOS
				</p>

				<div className='button-container'>
					<Button content='Download on iOS' bgColor={'bg-strongCyan'} />

					<Button content='Download on MAC' bgColor={'bg-lightBlue'} />
				</div>
			</div>
		</section>
	);
};

export default ButtomCTA;
