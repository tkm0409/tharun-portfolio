import React from 'react';

// Card component
const Card = ({ children }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            {children}
        </div>
    );
};

// CardHeader component
const CardHeader = ({ children }) => {
    return <div className="mb-4">{children}</div>;
};

// CardTitle component
const CardTitle = ({ children }) => {
    return <h2 className="text-xl font-bold mb-2">{children}</h2>;
};

// CardDescription component
const CardDescription = ({ children }) => {
    return <p className="text-gray-600 mb-4">{children}</p>;
};

// CardContent component
const CardContent = ({ children }) => {
    return <div>{children}</div>;
};

// CardFooter component
const CardFooter = ({ children }) => {
    return <div className="text-gray-500 text-sm">{children}</div>;
};

// Education component
const Education = () => {
    return (
        <section className="py-16">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto">
                    <header className="text-center mb-12">
                    <h1 className="text-gray-600 dark:text-gray-400 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-4">Education</h1>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">My academic background and qualifications</p>
               
                    </header>
                    

                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Bachelor of Technology</CardTitle>
                                <CardDescription>Electronics & Communication</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between items-center">
                                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">7.58 CGPA</p>
                                    <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">Completed</span>
                                </div>
                                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                                    <li>• Specialized in signal processing and embedded systems</li>
                                    <li>• Completed a capstone project on IoT-based smart home automation</li>
                                    <li>• Active member of the college's robotics club</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <div className="flex justify-between items-center w-full">
                                    <span className="text-gray-500 dark:text-gray-400">Narayana Engineering College, Gudur</span>
                                    <time className="font-medium text-gray-600 dark:text-gray-300">2018 - 2022</time>
                                </div>
                            </CardFooter>
                        </Card>

                        {/* Add more education entries here if needed */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
