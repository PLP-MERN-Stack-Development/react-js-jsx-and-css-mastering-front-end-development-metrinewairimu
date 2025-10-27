import React from 'react';

const Card = ({ 
  children, 
  className = '',
  padding = 'medium',
  hover = false 
}) => {
  const paddingClasses = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };

  const classes = `
    bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700
    ${paddingClasses[padding]}
    ${hover ? 'hover:shadow-lg transition-shadow duration-200' : ''}
    ${className}
  `;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;