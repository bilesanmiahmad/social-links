import { useState } from 'react'
import image from './assets/avatar-jessica.jpeg'
import './App.css'
import { socialLinks } from './data'

function Button({ title, link}){
  return (
    <a href={ link } className='block bg-gray-600 hover:bg-lime-300 m-5 rounded-md py-2 font-inter text-sm font-semibold text-white hover:text-black no-underline'>{title}</a>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container bg-black p-5  h-screen flex'>
      <section className='w-full md:w-1/3 lg:w-1/3 bg-gray-900 rounded-md py-5 m-auto'>
        <div className='w-1/5 md:w-1/3 md:h-36 mx-auto bg-cover h-12 rounded-full' style={{backgroundImage: `url(${image})`}}></div>
        <p className='font-inter text-white font-semibold text-base'>Jessica Randall</p>
        <p className='font-inter text-green-500 font-bold'>London, United Kingdom</p>
        <p className='font-inter text-white text-xs'>"Front-end developer and avid reader."</p>
        <Button {...socialLinks[0]} />
        <Button {...socialLinks[1]} />
        <Button {...socialLinks[2]} />
        <Button {...socialLinks[3]} />
        <Button {...socialLinks[4]} />
      </section>
    </div>
  )
}

export default App
