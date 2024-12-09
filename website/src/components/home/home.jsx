// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { ChevronRight, Play, Award, Users, Music, Calendar, Trophy, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../transition';
import { ParticleField } from '../particlefield';
import { useCountUp } from '../../hooks/useCountUp';


const StatCard = ({ icon, value, label, index }) => {
  const { count, ref } = useCountUp(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="relative group"
    >
      <motion.div
        className="text-center p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-purple-500/10 
                   hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
      >
        <motion.div 
          className="flex justify-center mb-4 text-purple-500 transform group-hover:scale-110 transition-transform duration-300"
        >
          {icon}
        </motion.div>
        <motion.h3 
          className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          {count}
          <span className="text-2xl">+</span>
        </motion.h3>
        <p className="text-gray-400">{label}</p>
      </motion.div>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <Users size={32} />,
      value: 150,
      label: "Active Artists"
    },
    {
      icon: <Music size={32} />,
      value: 500,
      label: "Released Tracks"
    },
    {
      icon: <Calendar size={32} />,
      value: 200,
      label: "Events Per Year"
    },
    {
      icon: <Trophy size={32} />,
      value: 75,
      label: "Awards Won"
    }
  ];

  return (
    <section className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};


const Home = () => {
  const stats = [
    { icon: <Users size={24} />, value: '50+', label: 'Artists' },
    { icon: <Music size={24} />, value: '200+', label: 'Releases' },
    { icon: <Award size={24} />, value: '15+', label: 'Awards' },
    { icon: <Calendar size={24} />, value: '100+', label: 'Events/Year' },
  ];

  const featuredArtists = [
    { id: 1, name: 'Nyasha David', genre: 'Afropop', image: '/nya.jpg' },
    { id: 2, name: 'Trevor Dongo', genre: 'Urban Grooves', image: '/trevor' },
    { id: 3, name: 'Makhadzi', genre: 'Pop', image: '/mk.jpg' },
    ];
    
    const streamingPlatforms = [
        {
          name: 'Spotify',
          logo: '/spot.png',
        },
        {
          name: 'Apple Music',
          logo: '/apple.jpg',
        },
        {
          name: 'YouTube Music',
          logo: 'ytm.png',
        },
        {
          name: 'Amazon Music',
          logo: 'au3.png'
        },
        {
          name: 'Tidal',
          logo: 'sc.png'
        }
      ];

  return (
    <PageTransition>
<section className="relative h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black">
    <ParticleField />      
  </div>
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-4 h-4 opacity-20"
        initial={{ 
          x: Math.random() * window.innerWidth,
          y: window.innerHeight + 100
        }}
        animate={{
          y: -100,
          rotate: 360,
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: 'linear',
          delay: Math.random() * 10
        }}
      >
        ♪
      </motion.div>
    ))}
  </div>
  <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-6xl font-bold mb-6"
    >
      Where Music Meets Innovation
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-xl text-gray-300 mb-8"
    >
      Discover the future of sound with HR Music Group
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4"
    >
      <Link
        to="/artists"
        className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors flex items-center"
      >
        Explore Artists <ChevronRight size={20} className="ml-2" />
      </Link>
      <button className="px-8 py-3 border border-white/20 hover:border-purple-500 rounded-full transition-colors flex items-center">
        Watch Showreel <Play size={20} className="ml-2" />
      </button>
    </motion.div>
    
    {/* Streaming Platforms */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-12"
    >
      <p className="text-sm text-gray-400 mb-4">Available on all major platforms</p>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {streamingPlatforms.map((platform, index) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.3,
              delay: 0.7 + (index * 0.1)
            }}
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 text-gray-400 hover:text-white transition-colors"
          >
            <img src={platform.logo} alt={platform.name} className='w-full h-full object-contain rounded-full'/>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

      {/* Stats Section */}
      
        <StatsSection/>
      

      {/* Featured Artists */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Artists</h2>
            <p className="text-gray-400">Discover our talented roster of artists</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArtists.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                    <div className={`absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-75`}>
                        <img src={artist.image} alt={artist.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-2">{artist.name}</h3>
                  <p className="text-gray-200">{artist.genre}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
