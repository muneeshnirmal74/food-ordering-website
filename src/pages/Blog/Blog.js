import React from 'react'
import Header from '../../components/Layouts/Header'
import Inner_banner from '../../components/Layouts/Inner_banner'
import Footer from '../../components/Layouts/Footer';
import Section5 from '../Home/Section5';
import Section6 from '../Home/Section6';

function Blog() {
  return (
    <>
      <Header/>
      <Inner_banner  PageName={"Blog"}/>
      <Section5/>
      <Section6/>
      <Footer/>
    </>
  )
}

export default Blog;