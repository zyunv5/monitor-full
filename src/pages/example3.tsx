// https://www.zoo.team/article/react-hooks
import React,{useState} from "react"
import {Modal} from "antd";

function useModal(){
  const [visible,changeVisible]=useState(false);

  const toggleModalVisible=()=>{
    changeVisible(!visible)
  };

  return [(
    <Modal visible={visible} onOk={toggleModalVisible} onCancel={toggleModalVisible}>
      弹窗内容
    </Modal>
  ),toggleModalVisible];
}

function HookDemo(){
  const [modal,toggleModal]=useModal()
  return(
    <div>
      {modal}
      <button onClick={toggleModal}>打开弹窗</button>
    </div>
  )
}
export default HookDemo
