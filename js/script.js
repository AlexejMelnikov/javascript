
function myFirstApp(name,age){
alert("Привет еня зовут "+ name+" и это моя первая прогромма");
	
	function showSkils(){
		let skils=["html","css","плаванием"]
		for(let i=0; i<skils.length;i++){
			document.write("Я владею " +skils[i]+"<br>")
		}
	}
	showSkils();
	function checkAge(age){
		if(age>18){
			alert("Ты совершенно летний! Заходи");
		}else
		{
		alert("Тебе вход не разрешен");
		}
	function calcPow(a){
		console.log(a*a);
	}
	calcPow(4);
}
checkAge(age);
}
myFirstApp("Alex", 31);
