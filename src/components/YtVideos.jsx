import { useEffect, useState } from "react";
import useVideos from "../hooks/useVideo";
import MovieDetail from "./MovieDetails/MovieDetail";
import SearchBar from "./Search/SearchBar";

const YtVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("react js");

  useEffect(() => {
    setSelectedVideo(videos[0]);
    console.log(selectedVideo);
  }, [videos]);
  return (
    <div className="youtube-search-page">
      <div className="background"></div>
      <SearchBar onFormSubmit={search} />
      <div className="video-content-section">
        <div className="video-player-container">
          <MovieDetail video={selectedVideo} />
        </div>
        {/* <div className="video-previews-container"><VideoList onVideoSelect={setSelectedVideo} videos={videos} /></div> */}
      </div>
    </div>
  );
};

export default YtVideos;
