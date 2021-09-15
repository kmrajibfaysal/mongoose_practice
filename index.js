const mongoose = require('mongoose');

async function main() {
    console.time('Execution Time');
    await mongoose.connect('mongodb://localhost:27017/movieApp');
    console.timeEnd('Execution Time');
}
main().catch((err) => console.log(err));

// const Movie = mongoose.model('Movie', { name: String });
// const MissionImpossible = new Movie({ name: 'Mission Impossible' });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,
});

const Movie = mongoose.model('Movie', movieSchema);
// const mi = new Movie({
//     title: 'Mission Impossible',
//     year: 2020,
//     score: 9.2,
//     rating: 'R',
// });
// mi.save();

Movie.insertMany([
    {
        title: 'Amelie',
        year: 2001,
        score: 8.3,
        rating: 'R',
    },
    {
        title: 'Alien',
        year: 1979,
        score: 8.1,
        rating: 'R',
    },
    {
        title: 'The Iron Giant',
        year: 1999,
        score: 7.5,
        rating: 'PG',
    },
    {
        title: 'Stand By Me',
        year: 1986,
        score: 8.6,
        rating: 'R',
    },
    {
        title: 'Moonrise Kingdom',
        year: 2012,
        score: 7.3,
        rating: 'PG-13',
    },
]).then((data) => {
    console.log('IT WORKED!');
    console.log(data);
});
