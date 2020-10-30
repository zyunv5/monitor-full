// https://segmentfault.com/a/1190000017057144
// tskmqiyfhkxtbgec
// aqvwakunqnoabhcf
// cjauvwqludvkbicf
// krwhopcxzxacbieb
// cqkjewzaczfncahg
// dxcvwuuaxvkabhfh
// 获取组件宽高
import React, { useState, useEffect, useRef, useLayoutEffect,useCallback } from 'react';

function useInputValue(init) {
  let [value, setValue] = useState(init);
  let onChange = useCallback(event => {
    setValue(event.currentTarget.value);
  }, []);
  return {value,onChange}
}
function HookDemo() {
  const {value,onChange} = useInputValue(10);
  return (
    <>
      {value}
      <input type="text" onChange={onChange}/>
    </>
  );
}
export default HookDemo;
