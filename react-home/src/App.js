import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Aside from "./components/aside/Aside";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div class="container container-flex">
        <Main />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
