let host = 'cn-beijing.log.aliyuncs.com';
let project = 'monitor-self';
let logstore = 'monitor-self';
let userAgent = require('user-agent');

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
    this.serverUrl = serverUrl;
    this.xhr = new XMLHttpRequest();
  }
  send(serverUrl, data = {}) {
    let extraData = getExtraData();
    let log = { ...extraData };
    //对象的值不能是数字
    let body = '';
    for (let key in log) {
      if (typeof log[key] === 'number') {
        log[key] = `${log[key]}`;
      }
      body += `&${key}=${log[key]}`;
    }
    body = body.slice(1);
    // console.log(`${serverUrl}${body}`);
    console.log(body);
    // body = JSON.stringify(body);
    this.xhr.open('GET', `${serverUrl}${body}`, true);
    this.xhr.withCredentials = true;
    this.xhr.onload = e => {
      console.log('request success');
    };
    this.xhr.onerror = error => {
      console.log('request error');
    };
    this.xhr.ontimeout = e => {
      console.log('request timeout');
    };
    this.xhr.send({name:"cc"});
  }
}
export default new SendTracker();
