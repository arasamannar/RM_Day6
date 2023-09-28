class Movie {
    constructor (title, studio, rating= "PG") //b)
    {
        this.title= title;
        this.studio=studio;
        this.rating=rating;
    }
    static getPG(films)
    {
        const pgMovies = [];
        for (const movie of films){
        if(movie.rating === "PG")
        {
            pgMovies.push(movie);
        }
    }
        return pgMovies;
    }
}
var films = [new Movie("Avatar", "20th Century Fox", "PG-13"), 
new Movie("Momento", "Entertainment One", "R"), 
new Movie("Surf's Up", "Sony", "PG"), 
new Movie("X-Men", "Marvel and 20th Century Fox", "PG-13"),
new Movie("Dianousar", "Walt Disney Pictures", "PG")];
var film1 = new Movie ("Casino Royale", "Eon Productions", "PG13"); //a), d)
result = Movie.getPG(films); //c)
console.log(result);
console.log(film1.title);
//for b) default value of rating we can assign the value in the class template itself before calling the constructor.
// for a) question to call the movie class with all properties.
//for c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
//for d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

/* Output:

  Movie { title: "Surf's Up", studio: 'Sony', rating: 'PG' },
  Movie {
    title: 'Dianousar',
    studio: 'Walt Disney Pictures',
    rating: 'PG'
  }
]
Casino Royale
*/