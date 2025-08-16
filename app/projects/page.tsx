import React from 'react';
import Image from 'next/image';

export default function Projects() {
    interface Project {
        title: string;
        data: string;
        description: string;
        image: string;
        skills: string[];
        github: string;
        live?: string;
    }

    const projects: Project[] = [
        {
            title: 'Cards of Ash',
            data: 'October 2024 - October 2024',
            description: 'A Menko-inspired card game that teaches players about natural disasters through strategic play.',
            image: '/cards_of_ash.png',
            skills: ['Godot Engine', 'C#', '.NET'],
            github: 'https://github.com/noranguy/Cards-of-Ash'
        },
        {
            title: 'Accelify',
            data: 'October 2024 - October 2024',
            description: 'A web application that recommends ServiceNow Technical Accelerators to companies using a trained, self-adaptive PyTorch model.',
            image: '/accelify.png',
            skills: ['PyTorch', 'MongoDB', 'Pandas', 'NumPy', 'Flask'],
            github: 'https://github.com/DRobinson4105/TestifAI'
        },
		{
            title: 'SimplyASL',
            data: 'September 2024 - Present',
            description: "A mobile app that translates English speech into ASL signs using a custom gloss-to-pose dictionary.",
            image: '/simplyasl.png',
            skills: ['PyTorch', 'Swift', 'OpenCV', 'Flask', 'NumPy', 'Langchain', 'OpenAI'],
            github: 'https://github.com/DRobinson4105/Simply-ASL',
        },
      	{
            title: 'BookMate',
            data: 'March 2024 - June 2024',
            description: 'An app that helps sell books on Amazon by analyzing photos and Amazon listings to suggest optimal prices.',
            image: '/bookmate.png',
            skills: ['PyTorch', 'YOLOv8', 'Python', 'Flask', 'Selenium', 'R'],
            github: 'https://github.com/DRobinson4105/bookmate'
        },
        {
            title: 'TestifAI',
            data: 'October 2023 - December 2023',
            description: 'A study app that reads PDFs and generates practice questions to optimize learning efficiency.',
            image: '/testifai.png',
            skills: ['Python', 'Langchain', 'Flask', 'Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI'],
            github: 'https://github.com/DRobinson4105/TestifAI'
        }
    ]

    const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
		return (
			<div className="bg-gray-900 text-white rounded-lg shadow-lg mx-4 my-4 max-w-md min-h-[400px]">
				<div className="relative">
				<Image 
					src={project.image}
					alt={project.title}
					className="w-full h-36 object-cover rounded-t-lg"
					width={2048} height={2048}
				/>
				</div>
		
				<div className="p-4 text-center flex flex-col justify-between">
					<h2 className="text-2xl font-bold">{project.title}</h2>
					<p>{project.description}</p>
		
					<div className="flex justify-center mt-4 space-x-4">
						{project.github && (
						<a
							href={project.github}
							target="_blank"
							rel="noreferrer"
							className="border border-white rounded-md px-4 py-2 hover:bg-white hover:text-gray-900"
						>
							GitHub
						</a>
						)}
						{project.live && (
						<a
							href={project.live}
							target="_blank"
							rel="noreferrer"
							className="border border-white rounded-md px-4 py-2 hover:bg-white hover:text-gray-900"
						>
							Live
						</a>
						)}
					</div>
			
					<div className="flex flex-wrap justify-center mt-4 gap-2">
						{project.skills.map((skill: string, index: number) => (
						<span
							className="bg-gray-800 rounded-full px-3 py-1 text-sm"
							key={index}
						>
							{skill}
						</span>
						))}
					</div>
				</div>
			</div>
		);
	};

    return (
		<main className="flex flex-col w-full mx-auto items-center justify-center min-h-screen p-8">
			<h1 className="text-6xl font-bold text-blue-400 my-20 text-center">
				Projects
			</h1>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<ProjectCard project={project} key={index} />
				))}
				</div>
			</div>
		</main>
	);
}