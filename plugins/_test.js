import fetch from 'node-fetch';

let MF = async(m, { conn, args }) => {

if (!text) return conn.reply(m.chat, '🌃 Ingrese Un Link Para Descargarlo.', m);

let apiInfo = await(await fetch(`https://delirius-apiofc.vercel.app/search/tiktoksearch?query=${text}`)).json();

let force = apiInfo.meta;

let txt ``

const ttdl = await tiktokdl(text);

conn.sendFile(m.chat, pene, 'MoonForce.jpg', txt, m, null);

await conn.sendMessage(m.chat, { audio: { url: ttdl.video_no_watermark }, mimetype: 'audio/mpeg' }, { quoted: m });
}

MF.command = ['tiktokdl'];

export default MF;

async function tiktokdl(url) {
await (await fetch(`https://api.ssateam.my.id/api/tiktok?url=${text}&apikey=makangratis`)).json();
return;

