import { motion } from 'framer-motion';
import Button from '../Components/Button'
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const cardVariants = {
  hover: { scale: 1.05, transition: { duration: 0.4 } },
};

export default function HeroSection2() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="font-[Poppins] py-40 p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center text-center max-w-7xl mx-auto">
      {/* Ratings Card */}
      <motion.div variants={cardVariants} whileHover="hover" className="bg-black text-white p-6 rounded-2xl shadow-xl">
        <p className="text-lg">⭐⭐⭐⭐⭐</p>
        <p className="mt-2">4572 Users</p>
        <h3 className="text-xl font-semibold">Our Ratings</h3>
      </motion.div>

      {/* Downloads Card */}
      <motion.div variants={cardVariants} whileHover="hover" className="bg-[#ff4d94] text-white p-6 rounded-2xl shadow-xl">
        <h3 className="text-2xl font-semibold">78k +</h3>
        <p>Downloads</p>
      </motion.div>

      {/* Technology Card */}
      <motion.div variants={cardVariants} whileHover="hover" className="bg-[#ff4d94] text-white p-10 rounded-2xl shadow-xl flex flex-col justify-center items-center">
        <h3 className="text-2xl font-semibold">Femona</h3>
        <p className="mt-2">Bringing Change Through Technology</p>
        <img src="/tech-avatar.png" alt="Tech Avatar" className="mt-4 w-32 h-40 object-cover" />
      </motion.div>

      {/* Coming Soon Card */}
      <motion.div variants={cardVariants} whileHover="hover" className="bg-[#ff4d94] text-white p-6 rounded-2xl shadow-xl">
        <h3 className="text-xl font-semibold">Mobile App Coming Soon</h3>
        <img src="/mobile-preview.png" alt="App Preview" className="mt-4 w-40 mx-auto" />
      </motion.div>

      {/* Confidence Card */}
      <motion.div variants={cardVariants} whileHover="hover" className="bg-black text-white p-6 rounded-2xl shadow-xl">
        <h3 className="text-xl font-semibold">Femina</h3>
        <p>Makes You Confident</p>
      </motion.div>

      {/* Expert Team Card */}
      <motion.div variants={cardVariants} whileHover="hover" className="bg-[#ff4d94] text-white p-6 rounded-2xl shadow-xl">
        <p className="text-lg">Dedicated Team Of Experts For All Your Queries</p>
        <p>Waiting Just A Phone Call Away</p>
      </motion.div>

      {/* CTA Section */}
      <div className="col-span-1 md:col-span-3 text-center py-10">
        <h2 className="text-3xl font-semibold text-[#ff4d94]">Join The Phenomenon</h2>
        <Button className="mt-4 bg-[#ff4d94] hover:bg-[#ff3377] text-white rounded-full px-6 py-3 flex items-center gap-2" onClick={() => setShowModal(true)}>
          Login/Register <ArrowUpRight size={18} />
        </Button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
            <h3 className="text-2xl font-semibold mb-4">Welcome to Femona</h3>
            <Button className="bg-[#ff4d94] text-white" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}