// https://bobi.ink/2019/08/10/react-hooks/

//维护多个表单
import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { message } from 'antd';

function useChange(initial){
  const [value,setValue]=useState(initial)
  const onChange=useCallback(e=>setValue(e.target.value),[])

  return {
    value,setValue,onChange,
    //绑定的原生事件
    bindEvent:{
      onChange,value
    },
    //绑定到自定义组件
    bind:{
      onChange:setValue,
      value
    },
  }
}

function HookDemo() {
  const userName=useChange("")
  const password=useChange("")

  return (
    <>
      <input {...userName.bindEvent}/>
      <input type="password" {...password.bindEvent}/>
    </>
  );
}
export default HookDemo;
