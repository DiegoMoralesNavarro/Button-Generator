// chamar input


// font
document.getElementById('titulo1').onchange = function(){estilo(this.value)}
document.getElementById('tipoFonte').onchange = function(){estilo(this.value)}
document.getElementById('fontColor').onchange = function(){estilo(this.value)}
document.getElementById('fontTamanho').onchange = function(){estilo(this.value)}
document.getElementById('cursor').onchange = function(){estilo(this.value)}
// radius
document.getElementById('radius1').onchange = function(){estilo(this.value)}
document.getElementById('radius2').onchange = function(){estilo(this.value)}
document.getElementById('radius3').onchange = function(){estilo(this.value)}
document.getElementById('radius4').onchange = function(){estilo(this.value)}
document.getElementById('radiusT').onchange = function(){estilo(this.value)}
//padding
document.getElementById('paddingLR').onchange = function(){estilo(this.value)}
document.getElementById('paddingBT').onchange = function(){estilo(this.value)}
//border
document.getElementById('borderTipo').onchange = function(){estilo(this.value)}
document.getElementById('borderColor').onchange = function(){estilo(this.value)}
document.getElementById('border').onchange = function(){estilo(this.value)}
//Background
document.getElementById('backgroundTipo').onchange = function(){estilo(this.value)}
document.getElementById('visualizar').onchange = function(){estilo(this.value)}

document.getElementById('background1').onchange = function(){estilo(this.value)}
document.getElementById('posicao1').onchange = function(){estilo(this.value)}

document.getElementById('background2').onchange = function(){estilo(this.value)}
document.getElementById('posicao2').onchange = function(){estilo(this.value)}

document.getElementById('background3').onchange = function(){estilo(this.value)}
document.getElementById('posicao3').onchange = function(){estilo(this.value)}

document.getElementById('background4').onchange = function(){estilo(this.value)}
document.getElementById('posicao4').onchange = function(){estilo(this.value)}
//Box Shadow
document.getElementById('colorboxShadow').onchange = function(){estilo(this.value)}
document.getElementById('boxShadow1').onchange = function(){estilo(this.value)}
document.getElementById('boxShadow2').onchange = function(){estilo(this.value)}
document.getElementById('boxShadow3').onchange = function(){estilo(this.value)}
// outros
document.getElementById('titulo2').onchange = function(){estilo(this.value)}
document.getElementById('tipoTarget').onchange = function(){estilo(this.value)}
document.getElementById('titulo3').onchange = function(){estilo(this.value)}
document.getElementById('Transition').onchange = function(){estilo(this.value)}
//
document.getElementById("StyleB").onmouseover = function() {estiloHover(this.value)};

document.getElementById("StyleB").onmouseout = function() {estilo(this.value)};





// estilo 


