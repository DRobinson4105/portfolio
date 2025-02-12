import './globals.css';
import { ReactNode } from 'react';
import Navbar from "./components/Navbar";

export const metadata = {
	title: 'David Robinson',
	description: 'My portfolio website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-black-900 text-gray-200"><Navbar/>{children}</body>
		</html>
	);
}
