import Header from './ui/Header';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './ui/Theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return <div>Home</div>;
            }}
          />

          <Route
            exact
            path="/services"
            component={() => {
              return <div>Services</div>;
            }}
          />

          <Route
            exact
            path="/customsoftware"
            component={() => {
              return <div>Custom Software</div>;
            }}
          />

          <Route
            exact
            path="/mobileapps"
            component={() => {
              return <div>Mobile Apps</div>;
            }}
          />

          <Route
            exact
            path="/websites"
            component={() => {
              return <div>Websites</div>;
            }}
          />

          <Route
            exact
            path="/revolution"
            component={() => {
              <div>The Revolution</div>;
            }}
          />

          <Route
            exact
            path="/about"
            component={() => {
              <div>About Us</div>;
            }}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
