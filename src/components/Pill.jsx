import React from 'react';
import PropTypes from 'prop-types';

const Pill = ({ text, className = '' }) => {
  return (
    <span
      className={`hover:cursor-default px-4 py-2 bg-gradient-to-r from-sky-100/70 hover:from-sky-50/20 to-blue-200/70 dark:from-blue-950 hover:dark:from-blue-950 hover:dark:to-sky-900 dark:to-sky-900 text-blue-800 dark:text-sky-50 border border-sm border-blue-300 dark:border-sky-700 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-200 transition-transform duration-80 hover:-translate-y-2 hover:scale-110 ${className}`}
    >
      {text}
    </span>
  );
};

Pill.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Pill;
