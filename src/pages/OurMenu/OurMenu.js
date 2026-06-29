import React from 'react'
import Inner_banner from '../../components/Layouts/Inner_banner'
import Header from '../../components/Layouts/Header'
import Footer from '../../components/Layouts/Footer'
import Section3 from '../Home/Section3'

function OurMenu() {
  return (
    <>
      <Header />
      <Inner_banner  PageName={"Over Menu"}/>
      <Section3/>
      <Footer/>
    </>
  )
}

export default OurMenu