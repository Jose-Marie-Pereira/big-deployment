import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import PhotoList from './pages/Photolist COS/PhotoList';
import Frame from './components/frames/Frame';
import PhotoDetails from './pages/Photodetails/PhotoDetails';
import WatsonChat from './components/Watson/WatsonChat';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/photo-list" element={<PhotoList />}></Route>
        <Route path="/frame" element={<Frame />}></Route>
        <Route path="/photo-details" element={<PhotoDetails />}></Route>
        <Route path="/chat" element={<WatsonChat />}></Route>
      </Routes>
    </Router>
  );
}

export default App;