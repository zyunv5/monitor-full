let host = "cn-beijing.log.aliyuncs.com";
let project = "monitor-self";
let logstore = "monitor-self";
let userAgent = require("user-agent");

function getExtraData() {
  return {
    title: document.title,
    currentUrl: location.href,
    timestamp: Date.now(),
    userAgent: userAgent.parse(navigator.userAgent).name,
    //用户ID
  };
}
class SendTracker {
  constructor(serverUrl) {
    // this.url = `http://${project}.${host}/logstores/${logstore}/track?APIVersion=0.6.0`; //阿里云上报的路径
    this.serverUrl=serverUrl;
    this.xhr = new XMLHttpRequest();
  }
  send(data = {}) {
    let extraData = getExtraData();
    let log = { ...extraData, ...data };
    //对象的值不能是数字
    let body="";
    console.log("log",log);
    for (let key in log) {
      if (typeof log[key] === "number") {
        log[key] = `${log[key]}`;
      }
      body+=`&${key}=${log[key]}`
    }
    // let body = JSON.stringify(log);
    this.xhr.open("GET", `${this.url}${body}`, true);
    this.xhr.onload = (e) => {
      console.log("request success");
    };
    this.xhr.onerror = (error) => {
      console.log("request error");
    };
    this.xhr.ontimeout = (e) => {
      console.log("request timeout");
    };
    this.xhr.send(body)
  }
  postSend(serverUrl,data={}){
    let extraData = getExtraData();
    let log = { ...extraData, ...data };
    let body=new FormData();
    for(let key in log){
      body.append(key,log[key])
    }
    body.append("name","11")
    console.log(body);
    this.xhr.open("POST", serverUrl, true);
    this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    this.xhr.onload = (e) => {
      console.log("request success");
    };
    this.xhr.onerror = (error) => {
      console.log("request error");
    };
    this.xhr.ontimeout = (e) => {
      console.log("request timeout");
    };
    // this.xhr.send(log)
  }
}
export default new SendTracker();
