import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Home />
      {/* <ProductList /> */}
      {/* <Product /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
