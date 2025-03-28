import Connect from './Connect'
import Footer from './Footer'
import Navbar from './Navbar'
import TrainingCareer from './TrainingCareer'
import TrainingConnect from './TrainingConnect'
import TrainingCourses from './TrainingCourses'
import TrainingHeader from './TrainingHeader'
import WhyChooseTraining from './WhyChooseTraining'


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