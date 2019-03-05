/**
 * Learning about chain locators
 */
describe("chain locators", function(){
	it("open angular js website", function(){
		browser.get("http://juliemr.github.io/protractor-demo/");
		//repeator, chain locators and css for identical tags
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("4");
		element(by.id("gobutton")).click();
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) {
			console.log(text);
		})
	})
	
})