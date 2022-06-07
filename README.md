<h1 align="center">Welcome to Discord Bot 👋</h1>

## Introduction

`Discord-Bot` 을 가져다가 원하는 부분만 수정해서 Discord Bot을 만들 수 있습니다. Discord Bot API 중 가장 많이 사용하는 /command 기능과 /trigger 기능만 남겨 놓았습니다. 해당 부분을 간단히 수정해서 원하는 Discord Bot을 만들 수 있습니다.

> An **open source** `discord.js` bot template which is based on official [discord.js guide](https://discordjs.guide/) to get started on making your very personal discord bot!

### Features:

#### • **Slash Command Handler:**

- Slash Command(/command)를 손쉽게 수정해서 만들 수 있습니다.
- The commands, in the slashCommands folder, receive an [`CommandInteraction`](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) object. You can see the [documentation of discord.js](https://discord.js.org/#/docs/main/stable/class/CommandInteraction) for all the properties and methods available.
- **IMPORTANT:** In the template, we are sending the slash commands to discord to be registered only to 1 guild. That is because their are 2 types of slash commands, guild and global. Guild commands are restricted to 1 guild but whenever you update them, they take effect immediately, whereas global commands take upto 1 hour to take effect. So use guild commands in development and global commands for production.

#### • **Trigger Handler:**

- Triggers occur when a specific "phrase" is said in a message content. For example, if you want your bot to react with :heart: when someone say `welcome` in their message, you can do that with this trigger handler!
- Trigger Handler also has the same skeleton structure as of command handler. The trigger handler is associated with the [triggers](https://github.com/NamVr/DiscordBot-Template/tree/master/triggers/) folder. There are trigger categories, like [reactions](https://github.com/NamVr/DiscordBot-Template/tree/master/triggers/reactions) folder, in the trigger folder.
- A sample trigger command is given in the [`chatbot.js`](https://github.com/NamVr/DiscordBot-Template/tree/master/triggers/reactions/hello.js) trigger file.

## Install

```sh
npm install
```

## Envs

- rename [`sample.env`](https://github.com/NamVr/DiscordBot-Template/blob/master/sample.env) to `.env` and fill the token and other values.

## Run

### for production
```sh
npm start
```

### for develop
```sh
npm run dev
```

## Requirements

Node.js 16+


## 📝 Acknowledgments

This project is based on [DiscordBot-Template](https://github.com/NamVr/DiscordBot-Template) by [Naman Vrati](https://github.com/NamVr)

---
