package PageObjects;

import org.openqa.selenium.By;

import Base.TestBase;

public class HomePage extends TestBase {

	private static By btnSignin=By.xpath("//a[contains(text(),'Sign in')]");
	private static By textEmail=By.xpath("//input[@id='email']");
	private static By textPassword=By.xpath("//input[@id='passwd']");
	private static By btnSubmit=By.xpath("//*[@id=\"SubmitLogin\"]/span");
	
	public void navigateToURL()
	{
		driver.navigate().to(properties.getProperty("URL"));
		logger.info("Navigated successfully to URL automation practice");
		
	}
	
	public void navigateToSignInPage()
	{
		driver.findElement(btnSignin).click();
		logger.info("Navigated successfully to Sign In Page");
	}
	
	public void signInByEnteringCredentials(String Username, String Password) throws InterruptedException
	{
		Thread.sleep(4000);
		driver.findElement(textEmail).sendKeys(Username);
		driver.findElement(textPassword).sendKeys(Password);
		driver.findElement(btnSubmit).click();
		logger.info("Signed in successfully");

	}

}
