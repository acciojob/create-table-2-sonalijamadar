function createTable() {
    //Write your code here
	const table = document.getElementById(myTable);
	table.innerHTML = "";

	const rn = prompt("Input number of rows");
	const cn = prompt("Input number of columns");
	const rows = Number(rn);
	const cols = Number(cn);

	if (isNaN(rows) || isNan(cols)) {
		return;
	}
	if(rows <= 0 || cols <= 0){
		alert("Please enter positive numbers greater than 0");
		return;
	}
	for(let i = 0; i < rows; i++){
		const tr = document.createElement("tr");
		for(let j = 0; j < cols; j++){
			const td = document.createElement("td");
			td.textContent = `Row-${i} Column-${j}`;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	
  
}
