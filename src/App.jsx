import { useState } from 'react'
import './App.css'
import TopComponent from './components/TopComponent'
import SecondTop from './components/SecondTop'
import HeadingSection from './components/HeadingSection'
import Application from './components/Application'
import Explore from './components/Explore'
import Work from './components/Work'

function App() {

  return (
    <div className='flex flex-col gap-[50px]'>
     <TopComponent/> 
     <SecondTop/>
     <HeadingSection/>
     <Application/>
     <Explore/>
     <Work/>
    </div >
  )
}

export default App
