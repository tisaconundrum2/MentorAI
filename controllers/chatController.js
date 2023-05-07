// const User = require('../models/user');

class Chat {

  static async appMention({ event, say }) {
    try {
      // Send an inline reply to the mention
      const response = await say({
        text: `Hi there, <@${event.user}>!`,
        thread_ts: event.thread_ts || event.ts // Use the thread timestamp if available, otherwise use the event timestamp
      });

      console.log(`Sent inline reply to ${event.channel}: ${response.ts}`);
    } catch (error) {
      console.error(error);
    }
  }


  static async hello({ message, say }) {
    try {
      if (message.thread_ts) {
        // The message is a reply in a thread
        const response = await say({
          text: `Thanks for your response, <@${message.user}>!`,
          thread_ts: message.thread_ts
        });

        console.log(`Sent reply to ${message.channel}: ${response.ts}`);
      } else {
        // The message is not a reply in a thread
        const response = await say(
          `Hi there, <@${message.user}>! I'm MentorAI the AI oracle that will answer all your questions`
        );

        console.log(`Sent message to ${message.channel}: ${response.ts}`);
      }
    } catch (error) {
      console.error(error);
    }
  }


  static async question({ command, ack, say }) {
    try {
      await ack();
      await say("Yaaay! that command works!");
    } catch (error) {
      console.log("err")
      console.error(error);
    }
  }

}

module.exports = {
  Chat
};
