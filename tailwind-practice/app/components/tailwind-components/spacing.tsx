//write a simple react component
import React from 'react';

const Spacing = () => {
	return (
		<div className='container mx-auto'>
			<article>
				<h1>Hello World</h1>
				{/* Write a p tag with 3 lines of text */}

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					potenti. Vivamus dignissim, mi id tincidunt commodo, eros nisl pretium
					nunc, eu aliquet urna nisl a metus. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Suspendisse potenti. Vivamus dignissim,
					mi id tincidunt commodo, eros nisl pretium nunc, eu aliquet urna nisl
					a metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Suspendisse potenti. Vivamus dignissim, mi id tincidunt commodo, eros
				</p>
				{/* Write a p tag with 3 lines of text */}
			</article>
		</div>
	);
};
export default Spacing;

// write a breakpoints of the screen

// Breakpoinsts for Container container None width: 100%;
// sm (640px) max-width: 640px;
// md (768px) max-width: 768px;
// lg (1024px) max-width: 1024px;
// xl (1280px) max-width: 1280px;
// 2xl (1536px) max-width: 1536px;
