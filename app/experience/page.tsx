"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Experience() {
    interface Event {
        date: string;
        title: string;
        subtitle: string;
        description?: string;
        points: string[];
        src?: string;
    }

    const events: Event[] = [
        {
            date: 'August 2024 - Present',
            title: 'Undergraduate Researcher',
            subtitle: 'UCF Center for Research in Computer Vision',
            description: "At the UCF CRCV Lab, I worked with advanced computer vision models to improve 3D pose estimation tasks and apply them to quantify human movement control for patients.",
            points: [
                "Built a custom dataset of 1,036 video samples of stroke patients performing Box and Block Tests, segmenting videos into 30-frame clips for temporal action classification.",
                "Fine-tuned and benchmarked neural networks (R3D, R2Plus1D, Video Swin Transformer, Video MViT, MotionBERT, PoseConv3D, MS-G3D) for movement analysis, achieving up to 90.18% accuracy across different seeds.",
            ],
            src: '/ucf_crcv.png',
        },
        {
            date: 'March 2025 - May 2025',
            title: 'Machine Learning Intern',
            subtitle: 'Contract (Confidential)',
            points: [
                "Designed and trained a neural network using letter, phoneme, and metaphone sequences with Embedding-LSTM modules and an MLP, achieving 90.7% accuracy and 93.59% precision on string similarity classification.",
                "Built a dataset of 4000+ labeled string pairs and engineered feature extraction pipelines including tokenization, phoneme and metaphone generation, sentence embedding cosine similarity, and Levenshtein distance.",
                "Deployed an ONNX-optimized model into a Flask API for real-time inference, accelerating predictions by 4x through preprocess batching, fuzzy match pruning, JIT compilation, and C++-backed operations."
            ],
        },
        {
            date: 'August 2023 - July 2024',
            title: 'Software Engineering Intern',
            subtitle: 'Dynamic Animation Systems',
            description: 'My first software engineering internship was at DAS, where I worked with a range of technologies, from Hugging Face and Langchain for Natural Language Processing and LLM training, to JetBrains MPS, the Truffle Language Implementation Framework, and ANTLR for designing and building domain-specific languages.',
            points: [
                "Fine-tuned the Mistral-7B LLM with Hugging Face's Transformers and PEFT libraries to generate simulation scenario files compliant with an XSD schema.",
                "Developed a graph-based ordering system to manage transactional processes in a declarative rule-based engine.",
                "Designed an ontology for simulation hosting, enabling deployment in on-premises and cloud environments using Docker and Kubernetes, with support for AWS and GCP."
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
                    {event.src ? <div className="flex-shrink-0 w-20 h-20 mr-4">
                         <Image src={event.src} alt="Event Image" className="w-full h-full object-cover rounded-lg" width={2048} height={2048} />
                    </div> : <></>}
            
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

    const CondensedExperiencePart: React.FC<{ event: Event }> = ({ event }) => {
        return (
            <div className="w-3/4 my-5">
                <h3 className="text-lg font-bold text-white">{event.title}</h3>
                <h4 className="text-md font-semibold text-white">{event.subtitle}</h4>
                <p className="text-blue-400 font-semibold my-2">{event.date}</p>
                <p className="text-sm text-gray-300">{event.description}</p>
                <ul className="text-sm list-disc list-inside mt-2 text-gray-300">
                    {event.points?.map((point: string, index: number) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        );
    }

    const windowThreshold = 1000
    const [isCondensed, setIsCondensed] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => setIsCondensed(window.innerWidth < windowThreshold);

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <main className="flex flex-col w-full mx-auto items-center justify-center min-h-screen p-8 mt-14">
            <h1 className="text-6xl font-bold text-blue-400 mb-8 text-center">
                Experience
            </h1>
            {events.map((event, index) => (
                isCondensed ? (
                    <CondensedExperiencePart event={event} key={index} />
                ) : (
                    <ExperiencePart event={event} key={index} />
                )
            ))}
        </main>
    );
};