import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.paragraph}>
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link to="/books" style={styles.link}>Go back home</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '5rem',
  },
  heading: {
    fontSize: '3rem',
    color: '#ff4d4f',
  },
  paragraph: {
    fontSize: '1.2rem',
  },
  link: {
    marginTop: '1rem',
    display: 'inline-block',
    fontSize: '1rem',
    textDecoration: 'none',
    color: '#1890ff',
  },
};

export default NotFound;
