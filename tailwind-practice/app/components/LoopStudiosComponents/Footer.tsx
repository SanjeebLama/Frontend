const footerMenu = ['About', 'Careers', 'Events', 'Products', 'Support'];

const icons = [
	'/assets/loopstudios/icon-facebook.svg',
	'/assets/loopstudios/icon-twitter.svg',
	'/assets/loopstudios/icon-pinterest.svg',
	'/assets/loopstudios/icon-instagram.svg',
];

const Footer = () => {
	return (
		<footer id='footer' className='bg-black'>
			<div className='container max-w-6xl mx-auto py-10'>
				<div className='flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start'>
					<div className='flex flex-col items-center space-y-8 md:items-start md:space-y-4'>
						{/* Logo  */}

						<div className='h-8'>
							<img
								src='/assets/loopstudios/logo.svg'
								alt=''
								className='w-44 md:ml-3'
							/>
						</div>

						{/* Footer Menu Item */}

						<div className='flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3'>
							{footerMenu.map((item) => (
								<div className='h-10 group' key={item}>
									<a href='#'>{item}</a>
									<div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
								</div>
							))}
						</div>
					</div>

					{/* Social Logo CopyRight  Container  */}

					<div className='flex flex-col items-start justify-between space-y-4 text-gray-500'>
						{/* ICONS  */}
						<div className='flex items-center justify-center mx-auto space-x-4 md:space x-0 md:justify-end md:mx-0'>
							{icons.map((icon) => (
								<div className='h-8 group' key={icon}>
									<a href='#'>
										<img src={icon} className='h-6' alt='' />
									</a>
								</div>
							))}
						</div>

						{/* CopyRight  */}
						<div className='font-bold'>
							&copy; 2023 Loopstudios. All Rights Reserved
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
