(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[447],{1634:function(I,g,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nft",function(){return e(2975)}])},2975:function(I,g,e){"use strict";e.r(g),e.d(g,{IndexPage:function(){return D},default:function(){return u}});var M=e(5893),t=e(1664),i=e.n(t),c=e(1163),n=e(7294),r=e(776),a=e(2649),s=e(9361),N=function(I){var g=I.isLoading,e=I.collection;return g||!e?(0,M.jsx)("div",{style:{height:"300px"},className:"relative w-full px-4 py-6 bg-gray-200 shadow animate-pulse rounded-xl dark:bg-gray-700"}):(0,M.jsx)(i(),{href:"/nft/".concat(e.collection_address),children:(0,M.jsxs)("a",{className:"relative flex flex-col justify-between w-full gap-6 p-4 transition bg-white shadow hover:scale-105 hover:shadow-xl rounded-xl dark:bg-gray-700",children:[(0,M.jsx)("img",{src:e.first_nft_image,className:"w-full rounded-xl"}),(0,M.jsxs)("div",{children:[(0,M.jsx)("p",{className:"text-lg text-gray-800 dark:text-white text-bold",children:e.collection_name}),(0,M.jsxs)("div",{className:"flex items-center justify-between mt-4",children:[(0,M.jsxs)("div",{className:"flex flex-col",children:[(0,M.jsx)("p",{className:"text-sm text-gray-500 dark:text-gray-200",children:"Volume (24h)"}),(0,M.jsxs)("p",{className:"dark:text-white",children:[(0,s.uf)(e.avg_volume_quote_24h),"$"]})]}),(0,M.jsxs)("div",{className:"flex flex-col",children:[(0,M.jsxs)("p",{className:"text-sm text-gray-500 dark:text-gray-200",children:["Floor (7d average)"," "]}),(0,M.jsxs)("p",{className:"dark:text-white",children:[(0,s.uf)(e.floor_price_quote_7d/7),"$"]})]})]})]})]})})},A=function(I){var g=I.isLoading,e=I.collection;return g||!e?(0,M.jsx)("div",{style:{height:"100px"},className:"relative w-full px-4 py-6 bg-gray-200 shadow animate-pulse rounded-xl dark:bg-gray-700"}):(0,M.jsx)(i(),{href:"/nft/".concat(e.collection_address),children:(0,M.jsxs)("a",{className:"relative flex w-full gap-6 p-4 transition bg-white shadow hover:scale-105 hover:shadow-xl rounded-xl dark:bg-gray-700",children:[(0,M.jsx)("img",{src:e.first_nft_image,className:"w-1/4 rounded-xl"}),(0,M.jsxs)("div",{children:[(0,M.jsx)("p",{className:"text-lg text-gray-800 dark:text-white text-bold",children:e.collection_name}),(0,M.jsx)("div",{className:"flex items-center justify-between",children:(0,M.jsxs)("div",{className:"flex flex-col",children:[(0,M.jsxs)("p",{className:"text-sm text-gray-500 dark:text-gray-200",children:["Floor price"," "]}),(0,M.jsx)("p",{className:"dark:text-white",children:e.floor_price_quote_7d})]})})]})]})})},l=e(6386);function j(I,g){(null==g||g>I.length)&&(g=I.length);for(var e=0,M=new Array(g);e<g;e++)M[e]=I[e];return M}function o(I){return function(I){if(Array.isArray(I))return j(I)}(I)||function(I){if("undefined"!==typeof Symbol&&null!=I[Symbol.iterator]||null!=I["@@iterator"])return Array.from(I)}(I)||function(I,g){if(!I)return;if("string"===typeof I)return j(I,g);var e=Object.prototype.toString.call(I).slice(8,-1);"Object"===e&&I.constructor&&(e=I.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return j(I,g)}(I)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var D=function(){var I=(0,n.useContext)(r.Z),g=(I.selectedChainId,I.address),e=(0,n.useState)([]),t=e[0],s=e[1],j=(0,n.useState)([]),D=j[0],u=j[1],C=(0,n.useState)(!1),y=C[0],x=C[1],d=(0,c.useRouter)(),w=[{name:""},{name:"Chain Name"},{name:"Contract Adress"},{name:"Contract Type"},{name:"Amount"}];(0,n.useEffect)((function(){x(!0),s([]),(0,l.xo)(g).then((function(I){u((null===I||void 0===I?void 0:I.result)||[]),console.log("Address data response",(null===I||void 0===I?void 0:I.result)||[])})).finally((function(){x(!1)}))}),[g]);var T=o(t).sort((function(I,g){return g.avg_volume_quote_24h-I.avg_volume_quote_24h})),z=o(t).sort((function(I,g){return g.floor_price_quote_7d-I.floor_price_quote_7d}));t.length>0&&t.reduce((function(I,g){return(null===I||void 0===I?void 0:I.volume_quote_24h)>(null===g||void 0===g?void 0:g.volume_quote_24h)?I:g}));return(0,M.jsx)(a.Z,{title:"Dashboard / Get tokens balance of any address",desc:"Dashboard / Get tokens balance of any address",children:(0,M.jsxs)("div",{className:"my-2",children:[(0,M.jsxs)("div",{className:"flex flex-wrap w-full",children:[(0,M.jsxs)("div",{className:"flex flex-col w-full lg:w-3/4 lg:pr-4",children:[(0,M.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,M.jsx)("h1",{className:"my-6 text-3xl font-bold text-gray-800 dark:text-white",children:"Trending collections"}),(0,M.jsx)(i(),{href:"",children:(0,M.jsxs)("a",{className:"flex items-center transition-colors duration-200 cursor-pointer hover:text-gray-800 dark:text-white dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600",children:[(0,M.jsx)("span",{className:"mx-4 text-lg text-gray-500 dark:text-white",children:"See all"}),(0,M.jsx)("img",{src:"/images/right.svg"})]})})]}),(0,M.jsx)("div",{className:"grid grid-cols-2 gap-4 lg:grid-cols-4",children:y?[1,2,3,4].map((function(I,g){return(0,M.jsx)(N,{isLoading:y},g)})):T.slice(0,4).filter((function(I){return I.first_nft_image})).map((function(I){return(0,M.jsx)(N,{collection:I,isLoading:y})}))})]}),(0,M.jsxs)("div",{className:"w-full lg:w-1/4",children:[(0,M.jsx)("div",{className:"flex items-center justify-between w-full",children:(0,M.jsx)("h2",{className:"my-6 text-xl font-bold text-gray-800 dark:text-white",children:"Top Floor"})}),(0,M.jsx)("div",{className:"flex flex-col w-full gap-4",children:y?[1,2,3,4].map((function(I,g){return(0,M.jsx)(A,{isLoading:y},g)})):z.slice(0,4).filter((function(I){return I.first_nft_image})).map((function(I){return(0,M.jsx)(A,{collection:I,isLoading:y})}))})]})]}),(0,M.jsxs)("div",{className:"flex flex-col w-full overflow-x-auto",children:[(0,M.jsx)("div",{className:"flex items-center justify-between w-full",children:(0,M.jsx)("h1",{className:"my-6 text-3xl font-bold text-gray-800 dark:text-white",children:"All collections"})}),(0,M.jsxs)("table",{className:"min-w-full mt-4 leading-normal rounded-xl",children:[(0,M.jsx)("thead",{children:(0,M.jsx)("tr",{className:"rounded-xl",children:w.map((function(I,g){return(0,M.jsx)("th",{scope:"col",className:"".concat(0===g?"rounded-tl-xl xl":""," ").concat(g===w.length-1?"rounded-tr-xl xl":""," px-6 py-4 text-left text-lg font-normal text-gray-900 dark:text-white  bg-white dark:bg-gray-700 text-md"),children:I.name},I.name+g)}))})}),(0,M.jsxs)("tbody",{children:[null===D||void 0===D?void 0:D.map((function(I,g){return(0,M.jsxs)("tr",{onClick:function(){d.push("/nft/".concat(I.contract_address))},className:"bg-white border-b border-gray-200 dark:bg-gray-700 rounded-xl hover:bg-gray-100 hover:cursor-pointer",children:[(0,M.jsx)("td",{className:"px-5 py-5 text-sm bg-white dark:bg-gray-700 ",children:(0,M.jsx)("img",{onError:function(I){var g=I.currentTarget;g.onerror=null,g.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzNweCIgaGVpZ2h0PSIzM3B4IiB2aWV3Qm94PSIwIDAgMzMgMzMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYxLjIgKDg5NjUzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5Ub2tlbnM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnlLvmnb8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NzUuMDAwMDAwLCAtMzEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJUb2tlbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ2My4wMDAwMDAsIDE4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ik1haW4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgMTMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LjA5Mzc5NDEsOS42MTI5NjI4NiBDMTMuODI1MTcwNSw5LjIzMjgzNDcgMTMuMzU0NjM0MSw5LjAwMTM2MzM1IDEyLjg0Nzc5NjcsOSBMNC4xNTUyOTU4Niw5IEMzLjY0NTgzNTIxLDguOTk5MTE2MzYgMy4xNzE5MzgxMiw5LjIzMDg3MDA1IDIuOTAxOTI0ODUsOS42MTI5NjI4NyBMMC4yMjU2MTM1MjcsMTMuNDAxNDg4OCBDLTAuMTE4NTc4MzcxLDEzLjg4NjUyMzggLTAuMDY0NzQ2MDY4OCwxNC41MTMzOTYyIDAuMzU4MzIzMzY0LDE0Ljk0Njg4NyBMNy45Mzc1MjYzNCwyMi43NzE3MTM4IEM4LjIwMjE2NjI4LDIzLjA0NTQxMDcgOC42Njc1Njc0MywyMy4wNzc1NDY0IDguOTc3MDMwNTIsMjIuODQzNDkxNiBDOS4wMDYxNTA3MywyMi44MjE0NjcyIDkuMDMzMjg1MzEsMjIuNzk3NDY4NiA5LjA1ODE4NzY5LDIyLjc3MTcxMzggTDE2LjYzNzM5MDcsMTQuOTQ2ODg3IEMxNy4wNjI4MDQxLDE0LjUxNDg3ODIgMTcuMTE5NjMzNywxMy44ODc5MTQzIDE2Ljc3NzQ3MzIsMTMuNDAxNDg4OCBMMTQuMDkzNzk0MSw5LjYxMjk2Mjg2IFoiIGlkPSLot6/lvoQiIGZpbGw9IiNDNEM2RDIiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNi43Nzc2MDcyLDE4LjQ2NTY5MjYgQzI2LjU3MjE4OTIsMTguMTc2ODkzOSAyNi4yMTIzNjczLDE4LjAwMTAzNTggMjUuODI0Nzg1NywxOCBMMTkuMTc3NTc5MiwxOCBDMTguNzg3OTkxNiwxNy45OTkzMjg3IDE4LjQyNTU5OTcsMTguMTc1NDAxMyAxOC4yMTkxMTksMTguNDY1NjkyNiBMMTYuMTcyNTI4LDIxLjM0Mzk4ODIgQzE1LjkwOTMyMjQsMjEuNzEyNDg4OSAxNS45NTA0ODgzLDIyLjE4ODc0OSAxNi4yNzQwMTIsMjIuNTE4MDg5NCBMMjIuMDY5ODczMSwyOC40NjI5MjU0IEMyMi4yNzIyNDQ4LDI4LjY3MDg2NCAyMi42MjgxMzk4LDI4LjY5NTI3ODcgMjIuODY0Nzg4LDI4LjUxNzQ1NzkgQzIyLjg4NzA1NjQsMjguNTAwNzI1MSAyMi45MDc4MDY0LDI4LjQ4MjQ5MjQgMjIuOTI2ODQ5NCwyOC40NjI5MjU0IEwyOC43MjI3MTA1LDIyLjUxODA4OTQgQzI5LjA0ODAyNjYsMjIuMTg5ODc1IDI5LjA5MTQ4NDYsMjEuNzEzNTQ1MiAyOC44Mjk4MzI1LDIxLjM0Mzk4ODIgTDI2Ljc3NzYwNzIsMTguNDY1NjkyNiBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjN0Y4Mjk2IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUuNTgwOTM0MiwzLjc0NDMxMjcyIEMyNS4yNjQ5MDY1LDMuMjgyNzI4MTEgMjQuNzExMzM0MywzLjAwMTY1NTQ5IDI0LjExNTA1NSwzIEwxMy44ODg1ODM0LDMgQzEzLjI4OTIxNzksMi45OTg5MjcwMSAxMi43MzE2OTE5LDMuMjgwMzQyNDYgMTIuNDE0MDI5MiwzLjc0NDMxMjc0IEw5LjI2NTQyNzY4LDguMzQ0NjY5ODMgQzguODYwNDk2MDMsOC45MzM2NDE0OSA4LjkyMzgyODE1LDkuNjk0ODQ0MzMgOS40MjE1NTY5LDEwLjIyMTIyNjUgTDE4LjMzODI2NjMsMTkuNzIyODEwNiBDMTguNjQ5NjA3NCwyMC4wNTUxNTcxIDE5LjE5NzEzODIsMjAuMDk0MTc5MSAxOS41NjEyMTI0LDE5LjgwOTk2OTUgQzE5LjU5NTQ3MTQsMTkuNzgzMjI1NSAxOS42MjczOTQ1LDE5Ljc1NDA4NDMgMTkuNjU2NjkxNCwxOS43MjI4MTA2IEwyOC41NzM0MDA4LDEwLjIyMTIyNjUgQzI5LjA3Mzg4NzEsOS42OTY2NDM5NSAyOS4xNDA3NDU2LDguOTM1MzI5ODggMjguNzM4MjAzOCw4LjM0NDY2OTgyIEwyNS41ODA5MzQyLDMuNzQ0MzEyNzIgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iIzRDNEY2MCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9InNwYXJrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgMTAuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0LjAwMDAwMCwgNC42MDAwMDApIHJvdGF0ZSg0Ny4wMDAwMDApIHRyYW5zbGF0ZSgtMTQuMDAwMDAwLCAtNC42MDAwMDApICIgeD0iMTAiIHk9IjQiIHdpZHRoPSI4IiBoZWlnaHQ9IjEuMiIgcng9IjAuNiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2i5aSH5Lu9IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgOC42MDAwMDApIHJvdGF0ZSg0Ny4wMDAwMDApIHRyYW5zbGF0ZSgtNC4wMDAwMDAsIC04LjYwMDAwMCkgIiB4PSIwLjUiIHk9IjgiIHdpZHRoPSI3IiBoZWlnaHQ9IjEuMiIgcng9IjAuNiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2i5aSH5Lu9LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5LjI1MDAwMCwgMTUuNjAwMDAwKSByb3RhdGUoNDcuMDAwMDAwKSB0cmFuc2xhdGUoLTE5LjI1MDAwMCwgLTE1LjYwMDAwMCkgIiB4PSIxNyIgeT0iMTUiIHdpZHRoPSI0LjUiIGhlaWdodD0iMS4yIiByeD0iMC42Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IuakreWchuW9oiIgY3g9IjEwIiBjeT0iMC41IiByPSIxIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2i5aSH5Lu9LTMiIGN4PSIwLjUiIGN5PSI1IiByPSIxIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2i5aSH5Lu9LTQiIGN4PSIxNi41IiBjeT0iMTIuNSIgcj0iMSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},src:I.first_nft_image||"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzNweCIgaGVpZ2h0PSIzM3B4IiB2aWV3Qm94PSIwIDAgMzMgMzMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYxLjIgKDg5NjUzKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5Ub2tlbnM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnlLvmnb8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NzUuMDAwMDAwLCAtMzEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJUb2tlbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ2My4wMDAwMDAsIDE4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ik1haW4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgMTMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LjA5Mzc5NDEsOS42MTI5NjI4NiBDMTMuODI1MTcwNSw5LjIzMjgzNDcgMTMuMzU0NjM0MSw5LjAwMTM2MzM1IDEyLjg0Nzc5NjcsOSBMNC4xNTUyOTU4Niw5IEMzLjY0NTgzNTIxLDguOTk5MTE2MzYgMy4xNzE5MzgxMiw5LjIzMDg3MDA1IDIuOTAxOTI0ODUsOS42MTI5NjI4NyBMMC4yMjU2MTM1MjcsMTMuNDAxNDg4OCBDLTAuMTE4NTc4MzcxLDEzLjg4NjUyMzggLTAuMDY0NzQ2MDY4OCwxNC41MTMzOTYyIDAuMzU4MzIzMzY0LDE0Ljk0Njg4NyBMNy45Mzc1MjYzNCwyMi43NzE3MTM4IEM4LjIwMjE2NjI4LDIzLjA0NTQxMDcgOC42Njc1Njc0MywyMy4wNzc1NDY0IDguOTc3MDMwNTIsMjIuODQzNDkxNiBDOS4wMDYxNTA3MywyMi44MjE0NjcyIDkuMDMzMjg1MzEsMjIuNzk3NDY4NiA5LjA1ODE4NzY5LDIyLjc3MTcxMzggTDE2LjYzNzM5MDcsMTQuOTQ2ODg3IEMxNy4wNjI4MDQxLDE0LjUxNDg3ODIgMTcuMTE5NjMzNywxMy44ODc5MTQzIDE2Ljc3NzQ3MzIsMTMuNDAxNDg4OCBMMTQuMDkzNzk0MSw5LjYxMjk2Mjg2IFoiIGlkPSLot6/lvoQiIGZpbGw9IiNDNEM2RDIiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNi43Nzc2MDcyLDE4LjQ2NTY5MjYgQzI2LjU3MjE4OTIsMTguMTc2ODkzOSAyNi4yMTIzNjczLDE4LjAwMTAzNTggMjUuODI0Nzg1NywxOCBMMTkuMTc3NTc5MiwxOCBDMTguNzg3OTkxNiwxNy45OTkzMjg3IDE4LjQyNTU5OTcsMTguMTc1NDAxMyAxOC4yMTkxMTksMTguNDY1NjkyNiBMMTYuMTcyNTI4LDIxLjM0Mzk4ODIgQzE1LjkwOTMyMjQsMjEuNzEyNDg4OSAxNS45NTA0ODgzLDIyLjE4ODc0OSAxNi4yNzQwMTIsMjIuNTE4MDg5NCBMMjIuMDY5ODczMSwyOC40NjI5MjU0IEMyMi4yNzIyNDQ4LDI4LjY3MDg2NCAyMi42MjgxMzk4LDI4LjY5NTI3ODcgMjIuODY0Nzg4LDI4LjUxNzQ1NzkgQzIyLjg4NzA1NjQsMjguNTAwNzI1MSAyMi45MDc4MDY0LDI4LjQ4MjQ5MjQgMjIuOTI2ODQ5NCwyOC40NjI5MjU0IEwyOC43MjI3MTA1LDIyLjUxODA4OTQgQzI5LjA0ODAyNjYsMjIuMTg5ODc1IDI5LjA5MTQ4NDYsMjEuNzEzNTQ1MiAyOC44Mjk4MzI1LDIxLjM0Mzk4ODIgTDI2Ljc3NzYwNzIsMTguNDY1NjkyNiBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjN0Y4Mjk2IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUuNTgwOTM0MiwzLjc0NDMxMjcyIEMyNS4yNjQ5MDY1LDMuMjgyNzI4MTEgMjQuNzExMzM0MywzLjAwMTY1NTQ5IDI0LjExNTA1NSwzIEwxMy44ODg1ODM0LDMgQzEzLjI4OTIxNzksMi45OTg5MjcwMSAxMi43MzE2OTE5LDMuMjgwMzQyNDYgMTIuNDE0MDI5MiwzLjc0NDMxMjc0IEw5LjI2NTQyNzY4LDguMzQ0NjY5ODMgQzguODYwNDk2MDMsOC45MzM2NDE0OSA4LjkyMzgyODE1LDkuNjk0ODQ0MzMgOS40MjE1NTY5LDEwLjIyMTIyNjUgTDE4LjMzODI2NjMsMTkuNzIyODEwNiBDMTguNjQ5NjA3NCwyMC4wNTUxNTcxIDE5LjE5NzEzODIsMjAuMDk0MTc5MSAxOS41NjEyMTI0LDE5LjgwOTk2OTUgQzE5LjU5NTQ3MTQsMTkuNzgzMjI1NSAxOS42MjczOTQ1LDE5Ljc1NDA4NDMgMTkuNjU2NjkxNCwxOS43MjI4MTA2IEwyOC41NzM0MDA4LDEwLjIyMTIyNjUgQzI5LjA3Mzg4NzEsOS42OTY2NDM5NSAyOS4xNDA3NDU2LDguOTM1MzI5ODggMjguNzM4MjAzOCw4LjM0NDY2OTgyIEwyNS41ODA5MzQyLDMuNzQ0MzEyNzIgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iIzRDNEY2MCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9InNwYXJrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgMTAuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0LjAwMDAwMCwgNC42MDAwMDApIHJvdGF0ZSg0Ny4wMDAwMDApIHRyYW5zbGF0ZSgtMTQuMDAwMDAwLCAtNC42MDAwMDApICIgeD0iMTAiIHk9IjQiIHdpZHRoPSI4IiBoZWlnaHQ9IjEuMiIgcng9IjAuNiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2i5aSH5Lu9IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgOC42MDAwMDApIHJvdGF0ZSg0Ny4wMDAwMDApIHRyYW5zbGF0ZSgtNC4wMDAwMDAsIC04LjYwMDAwMCkgIiB4PSIwLjUiIHk9IjgiIHdpZHRoPSI3IiBoZWlnaHQ9IjEuMiIgcng9IjAuNiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2i5aSH5Lu9LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5LjI1MDAwMCwgMTUuNjAwMDAwKSByb3RhdGUoNDcuMDAwMDAwKSB0cmFuc2xhdGUoLTE5LjI1MDAwMCwgLTE1LjYwMDAwMCkgIiB4PSIxNyIgeT0iMTUiIHdpZHRoPSI0LjUiIGhlaWdodD0iMS4yIiByeD0iMC42Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IuakreWchuW9oiIgY3g9IjEwIiBjeT0iMC41IiByPSIxIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2i5aSH5Lu9LTMiIGN4PSIwLjUiIGN5PSI1IiByPSIxIj48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2i5aSH5Lu9LTQiIGN4PSIxNi41IiBjeT0iMTIuNSIgcj0iMSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",alt:"Logo",className:"w-10 h-10 mr-2 rounded-xl"})}),(0,M.jsx)("td",{className:"px-5 py-5 text-sm bg-white dark:bg-gray-700",children:(0,M.jsx)("div",{className:"flex items-center justify-between text-lg text-gray-700 dark:text-white ",children:(0,M.jsx)("p",{children:I.chain_name})})}),(0,M.jsx)("td",{className:"px-5 py-5 text-sm bg-white dark:text-white dark:bg-gray-700 ",children:I.contract_address}),(0,M.jsx)("td",{className:"px-5 py-5 text-sm bg-white dark:text-white dark:bg-gray-700 ",children:I.contract_type}),(0,M.jsx)("td",{className:"px-5 py-5 text-sm font-bold text-gray-800 bg-white dark:bg-gray-700 dark:text-white ",children:I.amount})]},I.contract_address||"")})),0===(null===t||void 0===t?void 0:t.length)&&!y&&(0,M.jsx)("tr",{className:"bg-white border-b border-gray-200 dark:bg-gray-700 rounded-xl",children:(0,M.jsx)("td",{colSpan:w.length,className:"px-8 py-8 text-sm text-center text-gray-400 bg-white dark:bg-gray-700",children:"No data"})}),y&&(0,M.jsx)("tr",{className:"bg-white border-b border-gray-200 dark:bg-gray-700 rounded-xl",children:(0,M.jsx)("td",{colSpan:w.length,className:"px-8 py-8 text-sm text-center text-gray-400 bg-gray-200 animate-pulse",children:"-"})})]})]})]})]})})},u=D},6386:function(I,g,e){"use strict";e.d(g,{C9:function(){return N},Ie:function(){return s},J4:function(){return l},bl:function(){return D},tp:function(){return j},xo:function(){return o},y8:function(){return A}});var M=e(4051),t=e.n(M),i=e(6154),c=e(7563);function n(I,g,e,M,t,i,c){try{var n=I[i](c),r=n.value}catch(a){return void e(a)}n.done?g(r):Promise.resolve(r).then(M,t)}var r="9de81da143935703a5234c3fb8e571d8fbc0e1e3",a=function(){var I,g=(I=t().mark((function I(g){var e;return t().wrap((function(I){for(;;)switch(I.prev=I.next){case 0:return I.prev=0,I.next=3,i.Z.get(c.stringifyUrl({url:"https://datalayer.decommas.net/datalayer/api/v1/"+g.url,query:g.query}),{method:g.type||"GET",headers:g.headers});case 3:return e=I.sent,I.abrupt("return",e.data);case 7:I.prev=7,I.t0=I.catch(0),I.t0.response?(console.log("Error response data:",I.t0.response.data),console.log("Status code:",I.t0.response.status)):I.t0.request?console.log("No response received:",I.t0.request):console.log("Error message:",I.t0.message);case 10:case"end":return I.stop()}}),I,null,[[0,7]])})),function(){var g=this,e=arguments;return new Promise((function(M,t){var i=I.apply(g,e);function c(I){n(i,M,t,c,r,"next",I)}function r(I){n(i,M,t,c,r,"throw",I)}c(void 0)}))});return function(I){return g.apply(this,arguments)}}(),s=function(I,g){try{return a({url:"transactions/".concat(I,"?networks=").concat(g,"&api-key=").concat(r)})}catch(e){console.log(e)}},N=function(I,g){return a({url:"tokens/".concat(g,"?networks=").concat(I,"&verified=true&api-key=").concat(r)})},A=function(I,g){try{return a({url:"coins/".concat(g,"?networks=").concat(I,"&api-key=").concat(r)})}catch(e){console.log("reqbalance error ==========>>>>>",e)}},l=function(I,g){return a({url:"".concat(I,"/tokens/").concat(g,"/nft_token_ids/?key=").concat(r,"&format=JSON")})},j=function(I,g,e){return a({url:"nft_metadata/".concat(I,"/").concat(g,"/").concat(e,"?api-key=").concat(r)})},o=function(I){return a({url:"nfts/".concat(I,"/?api-key=").concat(r)})},D=function(I,g){return a({url:"pricing/historical_by_addresses_v2/".concat(I,"/USD/").concat(g,"/?key=").concat(r,"&format=JSON")})}}},function(I){I.O(0,[897,154,542,774,888,179],(function(){return g=1634,I(I.s=g);var g}));var g=I.O();_N_E=g}]);