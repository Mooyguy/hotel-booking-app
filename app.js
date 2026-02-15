// Simple root entrypoint for Elastic Beanstalk
// It delegates to your real server implementation in src/app.js
try {
  require('./src/app');
} catch (err) {
  // Log errors so EB can capture them in eb-engine.log
  // and cause a non-zero exit code if the app fails to start
  // (EB will report this).
  // eslint-disable-next-line no-console
  console.error('Failed to require ./src/app:', err);
  process.exit(1);
}