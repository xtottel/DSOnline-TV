"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function UnderDevelopmentLight() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Main Content - Light Theme */}
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 sm:p-10"
          >
            <div className="relative inline-block mb-8">
              <Image
                src="/dstv.png" // Use a light-themed illustration
                width={200}
                height={200}
                alt="Under Construction"
                className="mx-auto"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-600">
              Exciting Things Are Coming!
            </h1>

            <p className="text-lg text-gray-700 mb-8">
              We&apos;re currently working hard to bring you an amazing media experience. 
              Our new platform for live streaming, video production, and broadcast 
              services will be launching soon.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-yellow-600">
                Stay Updated
              </h2>
              <p className="text-gray-700 mb-4">
                Sign up to be notified when we launch:
              </p>
              
              <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-600 text-white font-medium rounded hover:opacity-90 transition-opacity shadow-md"
                >
                  Notify Me
                </button>
              </form>
            </div>

            <motion.div 
              className="mt-8 text-gray-600 text-sm"
              whileHover={{ scale: 1.02 }}
            >
              <p>In the meantime, check out our social media for updates!</p>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}