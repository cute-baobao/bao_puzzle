import { NavLink } from 'react-router';

const About = () => {
	return (
		<>
			<h1>About</h1>
			<NavLink to={{ pathname: '/' }}>跳转</NavLink>
		</>
	);
};

export default About;
