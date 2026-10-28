
module.exports ={
    default: {
        requireModule:['ts-node/register'],
        require: [
             'Features/support/**/*.ts',
             'Features/step_definitions/**/*.ts',
        ],
        paths:['Features/**/*.feature'],
        format:[
            'progress-bar',
            'html:reports/cucumber-report.html',
            'json:reports/report.json'
        ],
        formatOptions: {snippetInterface:'async-await'}
    }
};