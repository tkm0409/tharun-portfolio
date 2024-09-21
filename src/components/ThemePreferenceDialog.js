import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemePreferenceDialog = ({ setThemePreference }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Choose Your Theme</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setThemePreference('light')}
            className="flex flex-col items-center p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          >
            <FaSun className="w-8 h-8 text-yellow-500 mb-2" />
            <span>Light</span>
          </button>
          <button
            onClick={() => setThemePreference('dark')}
            className="flex flex-col items-center p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
          >
            <FaMoon className="w-8 h-8 text-blue-300 mb-2" />
            <span className="text-white">Dark</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemePreferenceDialog;