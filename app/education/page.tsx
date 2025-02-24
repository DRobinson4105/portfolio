import React from 'react';
import Image from 'next/image';

export default function Education() {
	return (
		<main className="flex items-center justify-center min-h-screen p-8 mt-14">
			<section className="max-w-6xl w-full mx-auto">
				<h1 className="text-6xl font-bold text-blue-400 mt-4 text-center">
					Education
				</h1>
				<div className="mt-4 flex items-center justify-center p-4 rounded-lg">
					<Image src="/ucf.png" alt={"UCF Logo"} className="w-1/3 object-contain" width={2048} height={2048} />
					
					<div className="  text-gray-200 rounded-lg mx-auto">
						<h1 className="text-3xl font-bold text-white">University of Central Florida</h1>
						<h2 className="text-lg font-semibold mt-2">
							Bachelor of Science in Computer Science, Intelligent Robotic Systems Minor
						</h2>
						<p className="text-sm text-gray-400 mt-1">August 2023 - Present</p>
						
						<h3 className="text-lg font-semibold mt-4">UCF Programming Team</h3>
						<ul className="list-disc list-inside ml-6 mt-2 space-y-1">
							<li>Achieved 4th place in the 2023 ICPC Big South Regional Division 2 Contest out of 100+ Universities</li>
							<li>Created and judged problem sets for the UCF High School Programming Contest for 80+ teams</li>
						</ul>
						
						<p className="mt-4">
							Took classes in Computer Vision, Data Structures and Algorithms, Software Engineering, and Linear Algebra
						</p>
					</div>
				</div>
			</section>
		</main>
    );
}