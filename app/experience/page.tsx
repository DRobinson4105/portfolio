import React from 'react';
import Image from 'next/image';

export default function Experience() {
    interface Event {
        date: string;
        title: string;
        subtitle: string;
        description: string;
        points: string[];
        src: string;
    }

    const events: Event[] = [
        {
            date: 'August 2024 - Present',
            title: 'Research Assistant',
            subtitle: 'UCF Center for Research in Computer Vision',
            description: "At the UCF CRCV Lab, I worked with advanced computer vision models to improve 3D pose estimation tasks and apply them to quantify human movement control for patients.",
            points: [
                "Tailored Meta AI\'s Sapiens Pose and Depth Estimation models to estimate 3D pose keypoints in hand-object interactions, facilitating precise identification of contact points.",
                "Trained U-Net architecture for semantic segmentation on Pascal VOC, achieving 63.2 mIoU accuracy."
            ],
            src: '/ucf_crcv.png',
        },
        {
            date: 'August 2023 - July 2024',
            title: 'Software Engineering Intern',
            subtitle: 'Dynamic Animation Systems',
            description: 'My first software engineering internship was at DAS, where I worked with a range of technologies, from Hugging Face and Langchain for Natural Language Processing and LLM training, to JetBrains MPS, the Truffle Language Implementation Framework, and ANTLR for designing and building domain-specific languages.',
            points: [
                "Fine-tuned the Mistral-7B Large Language Model (LLM) to understand and generate dynamic simulation scenario files.",
                "Enhanced a Domain-Specific Language (DSL) in JetBrains MPS to streamline behavior models between a web server and a behavior engine.",
                "Developed a Truffle-based interpreter running on GraalVM, achieving a 500% performance boost by integrating JMH benchmarking."
            ],
            src: '/das.png',
        }
    ];

    const ExperiencePart: React.FC<{ event: Event }> = ({ event }) => {
        return (
            <div className="flex w-2/3">
                <div className="flex flex-col items-end w-1/4 pr-6 justify-center">
                    <span className="text-blue-400 font-semibold">{event.date}</span>
                </div>
        
                <div className="relative flex flex-col items-center">
                    <div className="h-full w-1 bg-blue-400" />
                    <div className="w-4 h-4 rounded-full bg-blue-400 z-10" />
                    <div className="h-full w-1 bg-blue-400" />
                </div>
        
                <div className="ml-6 w-3/4 mb-4 mt-4 bg-gray-900 p-4 rounded-lg shadow-lg flex items-center">
                <div className="flex-shrink-0 w-20 h-20 mr-4">
                    <Image src={event.src} alt="Event Image" className="w-full h-full object-cover rounded-lg" width={2048} height={2048} />
                </div>
        
                <div className="flex-grow">
                    <h3 className="text-lg font-bold text-white">{event.title}</h3>
                    <h4 className="text-md font-semibold mb-2 text-white">{event.subtitle}</h4>
                    <p className="text-sm text-gray-300">{event.description}</p>
                    <ul className="list-disc list-inside mt-2 text-gray-300">
                        {event.points?.map((point: string, index: number) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        );
    };

    return (
        <main className="flex flex-col w-full mx-auto items-center justify-center min-h-screen p-8">
            <h1 className="text-6xl font-bold text-blue-400 mb-8 text-center">
                Experience
            </h1>
            {events.map((event, index) => (
                <ExperiencePart event={event} key={index} />
            ))}
        </main>
    );
};