function estilo(){



	// font
	var titulo = document.getElementById('titulo1').value;
	document.getElementById('StyleB').innerHTML = titulo;

	var tipoFonte = document.getElementById('tipoFonte').value;
	document.getElementById('StyleB').style.fontFamily = tipoFonte;

	var fontColor = document.getElementById('fontColor').value;
	document.getElementById('StyleB').style.color = fontColor;

	var fontTamanho = document.getElementById('fontTamanho').value;
	document.getElementById('StyleB').style.fontSize = fontTamanho + 'px';
	document.querySelector('#info1').innerHTML = fontTamanho + 'px';

	var cursor1 = document.getElementById('cursor').value;
	document.querySelector('#StyleB').style.cursor = cursor1;

	// radius
	var borderRadius1 = document.getElementById('radius1').value;
	var borderRadius2 = document.getElementById('radius2').value;
	var borderRadius3 = document.getElementById('radius3').value;
	var borderRadius4 = document.getElementById('radius4').value;
	var radiusT = document.getElementById('radiusT').value;

	document.getElementById('StyleB').style.borderTopLeftRadius = borderRadius1 + radiusT;
	document.getElementById('StyleB').style.borderTopRightRadius = borderRadius2 + radiusT;
	document.getElementById('StyleB').style.borderBottomLeftRadius = borderRadius3 + radiusT;
	document.getElementById('StyleB').style.borderBottomRightRadius = borderRadius4 + radiusT;
	document.querySelector('#info2').innerHTML = borderRadius1 + radiusT;
	document.querySelector('#info2-2').innerHTML = borderRadius2 + radiusT;
	document.querySelector('#info2-3').innerHTML = borderRadius3 + radiusT;
	document.querySelector('#info2-4').innerHTML = borderRadius4 + radiusT;

	//padding
	var paddingLR = document.getElementById('paddingLR').value;
	document.getElementById('StyleB').style.paddingLeft = paddingLR + 'px';
	document.getElementById('StyleB').style.paddingRight = paddingLR + 'px';
	document.querySelector('#info3').innerHTML = paddingLR + 'px ';

	var paddingBT = document.getElementById('paddingBT').value;
	 document.getElementById('StyleB').style.paddingBottom = paddingBT + 'px';
	 document.getElementById('StyleB').style.paddingTop = paddingBT + 'px';
	 document.querySelector('#info4').innerHTML = paddingBT + 'px ';

	 //border
	 var borderTipo = document.getElementById('borderTipo').value;
	 

	 var borderColor = document.getElementById('borderColor').value;
	 var border = document.getElementById('border').value;
	 document.getElementById('StyleB').style.border = border + 'px '+ borderTipo +borderColor;
	 document.querySelector('#info5').innerHTML = border + 'px';

	 //Background
	var backgroundTipo = document.getElementById('backgroundTipo').value;
	var visualizar = document.getElementById('visualizar').value;

	var c1 = document.getElementById('background1').value;
	var c2 = document.getElementById('background2').value;
	var c3 = document.getElementById('background3').value;
	var c4 = document.getElementById('background4').value;

	var p1 = document.getElementById('posicao1').value;
	var p2 = document.getElementById('posicao2').value;
	var p3 = document.getElementById('posicao3').value;
	var p4 = document.getElementById('posicao4').value;

if (visualizar == "") {
    document.querySelector('#StyleB').style.background = backgroundTipo+" "+c1+" "+p1+"%"+","+c2+" "+p2+"%"+","+c3+" "+p3+"%"+","+c4+" "+p4+"%)";

    var back = backgroundTipo.innerHTML = backgroundTipo+" "+c1+" "+p1+"%"+","+c2+" "+p2+"%"+","+c3+" "+p3+"%"+","+c4+" "+p4+"%)";

	document.querySelector('#info6').innerHTML = p1 + '%';
	document.querySelector('#info7').innerHTML = p2 + '%';
	document.querySelector('#info8').innerHTML = p3 + '%';
	document.querySelector('#info9').innerHTML = p4 + '%';
	} else {
		document.getElementById('StyleB').style.background = visualizar;

		var back = visualizar.innerHTML = visualizar;
	 }

	 //Box Shadow
	 var colorboxShadow = document.getElementById('colorboxShadow').value;

	 var boxShadow1 = document.getElementById('boxShadow1').value;
	 var boxShadow2 = document.getElementById('boxShadow2').value;
	 var boxShadow3 = document.getElementById('boxShadow3').value;

	 document.querySelector('#StyleB').style.boxShadow = boxShadow1+"px "+boxShadow2+"px "+boxShadow3+"px "+colorboxShadow;

	 document.querySelector('#info10').innerHTML = boxShadow1 + 'px';
	 document.querySelector('#info11').innerHTML = boxShadow2 + 'px';
	 document.querySelector('#info12').innerHTML = boxShadow3 + 'px';


	 // outros
	 var tituloClass = document.getElementById('titulo2').value;

	 var tipoTarget = document.getElementById('tipoTarget').value;

	 var tituloHref = document.getElementById('titulo3').value;

	 var Transition = document.getElementById('Transition').value;

	var T = Transition/10;

 	document.getElementById("StyleB").style.transition = T +"s";  
     document.querySelector('#info1T').innerHTML = T + 's';

     //


     var codigoHTML = "<a href='"+tituloHref+"' target="+tipoTarget+">\n"+
     				"<button class='"+tituloClass+"'>"+titulo+"</button>\n"+
				   "</a>";

	document.getElementById("result1").innerText = codigoHTML;



	 //


     var codigoCSS = "."+tituloClass+" { "+"<br>"+
     				"border: none; <br>"+
     				"text-decoration: none; <br>"+
     				"outline: none; <br>"+
     				"font-family: " +tipoFonte+ "; <br>"+
     				"color: " +fontColor+ "; <br>"+
     				"font-size: " +fontTamanho+ "px; <br>"+
     				"cursor: " +cursor1+ "; <br>"+
     				"border-top-left-radius: " + borderRadius1 + radiusT+ "; <br>"+
     				"border-top-right-radius: " + borderRadius2 + radiusT+ "; <br>"+
     				"border-bottom-left-radius: " + borderRadius3 + radiusT+ "; <br>"+
     				"border-bottom-right-radius: " + borderRadius4 + radiusT+ "; <br>"+
     				"padding-left: " +paddingLR+ "px; <br>"+
     				"padding-right: " +paddingLR+ "px; <br>"+
     				"padding-bottom:" +paddingBT+ "px; <br>"+
     				"padding-top: " +paddingBT+ "px; <br>"+
     				"border: " +border + 'px '+ borderTipo +' '+ borderColor+ "; <br>"+
     				"background: " +backgroundTipo+" "+c1+" "+p1+"%"+","+c2+" "+p2+"%"+","+c3+" "+p3+"%"+","+c4+" "+p4+"%)"+"; <br>"+
     				"background: " +visualizar+ "; <br>"+
     				"transition-duration: " +T+ "s; <br>"+
     				"box-shadow: " +boxShadow1+"px "+boxShadow2+"px "+boxShadow3+"px "+colorboxShadow+ "; <br>"+
				   "}"+
				   "<br><br>";

	document.getElementById("result2").innerHTML = codigoCSS;



}








