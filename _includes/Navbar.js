import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul className={styles.menuContainer}>
                <li className={styles.menuItem}>
                    <Link href="/" >
                        <a className={styles.menuLink}>
                            <strong>MP TechThings</strong>
                        </a>
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/" >
                        <a className={styles.menuLink}>Home</a>
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/golang" >
                        <a className={styles.menuLink}>Go Language</a>
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