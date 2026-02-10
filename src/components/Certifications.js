import React, { useState } from "react";
import "./certificationModal.css";
import automationAnywhereLogo from "../assets/automation-anywhere-icon.png";
import microsoftLogo from "../assets/microsoft.png";
import awsLogo from "../assets/web.png";

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

    const getCertificationLogo = (name) => {
        if (name.includes("Automation Anywhere")) return automationAnywhereLogo;
        if (name.includes("Microsoft")) return microsoftLogo;
        if (name.includes("AWS")) return awsLogo;
        return null;
    };

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-14">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500">
                        Certifications
                    </h1>
                    <p className="mt-4 max-w-md mx-auto text-gray-600 dark:text-gray-400 text-lg md:max-w-3xl">
                        Your source for verified industry credentials.
                    </p>
                </header>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((certification, index) => (
                        <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden rounded-2xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:border-primary-300/50 dark:hover:border-primary-600/50">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-accent-500/10 dark:from-primary-900/30 dark:to-accent-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                                        <img
                                            src={getCertificationLogo(certification.name)}
                                            alt={`${certification.name} logo`}
                                            className="w-8 h-8 object-contain"
                                        />
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white leading-tight">{certification.name}</h3>
                                </div>
                                <div className="flex items-center gap-3 mt-4">
                                    <a href={certification.link} className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors" target="_blank" rel="noopener noreferrer">
                                        Verify
                                    </a>
                                    <button
                                        onClick={() => openModal(certification)}
                                        className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-xl text-white bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 transition-all duration-200 shadow-sm"
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
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl px-6 pt-6 pb-6 text-left overflow-hidden shadow-2xl transform transition-all sm:max-w-lg w-full border border-gray-200/50 dark:border-gray-700/50">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{selectedCertification.name}</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{selectedCertification.description}</p>
                        </div>
                        <div className="mt-6">
                            <button
                                onClick={closeModal}
                                className="w-full rounded-xl px-4 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
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
