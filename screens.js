module.exports = {
    displayMenuForScreen(screen) {
        // Main menu
        if(screen == 0) {
            console.log("Would you like to:\n1. Add a list\n2. Remove a list\n3. Show all lists\n4. Edit a list\n5. Exit");
        } 
        // Add list
        else if (screen == 1) {
            console.log("What would you like to name your list?");
        }
        // Remove list
        else if (screen == 2) {
            console.log("Enter the list number that you want to delete.");
        }
		// Edit list
		else if (screen == 4) {
			
			console.log("Which list do you want to edit?");
		}
		else if (screen == 6) {
			console.log("What would you like to add to the list?");
			
		
		}
		else if (screen == 7) {
			console.log("Which item do you want to edit?");
			
		
		}
		else if (screen == 8) {
			console.log("Which item do you want to remove?");
			
		
		}
		else if (screen == 9){
			console.log("1.Add an item to the list \n2. Remove an item from the list \n3. Edit an item in the list \n4. Show items \n5. Go back");
			
		}
		}
    }
//Screens = {
    // main_menu: 0,
    // add_list: 1,
    // remove_list: 2,
	// show_list: 3,
	// edit_list: 4,
	// add_list_item: 6,
	// edit_list_item: 7,
	// remove_list_item: 8