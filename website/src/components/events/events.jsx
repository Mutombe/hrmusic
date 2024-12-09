// src/pages/Events.jsx
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'Summer Music Festival',
      date: 'July 15, 2024',
      location: 'Brazil',
      time: '2:00 PM',
      description: 'Join us for an unforgettable day of music featuring our top artists.',
      image: `bg.jpg`,
    },
    {
      title: 'Culinary Masters Experience',
      date: 'September 22, 2024',
      location: 'Avondale, Harare',
      time: '5:30 PM',
      description: 'An exclusive evening of fine dining featuring Michelin-starred chefs. Enjoy wine pairings, cooking demonstrations, and a 7-course tasting menu showcasing global cuisines.',
      image: `/bg1.webp`,
    },
    {
      title: 'Global Film Festival',
      date: 'October 5-12, 2024',
      location: 'Various Theaters, Borrowdale',
      time: 'Multiple Screenings',
      description: 'A week-long celebration of international cinema featuring premiere screenings, director Q&As, and workshops. Special focus on emerging filmmakers and innovative storytelling.',
      image: `/bg3.jpg`,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Upcoming Events
        </motion.h1>

        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="relative overflow-hidden rounded-2xl"
              style={{
                backgroundImage: `url(${event.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-black/90 backdrop-blur-sm"></div>
              <div className="relative p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-300">
                        <Calendar size={16} className="mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin size={16} className="mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock size={16} className="mr-2" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors">
                      Get Tickets
                    </button>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;