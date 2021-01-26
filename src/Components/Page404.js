import React from 'react';
import styles from './Page404.module.css';
import statusImage from '../Assets/image404.jpg';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <section className={`${styles.container} container`}>
      <img src={statusImage} alt="404 Dog Status" />
      <div>
        Page Not Found - <Link to="/">Back to Home</Link>
      </div>
    </section>
  );
};

export default Page404;
