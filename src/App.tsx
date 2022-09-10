// React router dom
import { BrowserRouter as Router } from "react-router-dom";

// Global components
import Layout from "./components/layout/Layout";
import { Store } from "./context/theme";

// Global routes
import Routes from "./router/Routes";

function App() {
  return (
    <Router>
      <Store>
        <Layout>
          <Routes />
        </Layout>
      </Store>
    </Router>
  );
}

export default App;
