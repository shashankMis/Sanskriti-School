import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Error from './Components/Error';
import Contact from './Components/Contact';
import Home from './Components/Home';
import AboutUS from './Components/About US';
import Admission from './Components/Admission';
import Facilities from './Components/Facilities';
import FeeStructure from './Components/FeeStructure';
import Footer from './Components/Footer';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import Payment from './Components/Payment';
import AccountSuccess from './Components/AccountSuccess';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path="/"  element={<Home/>}></Route>
          <Route path="/about"  element={<AboutUS/>}></Route>
          <Route path="/contact"  element={<Contact/>}></Route> 
          <Route path="/admission"  element={<Admission/>}></Route> 
          <Route path="/facilities"  element={<Facilities />}></Route> 
          <Route path="/feeStructure"  element={<FeeStructure />}></Route>
          <Route path="/login"  element={<Login />}></Route>
          <Route path="/account"  element={<CreateAccount />}></Route>
          <Route path="/payment"  element={<Payment/>}></Route>
          <Route path="/success"  element={<AccountSuccess />}></Route>
          <Route path="/login2"  element={<Login />}></Route>
          <Route path="*"  element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
