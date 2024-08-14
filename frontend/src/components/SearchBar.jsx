import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div className="flex items-center justify-center p-4">
            <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search..."
                className="p-2 border border-gray-300 rounded-l-md w-[400px] focus:outline-none"
            />
            <button
                onClick={handleSearch}
                className="p-2 bg-gray-800 text-white rounded-r-md"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
