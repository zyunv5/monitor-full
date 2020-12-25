//click 事件监控 未启用
window.addEventListener('click', handleClick, true);

export function handleClick(event) {
  var target;
  try {
    target = event.target;
  } catch (u) {
    target = '<unknown>';
  }
  if (0 !== target.length) {
    var behavior = {
      type: 'ui.click',
      data: {
        message: (function(e) {
          if (!e || 1 !== e.nodeType) return '';
          for (
            var t = e || null, n = [], r = 0, a = 0, i = ' > '.length, o = '';
            t &&
            r++ < 5 &&
            !('html' === (o = normalTarget(t)) || (r > 1 && a + n.length * i + o.length >= 80));
          )
            n.push(o), (a += o.length), (t = t.parentNode);
          return n.reverse().join(' > ');
        })(target),
      },
    };
    // 空信息不上报
    if (!behavior.data.message) return;
    let commonMsg = getCommonMsg();
    let msg = {
      ...commonMsg,
      ...{
        t: 'behavior',
        behavior,
      },
    };
    report(msg);
  }
}
