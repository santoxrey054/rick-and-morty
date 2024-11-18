import './assets/styles/App.css'
import { CharacterList } from "./components/CharacterList";

export function App() {
  return (
    <div className="content">
      <div className="head">
        <h1>Api de rick y morty</h1>
        <img src="src\assets\834_400x400.png" alt="" />
      </div>

      <CharacterList />
    </div>
  );
}


