// Simple root entrypoint for Elastic Beanstalk
try {
  require('./src/app');
} catch (err) {
  console.error('Failed to require ./src/app:', err);
  process.exit(1);
}
