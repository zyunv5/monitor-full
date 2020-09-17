// hack console
//  Config.behavior.console 取值为["debug", "info", "warn", "log", "error"]

// export function hackConsole() {
//   if (window && window.console) {
//     for (var e = Config.behavior.console, n = 0; e.length; n++) {
//       var r = e[n];
//       var action = window.console[r]
//       if (!window.console[r]) return;
//         (function (r, action) {
//           window.console[r] = function() {
//             var i = Array.prototype.slice.apply(arguments)
//             var s = {
//               type: "console",
//               data: {
//                 level: r,
//                 message: JSON.stringify(i),
//               }
//             };
//             handleBehavior(s)
//             action && action.apply(null, i)
//           }
//         })(r, action)
//     }
//   }
// }

//重写ajax fetch
