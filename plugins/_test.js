/*
- By WillZek 
- https://github.com/WillZek
- 🌃 Moon Force Team
- https://whatsapp.com/channel/0029Vb4Dnh611ulGUbu7Xg1q
*/

// TIKTOK - DOWNLOADER 📽️

import fetch from 'node-fetch';

let MF = async(m, { conn, text }) => {

if (!text) return conn.reply(m.chat, '🌃 Ingrese Un Link Para Descargarlo.', m);

let apiInfo = await(await fetch(`https://delirius-apiofc.vercel.app/search/tiktoksearch?query=${text}`)).json();

let force = apiInfo.meta[0];

let txt = `\`𝚃𝙸𝙺𝚃𝙾𝙺 𝑋 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰\`\n\n`
txt += `☪︎ *Título:* ${force.title}\n`
txt += `☪︎ *Duración:* ${force.duration}\n`
txt += `☪︎ *Likes:* ${force.like}\n`
txt += `☪︎ *Comentarios:* ${force.coment}\n`
txt += `☪︎ *Compartidas:* ${force.share}\n> `
txt += `♫ Descargando Audio, Por Favor Espere.`;

m.react('🕒');
m.reply(txt);

const ttdl = await tiktokdl(text);

conn.sendMessage(m.chat, { audio: { url: ttdl.result.video_no_watermark }, mimetype: 'audio/mpeg' }, { quoted: m });
m.react('✅');
}

MF.command = ['tiktokdl', 'test'];

export default MF;

async function tiktokdl(url) {
    let apiDownload = `https://api.ssateam.my.id/api/tiktok?url=${url}&apikey=makangratis`;
    let res = await (await fetch(apiDownload)).json();
    return res;
}
