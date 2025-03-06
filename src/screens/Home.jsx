import React from 'react';
import Menu from '../components/Menu';
import ContactUs from '../components/ContactUs';
import Carousel from '../components/Carousel';
import SearchBar from '../components/SearchBar'; 

export default function Home() {
  return (
    <>
      <SearchBar />  
      <Menu />
      <Carousel />
      <ContactUs />
    </>
  );
}
  