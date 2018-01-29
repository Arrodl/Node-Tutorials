// Importing a module

// Look in the same directory for a file called movies
var movies = require('./movies');

movies.printAvatar();
console.log(movies.favourite);

//Does not work
//movies.pringChappie();