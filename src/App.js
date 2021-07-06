import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/animate.css';
import './assets/scss/style.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
