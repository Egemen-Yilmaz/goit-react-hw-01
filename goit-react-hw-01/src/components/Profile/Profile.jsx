import styles from './Profile.module.css';

export default function Profile({ profile }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={profile.avatar}
          alt={profile.username}
          className={styles.avatar}
        />
        <p className={styles.name}>{profile.username}</p>
        <p className={styles.tag}>@{profile.tag}</p>
        <p className={styles.location}>{profile.location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{profile.stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{profile.stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{profile.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
