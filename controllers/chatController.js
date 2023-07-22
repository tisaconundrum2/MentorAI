const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

class Chat {

  static async appMention({ event, say }) {
    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        max_tokens: 512,
        prompt: event.text,
      });

      // Send an inline reply to the mention
      const _text = completion.data.choices[0].text;
      const response = await say({
        text: _text,
        thread_ts: event.thread_ts || event.ts // Use the thread timestamp if available, otherwise use the event timestamp
      });

      console.log(`Sent inline reply to ${event.channel}: ${response.ts}`);
    } catch (error) {
      console.error(error);
      const response = await say({
        text: "I'm sorry I wasn't able to do that: " + error.message,
        thread_ts: event.thread_ts || event.ts // Use the thread timestamp if available, otherwise use the event timestamp
      });
    }
  }

}

module.exports = {
  Chat
};
