import tracker from '../utils/tracker'
import onload from '../lib/onload'
import getLastEvent from '../utils/getLastEvent'
import getSelector from '../utils/getSelector'

export function timing() {
  let FMP, LCP
  //增加一个性能条目的观察者
  new PerformanceObserver((entryList, observe) => {
    let perfEntries = entryList.getEntries()
    FMP = perfEntries[0]
    observe.disconnect() //停止观察
  }).observe({ entryTypes: ['element'] }) //观察页面中有意义的元素

  new PerformanceObserver((entryList, observe) => {
    let perfEntries = entryList.getEntries()
    LCP = perfEntries[0]
    observe.disconnect() //停止观察
  }).observe({ entryTypes: ['largest-contentful-paint'] }) //观察页面中有意义的元素

  new PerformanceObserver((entryList, observe) => {
    let lastEvent = getLastEvent() //触发的选择器
    let firstInput = entryList.getEntries()[0]
    if (firstInput) {
      //processingStart 开始处理时间
      //startTime 开始点击时间
      //差值就是延迟
      let inputDelay = firstInput.processingStart - firstInput.startTime
      let duration = firstInput.duration //处理的耗时
      if (inputDelay > 0 || duration > 0) {
        tracker.send({
          kind: 'experience', //用户体验
          type: 'firstInputDelay', //首次输入延时
          inputDelay, //延时的时间
          duration, //处理的时间
          startTime: firstInput.startTime,
          selector: lastEvent ? getSelector(lastEvent.path || lastEvent.target) : '',
        })
      }
    }
    observe.disconnect() //停止观察
  }).observe({ type: 'first-input', buffered: true }) //用户的第一次交互

  onload(() => {
    setTimeout(() => {
      const {
        fetchStart,
        connectStart,
        connectEnd,
        requestStart,
        responseStart,
        responseEnd,
        domLoading,
        domInteractive,
        domContentLoadedEventStart,
        domContentLoadedEventEnd,
        loadEventStart,
        loadEventEnd,
      } = performance.timing
      tracker.send({
        kind: 'experience', //用户体验
        type: 'timing', //统计每个阶段的时间
        connectTime: connectEnd - connectStart, //连接时间
        ttfbTime: responseEnd - requestStart, //首字节到达时间
        responseTime: responseEnd - responseStart, //响应的读取时间
        parseDOMTime: loadEventStart - domLoading, //DOM读取时间
        domContentLoadedTime: domContentLoadedEventEnd - domContentLoadedEventStart,
        timeToInteractive: domInteractive - fetchStart, //首次可交互时间
        loadTime: loadEventStart - fetchStart, //完整的加载时间
      })

      let FP = performance.getEntriesByName('first-paint')[0]
      let FCP = performance.getEntriesByName('first-contentful-paint')[0]
      //开始发送性能指标
      // console.log('FP', FP) //首次绘制
      // console.log('FCP', FCP)
      // console.log('FMP', FMP) //需要元素有setAttribute("elementtiming", "meaningful")
      // console.log('LCP', LCP)
      tracker.send({
        kind: 'experience',
        type: 'paint', //性能
        firstPaint: FP.startTime,
        firstContentfulPaint: FCP.startTime,
        firstMeaningfulPaint: FMP.startTime,
        largestContentfulPaint: LCP.startTime,
      })
    }, 3000)
  })
}
