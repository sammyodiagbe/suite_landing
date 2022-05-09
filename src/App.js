import './App.css';
import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";


const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>loading....</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
    
  );
}

export default App;