// chamar input

//font
document.getElementById('tipoFonteHover').onchange = function(){estiloHover(this.value)}
document.getElementById('fontColorHover').onchange = function(){estiloHover(this.value)}

//Background
document.getElementById('backgroundTipoHover').onchange = function(){estiloHover(this.value)}
document.getElementById('visualizarHover').onchange = function(){estiloHover(this.value)}

document.getElementById('background1Hover').onchange = function(){estiloHover(this.value)}
document.getElementById('posicao1Hover').onchange = function(){estiloHover(this.value)}

document.getElementById('background2Hover').onchange = function(){estiloHover(this.value)}
document.getElementById('posicao2Hover').onchange = function(){estiloHover(this.value)}

document.getElementById('background3Hover').onchange = function(){estiloHover(this.value)}
document.getElementById('posicao3Hover').onchange = function(){estiloHover(this.value)}

document.getElementById('background4Hover').onchange = function(){estiloHover(this.value)}
document.getElementById('posicao4Hover').onchange = function(){estiloHover(this.value)}
 //Box Shadow
document.getElementById('colorboxShadowHover').onchange = function(){estiloHover(this.value)}
document.getElementById('boxShadow1Hover').onchange = function(){estiloHover(this.value)}
document.getElementById('boxShadow2Hover').onchange = function(){estiloHover(this.value)}
document.getElementById('boxShadow3Hover').onchange = function(){estiloHover(this.value)}

document.getElementById('titulo2').onchange = function(){estiloHover(this.value)}




