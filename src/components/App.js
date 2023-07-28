import Header from './ui/Header';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './ui/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { CustomSoftware } from './pages/CustomSoftware';
import { MobileApps } from './pages/MobileApps';
import { Websites } from './pages/Websites';
import { Revolution } from './pages/Revolution';
import { AboutUs } from './pages/Aboutus';
import { ContactUs } from './pages/ContactUs';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/services" element={<Services />} />

          <Route exact path="/customsoftware" element={<CustomSoftware />} />

          <Route exact path="/mobileapps" element={<MobileApps />} />

          <Route exact path="/websites" element={<Websites />} />

          <Route exact path="/revolution" element={<Revolution />} />

          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
