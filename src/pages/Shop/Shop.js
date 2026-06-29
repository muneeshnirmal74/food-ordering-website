import React from 'react'
import Header from '../../components/Layouts/Header'
import Inner_banner from '../../components/Layouts/Inner_banner'
import Footer from '../../components/Layouts/Footer'
import Section4 from '../Home/Section4'

function Shop() {
  return (
    <>
      <Header />
      <Inner_banner  PageName={"Shop"}/>
      <Section4/>
      <Footer/>
    </>
  )
}

export default Shop