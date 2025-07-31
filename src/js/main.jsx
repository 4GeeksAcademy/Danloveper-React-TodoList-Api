import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import TodoList from './components/TodoList';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TodoList />);
