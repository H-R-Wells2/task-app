import './App.css';
import Navbar from './components/Navbar';
import UserList from './components/UserList';


function App() {
  return (
   <div className='bg-gray-200 min-h-screen '>
    <Navbar/>
    <UserList/>
   </div>
  );
}

export default App;
