import React from 'react';
import "./certificationModal.css";

export default function Experience() {
    return (
        <div key="1" className="w-full py-12">
            <div className="container px-4 space-y-4 md:space-y-8 lg:space-y-10">
                <header className="space-y-1 text-center">
                    <h1 className="text-gray-600 dark:text-gray-400 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-4">Experience</h1>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Past Positions</p>
                </header>
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Software Engineer</h3>
                        <p className="text-gray-500 dark:text-gray-400">Hexaware Technologies (2022-present)</p>
                        <p className='text-justify'>
                        In my role as a Microsoft full stack engineer at Hexaware Technologies, I am deeply entrenched in the development landscape, crafting innovative applications utilizing cutting-edge technologies such as .NET Core and Angular/React. Seamlessly integrating these solutions with databases and cloud services forms a core aspect of my responsibilities, where I continually strive for excellence and efficiency. Furthermore, I've ventured into the realm of Robotic Process Automation (RPA) using Automation Anywhere, where I've successfully integrated automation workflows with platforms like Salesforce and ServiceNow, amplifying organizational productivity and agility.
                        </p>
                        <div className="mt-4 space-y-2 text-sm">
                            <button
                                className="btn"
                                variant="outline"
                            >
                                View Projects
                            </button>
                        </div>
                    </div>
                    <div className="space-y-2 border-t pt-4">
                        <h3 className="text-xl font-bold">Internship</h3>
                        <p className="text-gray-500 dark:text-gray-400">Wipro (2022)</p>
                        <p className='text-justify'>
                        Throughout my internship journey at Wipro, I immersed myself in the realm of Selenium automation, harnessing the power of Java to craft robust and efficient solutions. Within this dynamic environment, I actively engaged in enhancing our automation testing processes, leveraging my newfound expertise to drive improvements and streamline workflows.
                        </p>
                        <div className="mt-4 space-y-2 text-sm">
                            <button
                                className="btn"
                                variant="outline"
                            >
                                View Projects
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
