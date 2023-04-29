const Footer = () => {
	const socialIcons = ['facebook', 'twitter', 'instagram'];

	return (
		<footer id='footer'>
			<div className='section-container'>
				<div className='flex flex-col items-center justify-between md:flex-row'>
					{/* Image  */}
					<img
						src='assets/clipboard/images/logo.svg'
						alt=''
						className='scale-50'
					/>

					{/* Container for Menus and Social  */}
					<div className='flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue'>
						{/* Menus  */}
						<div className='flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0'>
							{/* Menu 1 */}
							<div className='flex flex-col space-y-4 text-center md:text-left'>
								<div className=''>
									<a href='#' className='hover:text-strongCyan'>
										FAQs
									</a>
								</div>
								<div className=''>
									<a href='#' className='hover:text-strongCyan'>
										Contact Us
									</a>
								</div>
							</div>

							{/* Menu 2 */}
							<div className='flex flex-col space-y-4 text-center md:text-left'>
								<div className=''>
									<a href='#' className='hover:text-strongCyan'>
										Privacy Policy
									</a>
								</div>
								<div className=''>
									<a href='#' className='hover:text-strongCyan'>
										Press Kit
									</a>
								</div>
							</div>

							{/* Menu 3 */}

							<div className='flex flex-col space-y-4 text-center md:text-left'>
								<div className=''>
									<a href='#' className='hover:text-strongCyan'>
										Install Guide
									</a>
								</div>
							</div>

							{/* Social Icons  */}
							<div className='flex justify-between w-32 py-1'>
								{socialIcons.map((icon, index) => (
									<a href='#' key={index}>
										<img
											src={`assets/clipboard/images/icon-${icon}.svg`}
											alt=''
											className='duration-200 ficon'
										/>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
