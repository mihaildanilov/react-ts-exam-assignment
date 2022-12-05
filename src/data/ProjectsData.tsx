export interface ProjectDataItem {
	projectType: string;
	projectTitle: string;
	paragraph: string;
	techUsed: string[];
	image: string;
}

export const ProjectData: ProjectDataItem[] = [
	{
		projectType: 'Latest project',
		projectTitle: 'Blitz',
		paragraph:
			'Description of the project. This should be fairly concise while also \
            describing the key components that you developed or worked on. It can be \
            as long as you need it to be but should at least be a few sentences \
            long. Be sure to inc',
		techUsed: ['HTML', 'CSS', 'React', 'TypeScript', 'WebSockets', 'Python', 'Arduino'],
		image: 'src/assets/images/blitz.jpeg',
	},
	{
		projectType: 'Hackathon project',
		projectTitle: 'Delvery project Wolt',
		paragraph:
			'Description of the project. This should be fairly concise while also \
            describing the key components that you developed or worked on. It can be \
            as long as you need it to be but should at least be a few sentences \
            long. Be sure to inc',
		techUsed: [
			'HTML',
			'CSS',
			'React',
			'TypeScript',
			'WebSockets',
			'Node.js',
			'Axios',
			'MongoDB',
		],
		image: 'src/assets/images/wolt.jpg',
	},
];
