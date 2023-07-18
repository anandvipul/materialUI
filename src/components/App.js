import Header from './ui/Header';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './ui/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Test } from './Test';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Test />} />

          <Route
            exact
            path="/services"
            element={() => {
              return <div>Services</div>;
            }}
          />

          <Route
            exact
            path="/customsoftware"
            element={() => {
              return <div>Custom Software</div>;
            }}
          />

          <Route
            exact
            path="/mobileapps"
            element={() => {
              return <div>Mobile Apps</div>;
            }}
          />

          <Route
            exact
            path="/websites"
            element={() => {
              return <div>Websites</div>;
            }}
          />

          <Route
            exact
            path="/revolution"
            element={() => {
              <div>The Revolution</div>;
            }}
          />

          <Route
            exact
            path="/about"
            element={() => {
              <div>About Us</div>;
            }}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
