describe("Protractor Locators", function(){
	it("Locators" , function(){
		//write your protractor raw code
		
		browser.get('http://juliemr.github.io/protractor-demo/');//to handle asynchronous code
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("4");
		element(by.id("gobutton")).click();
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("7");
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log(text);
		})
		
		
			console.log('On my last step');//this is not protractor , only javascript and hence asynchronous
		
		})
})	
