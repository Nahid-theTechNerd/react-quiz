import "../styles/App.css";
import Layout from "./Layout";
// import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* Write the main component name here */}
        <SignUp></SignUp>
      </Layout>
    </div>
  );
}

export default App;
