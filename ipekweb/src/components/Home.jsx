import React from 'react'
import '../styles/Home.css'
import {FirstDiv} from '../Pages/HomePageDivs/FirstDiv'
import { SecondDiv } from '../Pages/HomePageDivs/SecondDiv'
import { ThirdDiv } from '../Pages/HomePageDivs/ThirdDiv'


import { FourthDiv } from '../Pages/HomePageDivs/FourthDiv'
import { FifthDiv } from '../Pages/HomePageDivs/FİfthDiv'


export const Home = () => {
  return (
    <div>
     <FirstDiv/>
     <SecondDiv/>
     <ThirdDiv/>
     <FourthDiv/>
   <FifthDiv/>
    </div>
  )
}
