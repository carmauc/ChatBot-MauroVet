// worker.js
const { Worker, QueueScheduler } = require('bull');
const Queue = require('bull');
const { delay } = require('@whiskeysockets/baileys');

const redisConfig = {
  host: process.env.REDIS_HOST || 'roundhouse.proxy.rlwy.net',
  port: process.env.REDIS_PORT || 21112,
  password: '2fckLcMMPfmMeLH3Ckb3h3gA5npfDg3b'

};

const myQueue = new Queue('myQueue', {
  redis: redisConfig,
});
const scheduler = new QueueScheduler('myQueue', {
  redis: redisConfig,
});
const worker = new Worker('myQueue', async job => {
  console.log(`Procesando tarea en el trabajador: ${job.data}`);
  await delay(2000);
  return `Tarea completada: ${job.data}`;
});

// Escucha eventos de la cola
myQueue.on('completed', (job, result) => {
  console.log(`Tarea completada en la cola: ${result}`);
});
