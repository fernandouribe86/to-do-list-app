//START IIFE
function newItem(){

	let li = $("<li></li>");
	let inputValue = $("input").val();
	li.append(inputValue);

	if (inputValue === '') {
		alert("Please fill-in a task before proceeding.");
		} else {
			let list = $('#list');
			list.append(li);
	};

	function crossOut() {
		li.toggleClass("strike");
	};

	li.on("dblclick", function crossOut(){
		li.toggleClass("strike");
	});

	let crossOutButton = $("<button></button>");
	crossOutButton.append(document.createTextNode('X'));
	li.append(crossOutButton);

	crossOutButton.on("click", function deleteListItem(){
		li.addClass("delete");
	});

	function deleteListItem(){
		li.classList.add("delete")
	}

	$('#list').sortable();

}  //END IIFE
