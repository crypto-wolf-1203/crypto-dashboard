import { Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Dashboard from "./pages/dashboard";
import Token from "./pages/token";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Dashboard />} exact />
        <Route path='/token/:token' element={<Token />} />
      </Routes>
    </Layout>
  );
}

export default App;
