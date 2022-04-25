import React from 'react'
import {Info, Pricing} from '../../components/index'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'

const Home = () => {
  return (
    <>
    <Info {...homeObjOne} />
    <Info {...homeObjTwo} />
    <Info {...homeObjThree} />
    <Pricing/>
    <Info {...homeObjFour} />
   
    </>

  )}

export default Home