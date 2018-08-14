var State = require('./state.js');
var stdin = process.openStdin();
var list = require('./List.js');
var screen = require('./screens.js');


	// Define screen selections
var Screens = {
	main_menu: 0,
	add_list: 1,
	remove_list: 2,
	show_list: 3,
	edit_list_main: 4,
	add_list_item: 6,
	edit_list_item: 7,
	remove_list_item: 8,
	edit_list_main2 : 9
	};

	// Initialize state
		var state = new State();
		state.initialize(Screens.main_menu);
		var currentEdit = null;
		//var newList = new list();
	// Display welcome message
		console.log("=============================");
		console.log("Welcome to the To-Do List app\nThat does NOT work like it should....");
		console.log("=============================");
		screen.displayMenuForScreen(state.getCurrentScreen());

	// Initialize main looper
	stdin.addListener("data", function (d) {

		// Main menu choices
		if(state.getCurrentScreen() == Screens.main_menu) {
			if(d == 1 || d == '1') {
				state.setCurrentScreen(Screens.add_list);
				
			}
			
			else if(d == 2 || d == '2') {
				state.setCurrentScreen(Screens.remove_list);
			}

			else if(d == 3 || d == '3') {
				console.log("\n\nCurrent added lists:\n");

				for(var i = 0; i < state.getLists().length; i++) {
					var currentList = state.getLists()[i];
					var listName = currentList.name;
					//console.log("[" + i + "] " + state.getLists()[i]);
					console.log(listName);
				}
			} 
			
			else if( d == 4 || d == '4') {
				console.log(state.getLists());
				
				state.setCurrentScreen(Screens.edit_list_main);
			}
			
			else if(d == 5 || d == '5') {
				console.log("\n\nCheers!\n\n");
				process.exit(0);
			} 

			else
				console.log("Please choose an option from the menu");

			console.log("\n\n");
		} 

		// Add list state change
		else if(state.getCurrentScreen() == Screens.add_list) {
			console.log("Adding list with name [" + d.toString().trim() + "]");
			
			var newList = new list();
			newList.initialize(d.toString().trim());
			state.addList(newList);
			//state.addList(d.toString().trim());
			state.setCurrentScreen(Screens.main_menu);
			console.log("\n\n");
		}

		// Remove list state change
		else if(state.getCurrentScreen() == Screens.remove_list) {
			if(isNaN(d)) {
				console.log("Please enter a number");
			} 
			else {
				var listNumber = parseInt(d);

				if (listNumber < 0 || listNumber >= state.getLists().length) {
					console.log("There is no list for number [" + listNumber + "]");

					screen.displayMenuForScreen(state.getCurrentScreen());
					return;
				}

				console.log("Removing list #" + listNumber);

				state.getLists().splice(listNumber, 1);
				state.setCurrentScreen(Screens.main_menu);
				
				console.log("\n\n");
			}
		}
		
		else if(state.getCurrentScreen() == Screens.edit_list_main){

			if(isNaN(d)) {
				console.log("Please enter a number");
			} else if(d.toString().trim() <0 || d.toString().trim() > state.getLists().length){
				console.log("The number you have entered is not in the list");
				state.setCurrentScreen(Screens.edit_list);
			}
			console.log("You have chosen: " + list.name);
			state.setCurrentScreen(Screens.edit_list_main2);
			newList = state.getLists()[listNumber];
		}
		/* for(var i = 0; i < state.getLists().length; i++) {
			var currentList = state.getLists()[i];
			var listName = currentList.name;
			//console.log("[" + i + "] " + state.getLists()[i]);
			console.log(listName); */
				

		else if(state.getCurrentScreen() == Screens.edit_list_main2){
			
			if(isNaN(d.toString().trim())){
				console.log("Please enter a number");
			}
		
			if (d == 1 || d == '1'){
				state.setCurrentScreen(Screens.add_list_item);
			}
	
			if (d == 2 || d == '2'){
				state.setCurrentScreen(Screens.remove_list_item);
			}
			
			if (d == 3|| d == '3'){
				state.setCurrentScreen(Screens.edit_list_item);
			}
			
			if (d == 5 || d == '5'){
				state.setCurrentScreen(Screens.main_menu);	
			}	
			if (d == 4 || d == '4'){
				console.log(list.getItems());
			} 
			else if (d > 5 || d<0){
				console.log("Please select something from the list");
				state.setCurrentScreen(state.getCurrentScreen());
			}
		}

		else if(state.getCurrentScreen() == Screens.add_list_item){
			console.log("Adding item with name [" + d.toString().trim() + "]");
			newList.addItems(d);
			console.log(newList.getItems());
			state.setCurrentScreen(Screens.edit_list_main2);
			console.log("\n\n");
		}
		else if(state.getCurrentScreen() == Screens.remove_list_item){
			console.log("removing item with number [" + d.toString().trim()+ "]");
			//list.remove_list_item(newList.items()[d]);
			var listNumber = parseInt(d);

			if (listNumber < 0 || listNumber >= state.getLists().length) {
				console.log("There is no list for number [" + listNumber + "]");

				screen.displayMenuForScreen(state.getCurrentScreen());
				return;
			}

			console.log("Removing item #" + listNumber);

			list.getItems().splice(listNumber, 1);
			state.setCurrentScreen(Screens.edit_list_main2);


		}	
		
		screen.displayMenuForScreen(state.getCurrentScreen());
	});

	module.exports = State;
