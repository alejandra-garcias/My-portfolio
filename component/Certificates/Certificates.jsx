import styles from "./Certificates.module.scss"
import Image from "next/image";
import Link from"next/link";

const Certificates = () => {
    return (
        <div className={styles.certificates}>

            <div className={styles.certificate}>
                <h2>Harvard</h2>
                <div className={styles.line}>
                    <div className={styles.containerImg}>
                        <h2>Harvard </h2>
                        <Image
                            className={styles.icon}
                            src={'/white-logos/react-blanco.svg'}
                            alt={"certificate"}
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.certificate}>
                <h2>Aulab</h2>
                <div className={styles.line}>
                <Link href="https://www.credential.net/aa453bd6-baf1-48e6-b2a3-06f3b2b70028#gs.7rlgw8">
                    <div className={styles.containerImg}>
                        <h2>Aulab</h2>
                        <Image
                            className={styles.icon}
                            src={'/white-logos/react-blanco.svg'}
                            alt={"certificate"}
                            width={250}
                            height={250}
                        />
                   
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Certificates