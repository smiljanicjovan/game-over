// React router dom
import { BrowserRouter as Router } from "react-router-dom";

// Global components
import { Layout } from "./components/layout";

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
