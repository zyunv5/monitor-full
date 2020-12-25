//监控路由变化 未启用
window.addEventListener('hashchange', funcRef, false);
function funcRef() {}
var _wr = function(type) {
  var orig = history[type];
  return function() {
    var rv = orig.apply(this, arguments);
    var e = new Event(type);
    e.arguments = arguments;
    window.dispatchEvent(e);
    return rv;
  };
};
history.pushState = _wr('pushState');
history.replaceState = _wr('replaceState');

window.addEventListener('replaceState', function(e) {
  console.log('THEY DID IT AGAIN! replaceState 111111');
});
window.addEventListener('pushState', function(e) {
  console.log('THEY DID IT AGAIN! pushState 2222222');
});
