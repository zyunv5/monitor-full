// https://juejin.im/post/6844904085028601869#heading-3
import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';

function useMousePosition() {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  const getMousePosition = e => {
    setPositionX(e.clientX);
    setPositionY(e.clientY);
  };

  useEffect(() => {
    document.addEventListener('mousemove', getMousePosition);
    return () => {
      document.removeEventListener('mousemove', getMousePosition);
    };
  });

  return {
    positionX: positionX,
    positionY: positionY,
  };
}

function HookDemo() {
  const mousePosition = useMousePosition();
  return (
    <div>
      <span>鼠标的横坐标{mousePosition.positionX}</span>
      <span>鼠标的纵坐标{mousePosition.positionY}</span>
    </div>
  );
}
export default HookDemo;
