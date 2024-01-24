import logo from './logo.svg';
import './App.css';
import Timer from './Timer.js'
import ZenQuote from './ZenQuote';
import GitHubUserInfo from './GitHubUserInfo';

function App() {
  return (
    <div className="App">
        <GitHubUserInfo username="Haaris01" />
        <GitHubUserInfo username="facebook" />
    </div>
  );
}

export default App;
