import { ProjectData, ProjectDataItem } from '../data/ProjectsData';

const ProjectList = () => {
	return (
		<section id="projects">
			<h2>Projects I&apos;m proud of</h2>

			{ProjectData.map((item, index) => {
				return (
					<ArticleItem
						key={index}
						name={index % 2 === 0 ? 'reverse' : ''}
						index={index}
						item={item}
					/>
				);
			})}
		</section>
	);
};

const ArticleItem = ({
	name,
	index,
	item,
}: {
	name: string;
	index: number;
	item: ProjectDataItem;
}) => {
	return (
		<article key={index} className={name}>
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
};

export default ProjectList;
