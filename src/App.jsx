import "./App.css";
import Publisher from "./Pages/Publisher/Publisher";
import Category from "./Pages/Category/Category";
import { Route, Routes, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Author from "./Pages/Author/Author";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/publisher" element={<Publisher />} />
        <Route path="/category" element={<Category />} />
        <Route path="/author" element={<Author />} />
      </Routes>
 
    </>
  );
}

export default App;
