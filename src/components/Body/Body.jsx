import React, { useEffect, useRef, useState } from 'react'
import DescoverWeekly from '../DescoverWeekly'
import Header from '../Header'
import './Body.css'
const Body = () => {

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
      <DescoverWeekly />
    </div>
  )
}

export default Body

