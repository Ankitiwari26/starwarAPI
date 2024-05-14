import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [retrying, setRetrying] = useState(false);
  const [retryIntervalId, setRetryIntervalId] = useState(null);

  function fetchMovieData() {
    setLoading(true);
    setRetrying(false); // Reset retrying flag

    const retry = () => {
      fetch("https://swapi.dev/api/films")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const transformedMovie = data.results.map((movieData) => {
            return {
              id: movieData.episode_id,
              title: movieData.title,
              openingText: movieData.opening_crawl,
              releaseDate: movieData.release_data,
            };
          });
          console.log(transformedMovie, "movies");
          setState(transformedMovie);
          setLoading(false);
          setRetrying(false); // Stop retrying on successful fetch
          clearInterval(retryIntervalId); // Stop the retry interval
        })
        .catch((error) => {
          console.log("Something went wrong ....Retrying ", error);
          setLoading(false);
        });
    };

    // Initial call to retry function
    retry();

    // Set up retrying logic
    const intervalId = setInterval(() => {
      if (!retrying) {
        console.log("Retrying...");
        setRetrying(true);
        retry();
      }
    }, 5000);

    setRetryIntervalId(intervalId); // Save the interval ID to stop retrying later
  }

  function handleCancelRetry() {
    setRetrying(false); // Stop retrying
    clearInterval(retryIntervalId); // Stop the retry interval
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieData}>Fetch Movies</button>
        {retrying && <button onClick={handleCancelRetry}>Cancel Retry</button>}
      </section>
      <section>
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <MoviesList movies={state} />
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
