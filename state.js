class State {

    initialize(screen) {
        this.currentScreen = screen;
        this.lists = [];
    }

    setCurrentScreen(screen) {
        this.currentScreen = screen;
    }

    getCurrentScreen() {
        return this.currentScreen;
    }

    addList(list) {
        this.lists.push(list);
    } 

    getLists() {
        return this.lists;
    }

	editList(){
		return this.lists;
		
	}
	
};

module.exports = State;