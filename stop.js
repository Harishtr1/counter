let count=0;
const set=document.querySelector("#value");
const a=document.querySelectorAll(".btn");
a.forEach(function(button){
	 button.addEventListener("click",function(e) {
		const style=e.currentTarget.classlist;
		if(style.contains("decrease")){
			count--;
		}else if(style.contains("increases")){
			count++;
		}else {
			count=0;
		}
		if(count>0){
			value.style.color="green"
		}
		else if(count<0){
			value.style.color="red";
		}
		else {
			value.style.color="#222"

		}
		value.textContent=count;

	});
});


