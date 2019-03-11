exports.ids=[39],exports.modules={239:function(t,e,o){"use strict";o.d(e,"l",function(){return r}),o.d(e,"t",function(){return n}),o.d(e,"g",function(){return l}),o.d(e,"j",function(){return c}),o.d(e,"c",function(){return d}),o.d(e,"k",function(){return _}),o.d(e,"d",function(){return f}),o.d(e,"q",function(){return m}),o.d(e,"h",function(){return v}),o.d(e,"o",function(){return h}),o.d(e,"f",function(){return $}),o.d(e,"r",function(){return y}),o.d(e,"a",function(){return w}),o.d(e,"p",function(){return x}),o.d(e,"m",function(){return k}),o.d(e,"e",function(){return C}),o.d(e,"b",function(){return D}),o.d(e,"i",function(){return S}),o.d(e,"s",function(){return F}),o.d(e,"n",function(){return z});const r=(t,{id:e})=>t.$axios.$get(`cartoon_role/${e}/stock_show`),n=(t,{id:e,amount:o})=>t.$axios.$post(`cartoon_role/${e}/buy_stock`,{amount:o}),l=(t,{bangumi_id:e,name:o,intro:r,avatar:n,alias:l})=>t.$axios.$post("cartoon_role/manager/create",{bangumi_id:e,name:o,intro:r,avatar:n,alias:l}),c=(t,form)=>t.$axios.$post("cartoon_role/manager/edit",form),d=(t,form)=>t.$axios.$post("cartoon_role/manager/user_create",form),_=(t,{id:e})=>t.$axios.$get(`cartoon_role/${e}/get_idol_deal`),f=(t,form)=>t.$axios.$post("cartoon_role/create_deal",form),m=(t,form)=>t.$axios.$post("cartoon_role/make_deal",form),v=(t,{id:e})=>t.$axios.$post("cartoon_role/delete_deal",{id:e}),h=t=>t.$axios.$get("cartoon_role/stock_meta"),$=(t,form)=>t.$axios.$post("cartoon_role/create_market_price_draft",form),y=(t,{is_agree:e,idol_id:o,draft_id:r})=>t.$axios.$post("cartoon_role/vote_market_price_draft",{is_agree:e,idol_id:o,draft_id:r}),w=(t,{idol_id:e,qq_group:o,lover_words:r,manager_id:n})=>t.$axios.$post("cartoon_role/change_idol_profile",{idol_id:e,qq_group:o,lover_words:r,manager_id:n}),x=t=>t.$axios.$get("cartoon_role/user_draft_work"),k=t=>t.$axios.$get("cartoon_role/can_use_income"),C=(t,{product_id:e,product_type:o,amount:r})=>t.$axios.$post("cartoon_role/create_buy_request",{product_id:e,product_type:o,amount:r}),D=(t,{order_id:e,result:o})=>t.$axios.$post("cartoon_role/check_product_request",{order_id:e,result:o}),S=(t,{order_id:e})=>t.$axios.$post("cartoon_role/delete_buy_request",{order_id:e}),F=(t,{order_id:e})=>t.$axios.$post("cartoon_role/over_buy_request",{order_id:e}),z=t=>t.$axios.$get("cartoon_role/get_mine_product_orders")},296:function(t,e){},335:function(t,e){},336:function(t,e){},337:function(t,e){},437:function(t,e,o){"use strict";o.r(e);var r=o(337),n=o.n(r);for(var l in r)"default"!==l&&function(t){o.d(e,t,function(){return r[t]})}(l);e.default=n.a},521:function(t,e,o){"use strict";o.r(e);o(335),o(2);var r=o(208),n=o.n(r),l=(o(336),o(209)),c=o.n(l),d=(o(296),o(205)),_=o.n(d),f=o(55),m=o(239),v={name:"RoleTrendingHall",components:{FlowList:f.a,"el-tag":_.a,"el-table":c.a,"el-table-column":n.a},data:()=>({deal:null,showDealDialog:!1,submitting:!1,buyCount:.01,minBuyCount:0,meta:null}),computed:{currentUserId(){return this.$store.state.login?this.$store.state.user.id:0},pocket(){return this.$store.state.login?+this.$store.state.user.pocket:0},maxBuyCount(){if(!this.deal)return 0;const t=parseFloat(this.pocket/this.deal.product_price).toFixed(2);return t-this.deal.last_count<0?t:this.deal.last_count},payAmount(){return this.deal&&this.buyCount?parseFloat(this.buyCount*this.deal.product_price).toFixed(2):0}},async asyncData({store:t}){await t.dispatch("flow/initData",{func:"getVirtualIdolDealList",type:"seenIds",sort:"active"})},head:{title:"交易所"},mounted(){this.getMetaInfo()},methods:{async getMetaInfo(){this.meta=await Object(m.o)(this)},computePriceText(t){const e=t.product_price-t.idol.stock_price;return e>0?"高于市场价":0===e?"等于市场价":"低于市场价"},computePriceColor(t){const e=t.product_price-t.idol.stock_price;return e>0?"danger":0===e?"info":"success"},makeADeal(t){if(!this.$store.state.login)return void this.$channel.$emit("sign-in");let e=parseFloat(.01/t.product_price).toFixed(2),o=t.product_price.toString().split(".")[1];o&&(1===o.length?e=Math.max(e,.1):2===o.length&&(e=Math.max(e,1))),this.minBuyCount=parseFloat(e).toFixed(2),this.deal=t,this.showDealDialog=!0},deleteMyDeal(t){this.$confirm("确定要终止交易吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await Object(m.h)(this,{id:t.id}),this.$toast.success("交易已终止"),setTimeout(()=>{window.location.reload()},1e3)}).catch(t=>{this.$toast.error(t)})},async submitDeal(){if(this.payAmount){if(this.pocket<this.payAmount)this.$toast.error("没有足够的虚拟币");else if(!this.submitting)try{await Object(m.q)(this,{deal_id:this.deal.id,buy_count:this.buyCount,pay_price:this.payAmount}),this.showDealDialog=!1,this.$toast.success("交易成功"),setTimeout(()=>{window.location.reload()},1e3)}catch(t){this.submitting=!1}}else this.$toast.error("未选择份额")},filterState:(t,e)=>e.idol.is_locked===t,filterPrice(t,e){const o=e.product_price-e.idol.stock_price;return 0===t?0===o:1===t?o>0:o<0},filterDeal:(t,e)=>e.product_count!==e.last_count}},h=o(0);var component=Object(h.a)(v,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"role-trending-hall"}},[o("el-row",{staticClass:"page-header"},[o("el-col",{attrs:{span:16}},[o("el-alert",{attrs:{closable:!1,type:"info","show-icon":"",title:"已上市的公司，投资人可以在这里出售自己持有的股份（一周内无人购买的交易会被系统删除）"}})],1),t._v(" "),o("el-col",{attrs:{span:6,offset:2}},[t.meta?o("div",{staticClass:"badge"},[o("span",[t._v("成交次数："+t._s(t.meta.deal_count))]),t._v(" "),o("em"),t._v(" "),o("span",[t._v("总成交额：￥"+t._s(parseFloat(t.meta.exchang_money_count).toFixed(2)))])]):t._e()])],1),t._ssrNode(" "),o("flow-list",{attrs:{func:"getVirtualIdolDealList",type:"seenIds",sort:"active"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow;return o("div",{staticClass:"table"},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:r,stripe:""}},[o("el-table-column",{attrs:{label:"交易编号",prop:"id",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",[t._v("# "+t._s(e.row.id))])]}}],null,!0)}),t._v(" "),o("el-table-column",{attrs:{label:"偶像",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return o("a",{staticClass:"idol",attrs:{href:t.$alias.cartoonRole(e.row.idol.id),target:"_blank"}},[o("img",{attrs:{src:t.$resize(e.row.idol.avatar,{width:100})}}),t._v(" "),o("span",{domProps:{textContent:t._s(e.row.idol.name)}})])}}],null,!0)}),t._v(" "),o("el-table-column",{attrs:{label:"公司市值",prop:"idol.market_price",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",[t._v("￥"+t._s(e.row.idol.market_price))])]}}],null,!0)}),t._v(" "),o("el-table-column",{attrs:{label:"每股股价"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",[t._v("￥"+t._s(e.row.idol.stock_price))])]}}],null,!0)}),t._v(" "),o("el-table-column",{attrs:{filters:[{text:"已停牌",value:!0},{text:"挂牌中",value:!1}],"filter-method":t.filterState,label:"发行股数",prop:"idol.is_locked"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("div",[t._v(t._s(e.row.idol.star_count))]),t._v(" "),e.row.idol.is_locked?o("el-tag",{attrs:{size:"mini",type:"danger"}},[t._v("已停牌")]):o("el-tag",{attrs:{size:"mini",type:"success"}},[t._v("挂牌中")])]}}],null,!0)}),t._v(" "),o("el-table-column",{attrs:{filters:[{text:"低于市场价",value:-1},{text:"高于市场价",value:1},{text:"等于市场价",value:0}],"filter-method":t.filterPrice,label:"出售价格",prop:"product_price"},scopedSlots:t._u([{key:"default",fn:function(e){return o("div",{staticClass:"price"},[o("div",[t._v("￥"+t._s(e.row.product_price))]),t._v(" "),o("el-tag",{attrs:{type:t.computePriceColor(e.row),size:"mini"}},[t._v(t._s(t.computePriceText(e.row)))])],1)}}],null,!0)}),t._v(" "),o("el-table-column",{attrs:{label:"出售股数"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("div",[t._v(t._s(e.row.product_count))]),t._v(" "),o("el-tag",{attrs:{size:"mini",type:"info"}},[t._v("占比:"+t._s(parseFloat(e.row.product_count/e.row.idol.star_count*100).toFixed(2))+"%")])]}}],null,!0)}),t._v(" "),o("el-table-column",{attrs:{filters:[{text:"有成交额",value:1}],"filter-method":t.filterDeal,prop:"last_count",label:"已成交"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",[t._v(t._s(parseFloat(e.row.product_count-e.row.last_count).toFixed(2)))])]}}],null,!0)}),t._v(" "),o("el-table-column",{attrs:{label:"交易人",prop:"user.id",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return o("a",{staticClass:"user",attrs:{href:t.$alias.user(e.row.user.zone),target:"_blank"}},[o("img",{attrs:{src:t.$resize(e.row.user.avatar,{width:60})}}),t._v(" "),o("span",{staticClass:"oneline",domProps:{textContent:t._s(e.row.user.nickname)}})])}}],null,!0)}),t._v(" "),o("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.currentUserId===e.row.user.id?o("el-button",{attrs:{size:"small",type:"danger",round:"",plain:""},on:{click:function(o){return t.deleteMyDeal(e.row)}}},[t._v("终止交易")]):o("el-button",{attrs:{size:"small",round:""},on:{click:function(o){return t.makeADeal(e.row)}}},[t._v("马上交易")])]}}],null,!0)})],1)],1)}}])},[t._v(" "),o("no-content",{attrs:{slot:"nothing"},slot:"nothing"},[o("nuxt-link",{attrs:{to:"/role/trending/newbie"}},[o("el-button",{attrs:{size:"mini"}},[t._v("\n          查看融资中的公司\n        ")])],1),t._v(" "),o("nuxt-link",{attrs:{to:"/role/trending/register"}},[o("el-button",{attrs:{size:"mini"}},[t._v("\n          自己注册公司\n        ")])],1)],1)],1),t._ssrNode(" "),t.deal?o("v-dialog",{attrs:{title:"购买「"+t.deal.idol.name+"」的股份",width:"560px"},on:{submit:t.submitDeal},model:{value:t.showDealDialog,callback:function(e){t.showDealDialog=e},expression:"showDealDialog"}},[o("el-alert",{staticStyle:{"margin-bottom":"10px"},attrs:{closable:!1,type:"warning",title:"每笔交易的金额不得低于0.01","show-icon":""}}),t._v(" "),o("el-form",{attrs:{"label-position":"top"}},[o("el-form-item",{attrs:{label:"交易信息"}},[o("p",[o("strong",[t._v("交易玩家：")]),t._v(t._s(t.deal.user.nickname))]),t._v(" "),o("p",[o("strong",[t._v("交易偶像：")]),t._v(t._s(t.deal.idol.name))]),t._v(" "),o("p",[o("strong",[t._v("每股价格：")]),t._v(t._s(t.deal.product_price))])]),t._v(" "),o("el-form-item",{attrs:{label:"购买份额"}},[o("el-input-number",{attrs:{step:.01,min:+t.minBuyCount,max:+t.maxBuyCount},model:{value:t.buyCount,callback:function(e){t.buyCount=e},expression:"buyCount"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"待支付金额"}},[o("p",[t._v("最多可购买："+t._s(t.maxBuyCount)+"股")]),t._v(" "),o("p",[t._v("需要支付的数额：￥"+t._s(t.payAmount))])])],1)],1):t._e()],2)},[],!1,function(t){var e=o(437);e.__inject__&&e.__inject__(t)},null,"614bf780");e.default=component.exports}};
//# sourceMappingURL=hall.chunk.98042fe6.js.map