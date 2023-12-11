import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import User from "./component/User";
import Search from "./component/Search"

function App() {
  return (
    <div className="App">
      <h1 className='my-5 fw-bold'>Get User's <hr></hr></h1>
      <section>
        {/* <Search/> */}
        <User/>
      </section>
    </div>
  );
}

export default App;
