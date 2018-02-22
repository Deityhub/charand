module.exports = {
	
	lowGen: (num)=>{
		//Generates random characters which are lowercase alphanumeric characters
		var input = "abcdefghijklmnopqrstuvwxyz0123456789";
		var output = "";
		for(var i = 0; i < num; i++){
			output += input.charAt(Math.floor(Math.random() * input.length));
		}
		return output;
	},

	highGen: (num)=>{
		//Generates random characters which are uppercase alphanumeric characters
		var input = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		var output = "";
		for(var i = 0; i < num; i++){
			output += input.charAt(Math.floor(Math.random() * input.length));
		}
		return output;
	},

	allGen: (num)=>{
		//Generates random characters 
		//which are a combination of both uppercase and lowercase alphanumeric characters
		var input = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		var output = "";
		for(var i = 0; i < num; i++){
			output += input.charAt(Math.floor(Math.random() * input.length));
		}
		return output;
	},

	charGen: (num)=>{
		//Generates random characters
		var input = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_-+[]{}:',./<>";
		var output = "";
		for(var i = 0; i < num; i++){
			output += input.charAt(Math.floor(Math.random() * input.length));
		}
		return output;
	}
}