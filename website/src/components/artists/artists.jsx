// src/pages/Artists.jsx
import { useState, useEffect } from 'react';
import PageTransition from '../transition';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const Artists = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const artists = [
    { 
      id: 1, 
      name: 'Master H', 
      genre: 'Zim Dancehall', 
      image: '/mh.jpg',
      bio: 'Rising star in the Zimbabwean music scene',
      socials: {
        instagram: '@masterh',
        twitter: '@masterh_official'
      }
    },
    { 
      id: 2, 
      name: 'Shasha', 
      genre: 'RnB & Afropop', 
      image: 'shasha.webp',
      bio: 'Award-winning vocalist and songwriter',
      socials: {
        instagram: '@shasha',
        twitter: '@shasha_official'
      }
    },
    { 
      id: 3, 
      name: 'Hilzy', 
      genre: 'Pop', 
      image: 'hilzy.jpg',
      bio: 'Contemporary pop artist with a unique sound',
      socials: {
        instagram: '@hilzy',
        twitter: '@hilzy_music'
      }
      },
      { 
        id: 4, 
        name: 'Freeman', 
        genre: 'Zim Dancehall', 
        image: 'free.jpg',
        bio: 'Award-winning singer and songwriter',
        socials: {
          instagram: '@hkd_freeman',
          twitter: '@hkd_freeman'
        }
      },
      { 
        id: 3, 
        name: 'Tocky Vibes', 
        genre: 'Pop', 
        image: 'tocky.jpg',
        bio: 'Amazing vocalist and songwriter',
        socials: {
          instagram: '@tocky_vibes',
          twitter: '@tocky_vibes'
        }
      },
      { 
        id: 3, 
        name: 'Baba Harare', 
        genre: 'Jit', 
        image: 'h.jpg',
        bio: 'Cultural singer and songwriter, known for his unique style',
        socials: {
          instagram: '@baba_harare',
          twitter: '@baba_harare'
        }
      },
  ];

  const genres = ['all', ...new Set(artists.map(artist => artist.genre))];

  const filteredArtists = artists
    .filter(artist => filter === 'all' || artist.genre === filter)
    .filter(artist => 
      artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-0">Our Artists</h1>
          
          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search artists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>
        
        {/* Filter Buttons */}
        <div className="scrollbar-hide overflow-x-auto -mx-4 px-4 mb-8">
          <div className="flex gap-2 sm:gap-4 min-w-min mb-4">
            {genres.map(genre => (
              <button
                key={genre}
                onClick={() => setFilter(genre)}
                className={`px-4 sm:px-6 py-2 rounded-full transition-all whitespace-nowrap text-sm sm:text-base ${
                  filter === genre 
                    ? 'bg-purple-600 text-white shadow-lg scale-105' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Artists Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
            layout
          >
            {filteredArtists.map((artist, index) => (
              <motion.div
                key={artist.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: isMobile ? 0 : index * 0.1 }}
                className="group relative overflow-hidden rounded-lg aspect-square hover:scale-[1.02] transition-transform"
              >
                    <div className={`absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-75`}>
                    <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                </div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity">
                      <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{artist.name}</h3>
                    <p className="text-gray-200 text-sm sm:text-base mb-2">{artist.genre}</p>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {artist.bio}
                    </p>
                    
                    <div className="flex gap-4 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {Object.entries(artist.socials).map(([platform, handle]) => (
                        <button
                          key={platform}
                          className="text-sm text-white hover:text-purple-400 transition-colors"
                        >
                          {handle}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {filteredArtists.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 mt-8"
          >
            No artists found matching your search.
          </motion.p>
        )}
      </div>
    </PageTransition>
  );
};

export default Artists;