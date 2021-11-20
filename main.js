const { WAConnection, 
       MessageType, 
       Mimetype, 
      } = require('@adiwajshing/baileys');
const fs = require('fs');
const prefix = '.'
const conn = require("./lib/index")
conn.connect()
const client = conn.client
//MODULO


//LIB


//SRC
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
//Bienvenidos al Imalaya 
client.on('group-participants-update', async (anu) => {
    const _welcom= JSON.parse(fs.readFileSync('./src/welkom.json'))

    if (!_welcom.includes(anu.jid)) return
    try {
    const mdata = await client.groupMetadata(anu.jid)
    console.log(anu)
    if (anu.action == 'add') {               
    num = anu.participants[0]  
try {pushnem = choute.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
    } catch {pushnem = num.split('@')[0]}
    try {
    ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)} 
    catch {
    ppimg = 'https://centromedicomontemar.cl/wp-content/uploads/2015/06/sin-perfil.png'}  
    
    teks = 
`�👾Hola, @${num.split('@')[0]}
*Sois bienvenido a ${mdata.subject}
    
Esperemos la pases bien y te gust el grupo.
Recuerda siempre seguir las reglas y mantener una formalidad respetuosa`

    let fotoP = await getBuffer(ppimg)
    client.sendMessage(mdata.id, fotoP, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
    
    }  else if (anu.action == 'remove') {
    num = anu.participants[0]
  
    teks = `
    @${num.split('@')[0]} Chau. toma awa y no dejes de respirar por que te mueres, lo que todo los demas quieren pero sho no xD.`
    client.sendMessage(mdata.id, teks, MessageType.text,{ contextInfo: {"mentionedJid": [num]}})
  
    } else if (anu.action == 'promote') {
    num = anu.participants[0]
    try { ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
    } catch {ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
    thu = await client.getStatus(anu.participants[0], MessageType.text)
    teks = 
`�❄️ *ADMIN NUEVO, SIUUUUU*❄️
😎 *Nombre:* @${num.split('@')[0]}
📋 *INFO:* ${thu.status}
🌎 *Grupo:* ${mdata.subject}
*PERFECTO, AHORA SOIS UNO DE LOS ADMINISTRADORES.*`
   let buff = await getBuffer(ppimg)
    client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
    } else if (anu.action == 'demote') {
    num = anu.participants[0]
    try {
    ppimg = await leo.getProfilePicture(`${num.split('@')[0]}@c.us`)
    } catch {
    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
    thu = await leo.getStatus(anu.participants[0], MessageType.text)
    teks = 
`❌ *Un disque Admin menos :v* ❌
🙄 *Nombre:* @${num.split('@')[0]}
📋 *INFO:* ${thu.status}
🌎 *Grupo:* ${mdata.subject} 
*Dea, sha no sois admin xD lo siento mucho...... na la verdad no xD.*`
    let buff = await getBuffer(ppimg)
    client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
    }
    } catch (e) {
    console.log('Error : %s', color(e, 'red'))
    }
    })
client.on('chat-update', async (mek) => {
try {	  
if (!mek.hasNewMessage) return
if (!mek.messages) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return

mek = mek.messages.all()[0]
if (!mek.message) return
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]        
const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const typeQuoted = Object.keys(quoted)[0]
const content = JSON.stringify(mek.message)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const body = mek.message.conversation || mek.message[type].caption || mek.message[type].text || ""
chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
budy = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''

if (prefix != "") {
if (!body.startsWith(prefix)) {
cmd = false
comm = ""
} else {
cmd = true
comm = body.slice(1).trim().split(" ").shift().toLowerCase()
}
} else {
cmd = false
comm = body.trim().split(" ").shift().toLowerCase()
}
        
const command = comm

const arg = chats.slice(command.length + 2, chats.length)
const args = budy.trim().split(/ +/).slice(1)
const isCmd = budy.startsWith(prefix)
const q = args.join(' ')
const soyYo = client.user.jid
const botNumber = client.user.jid.split("@")[0]
const ownerNumber = ['@s.whatsapp.net']
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? client.user.jid : isGroup ? mek.participant : mek.key.remoteJid
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
    const groupName = isGroup ? groupMetadata.subject : ''
    const groupMembers = isGroup ? groupMetadata.participants : ''
    const groupAdmins = isGroup ? await wa.getGroupAdmins(groupMembers) : []
    const botAdmin = groupAdmins.includes(client.user.jid)
    const isOwner = senderNumber == owner || senderNumber == botNumber || mods.includes(senderNumber)
    const isAdmin = groupAdmins.includes(sender) || false
    const isWelkom = isGroup ? welkom.includes(from) : false
//AUTO RESPUESTA VERIFICADA
if(body.includes('bot')) {
client.sendMessage(from, 'Hola!', MessageType.text, {quoted: { key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": "GARU", 'jpegThumbnail': fs.readFileSync('./media/logo.jpg')}}
}})
}

//AUTO RESPUESTA SIN VERIFICACION
if(body == ('hola')) {
client.sendMessage(from, 'como estas!', MessageType.text, {quoted: mek})
}
  
if(body == ('Hola')) {
client.sendMessage(from, 'Hola? Te haz podido comunicar.', MessageType.text, {quoted: mek})
}

//ZONA DE COMANDOS
switch (command) {
  case 'welcome':
  case 'bv':
  case 'bienvenidas':
  case 'bienvenida':

              if (args.length < 1) return reply(`*BIENVENIDAS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
              if ((args[0]) === 'on') {
              if (isWelkom) return reply('La bienvenida ya esta activa en este grupo')
              welkom.push(from)
              fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
              reply(`Bienvenida activada exitosamente para *${groupMetadata.subject}*`)
              } else if ((args[0]) === 'off') {
              if (!isWelkom) return reply('Bienvenida ya esta desactivada')
              welkom.splice(from, 1)
              fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
              reply(`La función de Bienvenida se desactivo en el grupo *${groupMetadata.subject}*`)
              } else {
              reply(`*BIENVENIDAS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
              }
              break
case 'bot':
client.sendMessage(from, 'Hola, felicidades, has logrado enviar un mensaje mediante un servidor externo😚', text, {quoted: { key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": "GARU", 'jpegThumbnail': fs.readFileSync('./media/logo.jpg')}}
}})
break		
case 'foto':
const imagen = fs.readFileSync('./media/foto.jpg')                
client.sendMessage(from, imagen, MessageType.image, {quoted: mek, caption: `*Aqui tienes la foto del trio fundado*`})
break
                
case 'video':
const video = fs.readFileSync('./media/video.mp4')
client.sendMessage(from, video, MessageType.video, {quoted: mek, mimetype: 'video/mp4', caption: 'JAJAJA', duration: 999999999})
break
                
case 'audio':
const audio = fs.readFileSync('./media/audio.mp3')
client.sendMessage(from, audio, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', duration: -9999999, ptt: true})
client.sendMessage(from, audio, MessageType.audio, {quoted: mek, mimetype: 'audio/mp3', duration: -9999999})                
break
                
}

} catch (e) {
        
console.log(e)}
        
})      
