// src/pages/About.jsx
import { motion } from 'framer-motion';
import { Users, Trophy, Music, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: "John Sibanda",
      role: "CEO & Founder",
      image: "path-to-image", // Add actual image path
      bio: "20+ years in music industry leadership"
    },
    {
      name: "Sarah Mukaiwa",
      role: "Head of A&R",
      image: "path-to-image",
      bio: "Former artist with platinum records"
    },
    {
      name: "Michael Chanda",
      role: "Production Director",
      image: "path-to-image",
      bio: "Grammy-winning producer"
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "50+ Awards",
      description: "Including Grammy and Billboard recognitions"
    },
    {
      icon: Users,
      title: "100+ Artists",
      description: "Successfully launched careers"
    },
    {
      icon: Music,
      title: "1000+ Releases",
      description: "Across all major platforms"
    },
    {
      icon: Globe,
      title: "Global Presence",
      description: "Operations in 15 countries"
    }
  ];


  return (
    <div className="relative min-h-screen">
      {/* Background Images Blend Effect */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-black/95 mix-blend-multiply" />
        <div 
          className="absolute inset-0 bg-[url('/music.jpg.crdownload')] bg-cover bg-center opacity-40"
          style={{ mixBlendMode: 'luminosity' }}
        />
        <div 
          className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-30"
          style={{ mixBlendMode: 'overlay' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
      </div>

      {/* Animated Particles */}
      <div className="fixed inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl font-bold  font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              About HR Music Group
            </h1>
            <p className="text-xl text-gray-300">
              Pioneering the future of music since 2010
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 p-8 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10"
            >
              <h2 className="text-2xl font-bold text-purple-300">Our Story</h2>
              <p className="text-gray-300 leading-relaxed">
                HR Music Group was founded with a vision to revolutionize the music industry.
                We believe in nurturing talent and providing artists with the resources they
                need to reach their full potential. Through innovative approaches and cutting-edge
                technology, we've built a platform that empowers artists to create, connect, and succeed.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-6 p-8 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10"
            >
              <h2 className="text-2xl font-bold text-purple-300">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To discover and develop exceptional musical talent while fostering creativity
                and innovation in the industry. We strive to create meaningful connections
                between artists and audiences worldwide, leveraging technology and expertise
                to build sustainable careers in music.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold mb-12 text-center text-purple-300">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-6 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <achievement.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-bold mb-12 text-center text-purple-300">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="aspect-square relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 p-6">
                      <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                      <p className="text-purple-400 mb-2">{member.role}</p>
                      <p className="text-sm text-gray-300">{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full transition-all hover:scale-105"
            >
              Get in Touch <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;