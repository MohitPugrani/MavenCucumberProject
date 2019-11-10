package Runner;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;


@CucumberOptions(
	features="/Users/mohi123/eclipse-workspace/MavenCucumberProject/src/main/java/Features"  //path of feature file
			,glue= {"StepDefinition","Base"}  //path of step definition file
			,format= {"pretty","html:test-output"} //display reports in different formats
			,monochrome=true //display console output in readable format
			,strict=false  //check if any step is not linked with stepdefinition, will fail scenario if there isn't any linkage
			,dryRun=false //check the above mapping without executing the scenario
			
)

public class TestRunner extends AbstractTestNGCucumberTests {

	/*private TestNGCucumberRunner testNGCucumberRunner;

	@BeforeClass(alwaysRun = true)
	public void setUpClass() throws Exception {
	    testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
	}

	@Test(groups = "cucumber scenarios", description = "Runs Cucumber Scenarios", dataProvider = "scenarios")
	public void scenario(CucumberFeatureWrapper 
	cucumberFeature) throws Throwable{
	testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	}
	@DataProvider
	public Object[][] scenarios() {
	    return testNGCucumberRunner.provideFeatures();
	}

	@AfterClass(alwaysRun = true)
	public void tearDownClass() throws Exception {
	    testNGCucumberRunner.finish(); 
	}*/
	
}
