// https://www.zoo.team/article/react-hooks
import React,{useState} from "react"

function useCounter(initialValue:number){
  const [count,changeCount]=useState(initialValue);
  const decrease=()=>{
    changeCount(count-1)
  }
  const increase=()=>{
    changeCount(count+1)
  }
  const resetCounter=():void=>{
    changeCount(0)
  }
  return [count,{decrease,increase,resetCounter}]
}

function myHooksView(){
  const [count,controlCount]=useCounter(10)
  return(
    <div>
      当前数量：{count}
      <button onClick={controlCount.decrease}>减少</button>
      <button onClick={controlCount.increase}>增加</button>
      <button onClick={controlCount.resetCounter}>重置</button>
    </div>
  )
}
export default myHooksView
