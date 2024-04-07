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
        <div className="">
            <div className="container px-4">
                <div className="grid gap-0 sm:gap-8 max-w-2xl mx-auto">
                    <header className="space-y-1 text-center">
                        <h1 className="text-gray-600 dark:text-gray-400 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-4">Education</h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">My academic background and qualifications</p>
                    </header>

                    <div className="space-y-12">
                        <Card>
                            <CardHeader>
                                <CardTitle>Bachelor of Technology</CardTitle>
                                <CardDescription>Electronics & Communication</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-400">7.58 CGPA</p>
                            </CardContent>
                            <CardFooter>
                                <time className="font-medium">
                                    2018 - 2022
                                </time>
                            </CardFooter>
                        </Card>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
