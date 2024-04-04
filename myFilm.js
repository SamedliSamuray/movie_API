// API key ucun:
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGYzZDFkNGJkOGQ4ZmQyNDY5MTAyZjkzOWIzMmMzMyIsInN1YiI6IjY2MGRhNWU0MzNhMzc2MDE3ZDgyYTEwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NN-6ZHiM6w4uoZH0WwiMYe5Kt47ftzNPNK7MYznw8L8'
  }
};

// Metod 1  -- Hamisini bir  arrayde yazdirmaq
fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=tr-TR&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(response => {
    const titles = response.results.map(movie => movie.title);
    console.log(`Ən yaxşı filmlər : ${titles}`);

  })
  .catch(err => console.error(err));



//Metod 2 Tek-tek siralama ile yazdirmaq
  // fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=tr-TR&page=1&sort_by=popularity.desc', options)
  // .then(response => response.json())
  // .then(response => {
  //   console.log(`Ən yaxşı filmlər :`);
  //   response.results.map((movie,a=0) => console.log(`${(a+1)})${movie.title}`))

  // })
  // .catch(err => console.error(err));
