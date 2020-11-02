// https://cloud.tencent.com/developer/article/1516137

import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { message } from 'antd';

function Child({ visible }) {
  useEffect(() => {
    message.info('我只在页面挂载时打印');

    return () => {
      message.info('我只在页面卸载时打印');
    };
  }, []);

  return visible ? 'true' : 'false';
}

function HookDemo() {
  const [visible, changeVisible] = useState(true);
  const [count1, changeCount1] = useState(0);
  const [count2, changeCount2] = useState(10);

  const calculateCount = useCallback(() => {
    if (count1 && count2) {
      return count1 * count2;
    }
    return count1 + count2;
  }, [count1, count2]);

  useEffect(()=>{
    const result=calculateCount(count1,count2);
    message.info(`执行副作用，最新值为${result}`)
  },[calculateCount])

  return (
    <div>
      <button
        onClick={() => {
          changeVisible(!visible);
        }}
      >
        改变visible
      </button>
    </div>
  );
}
export default HookDemo;
