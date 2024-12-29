import Content from "./Content.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hoodie from "./Hoodie.jsx";
import SweatShirt from "./SweatShirt.jsx";
import Cardigans from "./Cardigans.jsx";
import Coat from "./Coat.jsx";
import Jacket from "./Jacket.jsx";
import Jeans from "./Jeans.jsx";
import Jumper from "./Jumper.jsx";
import Polos from "./Polos.jsx";
import Shirts from "./Shirts.jsx";
import Trouser from "./Trouser.jsx";
export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/Hoodie" element={<Hoodie />} />
        <Route path="/SweatShirt" element={<SweatShirt />} />
        <Route path="/Cardigans" element={<Cardigans />} />
        <Route path="/Coat" element={<Coat />} />
        <Route path="/Jacket" element={<Jacket />} />
        <Route path="/Jeans" element={<Jeans />} />
        <Route path="/Jumper" element={<Jumper />} />
        <Route path="/Polos" element={<Polos />} />
        <Route path="/Shirts" element={<Shirts />} />
        <Route path="/Trouser" element={<Trouser />} />
      </Routes>
    </Router>
  );
}