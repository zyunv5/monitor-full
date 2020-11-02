// https://segmentfault.com/a/1190000017057144
// tskmqiyfhkxtbgec
// aqvwakunqnoabhcf
// cjauvwqludvkbicf
// krwhopcxzxacbieb
// cqkjewzaczfncahg
// dxcvwuuaxvkabhfh
// 获取组件宽高
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

  return (
    <div>
      {visible && <Child visible={visible} />}
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
