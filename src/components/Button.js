import PropTypes from 'prop-types';

const Button = ({ colour, text, onClick }) => {
	return (
		<div>
			<button
				onClick={onClick}
				style={{ backgroundColor: colour }}
				className='btn'
			>
				{text}
			</button>
		</div>
	);
};

Button.defaultProps = {
	colour: 'steelblue',
	text: 'Button',
};

Button.propTypes = {
	colour: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
