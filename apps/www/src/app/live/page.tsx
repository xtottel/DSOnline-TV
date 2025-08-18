import { Metadata } from 'next'
import { FaCircle, FaRegClock, FaCalendarAlt, FaMapMarkerAlt, FaShare, FaHeart } from 'react-icons/fa'
import LivePlayer from '@/components/live/LivePlayer'
import UpcomingStreams from '@/components/live/UpcomingStreams'
import ChatWidget from '@/components/live/ChatWidget'

export const metadata: Metadata = {
  title: 'Live Streams',
  description: 'Watch our live broadcasts and upcoming streaming events',
}

const LivePage = () => {
  // Sample data - replace with your actual API calls
  const currentStream = {
    title: "Accra Music Festival 2023 - Live Coverage",
    description: "Join us for the biggest music festival in West Africa featuring top artists from across the continent.",
    viewers: 2453,
    isLive: true,
    thumbnail: "/accra-festival-thumb.jpg",
    startTime: "2023-12-15T19:00:00",
    location: "Independence Square, Accra",
    tags: ["music", "festival", "ghana"],
  }

  const upcomingStreams = [
    {
      id: 1,
      title: "Ghana Premier League: Hearts vs Kotoko",
      date: "2023-12-20",
      time: "15:00 GMT",
      thumbnail: "/hearts-kotoko-thumb.jpg",
    },
    {
      id: 2,
      title: "Tech in Ghana Conference",
      date: "2023-12-22",
      time: "09:00 GMT",
      thumbnail: "/tech-conf-thumb.jpg",
    },
    {
      id: 3,
      title: "Traditional Wedding Ceremony",
      date: "2023-12-25",
      time: "12:00 GMT",
      thumbnail: "/wedding-thumb.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Live Streams</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Watch our live broadcasts and never miss your favorite events
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Live Player Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Status Badge */}
            <div className="flex items-center bg-gray-100 px-4 py-2">
              {currentStream.isLive ? (
                <div className="flex items-center text-red-600">
                  <FaCircle className="animate-pulse mr-2" />
                  <span className="font-semibold">LIVE NOW</span>
                </div>
              ) : (
                <div className="flex items-center text-gray-600">
                  <FaRegClock className="mr-2" />
                  <span>Starting Soon</span>
                </div>
              )}
              <div className="ml-auto text-gray-600">
                {currentStream.viewers.toLocaleString()} viewers
              </div>
            </div>

            {/* Video Player */}
            <LivePlayer 
              streamUrl="https://your-stream-url.com/live" 
              thumbnail={currentStream.thumbnail}
            />

            {/* Stream Info */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{currentStream.title}</h2>
              <p className="text-gray-700 mb-4">{currentStream.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="mr-2" />
                  {new Date(currentStream.startTime).toLocaleString()}
                </div>
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="mr-2" />
                  {currentStream.location}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {currentStream.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors">
                  <FaShare className="text-gray-700" />
                </button>
                <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-colors">
                  <FaHeart className="text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Chat Widget */}
          <ChatWidget />

          {/* Upcoming Streams */}
          <UpcomingStreams streams={upcomingStreams} />

          {/* Newsletter Signup */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-3">Get Notified</h3>
            <p className="text-gray-600 mb-4">
              Sign up to be notified when we go live
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LivePage