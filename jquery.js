/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */

 function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/e/2PACX-1vSeZzszN7MrAM4qXzX4sMVlDsOu7tdmGNxzA0kh0tBxpZ50_E-X5gBA9H3HWxkEczvBvoxqznrOnRTw/pubhtml',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init