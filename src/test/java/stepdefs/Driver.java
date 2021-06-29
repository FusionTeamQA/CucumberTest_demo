package stepdefs;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.WebElement;


import java.util.Date;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;

public class Driver {

    Random random = new Random(); // добавление рандомных чисел
    int n = random.nextInt(1000) + 3; // +3 в конец

    public static final String URL = "https://staff.demo.fusion-team.com/";
    public static final String USER_admin = "fusion.team.llc@gmail.com";
    public static final String PASSWORD_admin = "AAAqqq111";

//    Date date = new Date();
    }


