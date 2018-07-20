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
	


	//根据输入框是否有值来改变suamit样式
	var password = document.getElementById('password');     
	var submit=document.getElementById('submit');
	password.oninput=function(){
		if('oninput' in password){ 
			password.addEventListener("input",changesubmit,false); 
		}else{ 
			password.onpropertychange = changesubmit; 
		} 
	}

	function changesubmit(){
			if(password.value.length>0){
				submit.className='submit2';
			}else{
				submit.className='submit1';
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
//返回上一页
function back(){
	window.location.href(history.go(-1));
}











