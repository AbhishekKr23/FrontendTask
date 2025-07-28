import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import UserCard from './components/UserCard';

function App() {
  return (
    <>
      <Navbar />
      <SignUp />
      <UserCard name="Abhishek Kumar" email="abhishek@example.com" />
    </>
  );
}

export default App;
