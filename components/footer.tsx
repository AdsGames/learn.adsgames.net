import styles from "./footer.module.css";

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <p className={styles.footerText}>
      Copyright &#169; {new Date().getFullYear()} A.D.S. Games
    </p>
    <div className={styles.footerIcons}>
      <a href="https://facebook.com/adsgames" rel="noreferrer" target="_blank">
        <div className={styles.footerFacebook} title="Facebook" />
      </a>
      <a href="https://twitter.com/adsGames" rel="noreferrer" target="_blank">
        <div className={styles.footerTwitter} title="Twitter" />
      </a>
      <a href="https://reddit.com/r/adsgames" rel="noreferrer" target="_blank">
        <div className={styles.footerReddit} title="Reddit" />
      </a>
      <a
        href="https://plus.google.com/+AdsgamesNet"
        rel="noreferrer"
        target="_blank"
      >
        <div className={styles.footerGooglePlus} title="Google Plus" />
      </a>
      <a
        href="https://adsgames.net/xml/rssFeed.xml"
        rel="noreferrer"
        target="_blank"
      >
        <div className={styles.footerRss} title="RSS" />
      </a>
    </div>
  </footer>
);
