const amqp = require('amqp');
const connection = amqp.createConnection({ host: 'localhost' });

// add this for better debuging
connection.on('error', function(e) {
    console.log("Error from amqp: ", e);
});

// Wait for connection to become established.
connection.on('ready', () => {
    // Use the default 'amq.topic' exchange
    connection.queue('post-proxy', q => {
        // Catch all messages
        q.bind('#');

        // Receive messages
        q.subscribe(message => {
            // Print messages to stdout
            console.log(message);
        });
    });
});