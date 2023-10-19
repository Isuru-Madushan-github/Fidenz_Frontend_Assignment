import "./index.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from "./Components/Header";
import Dashboard from "./Routes/Dashboard/Dashboard";
import ViewCity from "./Routes/View weather/ViewCity";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>

      <div className="App">
        <div className="main-container">

          <div className="center-container">


            <Header />

            <Routes>
              <Route path="/" element={<Dashboard title={'Dashboard - Fidenz Technology'}/>}></Route>
              <Route path="/view/:id" element={<ViewCity title={'City - Fidenz Technology'}/>}></Route>
            </Routes>

          </div>
          
          <Footer/>

        </div>
      </div>

    </Router>
  );
}

export default App;
