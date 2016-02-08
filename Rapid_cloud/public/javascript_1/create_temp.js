function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  ieVer = (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
  if(ieVer){
	  (function populateStorage() {
		  localStorage.setItem('bgcolor', '#DDDDDD');
		  localStorage.setItem('font', 'Segoe UI');
		}());
		currentColor = localStorage.getItem('bgcolor');
		document.getElementById("bg").style.backgroundColor = currentColor;
  }
}

$('#Templates1').click(function(){
	location.href="http://172.29.59.65:3000/master_2"
});

function modify(){
	$(".alertS div.alert").stop().hide();
	$(".alert-success").stop().slideDown();
}
function deploy(){
	$(".alertS div.alert").stop().hide();
	$(".alert-danger").stop().slideDown();	
}
function hideAlerts(){
	$(".alertS div.alert").stop().hide();	 
}
$(".closeError").click(function(){
	$(".alertS div.alert").stop().slideUp();
	//location.href="http://172.29.59.65:3000/master_2"
});
$(".closeMsg").click(function(){
	$(".alertS div.alert").stop().slideUp();
	//location.href="http://172.29.59.65:3000/master_2"
});
$(document).ready(function(){
	$(".alert").hide();	
	$("[role='profileLinks']").hide();
	$("[role='aboutProject']").click(function(){
		$(".arrowRed").toggleClass('rotate', 1000).promise().done(function(){
			$("[role='profileLinks']").stop().slideToggle();
		});
	});
	
	$("[role='naviGation'] ul li dl").hide();
	$("[role='naviGation'] ul li:first-child dl").addClass("show").show();
	
	$("[role='naviGation'] ul li").click(function(event){
		event.stopPropagation();
		//closeOldmenu();
		console.log("Li clicked");
		$(this).children("dl").stop().slideToggle();
		$(this).children("a").toggleClass("activeTab");
		$(this).children("a").find(".arrowGray").toggleClass("rotateGray");
		$(this).children("dl").toggleClass("show");
	});
	function closeOldmenu(){
		$(".arrowGray").removeClass("rotateGray");
		$(".show").stop().slideUp();
		$(".show").removeClass();
		$(".activeTab").removeClass();
		console.log("Closed Tab");
	}	
	
	$("[role='naviGation'] ul li dl dt").click(function(event){
		event.stopPropagation();
		$("[role='naviGation'] ul li dl dt").removeClass("activeLink");
		$(this).addClass("activeLink");
	});
});

function DropdownConst(createEle,addId,addClass,appendTo,labName,createCon,imageArray,dataSt){
	this.createEle=createEle;
	this.addId=addId;
	this.appendTo=appendTo;
	this.labName=labName;
	this.imageArray=imageArray;
	this.dataSt=dataSt;
	this.createCon = function(){
		var apch = document.getElementById(appendTo);
		var creAl = document.createElement(createEle);
		creAl.innerHTML="<span>"+labName+"</span>";
		creAl.id=addId;
		creAl.className=addClass;
		apch.appendChild(creAl);
	}
};
var roleImg=["database.png","database.png","database.png"];
//var attImg=["empty.png"];
var osImg=["windows.png","windows.png","windows.png"];


DropdownConst.prototype.appendData = function(name,appentoWhat){
	console.log(appentoWhat);
	var epn = document.getElementById(appentoWhat);
	epn.innerHTML="";
	for(var i=0;i<=name.length-1;i++){
		var epn;
		epn.innerHTML+="<li onclick='selectOpt(this,"+i+")' class='"+name[i]+"'>"
						+"<dl>"
						+"<dt></dt>"
						+"<dd class='va'>"+name[i]+"</dd>"
						+"</dl>"
						+"</li>"
	}
	epn.write = epn;
	//console.log(epn);
}


