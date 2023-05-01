interface ButtonProps {
	content: string;
	bgColor: string;
}

const Button = ({ content, bgColor }: ButtonProps) => {
	return (
		<a
			href='#'
			className={`p-4 px-8 rounded-full shadow-lg ${bgColor} duration-200 hover:opacity-80`}
		>
			{content}
		</a>
	);
};

export default Button;
