function calculateMinCost() {https://www.svgrepo.com/show/345221/three-dots.svg
  //your code here
  var inputData= document.querySelector("#rope-lengths").value;
  var inputArr=inputData.split(",");
	for (let i = 0; i < inputArr.length; i++) {
		inputArr[i]=Number(inputArr[i]);
	}
	var cost=0;
	while (inputArr.length>1) {
		inputArr.sort(function (a, b) {return a-b;})
		var newRope=inputArr[0]+inputArr[1];
		cost+=newRope;
		inputArr.splice(0, 2, newRope);
		
	}
  document.querySelector("#result").textContent = cost;
}  
