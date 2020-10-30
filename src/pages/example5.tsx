// https://segmentfault.com/a/1190000017057144
import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => (document.title = '前端精读');
  }, [title]);
}

function HookDemo() {
  const mousePosition = useDocumentTitle("个人精读");
  return (
    <div>
     {mousePosition}
    </div>
  );
}
export default HookDemo;
