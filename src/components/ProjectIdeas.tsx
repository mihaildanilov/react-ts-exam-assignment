/* eslint-disable indent */
import { useState } from 'react';
import { ProjectIdeasData } from '../data/ProjectIdeasData';

const ProjectIdeas = () => {
	const [showMore, setShowMore] = useState(false);

	const ideas = ProjectIdeasData.map((idea, index) => {
		return (
			<div key={index}>
				<h3>{idea.ideaTitle}</h3>
				<p>{idea.description}</p>
			</div>
		);
	});
	// if showMore=true show text
	return (
		<div id="ideas">
			<h2 className="project-ideas">Check out my future project ideas:</h2>
			<h5 className="project-ideas">
				{showMore ? ideas : ideas.slice(0, 2)}
				<a className="show-more" onClick={() => setShowMore(!showMore)}>
					{showMore ? 'Show less' : 'Show more'}
				</a>
			</h5>
		</div>
	);
};

export default ProjectIdeas;
