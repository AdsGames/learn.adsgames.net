import styles from "./footer.module.css";

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <p className={styles.footerText}>
      Copyright &#169; {new Date().getFullYear()} A.D.S. Games
      <br />
      <div className={styles.footerIcons}>
        <ul id="footer-icon-links">
          <a
            href="https://facebook.com/adsgames"
            rel="noreferrer"
            target="_blank"
          >
            <li className={styles.footerFacebook} title="Facebook" />
          </a>
          <a
            href="https://twitter.com/adsGames"
            rel="noreferrer"
            target="_blank"
          >
            <li className={styles.footerTwitter} title="Twitter" />
          </a>
          <a
            href="https://reddit.com/r/adsgames"
            rel="noreferrer"
            target="_blank"
          >
            <li className={styles.footerReddit} title="Reddit" />
          </a>
          <a
            href="https://plus.google.com/+AdsgamesNet"
            rel="noreferrer"
            target="_blank"
          >
            <li className={styles.footerGooglePlus} title="Google Plus" />
          </a>
          <a
            href="https://adsgames.net/xml/rssFeed.xml"
            rel="noreferrer"
            target="_blank"
          >
            <li className={styles.footerRss} title="RSS" />
          </a>
        </ul>
      </div>
    </p>
  </footer>
);
