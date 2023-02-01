import React from 'react';
import styles from '@/styles/Home.module.css';
import { Container } from 'react-bootstrap';


function MainHomePage() {
  return (
    <Container className={styles.Home}>
      <h1>Home</h1>
    </Container>
  );
}

export default MainHomePage;