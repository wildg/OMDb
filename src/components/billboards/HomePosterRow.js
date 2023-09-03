import { motion } from 'framer-motion';

// List of poster sources to be displayed
const posterSrc = [
  [
    'https://m.media-amazon.com/images/M/MV5BMTMxOGM0NzItM2E0OS00YWYzLWEzNzUtODUzZTBjM2I4MTZkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg',
    'https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
    'https://m.media-amazon.com/images/M/MV5BN2I1ZmVlZmItYmQ4My00ZWQxLTljYjgtMWU3MjRiNjFkZWZiXkEyXkFqcGdeQXVyNjYyMjE4NDY@._V1_SX300.jpg',
    'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg',
    'https://m.media-amazon.com/images/M/MV5BMjkwZjcwMGQtNDAzOC00YjJiLThiYTgtNWU3ZjRiZmY2YzEzXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg',
    'https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg',
  ],
  [
    'https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg',
    'https://m.media-amazon.com/images/M/MV5BNGI3ZTgwMzItMTA0ZC00NTFhLTkzNTQtMDBkMDc2NmVmY2NkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg',
    'https://m.media-amazon.com/images/M/MV5BZDE0ODVlYjktNjJiMC00ODk4LWIwNTktMWRhZmZiOGFhYmUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
    'https://m.media-amazon.com/images/M/MV5BZDBkZjRiNGMtZGU2My00ODdkLWI0MGYtNGU4MmJjN2MzOTkxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
    'https://m.media-amazon.com/images/M/MV5BZTFmZWUwZmEtYzc4Ni00N2FmLTk1MmMtZmMyODYwZTNkY2EwXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg',
    'https://m.media-amazon.com/images/M/MV5BNGY0NDIxZDYtMWMzZS00OGQ3LTgwOGEtMWQ5ZmQxM2EwY2NjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
  ],
  [
    'https://m.media-amazon.com/images/M/MV5BMDBlMDYxMDktOTUxMS00MjcxLWE2YjQtNjNhMjNmN2Y3ZDA1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg',
    'https://m.media-amazon.com/images/M/MV5BMGIyNTI3NWItNTJkOS00MGYyLWE4NjgtZDhjMWQ4Y2JkZTU5XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg',
    'https://m.media-amazon.com/images/M/MV5BOWQwOTA1ZDQtNzk3Yi00ZmVmLWFiZGYtNjdjNThiYjJhNzRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg',
    'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg',
    'https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
  ],
];

function HomePosterRow() {
  const oddRowAnim = {
    init: { opacity: 1 },
    after: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const evenRowAnim = {
    init: { opacity: 1 },
    after: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  }

  const posterAnim = {
    init: { opacity: 0 },
    after: {
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  const posterComponent = posterSrc.map((row, rowIndex) => {
    const posters = row.map((ref) => {
      return <motion.img
        variants={posterAnim}
        src={ref}
        alt="Popular poster"
        key={ref}/>
    });

    let classes = 'poster-row';
    let anim = evenRowAnim;

    if (rowIndex % 2 === 1) {
      classes += ' odd';
      anim = oddRowAnim
    }

    return (
      <motion.div
        className={classes}
        variants={anim}
        initial="init"
        animate="after"
        key={rowIndex}>
        { posters }
      </motion.div>
    );
  });

  return (
    <div className='poster-row-container'>
      {posterComponent}
    </div>
  );
}

export default HomePosterRow;