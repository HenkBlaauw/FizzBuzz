class list{
	
	 initialize(name) {
		 console.log(name);
		this.name = name;
		this.items = [];
	}	

	 addItems(item){
		this.items.push(item);
		
	}
	
	getItems(){
		return this.items;
		
	}
}
module.exports = list;