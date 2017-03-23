function ConstructApple(){

	box = {color: "brown"}

	console.log(box.color);

	this.color = "red";
	this.width = 200;
    this.height = 300;

}
# Test comment 
ConstructApple.prototype = {
	eat: function(){ return 'eat that apple'; },
	throw: function(){ return 'THROW IT!'; },
	nibble: function(){ return 'nibble like a hamster'; }
}

var apple = new ConstructApple();
var appl2 = new ConstructApple();
var apple3 = new ConstructApple();

