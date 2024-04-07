import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon from react-icons/fa

export default () => {

    return (
        <footer className="pt-10 relative"> {/* Added relative positioning */}
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <p>© 2024 Tharun Kumar Portfolio. All rights reserved.</p>
                    <a href="https://www.linkedin.com/in/tharunkumar0409">
                        <FaLinkedin className="text-gray-600 ml-auto" size={24} /> {/* Adjust size as needed */}
                    </a>
                </div>
            </div>
        </footer>
    )
}
