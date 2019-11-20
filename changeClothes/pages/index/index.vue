<template>
	<view >
		<view v-if="actConfig.status" class="bg" :style="{ backgroundImage:'url('+(actConfig.bg?actConfig.bg:defaultImg)+')',backgroundRepeat: 'no-repeat',backgroundSize: '100% 100%'   }" >
			<!-- 顶部广告区域 -->
			<view class="topAd" v-if="actConfig.topbg" :style="{'padding-top':nationPic?'20rpx':'150rpx'}">
				<image :src="actConfig.topbg" style="width:70%;" mode="widthFix"></image>
			</view>
			<view  style='width:0px;height:0px;overflow:hidden;'>
				<canvas canvas-id="shareCanvas" style="width: 320px;height: 520px;"></canvas>
			</view>
			<view class="num" v-if="showNum">
				<view>
					已有<span style="color: #DD524D;margin: 0 10rpx;">{{actConfig.viewnum?actConfig.viewnum:10000}}</span><span>{{actConfig.descript?actConfig.descript:'人生成自己专属服装秀'}}</span>
				</view>
			</view>
			<view class="add" @click="addImg" v-if="waitNext" >
				<image :src="actConfig.upbg?actConfig.upbg:'../../static/image/add.jpg'" style="width: 400rpx;" mode="widthFix"></image>
			</view>
			<!-- 下一步按钮 -->
			<button type="text" :style="{'backgroundColor':actConfig.createbtnc?actConfig.createbtnc:'#f00'}"  class="nextStep" @click="goNext" v-if="ishowNextStep">下一步</button>
			<!-- 选择民族 -->
			<view v-if="hasNext" style="margin-top: 150rpx;position: relative;">
				<view class="picker-mask-top"></view>
				<picker-view class="pickerView" mask-class="picker-mask" @change="choiceNation" indicator-style="color:#fff">
					<picker-view-column class="column" >
						<view v-for="(item,index) in mixbg" :key="index" :style="{'color':actConfig.mixlistc?actConfig.mixlistc:'#fff'}">{{item.name}}</view>
					</picker-view-column>
				</picker-view>
				<view class="picker-mask-bottom"></view>
			</view>
			<!-- 底部功能选择 -->
			<view class="funChoice" v-if="hasNext">
				<button type="text" :style="{'backgroundColor':actConfig.createbtnc?actConfig.createbtnc:'#f00'}"  @click="suijichoice">随机生成</button>
				<button type="text" :style="{'backgroundColor':actConfig.createbtnc?actConfig.createbtnc:'#f00'}"  @click="confirmNation">确认生成</button>
				<button type="text" :style="{'backgroundColor':actConfig.createbtnc?actConfig.createbtnc:'#f00'}"  @click="goAdd">重新生成</button>
			</view>
			<!-- 点击确认生成照片 -->
			<view v-if="nationPic" style="width: 100%;text-align: center;">
				<view class="resface">
					<image :src="canvasSrc" class="picborder" mode="widthFix"></image>
				</view>
				<view :style="{'color':actConfig.mixlistc?actConfig.mixlistc:'#fff'}">长 / 按 / 或 / 截 / 屏 / 保 / 存</view>
				<view class="rebuild">
					<button type="text" :style="{'backgroundColor':actConfig.createbtnc?actConfig.createbtnc:'#f00'}"  @click="anginAdd">重新生成</button>
				</view>
			</view>
				<image src="../../static/image/p.png" style="width: 100%;margin-bottom: -15rpx;" mode="widthFix"></image>
		</view>
		<!-- 底部推广 -->
		<view v-if="actConfig.tuiguang" style="padding: 30rpx;">
			<div v-html="actConfig.tuiguang">{{actConfig.tuiguang}}</div>
		</view>
	</view>
</template>

