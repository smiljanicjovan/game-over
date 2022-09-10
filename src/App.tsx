// React router dom
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./containers/layout/Layout";

// Global routes
import Routes from "./router/Routes";

function App() {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}

export default App;
