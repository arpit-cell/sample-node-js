const sonarqubeScanner = require('sonarqube-scanner');
 
sonarqubeScanner({
    serverUrl : 'http://52.90.15.61:9000/',
    options: {
      'sonar.projectName': 'nodejs-sample',
      'sonar.projectDescription': 'My first CI/CD app',
      'sonar.login': "admin",
      'sonar.password': "admin",
      'sonar.projectVersion': '1.0',
      'sonar.language': 'js',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.sources': '.',
    //'sonar.tests': 'specs'
    }
  }, () => {});

