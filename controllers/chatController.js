// const User = require('../models/user');

class Chat {

  static async appMention({ event, say }) {
    try {
      await say(`Hi there, <@${event.user}>`);
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
