
import "./App.css"
import UserProfile from "./components/reducer";
import { RhsForm } from "./components/rhsForm";
import Statechange from "./components/statechange";
import DataFetcher from "./components/useeffectex";


function App() {
  return (
    <div>
      {/* <RhsForm />
      <Statechange /> */}
      <UserProfile />
      <DataFetcher />
    </div>
  );
}

export default App;