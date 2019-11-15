function PopulateFilmCategoryComboBox(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function ReceivedCallback() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("categorySelect").innerHTML = CreateSelect(JSON.parse(this.responseText));
		}
	};
	xhttp.open("GET", "http://leia.cs.spu.edu:3034/api/categories", true);
	xhttp.send();
}

function CreateSelect(category){
	var retVal = "";
	retVal += '<select id="filmCategoryId" name="filmCategoryId" class="form-control"> \n';
	for (var index in category){
		retVal += `<option value="${category[index].category_id}">${category[index].name}</option>`;
	}
	retVal += '</select>';
	return retVal;
}





function PopulateFilmsContainer(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function ReceivedCallback() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("allFilms").innerHTML = filmTable(JSON.parse(this.responseText));
		}
	};
	xhttp.open("GET", "http://leia.cs.spu.edu:3034/api/films-categories", true);
	xhttp.send();
}

function filmByID(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function ReceivedCallback() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("filmWithID").innerHTML = filmTable(JSON.parse(this.responseText));
		}
	};
	var id = document.getElementById("idInput").value;
	xhttp.open("GET", "http://leia.cs.spu.edu:3034/api/films/" + id, true);
	xhttp.send();
}

function filmTable(films){
	var retVal = "";
	retVal += '<table class = "table table-dark"><thead>' +
	'<tr> ' +
	'<th scope = "col">Title</th> '+
	'<th scope = "col">Description </th> ' +
	'<th scope = "col">Release Year </th> ' +
	'<th scope = "col">Duration </th> '+
	'	<th scope = "col">Rating</th> ' +
	'<th scope = "col">Category</th> ' +
	'</tr></thead><tbody> ';
for (var index in films){
	retVal += '<tr>' +
		`<td>${films[index].title} </td>` +
		`<td>${films[index].description} </td>` +
		`<td>${films[index].release_year} </td>` +
		`<td>${films[index].length} </td>` +
		`<td>${films[index].rating} </td>` +
		`<td>${films[index].name} </td>` +
		'</tr>'
	}
	retVal +='</tbody></table></body></html>';
	return retVal;
}




function categoryByID(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function ReceivedCallback() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("categoryWithID").innerHTML = categoryTable(JSON.parse(this.responseText));
		}
	};
	var id = document.query.idInput;
	xhttp.open("GET", "http://leia.cs.spu.edu:3034/api/categories/" + id, true);
	xhttp.send();
}

function PopulateCategoryContainer(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function ReceivedCallback() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("allCategories").innerHTML = categoryTable(JSON.parse(this.responseText));
		}
	};
	xhttp.open("GET", "http://leia.cs.spu.edu:3034/api/categories" , true);
	xhttp.send();
}

function categoryTable(category){
	var retVal = "";
	retVal += '<table class = "table table-dark"><thead>' +
	'<tr> ' +
	'<th scope = "col">Category id</th> '+
	'<th scope = "col">Category Name</th> ' +
	'</tr></thead><tbody> ';
for (var index in category){
	retVal += '<tr>' +
		`<td>${category[index].category_id} </td>` +
		`<td>${category[index].name} </td>` +
		'</tr>'
	}
	retVal +='</tbody></table></body></html>';
	return retVal;
}
