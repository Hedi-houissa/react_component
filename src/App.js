import logo from "./logo.svg";
import "./App.css";
import Photo from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Adress from "./Component/Profile/Adress";

function App() {
  return (
    <div className="App">
      <div className="photo">
        <Photo />
      </div>
      <div className="name">
        <FullName />
        <Adress />
      </div>
    </div>
  );
}

export default App;
