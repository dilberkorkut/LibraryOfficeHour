import "./App.css";
import Publisher from "./Pages/Publisher/Publisher";
import Category from "./Pages/Category/Category";
import { Route, Routes, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/publisher" element={<Publisher />} />
        <Route path="/category" element={<Category />} />
      </Routes>
 
    </>
  );
}

export default App;
