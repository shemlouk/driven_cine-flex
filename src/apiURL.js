const apiURL = {
  movies: "https://mock-api.driven.com.br/api/v8/cineflex/movies",
  sessions: (id) =>
    `https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`,
  seats: (id) =>
    `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id}/seats`,
  post: "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
};

export default apiURL;
