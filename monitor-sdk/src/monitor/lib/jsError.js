//js error捕获
import getLastEvent from "../utils/getLastEvent";
import getSelector from "../utils/getSelector";
import tracker from "../utils/tracker";

console.log(tracker)

export function injectJsError() {
  // window.addEventListener("onerror",event=>{
  //   console.log("onerror",event);
  // },true)
  //监听全局未捕获的错误
  window.addEventListener("error", event=> {
    let lastEvent = getLastEvent(); //最后一个交互事件
    //这是一个脚本加载错误
    if(event.target&&(event.target.src||event.target.href)){
      tracker.send({
        kind: "stability", //监控指标的大类
        type: "error", //小类型，这是一个错误
        errorType: "resourceError", //js或者css资源加载错误
        filename: event.target.src||event.target.href, //文件报错
        tagName: event.target.tagName, //SCRIPT
        selector: getSelector(lastEvent.path), //代表最后一个操作的元素
        // url: "", //访问哪个路径报错
      });
    }else{
      // tracker.send({
      //   kind: "stability", //监控指标的大类
      //   type: "error", //小类型，这是一个错误
      //   errorType: "jsError", //JS执行错误
      //   // url: "", //访问哪个路径报错
      //   message: event.message, //报错信息
      //   filename: event.filename, //文件报错
      //   position: `${event.lineno}:${event.colno}`, //报错行列
      //   stack: getLines(event.error.stack),
      //   selector: lastEvent ? getSelector(lastEvent.path) : "", //代表最后一个操作的元素
      // });

      tracker.postSend("localhost:8899/jsError/item",{
        kind: "stability", //监控指标的大类
        type: "error", //小类型，这是一个错误
        errorType: "jsError", //JS执行错误
        // url: "", //访问哪个路径报错
        message: event.message, //报错信息
        filename: event.filename, //文件报错
        position: `${event.lineno}:${event.colno}`, //报错行列
        stack: getLines(event.error.stack),
        selector: lastEvent ? getSelector(lastEvent.path) : "", //代表最后一个操作的元素
      });
    }
  },true);
  //监听promise错误
  window.addEventListener("unhandledrejection", (event) => {
    let lastEvent = getLastEvent(); //最后一个交互事件
    let message;
    let filename;
    let line = 0;
    let column = 0;
    let stack = "";
    let reason = event.reason;
    if (typeof reason === "string") {
      message = reason;
    } else if (typeof reason === "object") {
      //说明是一个错误对象
      if (reason.stack) {
        let matchResult = reason.stack.match(/at\s+(.+):(\d+):(\d+)/);
        filename = matchResult[1];
        line = matchResult[2];
        column = matchResult[3];
      }
      message=reason.message;
      stack = getLines(reason.stack);
    }
    tracker.send({
      kind: "stability", //监控指标的大类
      type: "error", //小类型，这是一个错误
      errorType: "promiseError", //JS执行错误
      // url: "", //访问哪个路径报错
      message, //报错信息
      filename: event.filename, //文件报错
      position: `${line}:${column}`, //报错行列
      stack,
      selector: lastEvent ? getSelector(lastEvent.path) : "", //代表最后一个操作的元素
    });
  },true);

  function getLines(stack) {
    return stack
      .split("\n")
      .slice(1)
      .map((item) => item.replace(/^\s+at\s+/g, ""))
      .join("^");
  }
}
