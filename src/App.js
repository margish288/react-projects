import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FloatingDropdown from "./projects/FloatingDropdown";
import DragAndDrop from "./projects/Dnd";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/floating-dropdown"
          element={
            <Layout>
              <FloatingDropdown />
            </Layout>
          }
        />
        <Route
          path="/drag-and-drop"
          element={
            <Layout>
              <DragAndDrop />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
