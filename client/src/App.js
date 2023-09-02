import About from "./section/About";
import Contact from "./section/Contact";
import Projects from "./section/Projects";
import NavigationBar from "./section/NavigationBar";
import ScrollToAnchor from "./components/ScrollToAnchor";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              <Projects />
              <Contact />
              <ScrollToAnchor />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
