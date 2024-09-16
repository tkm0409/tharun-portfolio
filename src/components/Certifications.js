import React, { useState } from "react";
import "./certificationModal.css";

function Certifications() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCertification, setSelectedCertification] = useState(null);

    const certifications = [
        { name: "Certified Advanced Automation Professional by Automation Anywhere", description: "Demonstrates advanced proficiency in Robotic Process Automation (RPA) using Automation Anywhere platform. This certification validates expertise in designing, developing, and implementing complex automation solutions for enterprise-level processes, including cognitive automation and AI integration.", link: "https://certificates.automationanywhere.com/047ac704-0a32-4e0a-a106-b6d3fd016b2f" },
        { name: "Microsoft 365 Certified: Fundamentals", description: "Demonstrates foundational knowledge of Microsoft 365 services, including cloud concepts, security, compliance, and modern workplace management.", link: "https://learn.microsoft.com/api/credentials/share/en-gb/TharunkumarMaddala-6138/7A2E40E6796F9E4B?sharingId=3875DA5B9B8F1D57" },
        { name: "Microsoft Certified: Dynamics 365 Customer Service Functional Consultant Associate", description: "Validates expertise in Microsoft Dynamics 365 Customer Service functionality, including case management, knowledge management, and service scheduling.", link: "https://learn.microsoft.com/api/credentials/share/en-gb/TharunkumarMaddala-6138/9898E82F857E45D2?sharingId=3875DA5B9B8F1D57" },
        { name: "Microsoft Certified: Azure Developer Associate", description: "Certifies proficiency in developing and implementing Azure solutions, covering compute, storage, security, and connectivity aspects.", link: "https://learn.microsoft.com/api/credentials/share/en-gb/TharunkumarMaddala-6138/AAB62E5A2F80BF7B?sharingId=3875DA5B9B8F1D57" },
        { name: "Microsoft Certified: Azure Solutions Architect Expert", description: "Showcases expertise in designing Azure infrastructure solutions, encompassing virtual networks, identity management, and hybrid connectivity.", link: "https://learn.microsoft.com/api/credentials/share/en-gb/TharunkumarMaddala-6138/24CDDDE7BCFB11AF?sharingId=3875DA5B9B8F1D57" },
        { name: "Microsoft Certified: Azure Administrator Associate", description: "Confirms skills in managing Azure subscriptions and resources, implementing and managing storage, virtual networks, and identities.", link: "https://learn.microsoft.com/api/credentials/share/en-gb/TharunkumarMaddala-6138/4606B138783C1D?sharingId=3875DA5B9B8F1D57" },
        { name: "Microsoft Certified: Azure AI Fundamentals", description: "Validates foundational knowledge of artificial intelligence and machine learning concepts on Azure, including computer vision, natural language processing, and conversational AI.", link: "https://learn.microsoft.com/api/credentials/share/en-gb/TharunkumarMaddala-6138/E11E64325DB82C24?sharingId=3875DA5B9B8F1D57" },
        { name: "Microsoft Certified: Azure Data Fundamentals", description: "Affirms understanding of core data concepts and services on Azure, covering relational and non-relational databases, data analytics, and data governance.", link: "https://learn.microsoft.com/api/credentials/share/en-gb/TharunkumarMaddala-6138/FF1F01E0E05A42F?sharingId=3875DA5B9B8F1D57" },
        { name: "Microsoft Certified: Azure Fundamentals", description: "Provides fundamental knowledge of Azure cloud services, including core Azure services, Azure pricing, SLAs, and lifecycle.", link: "https://learn.microsoft.com/api/credentials/share/en-gb/TharunkumarMaddala-6138/D292CBF8FF3DE708?sharingId=3875DA5B9B8F1D57" },
        { name: "AWS Certified Developer – Associate", description: "Recognizes proficiency in developing and deploying cloud-based applications using AWS services like Lambda, API Gateway, and DynamoDB.", link: "https://www.credly.com/badges/ee2154ae-3090-494f-b12f-de5b5ac0cd68/public_url" },
        { name: "AWS Certified Cloud Practitioner", description: "Certifies understanding of AWS Cloud fundamentals, including architectural principles, key services, security, and compliance.", link: "https://www.credly.com/badges/ac15e2db-c930-4d43-9dc7-5f4fcdee90a5/public_url" },
        { name: "AWS Certified Solutions Architect – Professional", description: "Acknowledges advanced skills in designing distributed systems on AWS, focusing on scalability, reliability, and security.", link: "https://www.credly.com/badges/a7475891-79e5-42b3-be08-fbbe28d39ae6/public_url" },
    ];

    const openModal = (certification) => {
        setSelectedCertification(certification);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedCertification(null);
        setModalOpen(false);
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                        Certifications
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Your source for verified industry credentials.
                    </p>
                </header>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((certification, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg">
                            <div className="p-6">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{certification.name}</h3>
                                <a href={certification.link} className="text-sm text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                                    Verify Certificate
                                </a>
                                <div className="mt-4">
                                    <button 
                                        onClick={() => openModal(certification)} 
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {modalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{selectedCertification.name}</h2>
                            <p className="text-gray-700 dark:text-gray-300">{selectedCertification.description}</p>
                        </div>
                        <div className="mt-5 sm:mt-6">
                            <button
                                onClick={closeModal}
                                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Certifications;
