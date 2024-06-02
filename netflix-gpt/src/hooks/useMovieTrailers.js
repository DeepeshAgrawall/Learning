import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailers = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const videosData = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const response = await videosData.json();

    const filterData = response.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : response.results[0];
    dispatch(addTrailerVideo(trailer));

  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailers