import './App.css';
import CakeContainer from "./components/CakeContainer";
import {Provider} from "react-redux";
import store from "./store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceContainer from "./components/HooksIceContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <CakeContainer/>
              <HooksCakeContainer />
              <HooksIceContainer />
              <NewCakeContainer />
              <UserContainer />
          </div>
      </Provider>
  );
}

export default App;
