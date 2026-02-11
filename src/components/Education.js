import React from 'react';

const Card = ({ children }) => {
    return (
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:border-primary-300/50 dark:hover:border-primary-600/50">
            {children}
        </div>
    );
};

const CardHeader = ({ children }) => {
    return <div className="mb-4">{children}</div>;
};

const CardTitle = ({ children }) => {
    return <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{children}</h2>;
};

const CardDescription = ({ children }) => {
    return <p className="text-gray-600 dark:text-gray-400 mb-4">{children}</p>;
};

const CardContent = ({ children }) => {
    return <div>{children}</div>;
};

const CardFooter = ({ children }) => {
    return <div className="text-gray-500 dark:text-gray-400 text-sm mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">{children}</div>;
};

const Education = () => {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto">
                    <header className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500 pb-4">Education</h1>
                        <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 text-lg">My academic background and qualifications</p>
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
                                    <span className="px-3 py-1 text-sm font-medium text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/30 rounded-full border border-green-200/50 dark:border-green-700/50">Completed</span>
                                </div>
                                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    <li>Specialized in signal processing and embedded systems</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <div className="flex justify-between items-center w-full">
                                    <span className="text-gray-500 dark:text-gray-400">Narayana Engineering College, Gudur</span>
                                    <time className="font-medium text-primary-600 dark:text-primary-400">2018 - 2022</time>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
