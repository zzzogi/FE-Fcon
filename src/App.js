import "./App.css";
import Footer from "./components/user/Footer/Footer";
import Header from "./components/user/Header/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <div className="app-layout">
        <div className="app-header">
          <div className="container">
            <Header />
          </div>
        </div>
        <div className="app-main">
          <AppRoutes />
        </div>
        <div className="app-footer">
          <div className="container">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
