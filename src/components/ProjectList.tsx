import { ProjectData } from '../data/ProjectsData';

const ProjectList = () => {
	return (
		<>
			<h2>Projects I&apos;m proud of</h2>

			{ProjectData.map((item, index) => {
				if (index % 2 === 0) {
					return (
						<article key={index} className="reverse">
							<div className="text">
								<h4>{item.projectType}</h4>
								<h3>{item.projectTitle}</h3>
								<p className="blackbox">{item.paragraph}</p>
								<h4>Technologies used include:</h4>
								<ul>
									{item.techUsed.map((tech, index) => {
										return <li key={index}>{tech}</li>;
									})}
								</ul>
							</div>
							<img src={item.image} width="500" />
						</article>
					);
				} else {
					return (
						<article key={index}>
							<div className="text">
								<h4>{item.projectType}</h4>
								<h3>{item.projectTitle}</h3>
								<p className="blackbox">{item.paragraph}</p>
								<h4>Technologies used include:</h4>
								<ul>
									{item.techUsed.map((tech, index) => {
										return <li key={index}>{tech}</li>;
									})}
								</ul>
							</div>
							<img src={item.image} width="500" />
						</article>
					);
				}
			})}
		</>
	);
};
export default ProjectList;
