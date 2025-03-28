import Connect from './Connect'
import ContactHeader from './ContactHeader'
import ContactLocation from './ContactLocation'
import Footer from './Footer'
import Navbar from './Navbar'


const Contact = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <ContactHeader />
      <ContactLocation/>
      <Connect/>
      <Footer />
    </div>
  )
}

export default Contact