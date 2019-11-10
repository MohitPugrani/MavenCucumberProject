$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 1,
  "name": "Test Automation Practice application",
  "description": "",
  "id": "test-automation-practice-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login to Automation Practice application",
  "description": "",
  "id": "test-automation-practice-application;login-to-automation-practice-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Chrome browser is Opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Automation Practice application is launched",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to Sign in page named \"Sign in page\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters valid credentials \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should be able to log into application",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "test-automation-practice-application;login-to-automation-practice-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "test-automation-practice-application;login-to-automation-practice-application;;1"
    },
    {
      "cells": [
        "mohitpugrani",
        "mohithp"
      ],
      "line": 11,
      "id": "test-automation-practice-application;login-to-automation-practice-application;;2"
    },
    {
      "cells": [
        "dalesteyn",
        "dalesty"
      ],
      "line": 12,
      "id": "test-automation-practice-application;login-to-automation-practice-application;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4054761198,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login to Automation Practice application",
  "description": "",
  "id": "test-automation-practice-application;login-to-automation-practice-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Chrome browser is Opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Automation Practice application is launched",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to Sign in page named \"Sign in page\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters valid credentials \"mohitpugrani\" and \"mohithp\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should be able to log into application",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.ChromebrowserisOpened()"
});
formatter.result({
  "duration": 218849784,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.AutomationPracticeapplicationislaunched()"
});
formatter.result({
  "duration": 9890428445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in page",
      "offset": 38
    }
  ],
  "location": "TestStepDef.UsernavigatestoSigninpage(String)"
});
formatter.result({
  "duration": 1342297871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohitpugrani",
      "offset": 31
    },
    {
      "val": "mohithp",
      "offset": 50
    }
  ],
  "location": "TestStepDef.Userentersvalidcredentials(String,String)"
});
formatter.result({
  "duration": 7871219107,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.Usershouldbeabletologintoapplication()"
});
formatter.result({
  "duration": 98855,
  "status": "passed"
});
formatter.after({
  "duration": 809403500,
  "status": "passed"
});
formatter.before({
  "duration": 3579086995,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login to Automation Practice application",
  "description": "",
  "id": "test-automation-practice-application;login-to-automation-practice-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Chrome browser is Opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Automation Practice application is launched",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to Sign in page named \"Sign in page\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters valid credentials \"dalesteyn\" and \"dalesty\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should be able to log into application",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.ChromebrowserisOpened()"
});
formatter.result({
  "duration": 138830,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.AutomationPracticeapplicationislaunched()"
});
formatter.result({
  "duration": 15220220259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in page",
      "offset": 38
    }
  ],
  "location": "TestStepDef.UsernavigatestoSigninpage(String)"
});
formatter.result({
  "duration": 1344110226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dalesteyn",
      "offset": 31
    },
    {
      "val": "dalesty",
      "offset": 47
    }
  ],
  "location": "TestStepDef.Userentersvalidcredentials(String,String)"
});
formatter.result({
  "duration": 5808504616,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.Usershouldbeabletologintoapplication()"
});
formatter.result({
  "duration": 166380,
  "status": "passed"
});
formatter.after({
  "duration": 1256081652,
  "status": "passed"
});
formatter.uri("Test2.feature");
formatter.feature({
  "line": 1,
  "name": "Test Automation Practice application",
  "description": "",
  "id": "test-automation-practice-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3113052032,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login to Automation Practice application",
  "description": "",
  "id": "test-automation-practice-application;login-to-automation-practice-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Chrome browser is Opened",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Automation Practice application is launched",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to Sign in page named \"Sign in page\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters valid username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "mohitpugrani",
        "mohithp"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be able to log into application",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDef.ChromebrowserisOpened()"
});
formatter.result({
  "duration": 115602,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.AutomationPracticeapplicationislaunched()"
});
formatter.result({
  "duration": 29422997078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in page",
      "offset": 38
    }
  ],
  "location": "TestStepDef.UsernavigatestoSigninpage(String)"
});
formatter.result({
  "duration": 1506458302,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.Userentersvalidusernameandpassword(DataTable)"
});
formatter.result({
  "duration": 5137795,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.Usershouldbeabletologintoapplication()"
});
formatter.result({
  "duration": 106959,
  "status": "passed"
});
formatter.after({
  "duration": 751532399,
  "status": "passed"
});
});