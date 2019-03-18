$(function(){
  moviesList()
  favoriteMovies()
})

function moviesList(){
  $.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8bcbd60b36410cb7d6c4f88c9eaad318',
    function(results){
      results.results.forEach(element => {

        let title = element.title
        let overview = element.overview
        let poster = `https://image.tmdb.org/t/p/w500/${element.poster_path}`
        
          $("#moviesList").append(`
          <div class="col-4">
            <div class="card">
              <img class="card-img-top" src="${poster}" alt="Move Poster">
              <div class="card-body">
                <h4 class="card-title ">${title}</h4>
                <p class="card-text">${overview}.</p>
              <a href="#" class="btn btn-primary" style="margin-left: 10%;"><i class="material-icons">favorite</i> Add to My Favorite List</a>
              </div>
            </div>
          </div>
          `)
      })
    })
}

function favoriteMovies(){
  $.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8bcbd60b36410cb7d6c4f88c9eaad318',
    function(results){
      results.results.forEach(element => {

        let title = element.title
        let overview = element.overview
        let poster = `https://image.tmdb.org/t/p/w500/${element.poster_path}`
        
          $("#favoriteMoviesList").append(`
          <div class="col-4">
            <div class="card">
              <img class="card-img-top" src="${poster}" alt="Move Poster">
              <div class="card-body">
                <h4 class="card-title ">${title}</h4>
                <p class="card-text">${overview}.</p>
              <a href="#" class="btn btn-primary" style="margin-left: 10%;"><i class="material-icons">favorite</i> Add to My Favorite List</a>
              </div>
            </div>
          </div>
          `)
      })
    })
}