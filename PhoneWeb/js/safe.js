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
    
    
    //改变submit样式
	var phone=document.getElementById('phone');
	var yzm=document.getElementById('yzm');
	var submit=document.getElementById('submit');
	var a=0;
	var b=0;
	phone.oninput=function(){
		if('oninput' in phone){ 
		phone.addEventListener("input",changesubmit,false); 
	}else{ 
		phone.onpropertychange = changesubmit; 
	} 
	if('oninput' in yzm){ 
		yzm.addEventListener("input",changesubmit,false); 
	}else{ 
		yzm.onpropertychange = changesubmit; 
		} 
	}

function changesubmit(){
		if(phone.value.length>0){
			a=1;
		}else{
			a=0;
		}
		if(yzm.value.length>0){
			b=1;
		}else{
			b=0;
		}
		if(a==1&&b==1){
			submit.className='submit2';
		}else{
			submit.className='submit1';
		}
	}

    

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
//返回登录
function backlogin(){
	window.location.href="login.html";
}
//返回安全验证
function backsafe(){
	window.location.href="safe.html";
}
function validateform(){
	var phone=document.forms["safeform"]["phone"].value;
	var dxyzm=document.forms["safeform"]["yzm"].value;

	var reg = new RegExp("^[0-9]*$");  //数字正则
	var regPhoneNum = /^(((13|14|15|18|17)\d{9}))$/;            //电话正则

	if(phone.length!=11||!regPhoneNum.test(phone)){
		alert("请填写11位有效手机号码!");
		return false;
	}else if(!reg.test(dxyzm)||dxyzm.length!=5){
		alert("请填写正确的短信验证码！");
		return false;
	}else{
		return true;
	}
}











