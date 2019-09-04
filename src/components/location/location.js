import React from 'react';
import PropTypes from 'prop-types';

export default function Location({ name, temp }) {
  return (
    <p>
      {name} - {temp}
    </p>
  );
}

Location.propTypes = {
  name: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
};
