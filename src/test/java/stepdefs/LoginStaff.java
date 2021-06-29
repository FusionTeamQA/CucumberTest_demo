package stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import stepdefs.Driver;

import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;


 public class LoginStaff extends Driver {


     WebDriver driver = null;

    @Given("^Open browser$")
    public void open_browser() {
        System.setProperty("webdriver.chrome.driver", "/Users/fusion_tech/Documents/test1/CucumberTest/src/test/resources/Driver/chromedriver");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        ChromeOptions options = new ChromeOptions();
        System.out.println("Открыт браузер");

    }

    @Given("^open page Staff DEV$")
    public void open_page_Staff_DEV() throws Exception {
        driver.get(URL);
        System.out.println("Открыта страница Стафа ДЕВ");

    }

    @When("^user enters login and password$")
    public void user_enters_login_and_password() throws Exception {
        Thread.sleep(3000); //засыпание на 3 сек
        driver.findElement(By.name("login")).sendKeys(USER_admin);
        driver.findElement(By.name("password")).sendKeys(PASSWORD_admin);
        Thread.sleep(1000);
        System.out.println("Данные юзера введены");

    }

    @When("^click by login$")
    public void click_by_login() throws Exception {
        driver.findElement(By.xpath("//*[@id=\"root\"]/div[3]/form/button")).click();
        Thread.sleep(2500);
    }

    @Then("^User navigated to home page$")
    public void user_navigated_to_home_page() throws Exception {

    }
     @Then("^Browser closed$")
     public void browser_closed() throws Exception {
        driver.quit();
     }
 }