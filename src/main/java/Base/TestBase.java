package Base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class TestBase {

	public static WebDriver driver;
	public static Logger logger;
	public static Properties properties;
	
	@Before
	public void setup() throws IOException
	{
		System.setProperty("webdriver.chrome.driver", "E:\\Users\\mohi123\\Downloads\\chromedriver.exe");
		driver=new ChromeDriver();
		System.out.println("Set up method executed before each scenario");
		logger=Logger.getLogger(TestBase.class);
		
		properties=new Properties();
		FileInputStream inputStream=new FileInputStream(System.getProperty("user.dir")+"\\appConfig.properties");
		properties.load(inputStream);
	}
	
	@After
	public void tearDown()
	{
		System.out.println("Tear Down method executed after each scenario");
		driver.quit();
	}
	
}