DropdownConst.prototype.cre = function(){
	var re = document.getElementById(this.addId);
	//console.log(this.dataSt);
	re.innerHTML+="<ul id='"+this.addId+"s' class='dropDown'></ul>";
	var ulI = document.getElementById(this.addId+"s");
	for(var i=0;i<=this.dataSt.length-1;i++){
		ulI.innerHTML +="<li onclick='selectOpt(this,"+i+")' class='"+this.dataSt[i]+"'>"
						+"<dl>"
						//+"<dt><img src='images_1/"+ this.imageArray[0] +"'></dt>"
						+"<dt></dt>"
						+"<dd class='va'>"+this.dataSt[i]+"</dd>"
						+"</dl>"
						+"</li>"
	}
};
DropdownConst.prototype.preView = function(){
	var prId = document.getElementById("previewTemp")
	prId.innerHTML+="<li class='templateConta"+i+"'><div class='preImages'>"
				 +"<span class='firstIcon'><img src='images/' /></span><span>+</span>"
				 +"<span class='secondIcon'><img src='images/' /></span>"
				 +"</div>"
				 +"<div class='preData'><ul>"
				 +"<li>Role:<span class='rolePre'></span> </li>"
				 +"<li>Role Attribute: <span class='roleAt'></span></li>"
				 +"<li>OS: <span class='os'></span></li>"
				 +"</ul></div></li>";
}
function selectOpt(ev, idn){
	var aImage = ev.getElementsByTagName("dt")[0].innerHTML;
	var aTex = ev.getElementsByTagName("dd")[0].innerText;
	 var v = ev.parentNode;
	 var vb = v.parentNode;
	 var idd = vb.id;
	 var roleAt;
	 for (var i=0;i<count;i++)
		 {		 		
		 			for(var j=0;j<idDt.length;j++)
		 				{
		 					if(aTex == idDt[j].name && idd == "sel")
		 						{
		 							roleAt = idDt[j].subrole;
		 							addValues(roleAt, "sells");
		 						}else if(aTex == idDt[j].name && idd == "sel"+i+"")
		 							{	
		 								roleAt = idDt[j].subrole;
		 								addValues(roleAt,"sell"+i+"s")
		 							}
		 				}	 		
		 }
	 document.getElementById(idd).style.border="none";
	 $("#"+idd+" span:first").html(aImage+aTex);
	 $("#"+idd+" span img").css("width", "25px");	 
}
function addValues(data, toWhat){
		var appendD = new DropdownConst();
		appendD.appendData(data,toWhat);
}

function dataUpDate(ev){
	var aTex = ev.getElementsByTagName("dd")[0].innerText;
	$(".proJetName").text(aTex);
}
function dataUpDate1(ev){
	var aTex = ev.getElementsByTagName("dd")[0].innerText;
	$(".proJetType").text(aTex);
}
function dataUpDate2(ev){
	var aTex = ev.getElementsByTagName("dd")[0].innerText;
	$(".projectTech").text(aTex);
}
function closeRole(ev){
	if(count == 1){
		$(".alertS div.alert").stop().hide();
		$(".alert-danger").stop().slideDown();		
		return;
	}
	count--;
	var evv = ev.parentNode;
	var ev = evv.parentNode;
	ev.remove();
	var i = ev.id;
	$("."+i).remove();
}

window.onload = function(){
	data();
}
var idArr=[];
var osArr=[];
var idDt;
function data(){
	$(function(){		
		   $.getJSON('http://172.29.59.65:3000/org_temp', function(data) {			
			   
			   idDt = data[0].types;			  
			   for(var j=0;j<=idDt.length-1;j++){
				   var dd = data[0].types[j].name;				   
				   idArr.push(dd);
			   }
			   
			   var os = data[1].types;			  
			   for(var d=0; d<=os.length-1; d++){				   
				   var oss = data[1].types[d].name;				  
				   osArr.push(oss);
			   }			   
			   //roleAt = data[0].types[1].subrole;
			   //var opeSys = data[0].types[2].subrole;			  
			  
		   });
		   $.getJSON('http://172.29.59.65:3000/project', function(data){
			   var proje = data;
			   var pj_Na=[], pr_Na=[], tec_ngy=[];
			   for(var d=0; d<=proje.length-1; d++){				   			   
				    pj_Na [d] = data[d].p_name;
				    pr_Na [d] = data[d].account;
				    tec_ngy [d] = data[d].technology;				   
			   }			  
			   objectData(idArr, osArr, pj_Na, pr_Na, tec_ngy);
		   })
		});
}

