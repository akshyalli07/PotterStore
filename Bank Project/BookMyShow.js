function bookMyShow(movies) {
    var result=""
    movies.forEach(movie => {
        if (movie.isWatched==true) {
            if (movie.isHit==true) {
                result="I have watched the movie "+movie.name+" and it is a hit"
            }
            else{
                result="I have watched the movie "+movie.name+" and it is not a hit"
            }
        }
        else{
            if (movie.isHit!=true) {
                result="I have not watched the movie "+movie.name+" and it is not a hit"
            }
            
        }
        console.log(result)
    });
}

var movies=[{name:"KGF",isWatched:true,isHit:true},{name:"War",isWatched:true,isHit:false},
{name:"Joker",isWatched:false,isHit:false}]
bookMyShow(movies)