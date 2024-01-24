import logo from './logo.svg';
import './App.css';
import Toggler from './Toggler';
import SimpleFormHook from './SimpleFormHook';
import SimpleInputStateHook from './SimpleInputStateHook';
import SW_movies from './SW_movies';
function App() {
  return (
      <div className="App">
          {/* <Toggler />
          <SimpleFormHook />
          <SimpleInputStateHook /> */}
          <SW_movies />
      </div>
  );
}

export default App;