function objectData(idArr, osArr, pj_Na, pr_Na, tec_ngy){
	/* Role */
	var role = new DropdownConst("div","roleID","","templateConta","","","");
	role.createCon();
	var role = new DropdownConst("div","pullL","pull-left","roleID","","","").createCon();
	var role = new DropdownConst("label","","labelTemp","pullL","Role","","").createCon();
	var role = new DropdownConst("div","sel","clickRole forWid","pullL","Select","",roleImg,idArr);
	role.createCon();
	role.cre();	
	var role = new DropdownConst("span","","glyphicon glyphicon-chevron-down pull-right","sel","","","").createCon();

	var roleAt1 = ["Java","asp"];
	/* Role Attribute */
	var roleAttri = new DropdownConst("div","roleAtID","","templateConta","","","");
	roleAttri.createCon();
	var roleAttri = new DropdownConst("div","pullLi","pull-left","roleAtID","","","").createCon();
	var roleAttri = new DropdownConst("label","","labelTemp","pullLi","Role Attribute","","").createCon();
	var roleAttri = new DropdownConst("div","sell","clickRole forWid","pullLi","Select","","",roleAt1);
	roleAttri.createCon();
	roleAttri.cre();
	var roleAttri = new DropdownConst("span","","glyphicon glyphicon-chevron-down pull-right","sell","","","").createCon();
	
	/* Operating System */
	var operatingSys = new DropdownConst("div","oSys","","templateConta","","","");
	operatingSys.createCon();
	var operatingSys = new DropdownConst("div","pullLii","pull-left","oSys","","","").createCon();
	var operatingSys = new DropdownConst("label","","labelTemp","pullLii","Operating System","","").createCon();
	var operatingSys = new DropdownConst("div","selll","clickRole forWid","pullLii","Select","",osImg,osArr);
	operatingSys.createCon();
	operatingSys.cre();
	var operatingSys = new DropdownConst("span","","glyphicon glyphicon-chevron-down pull-right","selll","","","").createCon();

	/* Project Name*/	
	var projectName = new DropdownConst("div","pnameId","","templateConta1","","","");
	projectName.createCon();
	var projectName = new DropdownConst("div","pullLiii","pull-left","pnameId","","","").createCon();
	var projectName = new DropdownConst("label","","labelTemp","pullLiii","Project Name","","").createCon();
	var projectName = new DropdownConst("div","sellll","clickRole forWid1","pullLiii","Select","","",pj_Na);
	projectName.createCon();
	projectName.cre();
	var projectName = new DropdownConst("span","","glyphicon glyphicon-chevron-down pull-right","sellll","","","").createCon();
	
	/* Product Name*/	
	var productName = new DropdownConst("div","pdname","","templateConta1","","","");
	productName.createCon();
	var productName = new DropdownConst("div","pullLiiii","pull-left","pdname","","","").createCon();
	var productName = new DropdownConst("label","","labelTemp","pullLiiii","Product Name","","").createCon();
	var productName = new DropdownConst("div","selllll","clickRole forWid1","pullLiiii","Select","","",pr_Na);
	productName.createCon();
	productName.cre();
	var productName = new DropdownConst("span","","glyphicon glyphicon-chevron-down pull-right","selllll","","","").createCon();
	/* Technology */
	var technology = new DropdownConst("div","tname","","templateConta1","","","");
	technology.createCon();
	var technology = new DropdownConst("div","pullLiiiii","pull-left","tname","","","").createCon();
	var technology = new DropdownConst("label","","labelTemp","pullLiiiii","Technology","","").createCon();
	var technology = new DropdownConst("div","sellllll","clickRole forWid1","pullLiiiii","Select","","",tec_ngy);
	technology.createCon();
	technology.cre();
	var technology = new DropdownConst("span","","glyphicon glyphicon-chevron-down pull-right","sellllll","","","").createCon();
	
	/* Remove buttons */
	var docV = document.getElementById("templateConta");
	docV.innerHTML+="<div class='pull-right'>"
				+"<span class='glyphicon glyphicon-minus-sign closeRow' onclick='closeRole(this)' style='font-size:25px;' ></span>"
				+"</div>";
	
	/* Create Template */
	$(document).ready(function(){
		var i =0;
		$(".clickRole").click(function(){		
			$(this).find(".dropDown").slideToggle();
			//$(".card").removeClass();
		});
	});
}

/* New Row */
var i=0;
var count=1;
function createTem(eve)
{
	count++;
	i++;
	var refId = document.getElementById("roleAdded");
	var creAl = document.createElement("div");
	creAl.id="templateConta"+i;
	creAl.setAttribute('style', 'float:left;width:100%;');
	creAl.setAttribute('class', 'row');
	refId.appendChild(creAl);
	
	var role = new DropdownConst("div","roleID"+i,"","templateConta"+i,"","","");
	role.createCon();
	var role = new DropdownConst("div","pullL"+i,"pull-left","roleID"+i,"","","").createCon();
	var role = new DropdownConst("label","","labelTemp","pullL"+i,"","","").createCon();
	var role = new DropdownConst("div","sel"+i,"clickRole forWid newClickRole"+i,"pullL"+i,"Select","",roleImg,idArr);	role.createCon();
	role.cre();
	//role.preView();
	var role = new DropdownConst("span","","glyphicon glyphicon-chevron-down pull-right","sel"+i,"","","").createCon();

	var roleAt1 = ["Java","asp"];
	/* Role Attribute */
	var roleAttri = new DropdownConst("div","roleAtID"+i,"","templateConta"+i,"","","");
	roleAttri.createCon();
	var roleAttri = new DropdownConst("div","pullLi"+i,"pull-left","roleAtID"+i,"","","").createCon();
	var roleAttri = new DropdownConst("label","","labelTemp","pullLi"+i,"","","").createCon();
	var roleAttri = new DropdownConst("div","sell"+i,"clickRole forWid newClickRole"+i,"pullLi"+i,"Select","","",roleAt1);
	roleAttri.createCon();
	roleAttri.cre();
	var roleAttri = new DropdownConst("span","","glyphicon glyphicon-chevron-down pull-right","sell"+i,"","","").createCon();

	/* Operating System */
	var operatingSys = new DropdownConst("div","oSys"+i,"","templateConta"+i,"","","");
	operatingSys.createCon();
	var operatingSys = new DropdownConst("div","pullLii"+i,"pull-left","oSys"+i,"","","").createCon();
	var operatingSys = new DropdownConst("label","","labelTemp","pullLii"+i,"","","").createCon();
	var operatingSys = new DropdownConst("div","selll"+i,"clickRole forWid newClickRole"+i,"pullLii"+i,"Select","",osImg,osArr);
	operatingSys.createCon();
	operatingSys.cre();
	var operatingSys = new DropdownConst("span","","glyphicon glyphicon-chevron-down pull-right","selll"+i,"","","").createCon();

	/* Remove buttons */
	var docV = document.getElementById("templateConta"+i);
	docV.innerHTML+="<div class='pull-right'>"
				+"<span class='glyphicon glyphicon-minus-sign closeRow' onclick='closeRole(this)' style='font-size:25px;' ></span>"
				+"</div>";

		/*code for dropdown click*/
		$(document).on("click",".newClickRole"+i,function(){
			$(this).find(".dropDown").slideToggle();
		});
		//return i;
}

