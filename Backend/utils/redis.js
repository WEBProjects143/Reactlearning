const redis = require('redis');

// Connect to Redis (default host: localhost, port: 6379)
const client = redis.createClient();

client.on('error', (err) => {
  console.error('Redis Client Error', err);
});

async function main() {
  await client.connect();

  // Set a value
  await client.set('myKey', 'Hello from Redis!');

  // Get a value
  const value = await client.get('myKey');
  console.log('Value from Redis:', value);

  await client.quit();
}

main();
