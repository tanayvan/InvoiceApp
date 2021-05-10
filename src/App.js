import "./styles/styles.scss";
import Navbar from "./components/Navbar";
import Invoice from "./components/Invoice";
import { Switch, Route, useLocation } from "react-router-dom";
import InvoiceDetails from "./components/InvoiceDetails";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="layout-container">
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Invoice />
          </Route>
          <Route path="/details" exact>
            <InvoiceDetails />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