<script>
	var jweixin = require('jweixin-module');  
	export default {
		data() {
			return {
				defaultImg:require('../../static/image/bg.jpg'),
				actConfig: {
					upbg:'',
					createbtnc:'',
					bg:'',
					qrcode: '',
					topbg: '',
					tuiguang: '',
					viewnum: '',
					status: '',
					frameimg: '',
					mixlistc:'',
				},
				showNum: true,
				mixbg:'',
				islogo: true,
				waitNext: true,
				hasNext: false,
				ishowNextStep: true,
				nationPic: false,
				index1: 0,
				canvasSrc: '',
				resfaceimg: '',
				uploadSuccess: false,
		}},
		onLoad(){
			this.getActConfig();
		},
		methods:{
			endAct() {
				if (this.actConfig.status != 1) {
					uni.showModal({
						'title': '提示',
						'content': '此活动已结束'
					})
				} else {
					this.actConfig.status = true;
				}
			},
			getActConfig() {
				this.http.request({
					url: 'actconfig',
					success: (res) => {
						this.innitshare(res.data.actinfo.jsconfig,res.data.actinfo.sharedata);
						var actconfig=res.data.actinfo;
						this.actConfig = actconfig;
						var mixbg = JSON.parse(actconfig.mixbg['mixbg']);
						mixbg.sort(this.compare('order'));
						this.mixbg=mixbg;
						this.endAct();
						uni.setNavigationBarTitle({
							'title': res.data.actinfo['actname']
						})
					}
				})
			},
			innitshare(config,sharedata){
				jweixin.config(config);
				jweixin.ready(function(){
				 var sharejson={
				  title: sharedata.title?sharedata.title:'换装秀',
				  desc: sharedata.desc?sharedata.desc:'换装秀',
				  link: window.location.href,
				  imgUrl: sharedata.imgUrl?sharedata.imgUrl:'http://we7test.we-media.cn/addons/jyt_aishift/icon.jpg',
				  success: function () {
					// 设置成功
				  }
				 }
				 var sharejson1={
				  title: sharedata.title?sharedata.title:'换装秀',
				  link: window.location.href,
				  imgUrl: sharedata.imgUrl?sharedata.imgUrl:'http://we7test.we-media.cn/addons/jyt_aishift/icon.jpg',
				  success: function () {
					// 设置成功
				  }
				 }
				 jweixin.updateAppMessageShareData(sharejson)
				 jweixin.updateTimelineShareData(sharejson1)
				})
		   },
			compare(property){
		        return function(a,b){
		            var value1 = a[property];
		            var value2 = b[property];
		            return value1 - value2;
		        }
		    },
			// 添加照片
			addImg() {
				var that = this;
				uni.chooseImage({
					success: (res) => {
						var tempFilePaths = res.tempFilePaths;
						uni.showLoading({
							title:'图片上传中'
						})
						uni.uploadFile({
							url: getApp().globalData.uploadurl,
							name: 'image',
							filePath: tempFilePaths[0],
							success: (res) => {
								uni.hideLoading();
								this.uploadSuccess = true;
								var data = JSON.parse(res.data);
								if (data.status) {
									that.actConfig.upbg = data.url;
								} else {
									uni.showModal({
										'title': '提示',
										'content': data.msg
									})
								}
							},
							fail: () => {
								uni.hideLoading();
								uni.showModal({
									'title': '提示',
									'content': '图片上传失败'
								})
							}
						})
					}
				})
			},
			// 点击下一步
			goNext() {
				if (!this.uploadSuccess) {
					uni.showToast({
						icon: 'none',
						title: '请上传人脸像'
					})
				} else {
					this.waitNext = false;
					this.hasNext = true;
					this.ishowNextStep = false;
					this.showNum = false
				}
			},
			// 选择民族
			choiceNation(res) {
				this.index1 = res.detail.value;
			},
			// 随机生成
			suijichoice() {
				uni.showLoading({
					'title': '生成中,请稍后'
				});
				var max = this.mixbg.length;
				var index2 = Math.floor(Math.random() * max);
				console.log(index2);
				var clothesid = this.mixbg[index2]['src'];
				console.log(clothesid);
				var faceid = this.actConfig.upbg;
				this.http.request({
					url: 'createface',
					data: {
						clothesid,
						faceid
					},
					success: (res) => {
						this.resfaceimg = 'data:image/jpg;base64,' + res.data.data;
						this.picture('data:image/jpg;base64,' + res.data.data);
					}
				})
			},
			// 确认民族
			confirmNation() {
				uni.showLoading({
					'title': '生成中,请稍后'
				});
				var clothesid = this.mixbg[this.index1]['src'];
				var faceid = this.actConfig.upbg;
				this.http.request({
					url: 'createface',
					data: {
						clothesid,
						faceid
					},
					success: (res) => {
						this.resfaceimg = 'data:image/jpg;base64,' + res.data.data;
						this.picture('data:image/jpg;base64,' + res.data.data);
					}
				})
			},
			goAdd() {
				this.nationPic = false;
				this.waitNext = true;
				this.hasNext = false;
				this.ishowNextStep = true;
				this.islogo = true
			},
			// 重新生成
			anginAdd() {
				this.nationPic = false;
				this.waitNext = true;
				this.hasNext = false;
				this.ishowNextStep = true;
				this.islogo = true
			},
			picture: function(faceres) {
				const ctx = uni.createCanvasContext('shareCanvas');
				ctx.drawImage(faceres, 0, 0, 320, 466);
				ctx.drawImage('data:image/png;base64,' + this.actConfig['frameimg'], 0, 0, 320, 520);
				if (this.actConfig['qrcode']) {
					ctx.drawImage('data:image/png;base64,' + this.actConfig['qrcode'], 240, 457, 60, 60);
				}
				ctx.draw(false, this.canvas2img());
			},
			canvas2img() {
				setTimeout(() => {
					uni.canvasToTempFilePath({
						canvasId: 'shareCanvas',
						destWidth:320,
						destHeight:520,
						success: (res) => {
							uni.hideLoading();
							this.canvasSrc = res.tempFilePath;
							this.nationPic = true;
							this.waitNext = false;
							this.hasNext = false;
							this.ishowNextStep = false;
							this.islogo = false
						}
					})
				}, 200)
			}

		}
	}
