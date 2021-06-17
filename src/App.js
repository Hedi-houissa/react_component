import './App.css';
import Navbar from './component/navbar';
import ListofUsers from './component/listusers';

function App() {
  return (
    <div className="App">

      {/* Navbar  */}
      <Navbar />


      {/* list of users  */}
      <ListofUsers />
    </div>
  );
}

export default App;
