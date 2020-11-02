// https://cloud.tencent.com/developer/article/1516137

import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { message } from 'antd';

function HookDemo() {
  const [value,setValue]=useState("");
  const handleChange=useCallback((evt)=>{
    setValue(evt.target.value)
  },[])

  return (
    <>
      <input value={value} onChange={handleChange}/>
      {value}
    </>
  );
}
export default HookDemo;
