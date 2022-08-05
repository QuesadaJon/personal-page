import React, { Component } from 'react';
import TopDrawer from '../components/drawer/TopDrawer';
import styles from './SplashPage.css';

export default class SplashPage extends Component {
  render() {
    return (
      <main className={styles.splashBody}>
        <TopDrawer />
        <h1 className={styles.header}>This is the PLACE!</h1>
        <h3 className={styles.footer}>This is a footer</h3>
        <div className={styles.bubble}>
        </div>
      </main>
    );
  }
}
