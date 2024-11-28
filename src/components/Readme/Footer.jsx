import { Footer } from "flowbite-react";
import { BsGithub, BsLinkedin, BsEnvelope, BsTelegram } from "react-icons/bs";

import styles from "./Footer.module.css"; // Import CSS module

function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.icons}>
          <Footer.Icon
            href="https://www.linkedin.com/in/ahmed-mo-soliman/"
            icon={BsLinkedin}
          />
          <Footer.Icon
            href="https://github.com/Ahmed-Soliman33"
            icon={BsGithub}
          />
          <Footer.Icon
            href="mailto:ahmedmohamedmahmoud2012005@gmail.com"
            icon={BsEnvelope}
          />
          <Footer.Icon href="https://t.me/AhmedElfares33" icon={BsTelegram} />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;

/* Footer.module.css */
