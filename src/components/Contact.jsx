import ContactHeader from './Contact/ContactHeader'
import ContactLocation from './Contact/ContactLocation'
import Footer from './Footer'
import Navbar from './Navbar'


const Contact = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <ContactHeader />
      <ContactLocation/>
      <Footer />
    </div>
  )
}

export default Contact