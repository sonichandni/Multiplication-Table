function cal_tbl() {
	var num=document.getElementById("num").value;
	if(num=="")
	{
		alert("Please Enter a number");
		document.getElementById("ftbl").innerHTML = "";
	}
	else
	{
		//alert(num);
		var ar_tbl="";
		var i;
		
		for (i = 1; i <=10; i++) {
			ar_tbl += num + " * " + i +"=" + num * i + "<br>";
		}
		
		document.getElementById("ftbl").innerHTML = ar_tbl;
	}
}
