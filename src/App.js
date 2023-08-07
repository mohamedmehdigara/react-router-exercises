import React from 'react';
import { Route, Link } from 'react-router-dom';
import Students from "./Students";

const Navigation = () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact Us</Link>
        </li>
    </ul>
);

const App = () => (
    <div>
        <h1>Hello, world!</h1>
        <Navigation />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </div>
);
export default App;