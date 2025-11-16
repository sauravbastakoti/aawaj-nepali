
import NotificationBar from './Components/Notification/Notification'
import Hero from './Components/Hero/Hero'
import Flow from './Components/FLow/Flow'
import Stats from './Components/People/Stats'
import Categories from './Components/Category/Categories'
import Courses from './Components/Course/Courses'
import People from './Components/People/People'
import Skill from './Components/Skill/Skill'
import Learn from './Components/Learn/Learn'
import Anywhere from './Components/Anywhere/Anywhere'
import Resources from './Components/Resources/Resources'
import Footer from './Components/Footer/Footer'
import Instructor from './Components/Instructor/Instructor'

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <NotificationBar />
      <Hero />
      {/* <Flow/> */}
      <Categories />
      <Courses />
      <People />
      <Stats />
      <Skill />
      <Learn />
      <Instructor />
      <Anywhere />
      <Resources />
      <Footer />
    </div>
  )
}

export default App
