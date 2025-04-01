import Connect from './Connect'
import Footer from './Footer'
import Navbar from './Navbar'
import TrainingCareer from './Training/TrainingCareer'
import TrainingConnect from './Training/TrainingConnect'
import TrainingCourses from './Training/TrainingCourses'
import TrainingHeader from './Training/TrainingHeader'
import WhyChooseTraining from './Training/WhyChooseTraining'


const Training = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <TrainingHeader />
      <WhyChooseTraining/>
      <TrainingCareer/>
      <TrainingCourses />
      <TrainingConnect/>
      <Connect/>
      <Footer />
    </div>
  )
}

export default Training