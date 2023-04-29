const Home = () => {
	return (
		<main className='flex flex-col items-center justify-center min-h-screen py-2'>
			<h3>Welcome to Tailwind CSS Projects</h3>
			<p className='mt-2 text-2xl'>
				<a
					href='/clipboard'
					className='outline-dotted p-4 px-8 rounded-md  hover:text-blue-500'
				>
					Project Clipboard
				</a>
			</p>
		</main>
	);
};

export default Home;
