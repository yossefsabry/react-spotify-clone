import React, { useEffect, useRef, useState } from 'react'
import BodyComponent, { BodyComponentTwo } from '../BodyComponent'
import CopyWrite from '../CopyWrite/CopyWrite'
import Header from '../Header'
import './Body.css'

const Body = (props) => {

  const scrollContainerRef = useRef();
  const [scrollState, setScrollState] = useState(false);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollPosition = container.scrollTop;
      if (scrollPosition > 300) {
        setScrollState(true);
      } else {
        setScrollState(false);
      }
    }
  };
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="body__container" ref={scrollContainerRef}>
      <Header scroll_state={scrollState} />
      <BodyComponent type={props.type} name={props.name}/>
      <CopyWrite />
    </div>
  )
}

export default Body


export const BodyTwo = (props) => {

  const scrollContainerRef = useRef();
  const [scrollState, setScrollState] = useState(false);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollPosition = container.scrollTop;
      if (scrollPosition > 200) {
        setScrollState(true);
      } else {
        setScrollState(false);
      }
    }
  };
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="body__container" ref={scrollContainerRef}>
      <Header scroll_state={scrollState} />
      <BodyComponentTwo type={props.type} name={props.name}/>
      <CopyWrite />
    </div>
  )
}

