import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resources"},
        monochrome = true,
        tags = "@StaffTest",
        plugin = {"pretty","html:target/HtmlReports"}

)
public class TestRunCukes {
}
