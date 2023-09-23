import "./App.css";
import TodoApp from "./component/todo/todo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "./store/ThemeContext";

// Redux
import { createStore } from 'redux'
import { Provider } from "react-redux";
import CouterApp from "./component/counter/couterapp";
import { allReducers } from "./component/counter/reducers/index";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CouterAppV2, { CouterAppV3, CouterAppV4, CouterAppV5, CouterAppV6 } from "./component/counter-v2/CouterAppV2";
import Login from "./component/react-form/Login";
import Register from "./component/react-form/Register";

const store = createStore( allReducers )

function App() {
  return (
    <ThemeProvider>
      <Provider store={ store }>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Register /> } />
            <Route path="/counter" element={ <CouterApp /> } >
              <Route path="/counter/v2" index element={ <CouterAppV2 /> } />
              <Route path="/counter/v3" index element={ <CouterAppV3 /> } />
              <Route path="/counter/v4" index element={ <CouterAppV4 /> } />
              <Route path="/counter/v5" index element={ <CouterAppV5 /> } />
              <Route path="/counter/v6" index element={ <CouterAppV6 /> } />
            </Route>
          </Routes>
        </BrowserRouter>

      </Provider>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
