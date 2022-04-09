import styles from "./footer.module.css";

const FOOTER_ICONS = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/adsgames",
    className: styles.footerFacebook,
  },
  {
    title: "Twitter",
    link: "https://twitter.com/adsgames",
    className: styles.footerTwitter,
  },
  {
    title: "Reddit",
    link: "https://old.reddit.com/r/AdsGames",
    className: styles.footerReddit,
  },
  {
    title: "Github",
    link: "https://www.github.com/adsgames",
    className: styles.footerGithub,
  },
] as const;

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <p className={styles.footerText}>
      Copyright &#169; {new Date().getFullYear()} A.D.S. Games
    </p>
    <div className={styles.footerIcons}>
      {FOOTER_ICONS.map(({ title, link, className }) => (
        <a href={link} key={title} rel="noreferrer" target="_blank">
          <div className={className} title={title} />
        </a>
      ))}
    </div>
  </footer>
);
