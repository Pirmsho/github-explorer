import React from 'react'

import styles from './Header.module.scss'
const Header = () => {
  return (
    <header className={styles.main_header}>
      <nav>
        {/* Layout specifically for animation purposes, see ./Header.module.scss */}
        <ul>
          <li>G</li>
          <li>i</li>
          <li>t</li>
          <li>h</li>
          <li>u</li>
          <li>b</li>
          <li>-</li>
          <li>E</li>
          <li>x</li>
          <li>p</li>
          <li>l</li>
          <li>o</li>
          <li>r</li>
          <li>e</li>
          <li>r</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
