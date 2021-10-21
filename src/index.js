import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth from './components/auth';
import {Route, BrowserRouter} from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'


function Router(){

  // const TOKEN = 'bb0c469075cd2ce7c8008a6717dde1912eb7efd5'
  // const [token,setToken] = useState('');

  return(
    <React.StrictMode>
      <CookiesProvider>
        <BrowserRouter>
          <Route exact path="/" component={Auth}/>
          <Route exact path="/movies" component={App}/>
        </BrowserRouter>
        </CookiesProvider>
  </React.StrictMode>
  )
}

ReactDOM.render(<Router />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
