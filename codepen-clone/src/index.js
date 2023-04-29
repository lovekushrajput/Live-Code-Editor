import ReactDOM from 'react-dom/client';
import App from './Components/App';
import './style/style.css'
import { DataProvider } from './Components/DataProvider';
import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'


import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/theme/material.css';


let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(< DataProvider ><App /></DataProvider >)


