import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/user/Footer/Footer";
import Header from "./components/user/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import Modal from "react-modal";
import { UserContextProvider } from "./context/userContext";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"));

function App() {
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  return (
    <UserContextProvider>
      <div className="App">
        <div className="app-layout">
          {pathName !== "/admin" ? (
            <>
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
            </>
          ) : (
            <>
              <div className="app-main">
                <AppRoutes />
              </div>
            </>
          )}
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
