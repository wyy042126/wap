window.addEventListener('resize', (e)=>{
	//获取屏幕宽度(viewport)
	let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
	//获取html的dom
	let htmlDom = document.getElementsByTagName('html')[0];
	//设置html的fontsize
	htmlDom.style.fontSize = htmlWidth / 10 + "px";
});
window.onload=function(){

    //获取屏幕宽度(viewport)
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    //获取html的dom
    let htmlDom = document.getElementsByTagName('html')[0];
    //设置html的fontsize
    htmlDom.style.fontSize = htmlWidth / 10 + "px";
    

    //获取短信验证码
    var get=document.getElementById('get');
    get.onclick = function() {
	var countdown = 60;
	function settime() {
		if(countdown == 0) {
			get.innerText = '重新获取';
			get.removeAttribute('disabled');
			get.className='get';
			countdown = 60;
			clearInterval(timer); 
			return;
		} else {
			get.setAttribute('disabled', false);
			get.innerText = countdown+'s';
			get.className='getafter';
			countdown--;
		}
	};
	var timer = setInterval(function() {
		settime()
	}, 1000)
};
} 

//点击切换checkbox按钮图片
var i=0;
function checkboxchange(){
    i=(i+1)%2;
	document.getElementById('checkboximage').src='img/checkbox'+i+'.png';
	document.getElementById('submit').className='submit'+i;
}
//返回登录
function backlogin(){
	window.location.href="login.html";
}
//返回安全验证
function backsafe(){
	window.location.href="safe.html";
}
//返回上一页
function back(){
	window.location.href(history.go(-1));
}

//验证个人注册表单
function validateform(){
	var phone=document.forms["pregisterform"]["phone"].value;
	var dxyzm=document.forms["pregisterform"]["dxyzm"].value;
	var txyzm=document.forms["pregisterform"]["txyzm"].value;
	var setpwd=document.forms["pregisterform"]["setpwd"].value;
	var inputpwd=document.forms["pregisterform"]["inputpwd"].value;

	var reg = new RegExp("^[0-9]*$");            //数字正则
	var regPhoneNum = /^(((13|14|15|18|17)\d{9}))$/;              //电话正则

	if(phone==null||phone==""||txyzm==null||txyzm==""||dxyzm==null||dxyzm==""||setpwd==null||setpwd==""||inputpwd==null||inputpwd==""){
		alert("请将信息填写完整！");
		return false;
	}else if(phone.length!=11||!regPhoneNum.test(phone)){
		alert("请填写11位有效手机号码！");
		return false;
	}else if(!reg.test(dxyzm)){
		alert("请填写正确的短信验证码！");
		return false;
	}else if(txyzm.length!=4){
		alert("请填写正确的图形验证码！");
		return false;
	}else if(setpwd!=inputpwd){
		alert("请确认俩次密码输入是否一致！");
		return false;
	}else{
		return true;
	}

}








