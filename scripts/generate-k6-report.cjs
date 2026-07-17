
const reporter = require('k6-html-reporter');

reporter.generateSummaryReport({
  input: 'reports/smoke-test.json',
  output: 'reports',});

console.log('Report generated successfully!');