import React from 'react';
import Image from 'next/image';

export default function About() {
	const techStack = [
		"PyTorch",
		"TensorFlow",
		"Python",
		"C++",
		"R",
		"MongoDB",
		"AWS"
	];
	
	interface Certification {
		image: string;
		link: string;
		alt: string
	}
	
	const certifications: Certification[] = [
		{
			image: "aws_cloud_practitioner",
			link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/45d4af9a1415457a95a1ed776e7a4333",
			alt: "AWS Cloud Practictioner"
		}
	]
	
	const HoverIcon: React.FC<{ name: string }> = ({ name }) => {
		return (
			<div className="relative flex items-center justify-center w-24 h-24 p-4 rounded-lg group">
				<Image src={`/${name}.png`} alt={name} className="w-16 h-16 object-contain" width={2048} height={2048} />
		
				<span className="absolute bottom-full mb-2 px-3 py-1 text-sm font-semibold text-white bg-gray-800 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					{name}
				</span>
			</div>
		);
	};

	return (
		<main className="flex items-center justify-center min-h-screen p-8">
			<section className="max-w-6xl w-full mx-auto">
				<h1 className="text-6xl font-bold text-blue-400 mt-4 text-center">
					About Me
				</h1>
				<p className="text-gray-400 text-lg mt-6">
					I am a Computer Science student at the University of Central Florida with a minor
					in Intelligent Robotic Systems and I am currently involved in research at UCF&apos;s
					Center for Research in Computer Vision. I&apos;m passionate about machine learning and
					robotics, and I am looking forward to continue exploring how these fields come
					together to drive innovation in technology.
				</p>
				<p className="text-xl font-bold text-gray-400 mt-4 text-center">
					Here are a few technologies I&apos;ve been working with recently
				</p>
				<div className="flex flex-wrap justify-center gap-4 p-6">
					{techStack.map((name, index) => (
						<HoverIcon key={index} name={name} />
					))}
				</div>
				<h1 className="text-3xl text-center font-bold text-blue-400 mt-4">
					Certifications
				</h1>
				<div className="flex flex-wrap justify-center gap-4 p-6">
					{certifications.map((certification, index) => (
						<a href={certification.link} className="flex justify-center items-center w-1/6" target="_blank" rel="noopener noreferrer" key={index}>
							<Image src={`/${certification.image}.png`} alt={certification.alt} className="w-full h-auto" width={2048} height={2048} />
						</a>
					))}
				</div>
			</section>
		</main>
    );
}