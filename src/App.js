import './App.css';
import SignIn from "./Companents/SingIn/SignIn";
import Createacc from "./Companents/Createacc/Createacc";
import Navbar from "./Companents/Navbar/Navbar";
import Myproduct from "./Companents/Myproduct/Myproduct";
import Header from "./Companents/Header/Header";


function App() {
  return (

      <div className="App">
        <div className="wrapper">
        <Navbar/>
        <div className="container">
          <Header title={'Personal Cabinet'} description={'Information about your account'}/>
          <Myproduct/>
          </div>
        </div>
      </div>

  );
}

export default App;
