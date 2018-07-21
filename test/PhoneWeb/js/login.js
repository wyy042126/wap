//动态
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
	
	var j=0;
	var pwd=document.getElementById('pwd');
	var password=document.getElementById('password');
	pwd.onclick=function(){
		j=(j+1)%2;
		pwd.src='img/eyes'+j+'.png';
		if(j==1){
			password.setAttribute('type','text');
		}
		else{
			password.setAttribute('type','password');
		}
	}
}


//返回登录
function backlogin(){
	window.location.href="login.html";
}
//返回安全验证
function backsafe(){
	window.location.href="safe.html";
}

//验证登录
function validateform(){
	var username=document.forms['loginform']['username'].value;
	var password=document.forms['loginform']['password'].value;
	if(username==null||username==""){
		alert("请输入用户名或手机号码！");
		return false;
	}else if(password==null||password==""){
		alert("请输入密码！");
		return false;
	}
}











