import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineCode } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
export const NavBarData = [
	{
		name: ' Mihail Danilov',
		linkToSection: 'intro',
		icon: <AiOutlineCode />,
		iconSize: '2rem',
	},
	{
		title: 'Projects',
		linkToSection: 'projects',
	},
	{
		title: 'About',
		linkToPage: '/about',
	},
	{
		title: 'Contact',
		linkToSection: 'contact',
	},
	{
		// title: 'LinekedIn',
		linkToURL: 'https://www.linkedin.com/in/mihailsdanilovs/',
		icon: <BsLinkedin />,
		iconSize: '2rem',
	},
	{
		// title: 'Github',
		linkToURL: 'https://github.com/mihaildanilov',
		icon: <FaGithubSquare />,
		iconSize: '2.286rem',
	},
];
