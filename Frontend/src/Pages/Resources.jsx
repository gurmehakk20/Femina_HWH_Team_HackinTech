import React, { useState, useEffect } from 'react';
import { Bookmark, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  "All",
  "Female Health",
  "Reproductive Health",
  "Period",
  "Mental Wellbeing",
  "Sexual Wellbeing",
  "Fitness",
];

const API_URL = import.meta.env.REACT_APP_API_URL;

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bookmarked, setBookmarked] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);

  // Declare fetchResources function before useEffect
  const fetchResources = () => {
    fetch(`${API_URL}/api/resources`)
      .then((res) => res.json())
      .then((data) => setResources(data))
      .catch((err) => console.error('Error fetching resources:', err));
  };

  // UseEffect to fetch data when component mounts
  useEffect(() => {
    fetchResources();  // Calling the function after it's defined
  }, []); // Empty dependency array to run only on component mount

  // Toggle bookmark functionality
  const toggleBookmark = (id) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filter resources based on search and category
  const filteredResources = resources.filter((resource) => {
    const matchSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.preview.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory =
      selectedCategory === 'All' || resource.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-[#fff0f5] p-6">
      <h1 className="text-4xl font-bold text-center text-[#ff4d94] mb-6">Resources</h1>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute top-3 left-3 text-[#ff4d94]" />
          <input 
            type="text"
            placeholder="Search resources..."
            className="pl-10 p-3 w-full border-2 border-[#ff4d94] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4d94]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-lg border-2 border-[#ff4d94] transition-colors ${
                selectedCategory === cat ? 'bg-[#ff4d94] text-white' : 'bg-white text-[#ff4d94]'
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <motion.div 
            key={resource.id}
            className="bg-white p-4 rounded-lg shadow-lg relative cursor-pointer hover:shadow-2xl transition-transform"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedResource(resource)}
          >
            <h3 className="text-xl font-semibold text-[#ff4d94] mb-2">{resource.title}</h3>
            <p className="text-gray-600 mb-4">{resource.preview}</p>
            <button 
              className="absolute top-4 right-4"
              onClick={(e) => {
                e.stopPropagation();
                toggleBookmark(resource.id);
              }}
            >
              <Bookmark size={24} color={bookmarked.includes(resource.id) ? '#ff4d94' : '#ccc'} />
            </button>
            {resource.pdf && (
              <a 
                href={resource.pdf} 
                download 
                className="text-sm text-[#ff4d94] underline mt-2 block"
                onClick={(e) => e.stopPropagation()}
              >
                Download PDF
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Modal for Full Resource Content */}
      <AnimatePresence>
        {selectedResource && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedResource(null)}
          >
            <motion.div 
              className="bg-white p-6 rounded-lg max-w-2xl w-full relative"
              initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-[#ff4d94] font-bold text-2xl"
                onClick={() => setSelectedResource(null)}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-[#ff4d94] mb-4">{selectedResource.title}</h2>
              <p className="mb-4">{selectedResource.fullContent}</p>
              {selectedResource.pdf && (
                <a 
                  href={selectedResource.pdf} 
                  download 
                  className="text-[#ff4d94] underline"
                  onClick={() => setSelectedResource(null)}
                >
                  Download Full PDF
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Resources;
