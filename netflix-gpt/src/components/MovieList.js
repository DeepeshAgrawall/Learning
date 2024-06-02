import React, { useRef } from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  const scrollContainerRef = useRef(null);

  const handleScrollRight = () => {

    const windowWidth = window.innerWidth - 50;
    scrollContainerRef.current.scrollBy({
      left: windowWidth, // Adjust scroll distance as needed
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <div className="bg-black px-6">
      <h1 className="text-3xl py-1 px-1 text-white">{title}</h1>
      <div className="flex">
        <div
          className="flex overflow-x-auto cust-scrollbarHide"
          ref={scrollContainerRef}
        >
          <div className="flex ">
            {movies?.map((movie) => {
              return (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              );
            })}
          </div>
        </div>
        <button onClick={handleScrollRight}>➡️</button>{" "}
        {/* Right arrow button */}
      </div>
    </div>
  );
};

export default MovieList;
