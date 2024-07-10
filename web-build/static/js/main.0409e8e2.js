(()=>{"use strict";var e={4459:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var o=r(6326),n=r(4644),i=r(5675),s=r(2480),a=r(3570),l=r(6487),c=r(3078);const u=i.default.create({container:{flex:1,justifyContent:"center",alignItems:"center",padding:16},title:{fontSize:24,marginBottom:16},button:{backgroundColor:"#3498db",padding:16,borderRadius:8},buttonText:{color:"white",fontSize:18}}),d=({startQuiz:e})=>(0,c.jsxs)(s.default,{style:u.container,children:[(0,c.jsx)(a.default,{style:u.title,children:"Welcome to the Community Driving School Practise Quiz"}),(0,c.jsx)(l.default,{style:u.button,onPress:e,children:(0,c.jsx)(a.default,{style:u.buttonText,children:"Start Quiz"})})]});var f=r(4705);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,f.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const p=i.default.create({container:{flex:1,justifyContent:"center",padding:16},questionText:{fontSize:24,marginBottom:16},optionButton:{backgroundColor:"#3498db",padding:16,borderRadius:8,marginVertical:8},optionText:{color:"white",fontSize:18}}),g=({questions:e,endQuiz:t})=>{const[r,n]=(0,o.useState)(0),[i,u]=(0,o.useState)(0),[d,f]=(0,o.useState)({}),h=e[r];return(0,c.jsxs)(s.default,{style:p.container,children:[(0,c.jsx)(a.default,{style:p.questionText,children:h.question}),h.options.map(((o,i)=>(0,c.jsx)(l.default,{style:p.optionButton,onPress:()=>(o=>{const i=b(b({},d),{},{[r]:o});f(i);let s=0;Object.keys(i).forEach((t=>{e[t].correctAnswer===i[t]&&s++})),u(s),r<e.length-1?n(r+1):t(s,i)})(o),children:(0,c.jsx)(a.default,{style:p.optionText,children:o})},i)))]})};var v=r(6780);const m=i.default.create({container:{flex:1,justifyContent:"center",padding:16},scoreText:{fontSize:24,textAlign:"center",marginVertical:16},resultContainer:{backgroundColor:"#ecf0f1",padding:16,borderRadius:8,marginVertical:8},questionText:{fontSize:18,marginBottom:8},optionText:{fontSize:18,marginBottom:4},correctAnswerText:{color:"green",fontSize:18,marginTop:8},correct:{color:"green",fontSize:18},incorrect:{color:"red",fontSize:18}}),y=({questions:e,score:t,selectedOptions:r})=>(0,c.jsxs)(s.default,{style:m.container,children:[(0,c.jsxs)(a.default,{style:m.scoreText,children:["Your Score: ",t," / ",e.length]}),(0,c.jsx)(v.default,{data:e,keyExtractor:(e,t)=>t.toString(),renderItem:({item:e,index:t})=>{const o=r[t]===e.correctAnswer;return(0,c.jsxs)(s.default,{style:m.resultContainer,children:[(0,c.jsx)(a.default,{style:m.questionText,children:e.question}),e.options.map(((e,n)=>(0,c.jsx)(s.default,{children:(0,c.jsx)(a.default,{style:[m.optionText,r[t]===e?o?m.correct:m.incorrect:null],children:e})},n))),(0,c.jsxs)(a.default,{style:m.correctAnswerText,children:["Correct Answer: ",e.correctAnswer]})]})}})]}),x=[{question:"A jackknife occurs when:",options:["The driver loses control of a combination vehicle","The power unit and the vehicle it is towing form an angle of 90 degrees or less","Roads are wet","The driver of a combination vehicle separates the power unit from the trailer"],correctAnswer:"The power unit and the vehicle it is towing form an angle of 90 degrees or less"},{question:"In ideal conditions, a truck that is 17.6 metres long should be at least how many seconds behind the vehicle it is following?",options:["Three seconds","Four seconds","Five seconds","Six seconds"],correctAnswer:"Five seconds"},{question:"Which vehicles are required to carry warning devices for use in the event that the vehicle becomes disabled?",options:["All vehicles which seat more than 10 passengers","All commercial vehicles with an overall width of more than 2.3 metres","All commercial vehicles with a load width of more than 2.3 metres.","All of the above"],correctAnswer:"All of the above"},{question:"As the driver of a school bus, you must only let passengers off the bus when:",options:["Other drivers can see your bus from at least 60 metres in either direction","There are at least three metres of road available on the left side of your vehicle.","They are exiting on the right side","All of the above"],correctAnswer:"All of the above"},{question:"An overload caused by poor distribution can:",options:["Put unnecessary stress on your vehicles frame","Overload the tires","Cause steering misalignment","All of the above"],correctAnswer:"All of the above"}],w=i.default.create({container:{flex:1}}),j=()=>{const[e,t]=(0,o.useState)("home"),[r,i]=(0,o.useState)(0),[s,a]=(0,o.useState)({});return(0,c.jsxs)(n.default,{style:w.container,children:["home"===e&&(0,c.jsx)(d,{startQuiz:()=>{t("quiz"),i(0),a({})}}),"quiz"===e&&(0,c.jsx)(g,{questions:x,endQuiz:(e,r)=>{i(e),a(r),t("result")}}),"result"===e&&(0,c.jsx)(y,{questions:x,score:r,selectedOptions:s})]})}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,i)=>{if(!o){var s=1/0;for(u=0;u<e.length;u++){for(var[o,n,i]=e[u],a=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(a=!1,i<s&&(s=i));if(a){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,n,i]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,i,[s,a,l]=o,c=0;if(s.some((t=>0!==e[t]))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(l)var u=l(r)}for(t&&t(o);c<s.length;c++)i=s[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[330],(()=>r(6854)));o=r.O(o)})();
//# sourceMappingURL=main.0409e8e2.js.map