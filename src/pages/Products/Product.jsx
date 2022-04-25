import React from 'react'
import {Info, Pricing} from '../../components/index'
import { homeObjThree, homeObjFour } from '../Home/Data'

const Home = () => {
  return (
    <>
    
    <Info {...homeObjThree} />
    <Pricing/>
    <Info {...homeObjFour} />
   
    </>

  )}

export default Home