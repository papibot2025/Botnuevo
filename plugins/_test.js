import fetch from 'node-fetch';

let MF = async(m, { conn, args }) => {

if (!text) return conn.reply(m.chat, '🌃 Ingrese Un Link Para Descargarlo.', m);

let apiInfo = await(await fetch(`https://delirius-apiofc.vercel.app/search/tiktoksearch?query=${text}`)).json();

let force = apiInfo.meta;

let txt ``

const ttdl = await tiktokdl(text);

conn.sendFile(m.chat, pene, 'MoonForce.jpg', txt, m, null);

await conn.sendMessage(m.chat, { audio: { url: ttdl.result.audio }, mimetype: 'audio/mpeg' }, { quoted: m });
}

MF.command = ['tiktokdl'];

export default MF;

async function tiktokdl(url) {
let api = await (await fetch(`https://api.ssateam.my.id/api/tiktok?url=&apikey=makangratis`)).json();
return api;
}

