// import IORedis from 'ioredis';

// let redis: IORedis | null = null;

// export function getRedis() {
//   if (!redis) {
//     if (!process.env.REDIS_URL) {
//       throw new Error('REDIS_URL missing');
//     }

//     // ✅ CORRECT - BullMQ works properly
//     redis = new IORedis(process.env.REDIS_URL, {
//       maxRetriesPerRequest: null, // No job duplicates!
//       enableReadyCheck: false,    // Better for Docker!
//     });
//   }

//   return redis;
// }

import IORedis from 'ioredis';

let redis: IORedis | null = null;

export function getRedis(): IORedis | null {
  if (!process.env.REDIS_URL) {
    console.warn('⚠️ Redis disabled: REDIS_URL not set');
    return null;
  }

  if (!redis) {
    redis = new IORedis(process.env.REDIS_URL, {
      maxRetriesPerRequest: null,
      enableReadyCheck: false,
    });

    redis.on('connect', () => {
      console.log('✅ Redis connected');
    });

    redis.on('error', (err) => {
      console.warn('⚠️ Redis error:', err.message);
    });
  }

  return redis;
}