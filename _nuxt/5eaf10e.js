(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{267:function(e,t,o){var content=o(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(52).default)("28f1127f",content,!0,{sourceMap:!1})},278:function(e,t,o){"use strict";o(267)},279:function(e,t,o){var l=o(51)(!1);l.push([e.i,"label[extra-class=radio-alarm-p] .ivu-radio-inner{color:red;border-color:red}label[extra-class=radio-alarm-p] .ivu-radio-inner:after{background-color:red}img.vessel-icon{width:50px}",""]),e.exports=l},289:function(e,t,o){"use strict";o.r(t);var l={data:function(){return{columns:[{title:"icon",key:"icon",width:100,render:function(e,t){return e("div",[e("img",{attrs:{src:t.row.icon,class:"vessel-icon"}})])}},{title:"Vessel",key:"vessel",sortable:!0,render:function(e,t){return e("div",[e("h4",{},t.row.vessel)])}},{title:"Status",key:"status",sortable:!0,render:function(e,t){return e("div",[e("Tag",{props:{color:{"S/L":"success","S/D before":"error",ROB:"magenta"}[t.row.status]||"primary"}},t.row.status||"blank")])}},{title:"Location",key:"location",sortable:!0},{title:"Alarm",key:"alarm",render:function(e,t){return e("div",[e("Radio",{props:{value:!0}},"F"),e("Radio",{props:{value:!0},attrs:{"extra-class":"radio-alarm-p"}},"P")])}}],vessels:[{icon:"/vessel0.png",vessel:"VL-19",status:"S/L",location:"xx.x/yy.y"},{icon:"/vessel0.png",vessel:"VL-20",status:"S/D before",location:"xx.x/yy.y"},{icon:"/vessel1.png",vessel:"PR INTER-1",status:"S/D before",location:"xx.x/yy.y"},{icon:"/vessel3.png",vessel:"SMOOTHSEA-18",status:"ROB",location:"xx.x/yy.y"},{icon:"/vessel3.png",vessel:"SMOOTHSEA-22",status:"",location:"xx.x/yy.y"},{icon:"/vessel3.png",vessel:"SMOOTHSEA-102",status:"",location:"xx.x/yy.y"},{icon:"/vessel3.png",vessel:"SMOOTHSEA-17",status:"",location:"xx.x/yy.y"},{icon:"/vessel2.png",vessel:"PATARAVARIN-88",status:"",location:"xx.x/yy.y"},{icon:"/vessel2.png",vessel:"N.KALAPRAPREUK",status:"",location:"xx.x/yy.y"}]}}},n=(o(278),o(44)),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Card",[o("Table",{attrs:{columns:e.columns,data:e.vessels}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);