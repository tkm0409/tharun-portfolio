import award from "../assets/Award.png";

export default function Awards() {
    return (
        <div className="w-full py-12 lg:py-24 xl:py-32">
            <div className="container px-4 space-y-6 md:space-y-8">

                <header className="space-y-1 text-center">
                    <h1 className="text-gray-600 dark:text-gray-400 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-4">Awards & Recognitions</h1>
                </header>
                <div className="grid w-full grid-cols-1 items-start justify-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col space-y-32">
                        <h2 className="text-2xl font-bold tracking-tight">Hexaware Learning Ambassador</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                        Recognized as a Knowledge Ninja and awarded the Learning Award for Q4 2023 at Hexaware, demonstrating a strong commitment to continuous learning and skill enhancement.
                        </p>
                    </div>
                    <div className="flex w-full items-center justify-center">
                        <img
                            alt="Best Designer Award"
                            className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
                            height="300"
                            src={award}
                            width="400"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

