import NavBar from '../components/NavBar';
import GradientLine from '../components/GradienLine';
import '../assets/styles/index.css';
import Contact from '../components/Contact';
import ProjectList from '../components/ProjectList';

import About from '../components/About';
import Footer from '../components/Footer';
import ProjectIdeas from '../components/ProjectIdeas';
import SubscribeToNews from '../components/SubscribeToNews';
const Home = () => {
	return (
		<div>
			<NavBar />
			<GradientLine />
			<section id="intro">
				<p className="name">
					Hi, my name is <span>Mihail Danilov.</span>
				</p>
				<h2>I am a student majoring in computer science.</h2>
				<p>This is my portfolio website.</p>
				<p>
					Currently, I&apos;m studying in&nbsp;
					<a href="https://www.lu.lv/en/" target="_blank" rel="noreferrer">
						Latvian University
					</a>
					.
				</p>
			</section>
			<GradientLine />
			<ProjectList />
			<GradientLine />
			<section id="about">
				<About />
			</section>
			<GradientLine />
			<ProjectIdeas />
			<GradientLine />
			<SubscribeToNews />
			<GradientLine />
			<Contact />
			<GradientLine />
			<Footer />
		</div>
	);
};

export default Home;
