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


	//根据输入框是否有值来改变suamit样式
	var password = document.getElementById('password');     
	var username=document.getElementById('username');
	var submit=document.getElementById('submit');
	var a=0;
	var b=0;
	username.oninput=function(){
		if('oninput' in password){ 
		password.addEventListener("input",changesubmit,false); 
	}else{ 
		password.onpropertychange = changesubmit; 
	} 
	if('oninput' in username){ 
		username.addEventListener("input",changesubmit,false); 
	}else{ 
		username.onpropertychange = changesubmit; 
	} 
}

function changesubmit(){
		if(password.value.length>0){
			a=1;
		}else{
			a=0;
		}
		if(username.value.length>0){
			b=1;
		}else{
			b=0;
		}
		if(a==1&&b==1){
			submit.className='submit1';
		}else{
			submit.className='submit2';
		}
	}
} 

//点击切换checkbox按钮图片
var i=0;
function checkboxchange(){
    i=(i+1)%2;
    document.getElementById('checkboximage').src='img/checkbox'+i+'.png';
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











