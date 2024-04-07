import React, { useState } from "react";
import "./certificationModal.css";

function Certifications() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCertification, setSelectedCertification] = useState(null);

    const certifications = [
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
        <section>
            <div className="container px-4 space-y-4 md:space-y-8 lg:space-y-10">
                <header className="space-y-1 text-center">
                    <h1 className="text-gray-600 dark:text-gray-400 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-4">Certifications</h1>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Your source for verified industry credentials.</p>
                </header>
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {certifications.map((certification, index) => (
                        <div key={index} className="grid gap-4 w-full mb-8"> {/* Added margin-bottom to create more space */}
                            <div className="grid gap-2">
                                <h3 className="text-xl handwritten-style">{certification.name}</h3>
                                <a href={certification.link} className="text-sm verify-certificate-link" target="_blank" rel="noopener noreferrer">Verify Certificate</a>
                            </div>
                            <div className="grid gap-2">
                                <button onClick={() => openModal(certification)} className="rounded-lg p-2 leading-none text-xs border border-gray-500 hover:bg-gray-100 transition-colors duration-300 ease-in-out">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {modalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg max-w-md">
                        <h2 className="text-xl font-bold mb-4">{selectedCertification.name}</h2>
                        <p>{selectedCertification.description}</p>
                        <button onClick={closeModal} className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">Close</button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Certifications;
