import Button from './Button';

const Header = ({ title, onAdd , showAdd }) => {
	return (
		<header className='header'>
			<h1>Task Tracker</h1>
			<Button
                colour={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd}
            />
		</header>
	);
};

export default Header;
