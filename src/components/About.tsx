const About = () => {
	return (
		<div className="section-dkblue">
			<section id="projects">
				<h2>About Mihail Danilov</h2>
				<article>
					<div className="text">
						<h3>Just the highlights</h3>
						<p className="blackbox">
							Description of Mihail Danilov. This should be fairly concise while also
							describing the key components that you developed or worked on. It can be
							as long as you need it to be but should at least be a few sentences
							long. Be sure to include specific links anywhere in the description.
						</p>
						<h4>My favorite technologies include:</h4>
						<ul>
							<li>React</li>
							<li>TypeScript</li>
							<li>JavaScript</li>
							<li>HTML</li>
							<li>CSS</li>
						</ul>
					</div>
					<img
						src="src/assets/images/portrait.jpg"
						alt="Mihail Danilov himself."
						width="400"
					/>
				</article>
			</section>
		</div>
	);
};

export default About;
