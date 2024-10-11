import React from 'react';

export default function Navbar() {
    return (
        <nav className="bg-black-900 fixed top-0 left-0 w-full border-b border-gray-600 z-50">
			<div className="container mx-auto flex justify-between items-center py-4">
				<div className="text-2xl font-bold">
					David Robinson
				</div>
		
				<div className="space-x-6 text-lg">
					<a href="/" className="hover:text-gray-400">Home</a>
					<a href="/about" className="hover:text-gray-400">About</a>
					<a href="/education" className="hover:text-gray-400">Education</a>
					<a href="/experience" className="hover:text-gray-400">Experience</a>
					<a href="/projects" className="hover:text-gray-400">Projects</a>
				</div>
			</div>
        </nav>
	);
}
