import Sidebar from "./Sidebar";
import Chat from "./Chat";

// css file
import "./App.css";

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
