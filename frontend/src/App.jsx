import "./App.css";
import Header from "./components/header";
import AwarenessLanding from "./components/awareness";
import Dashboard from "./components/dashboard";
import Form from "./components/form";
import SimulatedCases from "./components/simulate";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Header />
      <div id="awereness">
        <AwarenessLanding />
      </div>
      <div id="detetction">
        <Form />
      </div>
      <div id="dashboard">
        <Dashboard />
      </div>
      <div id="result">
        <SimulatedCases />
      </div>
      <Footer />
    </>
  );
}

export default App;
