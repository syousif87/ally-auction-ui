pipeline {
    environment {
        // prod 
    }

    options {
        // options
    }

    stages {
        stage('Test') {
            steps {
                sh 'ng test'
                sh 'ng e2e'
            }
            post {
                always {
                    // post results somewhere
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'ng build --prod'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // deploy steps
                }
             }
        }
    }

    post {
        always {
            // notify somewhere
        }
    }
}
