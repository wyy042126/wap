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
    
    
} 

//点击切换checkbox按钮图片
var i=0;
function checkboxchange(){
    i=(i+1)%2;
    document.getElementById('checkboximage').src='img/checkbox'+i+'.png';
    document.getElementById('submit').className='submit'+i;
}
//返回上一页
function back(){
	window.location.href(history.go(-1));
}

//验证公司注册表单
function validateform(){
	var phone=document.forms["cregisterform"]["phone"].value;
	var cname=document.forms["cregisterform"]["cname"].value;
	var lxr=document.forms["cregisterform"]["lxr"].value;
    var officephone=document.forms["cregisterform"]["officephone"].value;
    var username=document.forms["cregisterform"]["username"].value;
    var email=document.forms["cregisterform"]["email"].value;
    var setpwd=document.forms["cregisterform"]["setpwd"].value;
    var inputpwd=document.forms["cregisterform"]["inputpwd"].value;
    
    var regPhoneNum = /^(((13|14|15|18|17)\d{9}))$/;                //电话正则
    var regOfficeNum= /^(0\d{2,3}[-| ]?)?(\d{7,8})([-| ]?\d{3,5})?$/;          //办公电话正则
    var regEmail = /^[a-zA-Z\d]+([-_\.][a-zA-Z\d]+)*@[a-zA-Z\d]+\.[a-zA-Z\d]{2,4}$/;              // email正则
    var regCname= /^([\u4e00-\u9fa5]{1,20})$/;                      //中文正则

	if(phone==null||phone==""||lxr==null||lxr==""||officephone==null||officephone==""||setpwd==null||setpwd==""||inputpwd==null||inputpwd==""||cname==null||cname==""||username==null||username==""||email==null||email==""){
        alert("请将信息填写完整！");
		return false;
	}else if(!regCname.test(cname)){
		alert("请填写正确的公司名称！");
		return false;
    }else if(lxr.length<2||lxr.length>10){
		alert("请填写2-10字符联系人名称！");
		return false;
    }else if(!regOfficeNum.test(officephone)){
		alert("请填写正确的办公号码！");
		return false;
	}else if(phone.length!=11||!regPhoneNum.test(phone)){
		alert("请填写11位有效手机号码！");
		return false;
	}else if(!regCname.test(username)){
        alert("请填写正确的用户名！");
        return false;
    }else if(!regEmail.test(email)){
        alert("请填写正确的邮箱格式!");
        return false;
    }else if(setpwd!=inputpwd){
		alert("请确认俩次密码输入是否一致！");
		return false;
	}else{
		return true;
    }
}







