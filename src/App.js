import './App.css';
import Main from "./components/Main/index";
import Root from "./components/root/index"
import ProductsPage from "./components/ProductsPage/index"
import SearchResults from "./components/SearchComponents/searchResults"
import About from "./components/About/index";
import Contact from "./components/Contact/index";
import Profile from "./components/Profile/index"
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Main />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/all" element={<ProductsPage />} />
          <Route path="/:category" element={<ProductsPage />} />
          <Route path="/search" element={ <SearchResults /> } />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
