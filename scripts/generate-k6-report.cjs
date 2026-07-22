
  const reporter = require('k6-html-reporter');

  reporter.generateSummaryReport({
    jsonFile: 'reports/soak-summary.json',
    output: 'reports',});

  console.log('Report generated successfully!');