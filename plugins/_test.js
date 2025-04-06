import fetch from 'node-fetch';

let MF = async (m, { conn, args, command, usedPrefix }) => {

if (!args[0]) return m.reply(`🌙 INGRESE UN Link De Spotify\n> *Ejemplo:* ${usedPrefix + command} https://open.spotify.com/track/0jH15Y9z2EpwTWRQI11xbj`);

let api = await (await fetch(`https://archive-ui.tanakadomp.biz.id/download/spotify?url=${args[0]}`)).json();

let Spotify_Imagen = api.result.data.image