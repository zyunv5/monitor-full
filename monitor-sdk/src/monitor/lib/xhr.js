import tracker from "../utils/tracker";

export function injectXHR() {
  let XHLHttpRequest = window.XMLHttpRequest;
  let oldOpen = XMLHttpRequest.prototype.open; //重写open方法
  XHLHttpRequest.prototype.open = function (method, url, async) {
    if (!url.match(/logstore/) && url.indexOf("sockjs-node") === -1) {
      this.logData = { method, url, async };
    }
    return oldOpen.apply(this, arguments);
  };
  let oldSend = XMLHttpRequest.prototype.send; //重写send方法
  XHLHttpRequest.prototype.send = function (body) {
    if (this.logData) {
      let startTime = Date.now(); //在发送之前记录一下开始时间
      let handler = (type) => (event) => {
        let duration = Date.now() - startTime; //持续时间
        let status = this.statusText; //200 500
        let statusText = this.statusText; //OK Server Error
        tracker.send({
          kind: "stability",
          type: "xhr",
          eventType: type, //load error abort
          pathname: this.logData.url, //请求路径
          status: status + "-" + statusText, //状态码
          duration, //持续时间
          response: this.response ? JSON.stringify(this.response) : "", //响应体
          params: body || "",
        });
      };
      this.addEventListener("load", handler("load"), false);
      this.addEventListener("error", handler("error"), false);
      this.addEventListener("abort", handler("abort"), false);
    }
    return oldSend.apply(this, arguments);
  };
}
