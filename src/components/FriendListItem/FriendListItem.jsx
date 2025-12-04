import css from './FriendListItem.module.css';
import defaultFriends from '../../friends.json';

function Friend({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <img src={avatar} alt={name} className={css.avatar} />
      <p className={css.name}>{name}</p>
      <p className={css.statusText + ' ' + (isOnline ? css.online : css.offline)}>
        {isOnline ? 'online' : 'offline'}
      </p>
    </li>
  );
}

export default function FriendListItem({ friends = defaultFriends }) {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <Friend key={friend.id} {...friend} />
      ))}
    </ul>
  );
}