// estilo hover
function estiloHover(){

	//font
	var tipoFonteH = document.getElementById('tipoFonteHover').value;
	document.getElementById('StyleB').style.fontFamily = tipoFonteH;

	var fontColorH = document.getElementById('fontColorHover').value;
	document.getElementById('StyleB').style.color = fontColorH;

	 //Background
	var backgroundTipoH = document.getElementById('backgroundTipoHover').value;
	var visualizarH = document.getElementById('visualizarHover').value;

	var c1 = document.getElementById('background1Hover').value;
	var c2 = document.getElementById('background2Hover').value;
	var c3 = document.getElementById('background3Hover').value;
	var c4 = document.getElementById('background4Hover').value;

	var p1 = document.getElementById('posicao1Hover').value;
	var p2 = document.getElementById('posicao2Hover').value;
	var p3 = document.getElementById('posicao3Hover').value;
	var p4 = document.getElementById('posicao4Hover').value;

if (visualizarH == "") {
    document.querySelector('#StyleB').style.background = backgroundTipoH+" "+c1+" "+p1+"%"+","+c2+" "+p2+"%"+","+c3+" "+p3+"%"+","+c4+" "+p4+"%)";

    var back = backgroundTipoH.innerHTML = backgroundTipoH+" "+c1+" "+p1+"%"+","+c2+" "+p2+"%"+","+c3+" "+p3+"%"+","+c4+" "+p4+"%)";

	document.querySelector('#info13').innerHTML = p1 + '%';
	document.querySelector('#info14').innerHTML = p2 + '%';
	document.querySelector('#info15').innerHTML = p3 + '%';
	document.querySelector('#info16').innerHTML = p4 + '%';
	} else {
		document.getElementById('StyleB').style.background = visualizarH;

		var back = visualizarH.innerHTML = visualizaH;
	 }

	 //Box Shadow
	 var colorboxShadowH = document.getElementById('colorboxShadowHover').value;

	 var boxShadow1H = document.getElementById('boxShadow1Hover').value;
	 var boxShadow2H = document.getElementById('boxShadow2Hover').value;
	 var boxShadow3H = document.getElementById('boxShadow3Hover').value;

	 document.querySelector('#StyleB').style.boxShadow = boxShadow1H+"px "+boxShadow2H+"px "+boxShadow3H+"px "+colorboxShadowH;

	 document.querySelector('#info17').innerHTML = boxShadow1H + 'px';
	 document.querySelector('#info18').innerHTML = boxShadow2H + 'px';
	 document.querySelector('#info19').innerHTML = boxShadow3H + 'px';

	 //
	var tituloClass = document.getElementById('titulo2').value;


	 var codigoCSShover = "."+tituloClass+":hover { "+"<br>"+
     				"font-family: " +tipoFonteH+ "; <br>"+
     				"color: " +fontColorH+ "; <br>"+
     				
     				"background: " +backgroundTipoH+" "+c1+" "+p1+"%"+","+c2+" "+p2+"%"+","+c3+" "+p3+"%"+","+c4+" "+p4+"%)"+"; <br>"+
     				"background: " +visualizarH+ "; <br>"+
     				"box-shadow: " +boxShadow1H+"px "+boxShadow2H+"px "+boxShadow3H+"px "+colorboxShadowH+ "; <br>"+
				   "}"+
				   "<br><br>";

	document.getElementById("result3").innerHTML = codigoCSShover;




}




// modelos
document.getElementById('modelo1').onclick = function(){modelo1(this.value)};


function modelo1(){

	
	document.getElementById("fontColor").value = "#ffffff";
	document.getElementById('StyleB').style.color = "#ffffff";
	document.getElementById("fontTamanho").value = "20";
	document.getElementById('StyleB').style.fontSize = '20px';
	document.querySelector('#info1').innerHTML = '20px';
	//
	document.getElementById("radius1").value = "2";
	document.getElementById("radius2").value = "2";
	document.getElementById("radius3").value = "2";
	document.getElementById("radius4").value = "2";
	document.getElementById('StyleB').style.borderTopLeftRadius = "2px";
	document.getElementById('StyleB').style.borderTopRightRadius = "2px";
	document.getElementById('StyleB').style.borderBottomLeftRadius = "2px";
	document.getElementById('StyleB').style.borderBottomRightRadius = "2px";
	document.querySelector('#info2').innerHTML = "2px";
	document.querySelector('#info2-2').innerHTML = "2px";
	document.querySelector('#info2-3').innerHTML = "2px";
	document.querySelector('#info2-4').innerHTML = "2px";
	//
	document.getElementById("paddingLR").value = "15";
	document.getElementById("paddingBT").value = "2";
	document.getElementById('StyleB').style.paddingLeft = '15px';
	document.getElementById('StyleB').style.paddingRight = '15px';
	document.querySelector('#info3').innerHTML = '15px';
	 document.getElementById('StyleB').style.paddingBottom = '2px';
	 document.getElementById('StyleB').style.paddingTop = '2px';
	 document.querySelector('#info4').innerHTML = '2px';
	//
	document.getElementById('backgroundTipo').value ="linear-gradient(180deg,";
	document.getElementById('background1').value ="#4c4c4c";
	document.getElementById('background2').value ="#595959";
	document.getElementById('background3').value ="#1c1c1c";
	document.getElementById('background4').value ="#131313";
	document.querySelector('#StyleB').style.background = "linear-gradient(180deg, #4c4c4c 5%,#595959 40%,#1c1c1c 50%,#131313 100%)";
	//
	document.getElementById('colorboxShadow').value ="#ffffff";
	document.querySelector('#StyleB').style.boxShadow = "3px 3px 19px #ffffff";
	// hover
	document.getElementById("fontColorHover").value = "#000000";
	//
	document.getElementById('backgroundTipoHover').value ="linear-gradient(180deg,";
	document.getElementById('background1Hover').value ="#707070";
	document.getElementById('background2Hover').value ="#ededed";
	document.getElementById('background3Hover').value ="#bdbdbd";
	document.getElementById('background4Hover').value ="#757575";
	//
	document.getElementById('colorboxShadowHover').value ="#000000";
	document.getElementById('boxShadow3Hover').value ="7";


}


