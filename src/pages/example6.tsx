// https://segmentfault.com/a/1190000017057144
import React, { useState, useEffect } from 'react';

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

function HookDemo() {
  const windowSize = useWindowSize();
  return (
    <>
      <div>{windowSize.innerHeight}</div>
      <div>{windowSize.innerWidth}</div>
      <div>{windowSize.outerHeight}</div>
      <div>{windowSize.outerWidth}</div>
    </>
  );
}
export default HookDemo;
