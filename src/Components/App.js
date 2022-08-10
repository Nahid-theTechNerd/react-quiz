import "../styles/App.css";
import Layout from "./Layout";
import Quiz from "./Pages/Quiz";
// import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* Write the main component name here */}
        <Quiz></Quiz>
      </Layout>
    </div>
  );
}

export default App;
