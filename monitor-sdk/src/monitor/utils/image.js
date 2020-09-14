let userAgent = require('user-agent');

function getExtraData() {
  return {
    title: document.title,
    currentUrl: location.href,
    timestamp: Date.now(),
    userAgent: userAgent.parse(navigator.userAgent).name,
  };
}

export default function createImage(host, data) {
  let extraData = getExtraData();
  let log = { ...extraData, ...data };
  let body = '';
  for (let key in log) {
    if (typeof log[key] === 'number') {
      log[key] = `${log[key]}`;
    }
    body += `&${key}=${log[key]}`;
  }
  body = body.slice(1);
  new Image().src = `${host}?${body}.gif`;
}
