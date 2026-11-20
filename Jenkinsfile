
pipeline {
    agent any

    tools {
        nodejs 'node-lts' // Must match the name in Manage Jenkins -> Tools exactly
    }

    environment {
        CI = "true" // Jenkins will not set this automatically
    }

    parameters {
        choice(
            name: 'BROWSER',
            choices: ['chromium', 'firefox', 'webkit'],
            description: 'Playwright project to run'
        )
    }

    options {
        timeout(time: 38, unit: 'MINUTES')
    }

    triggers {
        pollSCM('H/5 * * * *')
    }

    stages {

        stage('Install') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install'
            }
        }

        stage('Playwright tests') {
            steps {
                sh "npx playwright test --project=${params.BROWSER}"
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: true
            ])
        }
    }
}
