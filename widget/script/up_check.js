var check=function(id,time){
  $api.post(url+'app.php/check',{
        body:{lorryid:id,
              time:time,}
       },function(ret){
        if(ret.result==4){
          alert(ret.desc);
          api.openWin({
            name: 'index',
            url:  'index.html',
          });
           setTimeout("api.closeWin({name:'main'})",650);
           $api.rmStorage('password');
           var key = 'user';
           var user = {};
           var aa=$api.getStorage(key);
           user.lorryid=aa.lorryid;
            user.telephone=aa.telephone;
           user.flag= aa.flag
           user.pass= '';
           $api.setStorage(key, user);
           api.alert({
             title: '提示消息',
             msg: ret.desc,
             buttons: ['确定']
           });
         }else{
          //  alert(ret.desc);
         }
       });
}
// var tongji=function(){
//   var tongji;
//   $api.get('http://api.uminfo.cn/app.php/tongji?lorry_id='+lorryid,function(ret){
//   //  if(ret.count==0){
//   //    $api.css($api.dom('#tongji'),'display:none');
//   //  }else{
//   //    $api.css($api.dom('#tongji'),'display:block');
//   //    $api.text($api.dom('#tongji'),ret.count);
//   //  }
//   tongji=ret.count;
//  },'json');
//  return tongji;
// }
// var jianting=function(){
// // api.addEventListener({
// //     name: 'pause'
// // }, function(ret, err) {
// //     // api.toLauncher();
// //     alert('主键')
// // });
// api.addEventListener({
//     name:'resume'
// }, function(ret, err){
//     api.toLauncher();
// });
// }

var check_map=function(){
  var bMap = api.require('bMap');
			bMap.getLocation({
				accuracy: '10m',
				autoStop: true,
				filter: 1
			}, function(ret, err) {
				if(ret.status) {
				} else {
					bMap.getLocationServices(function(ret, err) {
						if(ret.enable) {
						} else {
							var con;
							con = confirm("app需要获取定位才能使用，请确认开启定位");
							if(con == true) {
								var mySettingInfo = api.require('mySettingInfo');
								mySettingInfo.settingInt({
									'index': 2
								}, function(ret, err) {
									alert(JSON.stringify(ret));
								});
							} else {
								window.location.href = "first.html";
							}
						}
					});
				}
			});
}
