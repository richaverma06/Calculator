var res = document.getElementById("res");
document.getElementById(res.id).innerHTML = "";
var expr = 0;
function action(e)
{
	var btn = e.target ; 
	if(btn.id=='btn=')
	{
		expr = eval(res.innerHTML);
		res.innerHTML = expr;
	}
	else if(btn.id=='btnclr')
	{
		res.innerHTML = "";
	}
	else {
		res.innerHTML+= btn.innerHTML;
	}
}
document.getElementById('btn0').onclick = action;
document.getElementById('btn1').onclick = action;
document.getElementById('btn2').onclick = action;
document.getElementById('btn3').onclick = action;
document.getElementById('btn4').onclick = action;
document.getElementById('btn5').onclick = action;
document.getElementById('btn6').onclick = action;
document.getElementById('btn7').onclick = action;
document.getElementById('btn8').onclick = action;
document.getElementById('btn9').onclick = action;
document.getElementById('btn+').onclick = action;
document.getElementById('btn-').onclick = action;
document.getElementById('btn*').onclick = action;
document.getElementById('btn/').onclick = action;
document.getElementById('btn=').onclick = action;
document.getElementById('btnclr').onclick =action; 
