import React from 'react';
import logo from './logo.svg';
import './App.css';
import FragmentsDemo from "./Fragments/Fragments"
import ParentComponent from "./Memo/ParentComponent"
import Refs from "./Refs/Refs"
import Portal from "./Portal/Portal"
import Hero from './ErrorBoundary/Hero';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import ClickCounter from "./HOC/ClickCounter"
import ComponentA from './Context/ComponentA';
import { UserProvider } from "./Context/useContext"
import SuspenseDemo from './Suspense/SuspenseDemo';
import UseReducer from "./useReducer/UseReducer"

function App() {
  return (
    <div>
      <UseReducer />
      
    </div>
    
  );
}

export default App;
