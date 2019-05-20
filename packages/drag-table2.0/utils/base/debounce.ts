// // Returns a function, that, as long as it continues to be invoked, will not
// // be triggered. The function will be called after it stops being called for
// // N milliseconds. If `immediate` is passed, trigger the function on the
// // leading edge, instead of the trailing.
// export function debounce(func: any, wait: any, immediate?: any) {
//     let timeout;
//     let result;

//     const later = (context: any, args: any) => {
//         timeout = null;
//         if (args) {
//             result = func.apply(context, args);
//         }
//     };

//     const debounced = function (args: any) {
//         if (timeout) {
//             clearTimeout(timeout)
//         }
//         if (immediate) {
//             const callNow = !timeout;
//             timeout = setTimeout(later, wait);
//             if (callNow) {
//                 result = func.apply((this as any), args);
//             }
//         } else {
//             timeout = _.delay(later, wait, this, args);
//         }

//         return result;
//     };

//     debounced.cancel = function () {
//         clearTimeout(timeout);
//         timeout = null;
//     };

//     return debounced;
// };