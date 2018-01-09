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
