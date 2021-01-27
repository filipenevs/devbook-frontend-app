import React from 'react';
import styles from './Home.module.css';
import Title from './Title';

const Home = () => {
  return (
    <section className="container translateAnimation">
      <div className={styles.titleDiv}>
        <Title>Publications</Title>
      </div>
    </section>
  );
};

export default Home;
