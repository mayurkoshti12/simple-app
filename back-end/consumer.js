const amqp = require("amqplib");

async function consumeMessage() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const queueName = "lazy_notifications_queue";

  await channel.assertQueue(queueName, {
    durable: true,
    arguments: {
      "x-queue-mode": "lazy",
    },
  });

  console.log(`Waiting for message in ${queueName}`);

  channel.consume(queueName, (msg) => {
    if (msg != null) {
      console.log(`Received Message: ${msg.content.toString()}`);
      channel.ack(msg);
    }
  });
}

consumeMessage();
