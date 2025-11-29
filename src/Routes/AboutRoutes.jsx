import { Routes, Route } from 'react-router-dom';
import AboutUs from '../Components/About/AboutUs';

const AboutRoutes = () => (
  <Routes>
    <Route path="" element={<AboutUs />} />
    {/* Add more About-related routes here if needed */}
  </Routes>
);

export default AboutRoutes;