document.getElementById('modelo2').onclick = function(){modelo2(this.value)};


function modelo2(){

	
	document.getElementById("fontColor").value = "#000000";
	document.getElementById('StyleB').style.color = "#000000";
	document.getElementById("fontTamanho").value = "20";
	document.getElementById('StyleB').style.fontSize = '20px';
	document.querySelector('#info1').innerHTML = '20px';
	//
	document.getElementById("radiusT").value = "px";
	document.getElementById("radius1").value = "12";
	document.getElementById("radius2").value = "12";
	document.getElementById("radius3").value = "12";
	document.getElementById("radius4").value = "12";
	document.getElementById('StyleB').style.borderTopLeftRadius = "12px";
	document.getElementById('StyleB').style.borderTopRightRadius = "12px";
	document.getElementById('StyleB').style.borderBottomLeftRadius = "12px";
	document.getElementById('StyleB').style.borderBottomRightRadius = "12px";
	document.querySelector('#info2').innerHTML = "12px";
	document.querySelector('#info2-2').innerHTML = "12px";
	document.querySelector('#info2-3').innerHTML = "12px";
	document.querySelector('#info2-4').innerHTML = "12px";
	//
	document.getElementById("paddingLR").value = "15";
	document.getElementById("paddingBT").value = "2";
	document.getElementById('StyleB').style.paddingLeft = '15px';
	document.getElementById('StyleB').style.paddingRight = '15px';
	document.querySelector('#info3').innerHTML = '15px';
	 document.getElementById('StyleB').style.paddingBottom = '2px';
	 document.getElementById('StyleB').style.paddingTop = '2px';
	 document.querySelector('#info4').innerHTML = '2px';
	//
	document.getElementById('backgroundTipo').value ="linear-gradient(180deg,";
	document.getElementById('background1').value ="#329dc8";
	document.getElementById('background2').value ="#1590bc";
	document.getElementById('background3').value ="#12708c";
	document.getElementById('background4').value ="#329dc8";
	document.querySelector('#StyleB').style.background = "linear-gradient(180deg, #329dc8 5%,#1590bc 40%,#12708c 50%,#329dc8 100%)";
	//
	document.getElementById('colorboxShadow').value ="#000000";
	document.querySelector('#StyleB').style.boxShadow = "3px 3px 19px #000000";
	// hover
	document.getElementById("fontColorHover").value = "#000000";
	//
	document.getElementById('backgroundTipoHover').value ="linear-gradient(180deg,";
	document.getElementById('background1Hover').value ="#99d0e6";
	document.getElementById('background2Hover').value ="#55c4ec";
	document.getElementById('background3Hover').value ="#1ca9d4";
	document.getElementById('background4Hover').value ="#99d0e6";
	//
	document.getElementById('colorboxShadowHover').value ="#000000";
	document.getElementById('boxShadow3Hover').value ="11";


}

document.getElementById('modelo3').onclick = function(){modelo3(this.value)};

