import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";

const tabs = [
  { label: 'Movies', value: 'movie' },
  { label: 'TV Shows', value: 'tv' },
  { label: 'Popular', value: 'popular' },
];

const LatestTrailers = () => {
  const [selectedTab, setSelectedTab] = useState('movie'); 
  const [trailers, setTrailers] = useState([]);
  const [background, setBackground] = useState(''); 

  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        let trendingUrl = '';

        if (selectedTab === 'movie') {
          trendingUrl = '/trending/movie/week?language=en-US';
        } else if (selectedTab === 'tv') {
          trendingUrl = '/trending/tv/week?language=en-US';
        } else {
          trendingUrl = '/trending/all/week?language=en-US';
        }

        const trendingRes = await axiosInstance.get(trendingUrl);
        const items = trendingRes.data.results.slice(0, 10);

        const trailerPromises = items.map(async (item) => {
          const mediaType = item.media_type || selectedTab;
          const videosRes = await axiosInstance.get(`/${mediaType}/${item.id}/videos`);
          const trailers = videosRes.data.results.filter(
            vid => vid.type === "Trailer" && vid.site === "YouTube"
          );
          return trailers.length > 0 ? { ...item, trailer: trailers[0] } : null;
        });

        const trailerData = await Promise.all(trailerPromises);
        const filtered = trailerData.filter(Boolean);
        setTrailers(filtered);

        // set default background to first trailer
        if (filtered.length > 0) {
          setBackground(`https://image.tmdb.org/t/p/original${filtered[0].backdrop_path}`);
        }
      } catch (error) {
        console.error("Failed to fetch trailers:", error);
      }
    };

    fetchTrailers();
  }, [selectedTab]);

  return (
    <div 
      className="relative max-w-screen m-auto w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-25 py-6 rounded-lg overflow-hidden"
      style={{
        backgroundImage: background ? `url(${background})` : '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* dark overlay */}

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-3 sm:gap-0">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Latest Trailers</h2>
          <div className="flex flex-wrap justify-center sm:justify-end gap-2">
            {tabs.map((tab) => (
              <button
                key={tab?.value}
                onClick={() => setSelectedTab(tab?.value)}
                className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedTab === tab?.value
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tab?.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex overflow-x-auto space-x-4 py-2">
          {trailers.map((item) => (
            <a
              key={item?.id}
              href={`https://www.youtube.com/watch?v=${item?.trailer.key}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-48 sm:w-56 md:w-64 transform transition-transform duration-200 hover:scale-105"
              onMouseEnter={() =>
                setBackground(`https://image.tmdb.org/t/p/original${item?.backdrop_path}`)
              }
            >
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={`https://img.youtube.com/vi/${item?.trailer.key}/hqdefault.jpg`}
                  alt={item?.trailer.name}
                  className="w-full h-28 sm:h-32 md:h-36 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs sm:text-sm p-1 truncate">
                  {item?.title || item?.name}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestTrailers;
