import logo from "./logo.svg";
import "./App.css";

function App() {
  const title='welcome to a new blog'
  const likes=50
  const person={name:'nawaf',age:25}
  const link='www.google.com'
  return (
    <div className="App">
      <div className="content">
        <h1>
          {title}
        </h1>
        <p>liked {50} times</p>
        <p>{person.name}</p>
        <p>{10}</p>
        <p>{'hello nawaf'}</p>
        <p>{[1,2,3,4,5]}</p>
        <a  href={link}>google</a>
        <p>{Math.random()*4}</p>
      </div>
    </div>
  );
}
//fffffffff
export default App;
