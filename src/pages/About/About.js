import React from 'react';
import Header from '../../components/Layouts/Header';
import Inner_banner from '../../components/Layouts/Inner_banner';
import Footer from '../../components/Layouts/Footer';
import Section2 from '../Home/Section2';

function About() {
  return (
    <>
      <Header/>
      <Inner_banner  PageName={"About Us"}/>
      <Section2/>
      <Footer/>
    </>
  )
}

export default About