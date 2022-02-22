import React from 'react'
import styles from './Hero.module.scss'
const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_title}>
        <h1>Github Explorer</h1>
        <p>The only Github searcher you'll ever need!</p>
      </div>
      <div className={styles.hero_content}>
        <ul>
          <li>
            <i className="fa-brands fa-github"></i>
            <p>Search for Github Profiles!</p>
          </li>
          <li>
            <i className="fa-solid fa-shield-blank"></i>
            <p>Secure and Fast Searching Process!</p>
          </li>
          <li>
            <i className="fa-solid fa-money-bill-1-wave"></i>
            <p>Completely Free and made for Developers!</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Hero
