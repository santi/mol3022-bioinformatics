(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{255:function(e,t,a){},256:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),c=a.n(r),i=(a(87),a(7)),s=a(8),l=a(11),u=a(9),h=a(10),d=a(5),b=a(33),g=a.n(b),p="https://mol3022.herokuapp.com",m=a(75),v=a(77),f=a.n(v),C=[{value:"jaspar",label:"Jaspar Database",key:"jaspar"},{value:"uniprobe",label:"UniProbe Database",key:"uniprobe"}],j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChange=a.onChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onChange",value:function(e){this.props.onChange(e)}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(m.a,{options:C,onChange:this.onChange,components:f()(),isMulti:!0,placeholder:"Choose databases you want to search in"}))}}]),t}(n.Component),O=a(78),F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChange=a.onChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onChange",value:function(e){this.props.onChange(e.target.value)}},{key:"render",value:function(){return o.a.createElement("div",{className:"container transFactor"},o.a.createElement("select",{onChange:this.onChange,className:"transFactorSelect",defaultValue:""},o.a.createElement("option",{value:"",disabled:!0,className:"transFactorOption"},"Choose a transcription factor"),this.props.factors.map(function(e){return o.a.createElement("option",{value:e.matrix_id,key:e.matrix_id,className:"transFactorOption"},e.matrix_id,"-",e.name)})),o.a.createElement(O.ClipLoader,{color:"#673AB7",loading:this.props.loading}))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChange=a.onChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onChange",value:function(e){var t=e.target.value;t.match(/^[acgtACGT]*$/)&&(console.log("match"),this.props.onChange(t))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("input",{className:"DNAText",type:"text",value:this.props.text,onChange:this.onChange,placeholder:"Please enter DNA sequence for analysis (Charcters acgt or ACGT)"}))}}]),t}(n.Component),A=a(79),w=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.DNA,a=e.predictions,n={labels:t.split("").slice(0,a.length),datasets:[{label:"Transcription Factor Binding Site Start Score",data:a,backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(103,58,183,0.8)"}]},r=function(e){var t=-99999,a=-1;for(var n in e)e[n]>t&&(t=e[n],a=n);return Number(a)}(a);return o.a.createElement("div",{className:"container"},r<0||o.a.createElement("div",null,"Highest binding score at position: ",o.a.createElement("span",null,r+1)),o.a.createElement(A.a,{data:n}))}}]),t}(n.Component),y={showTransFactors:!1,showDNA:!1,showPrediction:!1,loadingAvailableTransFactors:!1,errorAvailableTransFactors:!1,transFactors:[],selectedSources:[],selectedTransFactor:"",loadingPFM:!1,errorPFM:!1,PFM:[],DNA:"",loadingPredictions:!1,errorPredictions:!1,predictions:[]},E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state=y,a.onSourceChange=a.onSourceChange.bind(Object(d.a)(Object(d.a)(a))),a.onTransFactorChange=a.onTransFactorChange.bind(Object(d.a)(Object(d.a)(a))),a.onDNAChange=a.onDNAChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("fetching data."),this.setState({loadingAvailableTransFactors:!0},function(){g.a.get("".concat(p,"/jaspar/matrix")).then(function(t){var a=t.data;e.setState({transFactors:a,loadingAvailableTransFactors:!1})},function(){return e.setState({loadingAvailableTransFactors:!1,errorAvailableTransFactors:!0})})})}},{key:"onSourceChange",value:function(e){console.log("Sources are now: ".concat(e.map(function(e){return e.value}))),this.setState({showTransFactors:!0,selectedSources:e})}},{key:"onTransFactorChange",value:function(e){var t,a=this;console.log("TransFactor is now: ".concat(e)),this.setState({selectedTransFactor:e,loadingPFM:!0,showDNA:!1,showPrediction:!1,predictions:[]}),(t=e,g.a.get("".concat(p,"/jaspar/matrix/").concat(t))).then(function(e){a.setState({showDNA:!0,showPrediction:!0,loadingPFM:!1,PFM:e.data}),a.state.DNA&&a.onDNAChange(a.state.DNA)},function(){a.setState({errorPFM:!0,loadingPFM:!1})})}},{key:"onDNAChange",value:function(e){var t=this;console.log("DNA is now: ".concat(e)),this.setState({DNA:e,loadingPredictions:!0});var a=function(){return(a=e,n=t.state.PFM,g.a.post("".concat(p,"/probabilities"),{sequence:a,pfm:n})).then(function(e){t.setState({predictions:e.data,loadingPredictions:!1})},function(){return t.setState({loadingPredictions:!1,errorPredictions:!0})});var a,n};T&&clearTimeout(T),T=setTimeout(function(){T=null,a()},500)}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(j,{onChange:this.onSourceChange}),!this.state.showTransFactors||o.a.createElement(F,{onChange:this.onTransFactorChange,factors:this.state.transFactors,loading:this.state.loadingPFM}),!this.state.showDNA||o.a.createElement(N,{onChange:this.onDNAChange,text:this.state.DNA}),!this.state.showPrediction||o.a.createElement(w,this.state))}}]),t}(n.Component),T=null,k=E,P=(a(255),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"header"},"Unified Transcription Factor Binding Site Analysis Tool"),o.a.createElement("div",{className:"content"},o.a.createElement(k,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,t,a){e.exports=a(256)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.6a81b37f.chunk.js.map