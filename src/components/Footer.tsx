import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
const Footer = () => {
	return (
		<footer>
			<h2>Mihail Danilov &middot; Frontend Developer</h2>
			<ul>
				<li>
					<a href="https://www.linkedin.com/in/mihail-danilov-a2833b246/">
						<IconContext.Provider value={{ size: '4rem' }}>
							<FaLinkedin />
						</IconContext.Provider>
					</a>
				</li>
				<li>
					<a href="https://www.github.com/mihaildanilov">
						<IconContext.Provider value={{ size: '4rem' }}>
							<FaGithubSquare />
						</IconContext.Provider>
					</a>
				</li>
				<li>
					<a href="mailto:mihaildanilov793@gmail.com" className="email-icon">
						<IconContext.Provider value={{ size: '4rem' }}>
							<MdEmail />
						</IconContext.Provider>
					</a>
				</li>
			</ul>
			<p>
				<small>&copy; 2022 Mihail Danilov. All rights reserved.</small>
			</p>
		</footer>
	);
};

export default Footer;
