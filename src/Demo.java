import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Demo {
	
		
	public static void main(String[] args) {
		
		System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
		WebDriver ch = new ChromeDriver();
		ch.get("https://login.salesforce.com/?locale=au");
		System.out.println(ch.getTitle());// validate if your page title is correct
		//check it the url is same as what we want, hackers might redirect it
		System.out.println(ch.getCurrentUrl()); // validate if you landed on correct url
		//how to check page source, why we need page source sometimes in bank websites right click is disabled so how to view
		//will be used in frames concept
		//System.out.println(ch.getPageSource());
		ch.findElement(By.name("username")).sendKeys("Sumeet");
		ch.findElement(By.name("pw")).sendKeys("Password");
		ch.findElement(By.name("Login")).click();
		System.out.println(ch.findElement(By.cssSelector("div#error.loginError")).getText());
		//ch.navigate().back(); // for the browser back button
		//ch.close();//closes current browser
		//ch.quit();//closes all browsers opened by selenium script
		System.out.println("Uploaded by Developer in USA after changes");
		System.out.println("Changes made in develop branch by Indian developer");
		System.out.println("CHANGED DATED 18-3-2019");
		System.out.println("second CHANGED DATED 18-3-2019");
		
	}

}
