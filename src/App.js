import "./App.css";
import "./custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
     
    </div>
  );
}

export default App;