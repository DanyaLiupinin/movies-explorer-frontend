export function filterMovies(movies, userQuery) { //не забыть про короткометражки
    const moviesByUserQuery = movies.filter((movie) => {
      const movieTitleRu = String(movie.nameRU).toLowerCase().trim();
      const movieTitleEng = String(movie.nameEN).toLowerCase().trim();
      const userMovie = userQuery.toLowerCase().trim();
      return movieTitleRu.includes(userMovie) || movieTitleEng.includes(userMovie);
    });

    return moviesByUserQuery
  
    /*
    if (shortMoviesCheckbox) {
      return filterShortMovies(moviesByUserQuery);
    } else {
      return moviesByUserQuery;
    }
    */
  }