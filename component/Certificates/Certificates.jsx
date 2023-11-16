import styles from "./Certificates.module.scss";
import Image from "next/image";
import Link from "next/link";

const Certificates = () => {
  return (
    <div className={styles.certificates}>
      <div className={styles.certificate}>
      <h2>Harvard University </h2>
        <div className={styles.line}>
          <div className={styles.containerImg}>
            <h2>Harvard </h2>
            <p>Currently cursing the following:
            CS50's Computer Science <br/>
            CS50's Web Programming <br/> 
            CS50's Programmin with Python<br/>
            CS50's Artificial Intelligence with Python<br/>  
              </p>
            {/*   <Image
                className={styles.icon}
                src={"/white-logos/react-blanco.svg"}
                alt={"certificate"}
                width={250}
                height={250}
              />*/}
            
          </div>
        </div>
      </div>

      <div className={styles.certificate}>
        <h2>Full Stack Bootcamp</h2>
        <Link href="https://www.credential.net/aa453bd6-baf1-48e6-b2a3-06f3b2b70028#gs.7rlgw8">
          <div className={styles.line}>
            <div className={styles.containerImg}>
              <h2>Aulab</h2>
              <p>
                400 Hours of lectures and live coding.
                Technologies include JavaScript, PHP, CSS, HTML.Frameworks
                include React, Next.js, Laravel, Bootstrap.Database management:
                MySQL
              </p>
                         {/*   <Image
                className={styles.icon}
                src={"/white-logos/react-blanco.svg"}
                alt={"certificate"}
                width={250}
                height={250}
              />*/}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Certificates;
