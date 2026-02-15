// Root entrypoint for Elastic Beanstalk and other hosts
// Delegates to the app implementation under src/
try {
  require('./src/app');
} catch (err) {
  // Log error and exit with non-zero so EB captures the failure
  // eslint-disable-next-line no-console
  console.error('Failed to start app from ./src/app', err);
  process.exit(1);
}
