<script>
	export default {
		globalData: {
			baseurl: '',
			uploadurl:'',
		},
		onLaunch: function() {
			var actid = this.getQueryString('id')
			var i = this.getQueryString('i')
			var url = '/app/index.php?c=entry&m=jyt_aishift&id=' + actid + '&i=' + i;
			// var uploadurl = '/app/index.php?c=entry&do=upload&m=jyt_aishift'+'&i=' + i;
			var uploadurl = '/app/index.php?c=entry&do=upload&m=jyt_aishift'+'&i=' + 1;
			getApp().globalData.baseurl = url;
			getApp().globalData.uploadurl = uploadurl;
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			getQueryString(name) {
				var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
				var r = window.location.search.substr(1).match(reg);
				if (r != null) {
					return unescape(r[2]);
				}
				return null;
			}
		}
	}
</script>

<style>
	.picker-mask {
		opacity: 0;
	}
	.uni-picker-view-indicator:after, .uni-picker-view-indicator:before{
		left: auto !important;
	}
	.uni-picker-view-content{
		z-index: 999;
	}
</style>
