
pipeline {
    stages {
        stage('Install') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install'
            }
        }

        stage('Playwright tests') {
            steps {
                sh "npx playwright test --project=${param.BROWSER}"
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                keepAll: true,
                alwaysLinkToLastBuild: true
                allowMissing: true
            ])
        }
    }
}
