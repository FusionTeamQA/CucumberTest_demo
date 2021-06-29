$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/EditUserName.feature");
formatter.feature({
  "name": "Поменять имя и фамилию у сотрудника, сохраниться и выйти",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@StaffTest"
    }
  ]
});
formatter.scenario({
  "name": "Авторизироваться, изменить и сохранить",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@StaffTest"
    }
  ]
});
formatter.step({
  "name": "Open browser editusername",
  "keyword": "Given "
});
formatter.match({
  "location": "EditUserName.open_browser_editusername()"
});
formatter.result({
  "error_message": "java.lang.ExceptionInInitializerError\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:807)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:76)\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:48)\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:39)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\n\tat ✽.Open browser editusername(src/test/resources/EditUserName.feature:4)\nCaused by: java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @2eb231a6\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:357)\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:297)\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:177)\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:171)\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:807)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:76)\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:48)\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:39)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\n",
  "status": "failed"
});
formatter.step({
  "name": "open page Staff DEV editusername",
  "keyword": "And "
});
formatter.match({
  "location": "EditUserName.open_page_Staff_DEV_editusername()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "open page info sotr editusername",
  "keyword": "And "
});
formatter.match({
  "location": "EditUserName.open_page_info_sotr_editusername()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click edit bottom editusername",
  "keyword": "When "
});
formatter.match({
  "location": "EditUserName.click_edit_bottom_editusername()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clear field first name",
  "keyword": "And "
});
formatter.match({
  "location": "EditUserName.clear_field_first_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter first name",
  "keyword": "And "
});
formatter.match({
  "location": "EditUserName.enter_first_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clear field last name",
  "keyword": "And "
});
formatter.match({
  "location": "EditUserName.clear_field_last_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter last name",
  "keyword": "And "
});
formatter.match({
  "location": "EditUserName.enter_last_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click bottom Save editusername",
  "keyword": "And "
});
formatter.match({
  "location": "EditUserName.click_bottom_Save_editusername()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "First name end Last name changed",
  "keyword": "Then "
});
formatter.match({
  "location": "EditUserName.first_name_end_Last_name_changed()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/MedicalOrders.feature");
formatter.feature({
  "name": "Успешная отправка заявки с типом \"больничный\"",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@StaffTest"
    }
  ]
});
formatter.scenario({
  "name": "Авторизоваться и отправить заявку с типом \"больничный\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@StaffTest"
    }
  ]
});
formatter.step({
  "name": "Open browser MedicalOrders",
  "keyword": "Given "
});
formatter.match({
  "location": "MedicalOrders.open_browser_MedicalOrders()"
});
formatter.result({
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:807)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:76)\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:48)\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:39)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\n\tat ✽.Open browser MedicalOrders(src/test/resources/MedicalOrders.feature:4)\n",
  "status": "failed"
});
formatter.step({
  "name": "open page Staff DEV MedicalOrders",
  "keyword": "And "
});
formatter.match({
  "location": "MedicalOrders.open_page_Staff_DEV_MedicalOrders()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click leave an application MedicalOrders",
  "keyword": "And "
});
formatter.match({
  "location": "MedicalOrders.click_leave_an_application_MedicalOrders()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click MedicalOrders type order",
  "keyword": "And "
});
formatter.match({
  "location": "MedicalOrders.click_MedicalOrders_type_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select data MedicalOrders",
  "keyword": "When "
});
formatter.match({
  "location": "MedicalOrders.user_select_data_MedicalOrders()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter heading and description MedicalOrders",
  "keyword": "And "
});
formatter.match({
  "location": "MedicalOrders.enter_heading_and_description_MedicalOrders()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click by send MedicalOrders",
  "keyword": "And "
});
formatter.match({
  "location": "MedicalOrders.click_by_send_MedicalOrders()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "MedicalOrders order send successful",
  "keyword": "Then "
});
formatter.match({
  "location": "MedicalOrders.medicalorders_order_send_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Browser closed MedicalOrders",
  "keyword": "And "
});
formatter.match({
  "location": "MedicalOrders.browser_closed_MedicalOrders()"
});
formatter.result({
  "status": "skipped"
});
});