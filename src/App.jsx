import NotificationBar from './Components/Notification/Notification'
import Hero from './Components/Hero/Hero'
import Categories from './Components/Category/Categories'
import Footer from './Components/Footer/Footer'
import AppRoutes from './Routes/AppRoutes';
import NewCourses from './Components/Course/NewCourses';
import Mission from './Components/Hero/Mission';

const MainPage = () => (
  <div className="overflow-x-hidden">
    <NotificationBar />
    <Hero />
    <Mission/>
    <Categories />
    <NewCourses/>
    <Gain/>
    <Footer />
  </div>
);

const App = () => <AppRoutes />;

export default App;
