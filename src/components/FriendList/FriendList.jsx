import styles from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles.item}>
          <span
            className={styles.status}
            style={{ backgroundColor: friend.isOnline ? '#31af0d' : '#ccc' }}
          ></span>
          <img
            src={friend.avatar}
            alt={friend.name}
            className={styles.avatar}
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
