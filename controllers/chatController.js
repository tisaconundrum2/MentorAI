// const User = require('../models/user');

export class Chat {

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
  }
  