import React from 'react';
import statusImage from '../Assets/image404.jpg';
import { Link } from 'react-router-dom';

const Page404 = () => {
  const styles = {
    display: 'block',
    maxWidth: '40rem',
    margin: '1rem auto',
    textAlign: 'center',
  };

  return (
    <section className="container">
      <img style={styles} src={statusImage} alt="404 Dog Status" />
      <div style={styles}>
        Page Not Found - <Link to="/">Back to Home</Link>
      </div>
    </section>
  );
};

export default Page404;
