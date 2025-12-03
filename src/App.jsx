import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import './App.css';

// Sample data
const userProfile = {
  username: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://cdn-icons-png.flaticon.com/512/3556/3556098.png',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const statsData = [
  { id: '1', label: '.docx', percentage: 22 },
  { id: '2', label: '.pdf', percentage: 4 },
  { id: '3', label: '.mp3', percentage: 17 },
  { id: '4', label: '.psd', percentage: 47 },
  { id: '5', label: '.pdf', percentage: 10 },
];

const friendsData = [
  {
    id: 1,
    name: 'Hanna Grel',
    isOnline: true,
    avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  },
  {
    id: 2,
    name: 'Libby Rosser',
    isOnline: false,
    avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077009.png',
  },
  {
    id: 3,
    name: 'Billievery Satisfies',
    isOnline: true,
    avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077106.png',
  },
  {
    id: 4,
    name: 'Annie Lounders',
    isOnline: false,
    avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png',
  },
];

const transactionsData = [
  { id: '1', type: 'Invoice', amount: '125.00', currency: 'USD' },
  { id: '2', type: 'Withdrawal', amount: '85.00', currency: 'USD' },
  { id: '3', type: 'Deposit', amount: '360.00', currency: 'USD' },
  { id: '4', type: 'Withdrawal', amount: '454.00', currency: 'USD' },
  { id: '5', type: 'Invoice', amount: '106.00', currency: 'USD' },
  { id: '6', type: 'Deposit', amount: '72.00', currency: 'USD' },
];

function App() {
  return (
    <div className="container">
      <h1>React Components</h1>
      <Profile profile={userProfile} />
      <Statistics title="Upload Stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactionsData} />
    </div>
  );
}

export default App;
