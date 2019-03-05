/**
 * 
 */
describe("Protractor baby steps", function(){
	it("Open Browser" , function(){
		//write your protractor raw code
		browser.get('https://angularjs.org')
		browser.get('http://juliemr.github.io/protractor-demo/').then(function(){ //to handle asynchronous code
		
			console.log('On my last step');//this is not protractor , only javascript and hence asynchronous
		
		})
		
		browser.sleep(9000);
				
		//to get autosuggestions install the angular js plugin, configure and convert to tern project 
		//then after writing . click control + space
		//Js is asynchronous, means when scripts are not running in a sequence
	})
	it("Close Browser", function(){
		
	})
})