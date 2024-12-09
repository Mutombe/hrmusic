import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const Contact = () => {
  // Los Angeles coordinates
  const position = [-17.7543746,31.1314642];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-400">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Mail className="text-purple-400" size={24} />
              <div>
                <h3 className="font-bold mb-1">Email Us</h3>
                <p className="text-gray-400">contact@hrmusicgroup.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-purple-400" size={24} />
              <div>
                <h3 className="font-bold mb-1">Call Us</h3>
                <p className="text-gray-400">+263 77 533 8713</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="text-purple-400" size={24} />
              <div>
                <h3 className="font-bold mb-1">Visit Us</h3>
                <p className="text-gray-400">
                  10 Taberer Ave, Hillside,<br />
                  22 Warwick Rd, Harare
                </p>
              </div>
            </div>

            {/* Add the map container here */}
            <div className="w-full h-[300px] rounded-lg overflow-hidden">
              <MapContainer
                center={position}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>
                  10 Taberer Ave, Hillside,<br />
                  22 Warwick Rd,<br /> Harare
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>

          <motion.form
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-black/20 border border-purple-900/50 focus:border-purple-400 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-black/20 border border-purple-900/50 focus:border-purple-400 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-black/20 border border-purple-900/50 focus:border-purple-400 focus:ring-purple-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;