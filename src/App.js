
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Home/Home/Navbar';
import Home from './components/Home/Home/Home';
import CakeDeatails from './components/Pages/CakeDetails/CakeDeatails';
import DonutDetails from './components/Pages/DonutDetails/DonutDetails';
import MuffinDetails from './components/Pages/Muffin/MuffinDetails';
import PieDetails from './components/Pages/Pie/PieDetails';
import WaffleDetails from './components/Pages/Waffle/WaffleDetails';

import CupCakes from './components/Pages/cupcake/CupCakes';
import OtherServices from './components/OtherSevices/OtherServices';
import Login from './Login/PrivateRoute/Login';
import Registration from './components/Pages/Registration/Registration';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import ParchesPage from './components/Pages/Parches/ParchesPage';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Explore from './components/Explore/Explore';
import AboutMe from './components/Pages/AboutMe/AboutMe';
import Design from './components/Pages/Design/Design';
import Payment from './components/Pages/Payment/Payment';
import AddProduct from './components/Pages/AddProduct/AddProduct';
import FAQ from './components/Pages/FAQ/FAQ';




function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <AboutMe></AboutMe>
            </Route>
            <Route path="/faq">
              <FAQ></FAQ>
            </Route>
            <PrivateRoute path="/details/purchase/:id">
              <ParchesPage></ParchesPage>
            </PrivateRoute>
            <PrivateRoute path="/details/cake">
              <CakeDeatails></CakeDeatails>
            </PrivateRoute>
            <PrivateRoute path="/details/donut">
              <DonutDetails></DonutDetails>
            </PrivateRoute>
            <PrivateRoute path="/details/muffin">
              <MuffinDetails></MuffinDetails>
            </PrivateRoute>
            <PrivateRoute path="/details/pie">
              <PieDetails></PieDetails>
            </PrivateRoute>
            <PrivateRoute path="/details/waffle">
              <WaffleDetails></WaffleDetails>
            </PrivateRoute>
            <PrivateRoute path="/details/cupcake">
              <CupCakes></CupCakes>
            </PrivateRoute>
            <PrivateRoute path="/services">
              <OtherServices></OtherServices>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/explore">
              <Explore></Explore>
            </PrivateRoute>
            <PrivateRoute path="/design">
              <Design></Design>
            </PrivateRoute>
            <PrivateRoute path="/addproduct">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/registration">
              <Registration></Registration>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>

  );
}

export default App;
