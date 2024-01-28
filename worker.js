const Queue = require('bull');
const { delay } = require('@whiskeysockets/baileys');

const redisConfig = {
  host: process.env.REDIS_HOST || 'roundhouse.proxy.rlwy.net',
  port: process.env.REDIS_PORT || 21112,
  password: '2fckLcMMPfmMeLH3Ckb3h3gA5npfDg3b',
};

const myQueue = new Queue('myQueue', {
  redis: redisConfig,
});

myQueue.process(async (job) => {
  console.log(`Procesando tarea en el trabajador: ${job.data}`);
  await delay(2000);

  // Creación del grupo y resto de la lógica
  const { name, mensaje, country, groupName } = job.data;
  const group = await createGroup(groupName);
  const user = await createUser(name, country);
  await addUserToGroup(user, group);

  return `Tarea completada en la cola principal: ${job.data}`;
});

myQueue.on('completed', (job, result) => {
  console.log(`Tarea completada en la cola principal: ${result}`);
});

module.exports = {
  addToQueue: (data) => {
    myQueue.add(data);
  }
};