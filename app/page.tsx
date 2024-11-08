import { Button } from "@nextui-org/button";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import React from 'react';

export default function Home() {
	return (
		<main className="flex items-center justify-center min-h-screen p-8">
			<section className="max-w-6xl w-full mx-auto">
				<p className="text-gray-300 text-2xl">Hi, my name is</p>
				<h1 className="text-8xl font-bold text-blue-400 mt-4">
					David Robinson
				</h1>
				<p className="text-gray-400 text-lg mt-6 max-w-2xl">
					I am a Computer Science student at the University of Central Florida. Currently,
					I&apos;m involved in research at UCF&apos;s Center for Research in Computer Vision.
				</p>
				<div className="flex items-center space-x-4 mt-8">
					<a href="/david_robinson_resume.pdf" target="_blank" rel="noopener noreferrer">
						<Button color="primary" variant="ghost" className="" size="lg">
							Resume
						</Button>
					</a>
					<a
						href="https://github.com/DRobinson4105"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-300 hover:text-white transition-colors"
					>
						<FaGithub size={40} />
					</a>
					<a
						href="https://www.linkedin.com/in/davidrobinson05/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-300 hover:text-blue-500 transition-colors"
					>
						<FaLinkedin size={40} />
					</a>
					<a
						href="https://www.instagram.com/drobinson4105/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-300 hover:text-pink-500 transition-colors"
					>
						<FaInstagram size={40} />
					</a>
				</div>
			</section>
		</main>
	);
}