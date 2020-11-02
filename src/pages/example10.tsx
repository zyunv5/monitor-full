// https://cloud.tencent.com/developer/article/1516137
/**
 * 在上面的例子中我们通过  useCallback  的使用生成了一个回调，useCallback  的使用方法和  useEffect  一致，
第一个参数为生成的回调方法，第二个参数为该方法关联的状态，任一状态发生变动都会重新生成新的回调。
通过上面代码的使用，我们将 count1 / count2 的值与一个叫做 calculateCount 的方法关联了起来，
如果组件的副作用中用到计算 count1 和 count2 的值的地方，直接调用该方法即可。
其中和直接使用  useEffect  不同的地方在于使用  useCallback  生成计算的回调后，在使用该回调的副作用中，第二个参数应该是生成的回调。其实这个问题是很好理解的，我们使用  useCallback  生成了一个与 count1 / count2 相关联的回调方法，那么当关联的状态发生变化时会重新生成新的回调，副作用监听到了回调的变化就会去重新执行副作用，此时  useCallback  和 useEffect 是按顺序执行的， 这样就实现了副作用逻辑的抽离。
 */

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