</script>

<style>
	button{
		border: none;
		border-radius: 20px;
	}

	.logo {
		width: 100%;
		text-align: center;
		padding:0  30px;
		box-sizing: border-box;
		padding-top:80rpx;
	}
	.topAd{
		text-align: center;
		margin-bottom: 20px;
		padding-top: 150rpx;
		box-sizing: border-box;
	}
	.num {
		width:100%;
		height: 30px;
		text-align: center;
		margin: 30px 0;
		line-height: 30px;
		color: #aaa;
		padding: 0 20rpx;
		box-sizing: border-box;
		opacity: .6;
	}
	
	.num>view{
	border: 1rpx solid #fff;
	background-color: #fff;
	border-radius: 25rpx;
	}
	.add {
		width: 100%;
		text-align: center;
		margin: 30px 0;
	}

	.nextStep {
		width: 50%;
		height: 40px;
		text-align: center;
		line-height: 40px;
		color: #fff;
		margin-bottom: 40rpx;
	}
	.funChoice {
		width: 100%;
		height: 50px;
		margin-top: 100rpx;
		margin-bottom: 30rpx;
		padding: 0 20px;
		text-align: center;
		box-sizing: border-box;
		display: flex;
		justify-content: space-around;
	}

	.funChoice button {
		width: 100px;
		height: 30px;
		color: #fff;
		line-height: 30px;
		font-size: 30rpx;
	}

	.pickerView {
		height: 100px;
		text-align: center;
	}

	.pickBox {
		height: 70rpx;
		border: none;

	}

	/* .picker-mask-top,
	.picker-mask-bottom {
		position: absolute;
		height: 34px;
		width: 150px;
		left: 50%;
		margin-left: -75px;
		z-index: 999;
		background-color: #aaa;
		background: url('~@/static/image/bg4.png') no-repeat 0 0;
		opacity: .5;
	} */

	/* .picker-mask-top {
		top: 0;
	} */

	.picker-mask-bottom {
		position: absolute;
		height: 34px;
		width: 100%;
		z-index: 998;
		background-color: #fff;
		opacity: .3;
		bottom: 34px;
		filter: blur(5px);
	}
	.column {
		font-size: 20px;
		font-weight: bold;
		line-height: 70rpx;
	}

	.resface {
		position: relative;
		width: 320px;
		height: 520px;
		left: 50%;
		margin-left: -160px;
	}

	.resfaceimg,
	.picborder {
		position: absolute;
		top: 0;
		left: 0;
	}

	.resfaceimg {
		z-index: 998;
	}

	.picborder {
		z-index: 999;
	}
	.rebuild{
		margin: 30rpx 0 ;
	}
	.rebuild button{
		width: 50%;
		height: 40px;
		color: #fff;
		line-height: 40px;
	}
</style>
