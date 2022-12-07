// import { IconContext } from 'react-icons';

import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavBar = () => {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<nav id="navbar">
			<div id="nav-width">
				<ul>
					<li>
						<span className="myname" onClick={scrollToTop}>
							Mihail Danilov
						</span>
					</li>
					<li>
						<Link to="projects" spy={true} smooth={true} offset={-59} duration={500}>
							Projects
						</Link>
					</li>
					<li>
						<Link to="about" spy={true} smooth={true} offset={-59} duration={500}>
							About
						</Link>
					</li>
					<li>
						<Link to="ideas" offset={-59} spy={true} smooth={true} duration={500}>
							Project Ideas
						</Link>
					</li>
					<li>
						<Link to="contact" spy={true} smooth={true} duration={500}>
							Contact
						</Link>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/mihailsdanilovs/" target="_blank_">
							<BsLinkedin />
						</a>
					</li>
					<li>
						<a href="https://github.com/mihaildanilov" target="_blank_">
							<FaGithubSquare />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
