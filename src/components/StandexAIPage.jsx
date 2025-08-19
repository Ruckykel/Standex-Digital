import { useEffect } from 'react'

const StandexAIPage = () => {
  useEffect(() => {
    window.location.replace('https://standexai.com')
  }, [])
  return (
    <div className='min-h-screen flex items-center justify-center bg-[#0b1220] text-white mt-20'>
      <div className='text-center px-6'>
        <p className='text-sm uppercase tracking-widest text-blue-300 mb-2'>Redirecting</p>
        <h1 className='text-2xl font-semibold mb-3'>Standex AI</h1>
        <p className='text-blue-100'>Taking you to standexai.com… If you are not redirected, <a className='text-[#2EC743] underline' href='https://standexai.com'>click here</a>.</p>
      </div>
    </div>
  )
}

export default StandexAIPage


