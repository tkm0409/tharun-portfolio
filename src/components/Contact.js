import { useState, useEffect } from 'react';

export default ({ isDarkMode }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');


    const contactMethods = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ,
            contact: "m.tharunkumar0409@gmail.com",
            title: "Email"
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappUrl = `https://wa.me/917995195537?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <main className={`${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-600'}`}>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl space-y-3">
                    <h3 className="text-indigo-600 font-semibold">
                        Contact
                    </h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        I'm here to help and answer any question you might have, I look forward to hearing from you.
                    </p>
                </div>
                <div>
                    <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
                        {
                            contactMethods.map((item, idx) => (
                                <li key={idx}>
                                    <h4 className={`${isDarkMode ? 'text-gray-100' : 'text-gray-800'} text-lg font-medium`}>{item.title}</h4>
                                    <div className="mt-3 flex items-center gap-x-3">
                                        <div className={`flex-none ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                            {item.icon}
                                        </div>
                                        <a href={`mailto:${item.contact}`} className={isDarkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-800'}>{item.contact}</a>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                
                {/* WhatsApp Contact Form */}
                <div className="mt-12">
                    <h4 className={`${isDarkMode ? 'text-gray-100' : 'text-gray-800'} text-lg font-medium mb-4`}>Contact via WhatsApp</h4>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className={`mt-1 block w-full rounded-md shadow-sm p-2 ${
                                    isDarkMode 
                                        ? 'bg-gray-800 border-gray-700 text-gray-100' 
                                        : 'bg-white border-gray-300 text-gray-900'
                                }`}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                            Send via WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}