function modelo3(){

	
	document.getElementById("fontColor").value = "#ffffff";
	document.getElementById('StyleB').style.color = "#ffffff";
	document.getElementById("fontTamanho").value = "20";
	document.getElementById('StyleB').style.fontSize = '20px';
	document.querySelector('#info1').innerHTML = '20px';
	//
	document.getElementById("radiusT").value = "px";
	document.getElementById("radius1").value = "20";
	document.getElementById("radius2").value = "0";
	document.getElementById("radius3").value = "0";
	document.getElementById("radius4").value = "20";
	document.getElementById('StyleB').style.borderTopLeftRadius = "20px";
	document.getElementById('StyleB').style.borderTopRightRadius = "0px";
	document.getElementById('StyleB').style.borderBottomLeftRadius = "0px";
	document.getElementById('StyleB').style.borderBottomRightRadius = "20px";
	document.querySelector('#info2').innerHTML = "20px";
	document.querySelector('#info2-2').innerHTML = "0px";
	document.querySelector('#info2-3').innerHTML = "0px";
	document.querySelector('#info2-4').innerHTML = "20px";
	//
	document.getElementById("paddingLR").value = "15";
	document.getElementById("paddingBT").value = "2";
	document.getElementById('StyleB').style.paddingLeft = '15px';
	document.getElementById('StyleB').style.paddingRight = '15px';
	document.querySelector('#info3').innerHTML = '15px';
	 document.getElementById('StyleB').style.paddingBottom = '2px';
	 document.getElementById('StyleB').style.paddingTop = '2px';
	 document.querySelector('#info4').innerHTML = '2px';
	//
	document.getElementById('backgroundTipo').value ="linear-gradient(180deg,";
	document.getElementById('background1').value ="#e2ffa8";
	document.getElementById('background2').value ="#bdff42";
	document.getElementById('background3').value ="#9ff500";
	document.getElementById('background4').value ="#d4ff85";
	document.querySelector('#StyleB').style.background = "linear-gradient(180deg, #e2ffa8 5%,#bdff42 40%,#9ff500 50%,#d4ff85 100%)";
	//
	document.getElementById('colorboxShadow').value ="#000000";
	document.querySelector('#StyleB').style.boxShadow = "3px 3px 19px #000000";
	// hover
	document.getElementById("fontColorHover").value = "#ffffff";
	//
	document.getElementById('backgroundTipoHover').value ="linear-gradient(180deg,";
	document.getElementById('background1Hover').value ="#c3ff4d";
	document.getElementById('background2Hover').value ="#a2fa00";
	document.getElementById('background3Hover').value ="#7bbd00";
	document.getElementById('background4Hover').value =" #b6ff2e";
	//
	document.getElementById('colorboxShadowHover').value ="#bdff42";
	document.getElementById('boxShadow3Hover').value ="16";


}


document.getElementById('modelo4').onclick = function(){modelo4(this.value)};

function modelo4(){

	
	document.getElementById("fontColor").value = "#000000";
	document.getElementById('StyleB').style.color = "#000000";
	document.getElementById("fontTamanho").value = "20";
	document.getElementById('StyleB').style.fontSize = '20px';
	document.querySelector('#info1').innerHTML = '20px';
	//
	document.getElementById("radiusT").value = "%";
	document.getElementById("radius1").value = "50";
	document.getElementById("radius2").value = "50";
	document.getElementById("radius3").value = "50";
	document.getElementById("radius4").value = "50";
	document.getElementById('StyleB').style.borderTopLeftRadius = "50%";
	document.getElementById('StyleB').style.borderTopRightRadius = "50%";
	document.getElementById('StyleB').style.borderBottomLeftRadius = "50%";
	document.getElementById('StyleB').style.borderBottomRightRadius = "50%";
	document.querySelector('#info2').innerHTML = "50%";
	document.querySelector('#info2-2').innerHTML = "50%";
	document.querySelector('#info2-3').innerHTML = "50%";
	document.querySelector('#info2-4').innerHTML = "50%";
	//
	document.getElementById("paddingLR").value = "15";
	document.getElementById("paddingBT").value = "25";
	document.getElementById('StyleB').style.paddingLeft = '15px';
	document.getElementById('StyleB').style.paddingRight = '15px';
	document.querySelector('#info3').innerHTML = '15px';
	 document.getElementById('StyleB').style.paddingBottom = '25px';
	 document.getElementById('StyleB').style.paddingTop = '25px';
	 document.querySelector('#info4').innerHTML = '25px';
	//
	document.getElementById('backgroundTipo').value ="radial-gradient(";
	document.getElementById('background1').value ="#ff4d4d";
	document.getElementById('background2').value ="#fa0400";
	document.getElementById('background3').value ="#bd0300";
	document.getElementById('background4').value ="#ff312e";
	document.querySelector('#StyleB').style.background = "radial-gradient( #ff4d4d 5%,#fa0400  40%,#bd0300 50%,#ff312e 100%)";
	//
	document.getElementById('colorboxShadow').value ="#000000";
	document.querySelector('#StyleB').style.boxShadow = "3px 3px 19px #000000";
	// hover
	document.getElementById("fontColorHover").value = "#000000";
	//
	document.getElementById('backgroundTipoHover').value ="radial-gradient(";
	document.getElementById('background1Hover').value ="#ffc7c7";
	document.getElementById('background2Hover').value ="#ff5f5c";
	document.getElementById('background3Hover').value ="#ff0905";
	document.getElementById('background4Hover').value ="#ffa09e";
	//
	document.getElementById('colorboxShadowHover').value ="#ff5f5c";
	document.getElementById('boxShadow3Hover').value ="16";


}


