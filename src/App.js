import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FloatingDropdown from "./projects/FloatingDropdown";
import DragAndDrop from "./projects/Dnd";
import Layout from "./components/Layout";
import Canvas from "./projects/Canvas";
import Products from "./projects/practice/Products";
import Modal from "./projects/practice/Modal";
import ReactCode from "./projects/practice/ReactCode";
import Js from "./projects/practice/Js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/floating-dropdown'
          element={
            <Layout>
              <FloatingDropdown />
            </Layout>
          }
        />
        <Route
          path='/drag-and-drop'
          element={
            <Layout>
              <DragAndDrop />
            </Layout>
          }
        />
        <Route
          path='/canvas'
          element={
            <Layout>
              <Canvas />
            </Layout>
          }
        />
        <Route path='/practice'>
          <Route path='products' element={<Products />} />
          <Route path='modal' element={<Modal />} />
          <Route path='react' element={<ReactCode />} />
          <Route path='js' element={<Js />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
