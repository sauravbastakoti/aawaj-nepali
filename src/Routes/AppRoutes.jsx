import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotificationBar from '../Components/Notification/Notification';
import Hero from '../Components/Hero/Hero';
import Categories from '../Components/Category/Categories';
import Footer from '../Components/Footer/Footer';
import NewCourses from '../Components/Course/NewCourses';
import Gain from '../Components/Learn/Gain';
import AboutRoutes from './AboutRoutes';
import Mission from '../Components/Hero/Mission';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <div className="overflow-x-hidden">
          <NotificationBar />
          <Hero />
          <Mission/>
          <Categories />
          <NewCourses />
          <Gain />
          <Footer />
        </div>
      } />
      <Route path="/about/*" element={<AboutRoutes />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
