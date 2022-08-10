import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Result from "./Pages/Result";
import SignUp from "./Pages/SignUp";
import Quiz from './Pages/Quiz';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
