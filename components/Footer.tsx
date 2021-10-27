import styles from "../styles/Footer.module.scss"
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Next JS app | by @TomGOURDY</p>
            <div className={styles.footer__left}>
                <a href="https://github.com/TomGOURDY/projet-e-commerceA3">by @TomGOURDY</a>
            </div>
        </footer>
    )
}