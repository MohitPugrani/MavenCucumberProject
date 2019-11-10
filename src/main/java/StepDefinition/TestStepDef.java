package StepDefinition;

import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import Base.PageBase;
import cucumber.api.DataTable;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestStepDef extends PageBase{

	
@Given("^Chrome browser is Opened$")
public void ChromebrowserisOpened()
	{
	System.out.println("Chrome browser is opened");
	}
	
@When("^Automation Practice application is launched$")
public void AutomationPracticeapplicationislaunched() {
	homepage.navigateToURL();
	System.out.println("Application is launched");
}

@When("^User navigates to Sign in page named \"(.*)\"$")
public void UsernavigatestoSigninpage(String pageName) {
	homepage.navigateToSignInPage();
	System.out.println("User navigates to page: "+pageName);
}
@When("^User enters valid username and password$")
public void Userentersvalidusernameandpassword(DataTable credentials)
{
	
	for(Map<String,String> cred: credentials.asMaps(String.class,String.class))
	{
		System.out.println("Username: "+cred.get("username"));
		System.out.println("Password: "+cred.get("password"));
	}
}


@When("^User enters valid credentials \"(.*)\" and \"(.*)\"$")
public void Userentersvalidcredentials(String username, String password) throws InterruptedException
{
	homepage.signInByEnteringCredentials(username, password);
	System.out.println("User enters credentials: "+username+" "+password);
}

@Then("^User should be able to log into application$")
public void Usershouldbeabletologintoapplication()
{
System.out.println("Logged in successsfully");
}
}
