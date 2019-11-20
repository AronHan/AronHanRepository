var request=function(option){
  var baseurl=getApp().globalData.baseurl;
  // var baseurl="/app/index.php?c=entry&m=jyt_aishift&id=7&i=1";
  var baseurl="/app/index.php?c=entry&m=jyt_aishift&id=4&i=8";
  var url =baseurl+"&do="+option.url; 
  var method = option.method ? option.method : 'GET';
  var data = option.data ? option.data : {};
  if(option.showLoading){
	  uni.showLoading({
	  	'title':option.showLoading
	  })
  }
  uni.request({
    url,
    method,
    data,
	header:{
		"Content-Type": 'application/x-www-form-urlencoded',
		'X-Requested-With':'XMLHttpRequest'
	},
    success:function(res){
	  if(option.showLoading){
		  uni.hideLoading();
	  }
      if(res.data.status==41008){
        uni.reLaunch({
          url: '/pages/registe/registe',
        })
        return;
      }
      if(res.data.status==41009){
        uni.reLaunch({
          url: '/pages/login/login',
        })
		return;
      }
      if(!res.data.status){
		 uni.hideLoading();
        uni.showModal({
          title: '错误提示',
          content: res.data.msg,
          showCancel: false
        })
        return;
      }
      option.success(res)
    },
    fail: function (res,err) {
	  uni.hideLoading();
      uni.showModal({
        title: '错误提示',
        content: JSON.stringify(res),
        showCancel: false
      })
    },
  })
}
module.exports.request=request;
