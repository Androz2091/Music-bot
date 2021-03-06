const emotes = require ("../config/emojis.json");

module.exports.run = async (client, message) => {

    if(!message.member.voice.channel) return message.channel.send(`**You're not in a voice channel ${emotes.error}**`);

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send(`**No music playing on this server ${emotes.error}**`);

    const song = await client.player.skip(message.guild.id);

    message.channel.send(`**Song ${song.name} skipped ${emotes.success}**`);

};

module.exports.config = {
    name: "skip",
    aliases: []
};
