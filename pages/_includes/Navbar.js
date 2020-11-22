import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

    const toggleActive = (event) => {
        document.getElementById('js-menu').classList.toggle(styles.active);
    }

    return (
        <div className={styles.navbar} >
            <span className={styles.navbarToggle} id="js-navbar-toggle" onClick={toggleActive}>
                <FontAwesomeIcon icon={faBars} />
            </span>
            <Link href="/" >
                <a className={styles.logo}>
                    MP TechThings
                </a>
            </Link>
            <ul className={styles.menuContainer} id="js-menu">
                <li className={styles.menuItem}>
                    <Link href="/" >
                        <a className={styles.menuLink}>Home</a>
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/spark" >
                        <a className={styles.menuLink}>Apache Spark</a>
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/golang" >
                        <a className={styles.menuLink}>Go Language</a>
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/python" >
                        <a className={styles.menuLink}>Python</a>
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/profilio" >
                        <a className={styles.menuLink}>Profilio</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}