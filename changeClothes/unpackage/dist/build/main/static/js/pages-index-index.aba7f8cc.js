(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"25d6":function(i,t,n){"use strict";n.r(t);var a=n("888c"),e=n.n(a);for(var o in a)"default"!==o&&function(i){n.d(t,i,function(){return a[i]})}(o);t["default"]=e.a},"32ef":function(i,t,n){var a=n("b041");t=i.exports=n("2350")(!1),t.push([i.i,"uni-page-body[data-v-c659e184]{background:url("+a(n("bf92"))+") no-repeat 0 0;background-size:cover;padding-top:%?80?%;-webkit-box-sizing:border-box;box-sizing:border-box}.logo[data-v-c659e184]{width:100%;text-align:center;padding-right:30px;-webkit-box-sizing:border-box;box-sizing:border-box}.num[data-v-c659e184]{width:100%;height:30px;text-align:center;margin-top:20px;line-height:30px;color:#aaa}.add[data-v-c659e184]{width:100%;text-align:center;margin-top:20px}.nextStep[data-v-c659e184]{width:100%;height:50px;text-align:center;line-height:50px}.nextStep uni-image[data-v-c659e184]{width:120px}.funChoice[data-v-c659e184]{width:100%;height:50px;margin-top:%?100?%;margin-bottom:%?30?%;padding:0 20px;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.funChoice uni-image[data-v-c659e184]{width:100px;height:30px}.pickerView[data-v-c659e184]{height:100px;text-align:center}.pickBox[data-v-c659e184]{height:%?70?%;border:none}.picker-mask-bottom[data-v-c659e184],.picker-mask-top[data-v-c659e184]{position:absolute;height:34px;width:100px;left:50%;margin-left:-50px;z-index:999;background:url("+a(n("5937"))+") no-repeat 0 0;opacity:.5}.picker-mask-top[data-v-c659e184]{top:0}.picker-mask-bottom[data-v-c659e184]{bottom:0}.column[data-v-c659e184]{color:#dd524d;font-size:20px;font-weight:700;line-height:%?70?%;background:url("+a(n("f84c"))+") no-repeat 0 %?65?%;background-size:100% %?70?%}.resface[data-v-c659e184]{position:relative;width:320px;height:520px;left:50%;margin-left:-160px}.picborder[data-v-c659e184],.resfaceimg[data-v-c659e184]{position:absolute;top:0;left:0}.resfaceimg[data-v-c659e184]{z-index:998}.picborder[data-v-c659e184]{z-index:999}body.?%PAGE?%[data-v-c659e184]{background:url("+a(n("bf92"))+") no-repeat 0 0;background-size:cover}",""])},4250:function(i,t,n){"use strict";var a=function(){var i=this,t=i.$createElement,n=i._self._c||t;return i.actConfig.status?n("v-uni-view",[i.actConfig.topbg?n("v-uni-view",{staticClass:"topAd",staticStyle:{"text-align":"center","margin-bottom":"20px"}},[n("v-uni-image",{staticStyle:{width:"70%"},attrs:{src:i.actConfig.topbg,mode:"widthFix"}})],1):i._e(),n("v-uni-view",{staticStyle:{width:"0px",height:"0px",overflow:"hidden"}},[n("v-uni-canvas",{staticStyle:{width:"320px",height:"520px"},attrs:{"canvas-id":"shareCanvas"}})],1),i.islogo?n("v-uni-view",{staticClass:"logo"},[n("v-uni-image",{staticStyle:{width:"50rpx"},attrs:{src:"../../static/image/logo-left.png",mode:"widthFix"}}),n("v-uni-image",{staticStyle:{width:"200rpx"},attrs:{src:"../../static/image/logo-center.png",mode:"widthFix"}}),n("v-uni-image",{staticStyle:{width:"40rpx"},attrs:{src:"../../static/image/logo-right.png",mode:"widthFix"}})],1):i._e(),i.showNum?n("v-uni-view",{staticClass:"num"},[i._v("已有"),n("span",{staticStyle:{color:"#DD524D",margin:"0 10rpx"}},[i._v(i._s(i.actConfig.viewnum?i.actConfig.viewnum:1e4))]),i._v("人生成自己专属民族秀")]):i._e(),i.waitNext?n("v-uni-view",{staticClass:"add",on:{click:function(t){t=i.$handleEvent(t),i.addImg(t)}}},[n("v-uni-image",{staticStyle:{width:"400rpx"},attrs:{src:i.uploadImg,mode:"widthFix"}})],1):i._e(),i.ishowNextStep?n("v-uni-view",{staticClass:"nextStep",on:{click:function(t){t=i.$handleEvent(t),i.goNext(t)}}},[n("v-uni-image",{attrs:{src:"../../static/image/next.png",mode:"widthFix"}})],1):i._e(),i.hasNext?n("v-uni-view",{staticStyle:{"margin-top":"150rpx",position:"relative"}},[n("v-uni-view",{staticClass:"picker-mask-top"}),n("v-uni-picker-view",{staticClass:"pickerView",attrs:{"mask-class":"picker-mask"},on:{change:function(t){t=i.$handleEvent(t),i.choiceNation(t)}}},[n("v-uni-picker-view-column",{staticClass:"column"},i._l(i.nationList,function(t,a){return n("v-uni-view",{key:a},[i._v(i._s(t.nation))])}),1)],1),n("v-uni-view",{staticClass:"picker-mask-bottom"})],1):i._e(),i.hasNext?n("v-uni-view",{staticClass:"funChoice"},[n("v-uni-image",{attrs:{src:"../../static/image/suiji.png"},on:{click:function(t){t=i.$handleEvent(t),i.suijichoice(t)}}}),n("v-uni-image",{attrs:{src:"../../static/image/confirm.png"},on:{click:function(t){t=i.$handleEvent(t),i.confirmNation(t)}}}),n("v-uni-image",{attrs:{src:"../../static/image/again1.png"},on:{click:function(t){t=i.$handleEvent(t),i.goAdd(t)}}})],1):i._e(),i.nationPic?n("v-uni-view",{staticStyle:{width:"100%","text-align":"center"}},[n("v-uni-view",{staticClass:"resface"},[n("v-uni-image",{staticClass:"picborder",attrs:{src:i.canvasSrc,mode:"widthFix"}})],1),n("v-uni-image",{staticStyle:{width:"200px"},attrs:{src:"../../static/image/save.png",mode:"widthFix"}}),n("v-uni-view",{staticStyle:{width:"100%","text-align":"center","margin-top":"10px"},on:{click:function(t){t=i.$handleEvent(t),i.anginAdd(t)}}},[n("v-uni-image",{staticStyle:{width:"150px"},attrs:{src:"../../static/image/angin.png",mode:"widthFix"}})],1)],1):i._e(),i.actConfig.tuiguang?n("v-uni-view",{staticStyle:{padding:"30rpx"}},[n("v-uni-rich-text",{attrs:{nodes:i.actConfig.tuiguang}})],1):i._e()],1):i._e()},e=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return e})},5937:function(i,t){i.exports="data:image/png;base64,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"},"6a07":function(i,t,n){"use strict";n.r(t);var a=n("4250"),e=n("25d6");for(var o in e)"default"!==o&&function(i){n.d(t,i,function(){return e[i]})}(o);n("dc4e");var s=n("2877"),c=Object(s["a"])(e["default"],a["a"],a["b"],!1,null,"c659e184",null);t["default"]=c.exports},"888c":function(i,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{actConfig:{qrcode:"",topbg:"",tuiguang:"",viewnum:"",status:"",frameimg:""},showNum:!0,islogo:!0,waitNext:!0,uploadImg:"../../static/image/add.jpg",hasNext:!1,ishowNextStep:!0,nationPic:!1,index1:0,canvasSrc:"",resfaceimg:"",uploadSuccess:!1,nationList:[{id:"m1",nation:"汉族男"},{id:"w1",nation:"汉族女"},{id:"m2",nation:"组诺族男"},{id:"m3",nation:"鄂伦春族男"},{id:"m4",nation:"独龙族男"},{id:"w5",nation:"独龙族女"},{id:"m5",nation:"京族男"},{id:"w7",nation:"京族女"},{id:"m6",nation:"裕固族男"},{id:"w8",nation:"裕固族女"},{id:"m7",nation:"德昂族男"},{id:"w10",nation:"德昂族女"},{id:"m8",nation:"鄂温克族男"},{id:"m9",nation:"俄罗斯族男"},{id:"w11",nation:"俄罗斯族女"},{id:"m10",nation:"蒙古族男"},{id:"w45",nation:"蒙古族女"},{id:"m12",nation:"怒族男"},{id:"w13",nation:"怒族女"},{id:"m13",nation:"阿昌族男"},{id:"w16",nation:"阿昌族女"},{id:"m14",nation:"仡佬族男"},{id:"w21",nation:"仫佬族女"},{id:"m15",nation:"撒拉族男"},{id:"m16",nation:"布朗族男"},{id:"m17",nation:"达翰尔族男"},{id:"m18",nation:"土族男"},{id:"w22",nation:"土族女"},{id:"m19",nation:"柯尔克孜族男"},{id:"m20",nation:"景颇族男"},{id:"w23",nation:"景颇族女"},{id:"m21",nation:"纳西族男"},{id:"w30",nation:"黎族女"},{id:"m22",nation:"高山男"},{id:"w27",nation:"高山族女"},{id:"m23",nation:"畲族男"},{id:"w6",nation:"塔塔尔族女"},{id:"m24",nation:"佤族男"},{id:"w28",nation:"佤族女"},{id:"w32",nation:"哈萨克族女"},{id:"w24",nation:"东乡族女"},{id:"w15",nation:"普米族女"},{id:"w14",nation:"塔吉克族女"},{id:"m25",nation:"傈僳族男"},{id:"w29",nation:"傈僳族女"},{id:"m26",nation:"傣族男"},{id:"w31",nation:"傣族女"},{id:"m27",nation:"满族男"},{id:"w38",nation:"满族女"},{id:"m28",nation:"朝鲜族男"},{id:"w2",nation:"珞巴族女"},{id:"w3",nation:"门巴族女"},{id:"m29",nation:"状族男"},{id:"w40",nation:"壮族女"},{id:"m30",nation:"维吾尔族男"},{id:"w12",nation:"乌孜别克族女"},{id:"w9",nation:"保安族女"},{id:"w4",nation:"赫哲族女"},{id:"m31",nation:"藏族男"},{id:"w43",nation:"藏族女"},{id:"w26",nation:"拉祜族女"},{id:"m32",nation:"回族男"},{id:"w44",nation:"回族女"},{id:"w17",nation:"锡伯族女"},{id:"w33",nation:"哈尼族女"},{id:"w34",nation:"土家族女"},{id:"w35",nation:"白族女"},{id:"w36",nation:"瑶族女"},{id:"w37",nation:"侗族女"},{id:"w39",nation:"布依族女"},{id:"w41",nation:"彝族女"},{id:"w42",nation:"苗族女"},{id:"w18",nation:"毛南族女"},{id:"w19",nation:"布朗族女"},{id:"w20",nation:"羌族女"},{id:"w25",nation:"水族女"}]}},onLoad:function(){this.getActConfig()},methods:{endAct:function(){1!=this.actConfig.status?uni.showModal({title:"提示",content:"此活动已结束"}):this.actConfig.status=!0},getActConfig:function(){var i=this;this.http.request({url:"actconfig",success:function(t){i.actConfig=t.data.actinfo,i.endAct(),uni.setNavigationBarTitle({title:t.data.actinfo["actname"]})}})},addImg:function(){var i=this,t=this;uni.chooseImage({success:function(n){var a=n.tempFilePaths;uni.uploadFile({url:getApp().globalData.uploadurl,name:"image",filePath:a[0],success:function(n){i.uploadSuccess=!0;var a=JSON.parse(n.data);a.status?t.uploadImg=a.url:uni.showModal({title:"提示",content:a.msg})}})}})},goNext:function(){this.uploadSuccess?(this.waitNext=!1,this.hasNext=!0,this.ishowNextStep=!1,this.showNum=!1):uni.showToast({icon:"none",title:"请上传人脸像"})},choiceNation:function(i){this.index1=i.detail.value},suijichoice:function(){var i=this;uni.showLoading({title:"生成中,请稍后"});var t=this.nationList.length,n=Math.round(Math.random()*t),a=this.nationList[n]["id"],e=this.uploadImg;this.http.request({url:"createface",data:{clothesid:a,faceid:e},success:function(t){i.resfaceimg="data:image/jpg;base64,"+t.data.data,i.picture("data:image/jpg;base64,"+t.data.data)}})},confirmNation:function(){var i=this;uni.showLoading({title:"生成中,请稍后"});var t=this.nationList[this.index1]["id"],n=this.uploadImg;this.http.request({url:"createface",data:{clothesid:t,faceid:n},success:function(t){i.resfaceimg="data:image/jpg;base64,"+t.data.data,i.picture("data:image/jpg;base64,"+t.data.data)}})},goAdd:function(){this.nationPic=!1,this.waitNext=!0,this.hasNext=!1,this.ishowNextStep=!0,this.islogo=!0},anginAdd:function(){this.nationPic=!1,this.waitNext=!0,this.hasNext=!1,this.ishowNextStep=!0,this.islogo=!0},picture:function(i){var t=uni.createCanvasContext("shareCanvas");t.drawImage(i,0,0,320,466),t.drawImage("data:image/png;base64,"+this.actConfig["frameimg"],0,0,320,520),this.actConfig["qrcode"]&&t.drawImage("data:image/png;base64,"+this.actConfig["qrcode"],240,457,60,60),t.draw(!1,this.canvas2img())},canvas2img:function(){var i=this;setTimeout(function(){uni.canvasToTempFilePath({canvasId:"shareCanvas",success:function(t){uni.hideLoading(),i.canvasSrc=t.tempFilePath,i.nationPic=!0,i.waitNext=!1,i.hasNext=!1,i.ishowNextStep=!1,i.islogo=!1}})},200)}}};t.default=a},b041:function(i,t){i.exports=function(i){return"string"!==typeof i?i:(/^['"].*['"]$/.test(i)&&(i=i.slice(1,-1)),/["'() \t\n]/.test(i)?'"'+i.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':i)}},bf92:function(i,t,n){i.exports=n.p+"static/img/bg.8d59cfb4.jpg"},dc4e:function(i,t,n){"use strict";var a=n("ddc8"),e=n.n(a);e.a},ddc8:function(i,t,n){var a=n("32ef");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var e=n("4f06").default;e("26b44fa6",a,!0,{sourceMap:!1,shadowMode:!1})},f84c:function(i,t,n){i.exports=n.p+"static/img/bg3.72b28ae3.png"}}]);