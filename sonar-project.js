const sonarqubeScanner = require('sonarqube-scanner');
 
sonarqube-scanner({
    serverUrl : 'http://34.239.255.241:9000/',
    options: {
      'sonar.projectName': 'nodejs-sample',
      'sonar.projectDescription': 'My first CI/CD app',
      'sonar.login': "6c48a89abd5ca4aae1cb77c5b7773882c6ec4a7c",
      'sonar.projectVersion':'1.0'
      'sonar.language':'js',
      'sonar.sources': '.',
    //'sonar.tests': 'specs'
    }
  }, () => {});