document.getElementById('modelo5').onclick = function(){modelo5(this.value)};

function modelo5(){

	
	document.getElementById("fontColor").value = "#000000";
	document.getElementById('StyleB').style.color = "#000000";
	document.getElementById("fontTamanho").value = "20";
	document.getElementById('StyleB').style.fontSize = '20px';
	document.querySelector('#info1').innerHTML = '20px';
	//
	document.getElementById("radiusT").value = "%";
	document.getElementById("radius1").value = "0";
	document.getElementById("radius2").value = "0";
	document.getElementById("radius3").value = "50";
	document.getElementById("radius4").value = "50";
	document.getElementById('StyleB').style.borderTopLeftRadius = "0%";
	document.getElementById('StyleB').style.borderTopRightRadius = "0%";
	document.getElementById('StyleB').style.borderBottomLeftRadius = "50%";
	document.getElementById('StyleB').style.borderBottomRightRadius = "50%";
	document.querySelector('#info2').innerHTML = "0%";
	document.querySelector('#info2-2').innerHTML = "0%";
	document.querySelector('#info2-3').innerHTML = "50%";
	document.querySelector('#info2-4').innerHTML = "50%";
	//
	document.getElementById("paddingLR").value = "15";
	document.getElementById("paddingBT").value = "5";
	document.getElementById('StyleB').style.paddingLeft = '15px';
	document.getElementById('StyleB').style.paddingRight = '15px';
	document.querySelector('#info3').innerHTML = '15px';
	 document.getElementById('StyleB').style.paddingBottom = '5px';
	 document.getElementById('StyleB').style.paddingTop = '5px';
	 document.querySelector('#info4').innerHTML = '5px';
	//
	document.getElementById('backgroundTipo').value ="linear-gradient(180deg,";
	document.getElementById('background1').value ="#ffe357";
	document.getElementById('background2').value ="#ffda05";
	document.getElementById('background3').value ="#c2a500";
	document.getElementById('background4').value ="#ffe138";
	document.querySelector('#StyleB').style.background = "linear-gradient(180deg,  #ffe357 5%,#ffda05  40%,#c2a500 50%,#ffe138 100%)";
	//
	document.getElementById('colorboxShadow').value ="#000000";
	document.querySelector('#StyleB').style.boxShadow = "3px 3px 19px #000000";
	// hover
	document.getElementById("fontColorHover").value = "#000000";
	//
	document.getElementById('backgroundTipoHover').value ="linear-gradient(180deg,";
	document.getElementById('background1Hover').value ="#fff6c7";
	document.getElementById('background2Hover').value ="#ffe657";
	document.getElementById('background3Hover').value ="#ffd900";
	document.getElementById('background4Hover').value ="#fff099";
	//
	document.getElementById('colorboxShadowHover').value ="#000000";
	document.getElementById('boxShadow3Hover').value ="6";


}