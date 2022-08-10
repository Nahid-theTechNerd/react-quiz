import "../styles/App.css";
import Layout from "./Layout";
import Result from "./Pages/Result";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* Write the main component name here */}
        <Result></Result>
      </Layout>
    </div>
  );
}

export default App;
