import React from 'react'
import {Info, Pricing} from '../../components/index'
import { homeObjFour } from '../Home/Data'

const Home = () => {
  return (
    <>
    <Pricing/>
    <Info {...homeObjFour} />
   
    </>

  )}

export default Home