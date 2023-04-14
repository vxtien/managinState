import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { data } from "./data";
const App = () => {
  return (
    <div className="container">
      <div className="app">
        <ul>
          {components.map(({ link, title }) => (
            <li>
              <Link to={link}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Routes>
        {components.map(({ link, component }) => (
          <Route path={link} element={component} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
