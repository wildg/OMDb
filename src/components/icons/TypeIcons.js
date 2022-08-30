import PropTypes from 'prop-types';

function TypeIcons({type}) {
  return <img src={`./icons/${type}.png`} alt={type} />
}

TypeIcons.propTypes = {
  type: PropTypes.oneOf(['movie', 'series', 'episode', 'game']),
};

export default TypeIcons;
