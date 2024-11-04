import React from 'react';

const GenreFilter = ({ selectedGenre, setSelectedGenre }) => {
  const genres = ['Fiction', 'Dystopian', 'Classic', 'All'];

  const handleGenreChange = (e) => {
    // TODO: Determine the genre based on selection
    const genre = e.target.value === 'All' ? '' : e.target.value;
    
    // TODO: Call setSelectedGenre with the selected genre
    setSelectedGenre(genre);
  };

  return (
    <div className="genre-filter">
      {/* TODO: Create a select dropdown for genres */}
      <select value={selectedGenre} onChange={handleGenreChange}>
        <option value="">All Genres</option>
        {/* TODO: Map through genres array to create options */}
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;

