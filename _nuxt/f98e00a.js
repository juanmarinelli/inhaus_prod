(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2,4,10,12],{293:function(t,e,r){t.exports=r.p+"img/logo.e9b88b5.png"},294:function(t,e,r){"use strict";r.r(e);r(36),r(26),r(35),r(55),r(56);var o=r(21),n=(r(15),r(30),r(84)),l=r(43);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"carrito-modal",components:{TablaCarrito:r(295).default},props:{},mounted:function(){},data:function(){return{alert:""}},methods:d(d({},Object(l.b)("cart",["setCompra","setEmptyCart"])),{},{closeCarrito:function(){this.$emit("cerrar-carrito",!1)},vaciarCarrito:function(){this.setEmptyCart()},finalizarCompra:function(){if(this.user){var t=[this.cart];n.a.guardarCompra(this.user.id,t),this.vaciarCarrito(),this.closeCarrito()}else this.alert="Debes iniciar sesion para finalizar la compra"}}),computed:d(d(d({},Object(l.c)("user",["user"])),Object(l.c)("cart",["cart","showCart"])),{},{sumTotal:function(){var t=0;return this.cart.forEach((function(e){t=parseFloat(t)+parseFloat(e.total)})),t}})},v=r(54),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.showCart,expression:"showCart"}],staticClass:"relative z-10",attrs:{"aria-labelledby":"slide-over-title",role:"dialog","aria-modal":"true"}},[e("div",{staticClass:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}),t._v(" "),e("div",{staticClass:"fixed inset-0 overflow-hidden"},[e("div",{staticClass:"absolute inset-0 overflow-hidden"},[e("div",{staticClass:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"},[e("div",{staticClass:"pointer-events-auto w-screen max-w-md"},[e("div",{staticClass:"flex h-full flex-col overflow-y-scroll bg-white dark:bg-gray-900 shadow-xl"},[e("div",{staticClass:"flex-1 overflow-y-auto py-6 px-4 sm:px-6"},[e("div",{staticClass:"flex items-start justify-between"},[e("h2",{staticClass:"text-lg font-medium text-gray-900 dark:text-gray-200",attrs:{id:"slide-over-title"}},[t._v("Carrito de compra")]),t._v(" "),e("div",{staticClass:"ml-3 flex h-7 items-center"},[e("button",{staticClass:"-m-2 p-2 text-gray-400 hover:text-gray-500",attrs:{type:"button"},on:{click:function(e){return t.closeCarrito()}}},[e("span",{staticClass:"sr-only"},[t._v("Cerrar panel")]),t._v(" "),e("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"}})])])])]),t._v(" "),e("div",{staticClass:"mt-8"},[e("div",{staticClass:"flow-root"},[e("TablaCarrito",{attrs:{productos:t.cart}})],1)])]),t._v(" "),e("div",{staticClass:"border-t border-gray-200 py-6 px-4 sm:px-6"},[e("div",{staticClass:"flex justify-between text-base font-medium text-gray-900"},[e("p",[t._v("Subtotal")]),t._v(" "),e("p",[t._v("$"+t._s(t.sumTotal))])]),t._v(" "),e("p",{staticClass:"mt-0.5 text-sm text-gray-500"},[t._v("Envio y pago serán calculados en el checkout.")]),t._v(" "),e("div",{staticClass:"mt-6"},[e("NuxtLink",{staticClass:"cursor-pointer flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700",attrs:{to:"/checkout"}},[t._v("\n                  Finalizar compra\n            ")])],1),t._v(" "),e("div",{staticClass:"mt-6 flex justify-center text-center text-sm text-gray-500"},[e("p",[t._v("\n                  o "),e("button",{staticClass:"font-medium text-indigo-600 hover:text-indigo-500",attrs:{type:"button"},on:{click:function(e){return t.closeCarrito()}}},[t._v("Continuar comprando"),e("span",{attrs:{"aria-hidden":"true"}},[t._v(" →")])])])])])])])])])])])}),[],!1,null,"0b0ca6dd",null);e.default=component.exports},295:function(t,e,r){"use strict";r.r(e);r(36),r(26),r(35),r(15),r(55),r(30),r(56);var o=r(21),n=r(43);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"tabla-carrito",props:{productos:{type:Array,required:!0}},mounted:function(){},data:function(){return{}},methods:c(c({},Object(n.b)("cart",["toDeleteProduct"])),{},{deleteProduct:function(t){console.log(t),this.toDeleteProduct(t)}}),computed:{}},f=r(54),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",[t.productos.length>0?e("ul",{staticClass:"-my-6 divide-y divide-gray-200",attrs:{role:"list"}},t._l(t.productos,(function(r,i){return e("li",{key:i,staticClass:"flex py-6"},[e("div",{staticClass:"h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"},[e("img",{staticClass:"h-full w-full object-cover object-center",attrs:{src:r.imagen,alt:r.articulo}})]),t._v(" "),e("div",{staticClass:"ml-4 flex flex-1 flex-col"},[e("div",[e("div",{staticClass:"flex justify-between text-base font-medium text-gray-900 dark:text-gray-200"},[e("h3",[e("a",{attrs:{href:"#"}},[t._v("\t"+t._s(r.articulo)+" ")])]),t._v(" "),e("p",{staticClass:"ml-4"},[t._v("$"+t._s(r.precio))])]),t._v(" "),e("p",{staticClass:"mt-1 text-sm text-gray-500 dark:text-gray-100"},[t._v(t._s(r.articulo))])]),t._v(" "),e("div",{staticClass:"flex flex-1 items-end justify-between text-sm"},[e("p",{staticClass:"text-gray-500 dark:text-gray-100"},[t._v("Cantidad "+t._s(r.cantidad))]),t._v(" "),e("div",{staticClass:"flex"},[e("button",{staticClass:"font-medium text-indigo-600 hover:text-indigo-500",attrs:{type:"button"},on:{click:function(e){return t.deleteProduct(r)}}},[t._v("Eliminar")])])])])])})),0):e("ul",{staticClass:"-my-6 divide-y divide-gray-200",attrs:{role:"list"}},[e("li",{staticClass:"flex py-6"},[t._v("\n                           No hay productos en el carrito\n                     ")])])])}),[],!1,null,"2b9a83ae",null);e.default=component.exports},296:function(t,e,r){"use strict";r.r(e);r(36),r(26),r(35),r(15),r(55),r(30),r(56);var o=r(21),n=r(294),l=r(43);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"nav-bar",props:{},components:{CarritoModal:n.default},data:function(){return{darkMode:!0}},methods:d(d({changeTheme:function(){this.darkMode?(localStorage.setItem("theme","light"),this.darkMode=!1,document.documentElement.classList.remove("dark")):(this.darkMode=!0,localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark"))},verCarrito:function(){this.toSetOpenCartStorage(!0)},closeCarrito:function(){this.toSetOpenCartStorage(!1)},logOut:function(){this.toSetUserStorage(null),this.$router.push("/").catch((function(){}))}},Object(l.b)("user",["setUser","toSetUserStorage"])),Object(l.b)("cart",["setCart","toSetOpenCartStorage"])),computed:d(d(d({},Object(l.c)("user",["user"])),Object(l.c)("cart",["cart","cartQty","showCart"])),{},{categories:function(){return this.$store.getters.categories}}),created:function(){this.$store.dispatch("getCategories")}},v=r(54),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"relative mx-auto"},[e("nav",{staticClass:"bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow-lg"},[e("div",{staticClass:"flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"},[e("NuxtLink",{staticClass:"flex items-center",attrs:{to:"/"}},[e("img",{staticClass:"mr-3 h-6 sm:h-12",attrs:{src:r(293),alt:"Pilar Medicina"}})]),t._v(" "),e("div",{staticClass:"flex items-center lg:order-2"},[t.user?e("a",{staticClass:"text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800",on:{click:function(e){return t.logOut()}}},[t._v("\n                      Logout"),e("svg",{staticClass:"w-6 h-6",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"}})])]):t._e(),t._v(" "),t.user?t._e():e("router-link",{staticClass:"text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800",attrs:{to:"/login"}},[t._v("\n                       Login\n                  ")]),t._v(" "),e("a",{staticClass:"dark:text-white text-gray-800 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800",attrs:{href:"#"},on:{click:function(e){return t.verCarrito()}}},[e("svg",{staticClass:"w-6 h-6",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"}})]),t._v(" "),e("span",{staticClass:"flex absolute -mt-5 ml-5"},[e("span",{staticClass:"inline-flex absolute -top-3 -right-3 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900"},[t._v(t._s(t.cartQty))])])]),t._v(" "),e("button",{staticClass:"inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",attrs:{"data-collapse-toggle":"mobile-menu-2",type:"button","aria-controls":"mobile-menu-2","aria-expanded":"false"}},[e("span",{staticClass:"sr-only"},[t._v("Open main menu")]),t._v(" "),e("svg",{staticClass:"w-6 h-6",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})]),t._v(" "),e("svg",{staticClass:"hidden w-6 h-6",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])],1),t._v(" "),e("div",{staticClass:"hidden justify-between items-center w-full lg:flex lg:w-2/3 lg:order-1",attrs:{id:"mobile-menu-2"}},[e("div",{staticClass:"items-center hidden space-x-2 md:flex-1 md:flex md:mr-auto md:ml-5 justify-center"},[e("div",{staticClass:"relative w-1/2"},[e("input",{staticClass:"bg-gray-50 shadow rounded-full border-2 border-pink-300 p-3 w-full text-sm",attrs:{type:"text",placeholder:"Buscá tu producto..."}}),t._v(" "),e("div",{staticClass:"absolute top-0 right-0 p-4 pr-3 text-gray-800"},[e("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}})])])])])])],1)]),t._v(" "),e("nav",{staticClass:"bg-gray-200 border-t-2 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow-lg"},[e("ul",{staticClass:"flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0"},t._l(t.categories,(function(r,i){return e("li",{key:i},[e("NuxtLink",{staticClass:"block py-2 pr-4 pl-3 text-sm text-gray-800 rounded lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white",attrs:{to:"/"+r.slag}},[t._v("\n                                "+t._s(r.nombre)+"\n                                 ")])],1)})),0)])]),t._v(" "),e("CarritoModal",{attrs:{showCart:t.showCart},on:{"cerrar-carrito":function(e){return t.closeCarrito()}}})],1)}),[],!1,null,"f568690a",null);e.default=component.exports;installComponents(component,{CarritoModal:r(294).default})},298:function(t,e,r){"use strict";r.r(e);r(36),r(26),r(35),r(15),r(55),r(30),r(56);var o=r(21),n=r(43);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"producto-d",props:{producto:{type:Object,required:!0}},mounted:function(){},data:function(){return{cantidad:1}},methods:c(c({},Object(n.b)("cart",["toAddToCart"])),{},{agregarAlCarrito:function(){var t=c(c({},this.producto),{},{cantidad:this.cantidad});this.toAddToCart(t),this.cantidad=1},sumar:function(){this.cantidad++},restar:function(){this.cantidad--,this.cantidad<0&&(this.cantidad=1)}}),computed:{}},f=r(54),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full px-3 mb-6 lg:mb-0 rounded-lg flex flex-col"},[e("div",{staticClass:"relative bg-gray-50 flex-1"},[e("span",{staticClass:"absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500"},[t._v("-15%")]),t._v(" "),e("NuxtLink",{staticClass:"block",attrs:{to:"/productos/"+t.producto.id}},[e("img",{staticClass:"w-full h-64 object-cover rounded-lg",attrs:{src:t.producto.imagen,alt:t.producto.articulo}})]),t._v(" "),e("div",{staticClass:"px-2 pb-6 mt-2 flex-1"},[e("NuxtLink",{staticClass:"block px-2 mb-2 flex-1",attrs:{to:"/productos/"+t.producto.id}},[e("h3",{staticClass:"mb-2 text-md font-normal font-heading"},[t._v(t._s(t.producto.articulo))])]),t._v(" "),e("div",{staticClass:"flex justify-between items-center flex-1"},[e("p",{staticClass:"text-lg font-bold font-heading text-blue-500"},[e("span",[t._v("$"+t._s(t.producto.precio))]),t._v(" "),e("span",{staticClass:"text-xs text-gray-500 font-semibold font-heading line-through"},[t._v("$"+t._s(t.producto.precio))])]),t._v(" "),e("div",{staticClass:"inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"},[e("button",{staticClass:"py-2 hover:text-gray-700",on:{click:function(e){return t.restar()}}},[e("svg",{attrs:{width:"12",height:"2",viewbox:"0 0 12 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{opacity:"0.35"}},[e("rect",{attrs:{x:"12",width:"2",height:"12",transform:"rotate(90 12 0)",fill:"currentColor"}})])])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cantidad,expression:"cantidad"}],staticClass:"w-12 m-0 px-2 py-2 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md",attrs:{readonly:"",type:"number",placeholder:"1"},domProps:{value:t.cantidad},on:{input:function(e){e.target.composing||(t.cantidad=e.target.value)}}}),t._v(" "),e("button",{staticClass:"py-2 hover:text-gray-700",on:{click:function(e){return t.sumar()}}},[e("svg",{attrs:{width:"12",height:"12",viewbox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{opacity:"0.35"}},[e("rect",{attrs:{x:"5",width:"2",height:"12",fill:"currentColor"}}),e("rect",{attrs:{x:"12",y:"5",width:"2",height:"12",transform:"rotate(90 12 5)",fill:"currentColor"}})])])])])]),t._v(" "),e("div",{staticClass:"mt-2 w-full flex"},[e("a",{staticClass:"cursor-pointer items-center justify-center text-white w-full bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",on:{click:function(e){return t.agregarAlCarrito()}}},[t._v("\n          Agregar al carrito "),e("svg",{staticClass:"w-4 h-4 inline",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"}})])])])],1)],1)])}),[],!1,null,"31108d9b",null);e.default=component.exports},324:function(t,e,r){"use strict";r.r(e);r(36),r(26),r(35),r(15),r(55),r(30),r(56);var o=r(5),n=r(21),l=(r(57),r(84)),c=r(43),d=r(298);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"categorias-detalle",components:{NavBar:r(296).default,Producto:d.default},props:{},mounted:function(){},data:function(){return{cantidad:1,products:[],categoria:"",show:!1}},methods:v(v({},Object(c.b)("cart",["toAddToCart"])),{},{agregarAlCarrito:function(){var t=v(v({},this.producto),{},{cantidad:this.cantidad});this.toAddToCart(t),this.$router.push("/"),this.cantidad=1},sumar:function(){this.cantidad++},restar:function(){this.cantidad--,this.cantidad<0&&(this.cantidad=1)},closeDetalle:function(){this.$router.push("/")},getProductsCategory:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.a.getProductsCategory(t);case 2:e.products=r.sent,e.categoria=e.products[0].nombre,console.log(t);case 5:case"end":return r.stop()}}),r)})))()}}),computed:v(v({},Object(c.c)("cart",["getCantProd"])),{},{categories:function(){return this.$store.getters.categories}}),created:function(){this.getProductsCategory(this.$route.params.categories)}},h=r(54),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("NavBar"),t._v(" "),e("section",{staticClass:"py-6 bg-gray-100"},[e("p",{staticClass:"text-sm leading-3 text-gray-600 font-normal my-4 ml-6"},[t._v("\n                    Home - "+t._s(t.categoria)+"\n                ")]),t._v(" "),e("div",{staticClass:"container mx-auto px-4 py-12"},[e("div",{staticClass:"flex flex-wrap -mx-4 mb-20 items-center justify-between"},[e("div",{staticClass:"w-full lg:w-auto px-4 mb-12 xl:mb-0"},[e("h2",{staticClass:"text-3xl font-bold font-heading"},[e("span",[t._v(t._s(t.products.length)+" Productos encontrados para  "+t._s(t.categoria))])])]),t._v(" "),e("div",{staticClass:"w-full lg:w-auto px-4 flex flex-wrap items-center"},[t._m(0),t._v(" "),e("a",{staticClass:"inline-block mr-3 h-full p-4 bg-white rounded-md border",attrs:{href:"#"}},[e("svg",{attrs:{width:"20",height:"24",viewbox:"0 0 20 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"4",height:"4",rx:"2",fill:"#2B51C6"}}),e("rect",{attrs:{x:"8",width:"4",height:"4",rx:"2",fill:"#2B51C6"}}),e("rect",{attrs:{x:"16",width:"4",height:"4",rx:"2",fill:"#2B51C6"}}),e("rect",{attrs:{y:"10",width:"4",height:"4",rx:"2",fill:"#2B51C6"}}),e("rect",{attrs:{x:"8",y:"10",width:"4",height:"4",rx:"2",fill:"#2B51C6"}}),e("rect",{attrs:{x:"16",y:"10",width:"4",height:"4",rx:"2",fill:"#2B51C6"}}),e("rect",{attrs:{y:"20",width:"4",height:"4",rx:"2",fill:"#2B51C6"}}),e("rect",{attrs:{x:"8",y:"20",width:"4",height:"4",rx:"2",fill:"#2B51C6"}}),e("rect",{attrs:{x:"16",y:"20",width:"4",height:"4",rx:"2",fill:"#2B51C6"}})])])])]),t._v(" "),e("div",{staticClass:"flex flex-wrap -mx-3 mb-24"},[e("div",{staticClass:"w-full lg:hidden px-3"},[e("div",{staticClass:"flex flex-wrap -mx-2"},[e("div",{staticClass:"w-1/2 md:w-1/3 px-2 mb-4"},[e("div",{staticClass:"py-6 px-2 text-center bg-gray-50"},[e("a",{staticClass:"font-bold font-heading",attrs:{href:"#"}},[t._v("Categorias")]),t._v(" "),e("ul",{staticClass:"hidden text-left mt-6"},t._l(t.categories,(function(r,i){return e("li",{key:i,staticClass:"mb-4"},[e("a",{attrs:{href:"#"}},[t._v(t._s(r.nombre))])])})),0)])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"w-1/2 md:w-1/3 px-2 mb-4"},[e("div",{staticClass:"py-6 px-4 text-center bg-gray-50"},[e("a",{staticClass:"font-bold font-heading",attrs:{href:"#"}},[t._v("Size")]),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"hidden mt-4 text-right"},[e("a",{staticClass:"inline-flex underline text-blue-300 hover:text-blue-400",attrs:{href:"#"}},[e("span",{staticClass:"mr-2"},[t._v("Show all")]),t._v(" "),e("svg",{attrs:{width:"14",height:"27",viewbox:"0 0 14 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M6.83901 26.2775L0.151884 19.5904L0.987775 18.7545L6.66766 24.4343L6.66347 0.782814L7.84208 0.782814L7.84626 24.4343L13.1082 19.1724L13.9441 20.0083L7.6749 26.2775C7.44407 26.5083 7.06985 26.5083 6.83901 26.2775Z",fill:"#3C60D9"}})])])])])]),t._v(" "),t._m(4),t._v(" "),t._m(5)])]),t._v(" "),e("div",{staticClass:"hidden lg:block w-1/4 px-3"},[e("div",{staticClass:"mb-6 py-10 px-12 bg-gray-50"},[e("h3",{staticClass:"mb-8 text-2xl font-bold font-heading"},[t._v("Categorías")]),t._v(" "),e("ul",t._l(t.categories,(function(r,i){return e("li",{key:i,staticClass:"mb-4"},[e("a",{staticClass:"text-md",attrs:{href:"#"}},[t._v(t._s(r.nombre))])])})),0)]),t._v(" "),t._m(6)]),t._v(" "),e("div",{staticClass:"w-full lg:w-3/4 px-3"},[e("div",{staticClass:"grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4"},t._l(t.products,(function(t,i){return e("Producto",{key:i,attrs:{producto:t}})})),1)])])])])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full sm:w-auto mb-4 sm:mb-0 mr-5"},[e("select",{staticClass:"px-4 mx-2 py-4 bg-white text-lg border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md",attrs:{name:"",id:""}},[e("option",{attrs:{value:"1"}},[t._v("Más vendidos")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("Por precio")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("Nuevos")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-1/2 md:w-1/3 px-2 mb-4"},[e("div",{staticClass:"py-6 px-2 text-center bg-gray-50"},[e("a",{staticClass:"font-bold font-heading",attrs:{href:"#"}},[t._v("Colors")]),t._v(" "),e("div",{staticClass:"hidden mt-6 flex flex-wrap"},[e("button",{staticClass:"mr-4 mb-2 rounded-full border border-blue-300 p-1"},[e("div",{staticClass:"rounded-full bg-blue-300 w-5 h-5"})]),t._v(" "),e("button",{staticClass:"mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1"},[e("div",{staticClass:"rounded-full bg-orange-300 w-5 h-5"})]),t._v(" "),e("button",{staticClass:"mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1"},[e("div",{staticClass:"rounded-full bg-gray-900 w-5 h-5"})]),t._v(" "),e("button",{staticClass:"mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1"},[e("div",{staticClass:"rounded-full bg-red-300 w-5 h-5"})]),t._v(" "),e("button",{staticClass:"mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1"},[e("div",{staticClass:"rounded-full bg-green-300 w-5 h-5"})]),t._v(" "),e("button",{staticClass:"mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1"},[e("div",{staticClass:"rounded-full bg-pink-300 w-5 h-5"})]),t._v(" "),e("button",{staticClass:"mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1"},[e("div",{staticClass:"rounded-full bg-yellow-300 w-5 h-5"})]),t._v(" "),e("button",{staticClass:"mr-4 mb-2 rounded-full border border-transparent hover:border-gray-300 p-1"},[e("div",{staticClass:"rounded-full bg-gray-100 w-5 h-5"})])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-1/2 md:w-1/3 px-2 mb-4"},[e("div",{staticClass:"py-6 px-4 text-center bg-gray-50"},[e("a",{staticClass:"font-bold font-heading",attrs:{href:"#"}},[t._v("Price")]),t._v(" "),e("div",{staticClass:"hidden mt-6"},[e("input",{staticClass:"w-full mb-4 outline-none appearance-none bg-gray-100 h-1 rounded cursor-pointer",attrs:{type:"range",min:"1",max:"100",value:"50"}}),t._v(" "),e("div",{staticClass:"flex justify-between"},[e("span",{staticClass:"inline-block text-lg font-bold font-heading text-blue-300"},[t._v("$0")]),t._v(" "),e("span",{staticClass:"inline-block text-lg font-bold font-heading text-blue-300"},[t._v("$289")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"hidden mt-6 flex flex-wrap -mx-2 -mb-2"},[e("button",{staticClass:"mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md"},[t._v("36")]),t._v(" "),e("button",{staticClass:"relative mb-2 mr-1 w-16 border rounded-md"},[t._v("\n                  37\n                  "),e("span",{staticClass:"absolute bottom-0 left-0 w-full py-px bg-blue-300"})]),t._v(" "),e("button",{staticClass:"mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md"},[t._v("38")]),t._v(" "),e("button",{staticClass:"mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md"},[t._v("39")]),t._v(" "),e("button",{staticClass:"mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md"},[t._v("40")]),t._v(" "),e("button",{staticClass:"mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md"},[t._v("41")]),t._v(" "),e("button",{staticClass:"mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md"},[t._v("42")]),t._v(" "),e("button",{staticClass:"mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md"},[t._v("43")]),t._v(" "),e("button",{staticClass:"mb-2 mr-1 w-16 py-1 border hover:border-gray-400 rounded-md"},[t._v("44")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-1/2 md:w-1/3 px-2 mb-4"},[e("div",{staticClass:"py-6 px-4 text-center bg-gray-50"},[e("a",{staticClass:"font-bold font-heading",attrs:{href:"#"}},[t._v("Location")]),t._v(" "),e("div",{staticClass:"hidden mt-6"},[e("label",{staticClass:"flex mb-3 items-center text-lg"},[e("input",{attrs:{type:"checkbox"}}),t._v(" "),e("span",{staticClass:"ml-2"},[t._v("Standard")])]),t._v(" "),e("label",{staticClass:"flex items-center text-lg"},[e("input",{attrs:{type:"checkbox"}}),t._v(" "),e("span",{staticClass:"ml-2"},[t._v("Next day (yes!)")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-1/2 md:w-1/3 px-2 mb-4"},[e("div",{staticClass:"py-6 px-4 text-center bg-gray-50"},[e("a",{staticClass:"font-bold font-heading",attrs:{href:"#"}},[t._v("Location")]),t._v(" "),e("input",{staticClass:"hidden mt-6 w-full px-8 py-4 bg-white border rounded-md",attrs:{type:"serach",placeholder:"City"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-6 py-10 px-12 bg-gray-50"},[e("h3",{staticClass:"mb-8 text-2xl font-bold font-heading"},[t._v("Precio")]),t._v(" "),e("div",[e("input",{staticClass:"w-full mb-4 outline-none appearance-none bg-gray-100 h-1 rounded cursor-pointer",attrs:{type:"range",min:"1",max:"100",value:"50"}}),t._v(" "),e("div",{staticClass:"flex justify-between"},[e("span",{staticClass:"inline-block text-lg font-bold font-heading text-blue-300"},[t._v("$0")]),t._v(" "),e("span",{staticClass:"inline-block text-lg font-bold font-heading text-blue-300"},[t._v("$45.000")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NavBar:r(296).default})}}]);