var select_result = [];
function saveTemplateInformation(buttonId){
	//alert(buttonId);
	var str="Select";
	for(var i=0;i<count;i++)
		{
			if(i == 0)
				{					
					var x = document.getElementById("sel").innerText;				
					var y = document.getElementById("sell").innerText;
					var z = document.getElementById("selll").innerText;
					if(x == str )
					{
						document.getElementById("sel").style.border="thin dashed #E24B4B";
						return;
					}else if(y == str)
						{
							document.getElementById("sell").style.border="thin dashed #E24B4B";
							return;
						}else if(z == str)
							{
								document.getElementById("selll").style.border="thin dashed #E24B4B";
								return;
							}
						var role_info={};
						role_info.role=x;
						role_info.roleAttr=y;
						role_info.os=z;
						select_result.push(role_info);
				}else{
					var x1 = document.getElementById("sel"+i).innerText;
					var y1 = document.getElementById("sell"+i).innerText;
					var z1 = document.getElementById("selll"+i).innerText;
					if(x1 == str )
					{
						document.getElementById("sel"+i).style.border="thin dashed #E24B4B";
						return;
					}else if(y1 == str)
						{
							document.getElementById("sell"+i).style.border="thin dashed #E24B4B";
							return;
						}else if(z1 == str)
							{
								document.getElementById("selll"+1).style.border="thin dashed #E24B4B";
								return;
							}
					var role_info={};
					role_info.role=x1;
					role_info.roleAttr=y1;
					role_info.os=z1;
					select_result.push(role_info);
				}
		}
	var pj_name = document.getElementById("sellll").innerText
	var pd_name = document.getElementById("selllll").innerText
	var tc_gy = document.getElementById("sellllll").innerText
	var tm_name = document.getElementById("t_name").value;
	var tm_desc = document.getElementById("t_desc").value;
	if(pj_name == str)
		{
		document.getElementById("sellll").style.border="thin dashed #E24B4B";
		return;
		}else if(pd_name == str)
			{
			document.getElementById("selllll").style.border="thin dashed #E24B4B";
			return;
			}else if(tc_gy == str)
			{
			document.getElementById("sellllll").style.border="thin dashed #E24B4B";
			return;
			}else if(tm_name == null || tm_name == "")
				{
				 document.getElementById("t_name").focus();
				 return;
				}else if(tm_desc == null || tm_desc == "")
					{
					 document.getElementById("t_desc").focus();
					 return;
					}
	var te_name=pj_name+"_"+tc_gy+"_"+tm_name;
	alert("Template saved with "+te_name+" name!!!!!!!!");	
	var ary1=JSON.stringify(select_result); 
	$.ajax({
	     type: 'POST',
		 jsonpCallback: "callback",
	     datatype: 'jsonp',
	     data: "d1="+ary1+"&d2="+te_name,
	     url: 'http://172.29.59.65:3000/node_store',
	     success: function(results) {
	    	 if(buttonId == "save_exit")
	    	 {
		    	 location.href="http://172.29.59.65:3000/assignNode"+"?data="+te_name;
	    	 }else if(buttonId == "create_exit")
	    	 		 {
				    	 $(".alertS div.alert").stop().hide();
				    	 $(".alert-success").stop().slideDown();
	    	 		 }
	     },
		 error: function (xhr, status, error){
	        console.log('Failure');
			alert("failure");
			},
		 });
}

