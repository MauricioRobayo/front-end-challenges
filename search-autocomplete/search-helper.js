const searchData = (searchText) => {
  if (searchText === '') {
    return new Promise((resolve) => resolve([]))
  }
  const regex = new RegExp(searchText, "gi");
  return new Promise((resolve) =>
    resolve(topMovies.filter((m) => m.title.match(regex)))
  );
};
const topMovies = [
  { title: "The Shawshank Redemption (1994)", rating: 9.2 },
  { title: "The Godfather (1972)", rating: 9.2 },
  { title: "The Godfather: Part II (1974)", rating: 9.0 },
  { title: "The Dark Knight (2008)", rating: 9.0 },
  { title: "12 Angry Men (1957)", rating: 8.9 },
  { title: "Schindler's List (1993)", rating: 8.9 },
  {
    title: "The Lord of the Rings: The Return of the King (2003)",
    rating: 8.9,
  },
  { title: "Pulp Fiction (1994)", rating: 8.9 },
  { title: "The Good, the Bad and the Ugly (1966)", rating: 8.8 },
  { title: "Fight Club (1999)", rating: 8.8 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring (2001)",
    rating: 8.8,
  },
  { title: "Forrest Gump (1994)", rating: 8.7 },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back (1980)",
    rating: 8.7,
  },
  { title: "Inception (2010)", rating: 8.7 },
  { title: "The Lord of the Rings: The Two Towers (2002)", rating: 8.7 },
  { title: "One Flew Over the Cuckoo's Nest (1975)", rating: 8.7 },
  { title: "Goodfellas (1990)", rating: 8.7 },
  { title: "The Matrix (1999)", rating: 8.6 },
  { title: "Seven Samurai (1954)", rating: 8.6 },
  { title: "City of God (2002)", rating: 8.6 },
  { title: "Star Wars: Episode IV - A New Hope (1977)", rating: 8.6 },
  { title: "Se7en (1995)", rating: 8.6 },
  { title: "The Silence of the Lambs (1991)", rating: 8.6 },
  { title: "It's a Wonderful Life (1946)", rating: 8.6 },
  { title: "Life Is Beautiful (1997)", rating: 8.6 },
  { title: "The Usual Suspects (1995)", rating: 8.5 },
  { title: "Spirited Away (2001)", rating: 8.5 },
  { title: "Saving Private Ryan (1998)", rating: 8.5 },
  { title: "Léon: The Professional (1994)", rating: 8.5 },
  { title: "Avengers: Infinity War (2018)", rating: 8.5 },
  { title: "The Green Mile (1999)", rating: 8.5 },
  { title: "Interstellar (2014)", rating: 8.5 },
  { title: "American History X (1998)", rating: 8.5 },
  { title: "Psycho (1960)", rating: 8.5 },
  { title: "City Lights (1931)", rating: 8.5 },
  { title: "Once Upon a Time in the West (1968)", rating: 8.5 },
  { title: "Casablanca (1942)", rating: 8.5 },
  { title: "Modern Times (1936)", rating: 8.5 },
  { title: "The Intouchables (2011)", rating: 8.5 },
  { title: "The Pianist (2002)", rating: 8.5 },
  { title: "The Departed (2006)", rating: 8.5 },
  { title: "Terminator 2 (1991)", rating: 8.5 },
  { title: "Back to the Future (1985)", rating: 8.5 },
  { title: "Rear Window (1954)", rating: 8.5 },
  { title: "Raiders of the Lost Ark (1981)", rating: 8.5 },
  { title: "Whiplash (2014)", rating: 8.5 },
  { title: "Gladiator (2000)", rating: 8.5 },
  { title: "The Lion King (1994)", rating: 8.5 },
  { title: "The Prestige (2006)", rating: 8.5 },
  { title: "Memento (2000)", rating: 8.4 },
];
