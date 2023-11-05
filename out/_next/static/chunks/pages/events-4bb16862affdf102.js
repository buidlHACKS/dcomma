(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7695],{55378:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events",function(){return t(26218)}])},26218:function(e,a,t){"use strict";t.r(a),t.d(a,{IndexPage:function(){return m}});var d=t(34051),r=t.n(d),l=t(85893),n=t(67294),s=t(40776),c=t(42649),o=t(30381),i=t.n(o),x=t(13377),u=t(12858),b=t(99361),f=t(80202),g=t(11163);function h(e,a,t,d,r,l,n){try{var s=e[l](n),c=s.value}catch(o){return void t(o)}s.done?a(c):Promise.resolve(c).then(d,r)}var p={Transfer:"bg-green-300",Approval:"bg-purple-300"},m=function(){var e,a=(0,g.useRouter)(),t=(0,n.useContext)(s.Z).selectedChainId,d=(0,n.useState)([]),o=d[0],m=d[1],v=(0,n.useState)(!1),y=v[0],w=v[1],j=(0,n.useState)(!1),k=j[0],N=j[1],_=(0,n.useState)((null===(e=a.query)||void 0===e?void 0:e.contract)||""),S=_[0],C=_[1],A=(0,n.useState)(""),E=A[0],P=A[1],D=(0,n.useState)(1),T=D[0],I=D[1],z=(0,n.useState)(""),q=z[0],L=z[1],B=(0,n.useState)(),F=B[0],G=B[1],O=(0,n.useState)(),R=O[0],V=O[1],X=[{name:"Txs"},{name:"Type"},{name:"Logs"},{name:"Value"},{name:"Spender"},{name:"Date"}];(0,n.useEffect)((function(){F&&S&&R&&(I(1),L(void 0),Z(1))}),[t]);var Z=function(){var e,a=(e=r().mark((function e(a){var d;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d=[],1===a&&m([]),w(!0),(0,u.Ps)(t,S,F,R,a,E).then((function(e){var t,r,l;d=a>1?o.concat((null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.items)||[]):null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.items,N((null===e||void 0===e?void 0:e.data.pagination.has_more)||!1),m(d||[]),L(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.error_message)})).catch((function(){m([]),L("An error occured, please verify the contract address, starting block, endind block and selected chain.")})).finally((function(){w(!1)}));case 4:case"end":return e.stop()}}),e)})),function(){var a=this,t=arguments;return new Promise((function(d,r){var l=e.apply(a,t);function n(e){h(l,d,r,n,s,"next",e)}function s(e){h(l,d,r,n,s,"throw",e)}n(void 0)}))});return function(e){return a.apply(this,arguments)}}();return(0,l.jsx)(c.Z,{title:"Dashboard / Get tokens balance of any address",desc:"Dashboard / Get tokens balance of any address",children:(0,l.jsxs)("div",{className:"my-2",children:[(0,l.jsxs)("form",{className:"flex flex-wrap w-full gap-4",onSubmit:function(e){return function(e){e.preventDefault(),F&&S&&R?(I(1),L(void 0),Z(1)):L("All fields are required")}(e)},children:[(0,l.jsx)("input",{value:S,onChange:function(e){return C(e.target.value)},type:"text",id:"rounded-email",className:"flex-1 w-full px-6 py-3 text-base text-gray-700 placeholder-gray-400 bg-white border-transparent shadow appearance-none lg:w-1/5 dark:text-white dark:bg-gray-700 rounded-xl border-b-gray-200",placeholder:"Enter a contract address"}),(0,l.jsx)("input",{value:F,onChange:function(e){return G(parseInt(e.target.value))},type:"number",id:"rounded-email",className:"w-full px-6 py-3 text-base text-gray-700 placeholder-gray-400 bg-white border-transparent shadow appearance-none lg:w-1/5 dark:text-white dark:bg-gray-700 rounded-xl border-b-gray-200",placeholder:"Starting block"}),(0,l.jsx)("input",{value:R,onChange:function(e){return V(parseInt(e.target.value))},type:"number",id:"rounded-email",className:"w-full px-6 py-3 text-base text-gray-700 placeholder-gray-400 bg-white border-transparent shadow appearance-none lg:w-1/5 dark:text-white dark:bg-gray-700 rounded-xl border-b-gray-200",placeholder:"Ending block"}),(0,l.jsx)(x.P,{defaultLabel:"Select a topic",value:E,options:[{label:"All",value:"all"},{label:"Approval",value:"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{label:"ApprovalForAll",value:"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"},{label:"DelegateChanged",value:"0x3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f"},{label:"DelegateVotesChanged",value:"0xdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724"},{label:"Deposit",value:"0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c"},{label:"Paid",value:"0x39b0a0620bb668047ab7248973ddfd93d53dff1d4952bd2d56bbf5934edc1fd0"},{label:"RewardsClaimed",value:"0xd92c424393cb3ccdf7d5e36602e3bfa34f24490579ba47978f4bcfad496995f2"},{label:"SequencerBatchAppended",value:"0x127186556e7be68c7e31263195225b4de02820707889540969f62c05cf73525e"},{label:"StakeStart",value:"0xdc5a18c7d77c61a390e121362aef97759e74c60c7af28d64ab9b0317a06fe9d3"},{label:"Sync",value:"0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1"},{label:"Swap",value:"0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822"},{label:"TransactionBatchAppended",value:"0x127186556e7be68c7e31263195225b4de02820707889540969f62c05cf73525e"},{label:"Transfer",value:"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{label:"WithdrawalInitiated",value:"0xd9fbd8fe4451ae979e36c7923543e61b94e26b6f1510866805ee90023a61aa21"},,],onChange:function(e){return P(e)}}),(0,l.jsx)(f.z,{disabled:!R||!F||!S,type:"submit",label:"Search"})]}),(0,l.jsxs)("div",{className:"flex flex-col w-full gap-4 mt-4",children:[(0,l.jsxs)("div",{className:"overflow-x-auto bg-white dark:bg-gray-700 rounded-xl",children:[(0,l.jsxs)("div",{className:"flex items-center w-full gap-4 p-4 border-b-2 border-gray-200",children:[(0,l.jsx)("img",{src:"/images/transaction.svg"}),(0,l.jsx)("p",{className:"text-lg text-gray-500 dark:text-white",children:"Events"})]}),(0,l.jsxs)("table",{className:"min-w-full mt-4 overflow-x-auto leading-normal rounded-xl",children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{className:"rounded-xl",children:X.map((function(e,a){return(0,l.jsx)("th",{scope:"col",className:"".concat(0===a?"rounded-tl-xl xl":""," ").concat(a===X.length-1?"rounded-tr-xl xl":""," px-6 py-4 text-left font-normal text-gray-700 dark:text-white  bg-white dark:bg-gray-700 text-xs lg:text-md"),children:e.name},e.name+a)}))})}),(0,l.jsxs)("tbody",{children:[null===o||void 0===o?void 0:o.map((function(e,a){var t,d,r,n,s,c,o;return(0,l.jsxs)("tr",{className:"bg-white border-b border-gray-200 dark:bg-gray-700 rounded-xl",children:[(0,l.jsxs)("td",{className:"px-5 py-5 text-sm bg-white dark:bg-gray-700 ",children:[e.tx_hash.substr(0,10),"..."]}),(0,l.jsx)("td",{className:"px-5 py-5 text-sm bg-white dark:bg-gray-700",children:(0,l.jsx)("div",{className:"flex items-center justify-between ",children:(0,l.jsx)("p",{className:"p-2 text-xs text-gray-800 rounded-xl ".concat(p[e.decoded.name]||"bg-gray-500 text-white"),children:e.decoded.name})})}),(0,l.jsx)("td",{className:"flex flex-col gap-2 px-5 py-2 text-sm bg-white dark:bg-gray-700 ",children:e.decoded.params.slice(0,2).map((function(a){return(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("p",{className:"text-xs text-gray-500 dark:text-white",children:a.name}),(0,l.jsx)("p",{className:"text-gray-800",children:"value"===a.name&&"uint256"===a.type?"".concat((0,b.az)(a.value,e.sender_contract_decimals)," ").concat(e.sender_name):a.value})]})}))}),(0,l.jsx)("td",{className:"px-5 py-5 text-sm bg-white dark:bg-gray-700",children:(null===(t=e.decoded)||void 0===t?void 0:t.params[2])&&(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("p",{className:"text-xs text-gray-500 dark:text-white",children:null===(d=e.decoded)||void 0===d?void 0:d.params[2].name}),(0,l.jsx)("p",{className:"text-gray-800",children:"value"===(null===(r=e.decoded)||void 0===r?void 0:r.params[2].name)&&"uint256"===(null===(n=e.decoded)||void 0===n?void 0:n.params[2].type)?"".concat((0,b.az)(null===(s=e.decoded)||void 0===s?void 0:s.params[2].value,e.sender_contract_decimals).includes("Y")?"\u221e":(0,b.az)(null===(c=e.decoded)||void 0===c?void 0:c.params[2].value,e.sender_contract_decimals)," "):null===(o=e.decoded)||void 0===o?void 0:o.params[2].value})]})}),(0,l.jsx)("td",{className:"px-5 py-5 text-sm bg-white dark:bg-gray-700",children:(0,l.jsxs)("p",{children:[e.sender_name,(0,l.jsxs)("span",{className:"text-xs text-gray-500 dark:text-white",children:["(",e.sender_contract_ticker_symbol,")"]})]})}),(0,l.jsxs)("td",{className:"px-5 py-5 text-sm bg-white dark:bg-gray-700",children:[(0,l.jsx)("p",{children:i()(e.block_signed_at).fromNow()}),(0,l.jsx)("p",{className:"text-xs text-gray-500 dark:text-white",children:i()(e.block_signed_at).toLocaleString()})]})]},e.tx_hash||"")})),0===(null===o||void 0===o?void 0:o.length)&&!y&&(0,l.jsx)("tr",{className:"bg-white border-b border-gray-200 dark:bg-gray-700 rounded-xl",children:(0,l.jsx)("td",{colSpan:X.length,className:"px-8 py-8 text-sm text-center text-gray-500 bg-white dark:text-white dark:bg-gray-700",children:q?(0,l.jsx)("span",{className:"text-red-600",children:q}):"No data"})}),y&&(0,l.jsx)("tr",{className:"bg-white border-b border-gray-200 dark:bg-gray-700 rounded-xl",children:(0,l.jsx)("td",{colSpan:X.length,className:"px-8 py-8 text-sm text-center text-gray-500 bg-gray-200 dark:text-white animate-pulse",children:"Fetching datas ...."})})]})]})]}),k&&!y&&(0,l.jsx)("div",{className:"flex items-center justify-center w-full",children:(0,l.jsx)("button",{onClick:function(){Z(T+1),I(T+1)},type:"button",className:"p-4 m-auto my-8 text-gray-700 bg-white shadow dark:text-white dark:bg-gray-700 w-44 rounded-xl hover:drop-shadow-xl",children:"Show more"})})]})]})})};a.default=m}},function(e){e.O(0,[4885,3424,3542,9774,2888,179],(function(){return a=55378,e(e.s=a);var a}));var a=e.O();_N_E=a}]);