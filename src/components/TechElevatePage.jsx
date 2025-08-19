import { useEffect } from 'react'

const TechElevatePage = () => {
  useEffect(() => {
    window.location.replace('https://techelevate.shop')
  }, [])
  return (
    <div className='min-h-screen flex items-center justify-center bg-black text-white mt-20'>
      <div className='text-center px-6'>
        <p className='text-sm uppercase tracking-widest text-gray-400 mb-2'>Redirecting</p>
        <h1 className='text-2xl font-semibold mb-3'>Tech Elevate</h1>
        <p className='text-gray-300'>Taking you to techelevate.shop… If you are not redirected, <a className='text-[#2EC743] underline' href='https://techelevate.shop'>click here</a>.</p>
      </div>
    </div>
  )
}

export default TechElevatePage


