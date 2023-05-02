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
    await say(
      `Hi there, <@${message.user}>! I'm MentorAI the AI oracle that will answer all your questions`
    );
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
