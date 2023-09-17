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

const store = createStore( allReducers )

function App() {
  return (
    <ThemeProvider>
      <Provider store={ store }>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <TodoApp /> } />
            <Route path="/counter" element={ <CouterApp /> } />
          </Routes>
        </BrowserRouter>

      </Provider>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
