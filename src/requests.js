// const API_KEY = import.meta.env.VITE_REACT_APP_TMDB_API_KEY;
const API_KEY = "a6591ee65cb5770b86c8ef099076f862";

const requests = {
  fetchTrending: `trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchCoriflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `movie/popular?api_key=${API_KEY}&language=en-US&page=1%27`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
};

// export const BASE_URL = import.meta.env.VITE_REACT_APP_TMDB_BASE_URL;
export const BASE_URL = "https://image.tmdb.org/t/p/original/";

export default requests;
