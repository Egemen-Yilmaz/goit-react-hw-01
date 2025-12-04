import userData from "./userData.json";
import Profile from "./components/Profile/Profile";

import FriendListItem from "./components/FriendListItem/FriendListItem";
import friendsData from "./friends.json";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactionsData from "./transaction.json";

export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendListItem friends={friendsData}/>

      <TransactionHistory transactions={transactionsData}/>
    </div>
  );
};
