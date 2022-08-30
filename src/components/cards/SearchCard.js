import TypeIcons from '../icons/TypeIcons';
import { motion } from 'framer-motion';

import { Grid } from '@mui/material';

function SearchCard(values) {
  // Get the information from values
  const { Title, Year, Type, imdbID } = values;

  // Determine if poster was not provided
  const Poster = values.Poster === 'N/A' ? './images/MissingPoster.png' : values.Poster;

  /**
   * Handle button click on search result
   * @param {object} event The event that is triggered
   */
  const buttonClick = (event) => {
    event.preventDefault();
    alert('Done demo!');
  }

  // Card animation
  const cardAnim = {
    init: { opacity: 0, y: '5%'},
    after: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  }

  // Viewport information
  const viewport = { once: true, margin: '-40px' };

  return (
    <Grid item xs={12} sm={12} md={6} xl={4} key={imdbID}>
      <motion.div 
        className="search-card"
        variants={cardAnim} 
        initial="init" 
        whileInView="after"
        viewport={viewport}
      >
        <img className="poster" src={Poster} alt={`Poster for ${Title}`} />
        <div className="search-info">
          <h3 className="title">{Title}</h3>
          <div className="info">
            <TypeIcons type={Type} />
            <h4>{Year}</h4>
          </div>
          <button onClick={buttonClick}>
            <h4>View</h4>
          </button>
        </div>
      </motion.div>
    </Grid>
  );
}

export default SearchCard;
