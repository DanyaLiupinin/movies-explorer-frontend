export function filterQueryMovies(movies, userQuery) {
    const moviesByUserQuery = movies.filter((movie) => {
      const movieTitleRu = String(movie.nameRU).toLowerCase().trim();
      const movieTitleEng = String(movie.nameEN).toLowerCase().trim();
      const userMovie = userQuery.toLowerCase().trim();
      return movieTitleRu.includes(userMovie) || movieTitleEng.includes(userMovie);
    });

    return moviesByUserQuery
  }

  export function filterShortMovies(movies) {
    return movies.filter(movie => movie.duration < 40);
  }

  export function isMovieSaved(savedMovies, movie) {

    if (savedMovies.length !== 0) {

      return savedMovies.find((item) => {
        return item.movieId === (movie.id || movie.movieId);
      });

    }
    
  }