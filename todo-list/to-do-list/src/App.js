import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import UserList from './Components/TaskList';
function App() {
  return (
    <div className="App">
      <Header />
      <UserList />
      <Footer />
    </div>
  );
}

export default App;
