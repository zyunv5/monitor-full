// https://segmentfault.com/a/1190000017057144
// tskmqiyfhkxtbgec
  // aqvwakunqnoabhcf
  // cjauvwqludvkbicf
  // krwhopcxzxacbieb
  // cqkjewzaczfncahg
  // dxcvwuuaxvkabhfh
  // 获取组件宽高
import React, { useState, useEffect,useRef,useLayoutEffect } from 'react';

function getSize(el) {
  if (!el) {
    return {};
  }

  return {
    width: el.offsetWidth,
    height: el.offsetHeight
  };
}

function useComponentSize(ref){
  let [componentSize,setComponentSize]=useState(getSize(ref.current))

  function handleResize(){
    if(ref&&ref.current){
      setComponentSize(getSize(ref.current));
    }
  }

  useLayoutEffect(() => {
    let resizeObserver=new ResizeObserver(()=>handleResize());
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect(ref.current);
      resizeObserver=null;
    };
  }, [handleResize, ref])

  return componentSize;
}

function HookDemo() {
  const ref=useRef(null);
  const componentSize=useComponentSize(ref);
  return (
    <>
      <div>{componentSize.width}</div>
      <textarea ref={ref} name="" id="" cols="30" rows="10"></textarea>
    </>
  );
}
export default HookDemo;
