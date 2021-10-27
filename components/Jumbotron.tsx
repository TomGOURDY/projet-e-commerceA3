import Image from "next/image"
import iphone from "../public/iphone.png"
import styles from "../styles/Jumbotron.module.scss"

const Jumbotron = () => {
    return (
        <div>
            <div className={styles.backgroundimage}>
                <Image src={iphone} alt="iphone"/>
            </div>
            <div className={styles.promotionalmessage}>
                <h3>SHOP</h3>
                <h2>iPhone</h2>
                <p>
                    An <strong>exclusive drop</strong> available.
                </p>
            </div>
        </div>
    )
}

export default Jumbotron