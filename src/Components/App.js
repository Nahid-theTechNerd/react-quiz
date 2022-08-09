import "../styles/App.css";
import Layout from "./Layout";
import Login from "./Pages/Login";
// import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* Write the main component name here */}
        <Login></Login>
      </Layout>
    </div>
  );
}

export default App;
