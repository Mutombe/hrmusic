// src/pages/Releases.jsx
import { motion } from 'framer-motion';
import { Play, Heart } from 'lucide-react';

const Releases = () => {
  const releases = [
    { 
      title: 'Tateguru',
      artist: 'Master H',
      date: '2024',
      type: 'Album',
      image: 'tate.jpg'
      },
      { 
        title: 'King of Hearts',
        artist: 'Takura',
        date: '2024',
        type: 'Album',
        image: 'king.jpeg'
      },
      { 
        title: 'Mukuru',
        artist: 'Freeman',
        date: '2024',
        type: 'Album',
        image: 'mkuru.jpg'
      },

    // Add more releases
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Latest Releases
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {releases.map((release, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="bg-gradient-to-br from-purple-900/20 to-black/20 rounded-2xl overflow-hidden"
            >
              <div className="aspect-square relative group">
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors">
                        <img src={release.image} alt={release.title} className="w-full h-full object-cover" />
                      </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-purple-600 p-4 rounded-full">
                    <Play size={24} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{release.title}</h3>
                <p className="text-purple-400 mb-2">{release.artist}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{release.type} • {release.date}</span>
                  <button className="text-gray-400 hover:text-purple-400">
                    <Heart size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Releases;