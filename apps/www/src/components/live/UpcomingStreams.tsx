import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import Link from 'next/link';

interface Stream {
  id: number;
  title: string;
  date: string;
  time: string;
  thumbnail: string;
}

interface UpcomingStreamsProps {
  streams: Stream[];
}

const UpcomingStreams = ({ streams }: UpcomingStreamsProps) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GH', options);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-orange-500 to-yellow-600 p-4">
        <h3 className="text-white font-bold">Upcoming Streams</h3>
      </div>

      <div className="divide-y divide-gray-200">
        {streams.map((stream) => (
          <Link 
            key={stream.id} 
            href={`/stream/${stream.id}`}
            className="block hover:bg-gray-50 transition-colors"
          >
            <div className="p-4 flex gap-4">
              <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={stream.thumbnail} 
                  alt={stream.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 truncate">{stream.title}</h4>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <FaCalendarAlt className="mr-1.5 flex-shrink-0" />
                  <span>{formatDate(stream.date)}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FaClock className="mr-1.5 flex-shrink-0" />
                  <span>{stream.time}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {streams.length === 0 && (
        <div className="p-6 text-center text-gray-500">
          No upcoming streams scheduled
        </div>
      )}
    </div>
  );
};

export default UpcomingStreams;