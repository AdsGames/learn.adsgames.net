import styles from "./nav.module.css";

const NAV_ITEMS = [
  {
    name: "Home",
    href: "https://adsgames.net",
    style: styles.menuHome,
  },
  {
    name: "Games",
    href: "https://adsgames.net/games",
    style: styles.menuGames,
  },
  {
    name: "Contact",
    href: "https://adsgames.net/contact",
    style: styles.menuContact,
  },
  {
    name: "Assets",
    href: "https://assets.adsgames.net",
    style: styles.menuAssets,
  },
  {
    name: "Learn",
    href: "https://learn.adsgames.net",
    style: styles.menuLearn,
  },
  {
    name: "Members",
    href: "https://adsgames.net/members",
    style: styles.menuMembers,
  },
  {
    name: "Links",
    href: "https://adsgames.net/links",
    style: styles.menuLinks,
  },
  {
    name: "About",
    href: "https://adsgames.net/about",
    style: styles.menuAbout,
  },
];

export const Nav: React.FC = () => (
  <nav>
    <div className={styles.navContainer}>
      {NAV_ITEMS.map(({ name, href, style }) => (
        <a href={href} key={name} title={name}>
          <div className={`${style} ${styles.navIcon}`} title={name} />
          <p>{name}</p>
        </a>
      ))}
    </div>
  </nav>
);
