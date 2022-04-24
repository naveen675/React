import "./styles.css";
import AddDev from "./adddev";
import Form from "./form";
import Index from "./index";
import Home from "./home";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <BrowserRouter>
        <Routes>
          <Route exact path="/adddev" element={<AddDev />} />
          <Route exact path="/form" element={<Form />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
