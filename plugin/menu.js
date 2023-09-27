// menu.js
module.exports = {
  mainMenu: (pushname, pushwish, botname, OWNER_NAME, owner, prefix, hours, minutes, seconds, xtime, xdate, me, isPublic) => `
  Hi 👋 *${pushname}*
  *${pushwish}*
  
 ✪   ───────────────
 ┃ ▣───────────────▣
 ✪  『  *GSS BOTWA INFO* 』 
 ▣─────────────────▣
 ║ 🤖 *ʙᴏᴛ ɴᴀᴍᴇ*: ${botname}
 ║ 👤 *ᴏᴡɴᴇʀ ɴᴀᴍᴇ*: ${OWNER_NAME}
 ║ 👨‍💻 *ɴᴜᴍʙᴇʀ*: ${owner}
 ║ 🚀 *ᴘʀᴇғɪx*: ${prefix}
 ║ ⏳ *ᴜᴘᴛɪᴍᴇ: ${hours}h ${minutes}m ${seconds}s
 ║ 🌐 *ᴍᴏᴅᴇ*: ${isPublic ? 'Public' : 'Self'}
 ✪   ───────────────
 ┃ ▣──────────────▣
 ✪  『  *USER INFO* 』 
 ▣─────────────────▣
 ║ 🧑 *ɴᴀᴍᴇ*: ${pushname}
 ║ 📞 *ɴᴜᴍʙᴇʀ*: @${me.split('@')[0]}
 ║ ✅ *ᴘʀᴇᴍɪᴜᴍ: ✅
 ✪   ─────────────
 ┃ ▣──────────────▣
 ✪  『  *TIME INFO* 』 
 ▣────────────────▣
 ║ ⏰ *ᴛɪᴍᴇ: ${xtime}
 ║ 📅 *ᴅᴀᴛᴇ*: ${xdate}
 ✪   ──────────────
.┃ ▣───────────────▣
 ✪  『  *HELP MENU* 』 
 ▣──────────────▣
 ║ 🆘 Pʟᴇᴀsᴇ Tʏᴘᴇ */ʜᴇʟᴘ*
.✪   ───────────────
 ┃ ▣──────────────▣
.✪  『  *AI MENU* 』 
 ▣────────────────▣
 ║ 1️⃣ .ɢᴘᴛ 🅕
 ║ 2️⃣ .ɪᴍɢ 🅕
 ║ 3️⃣ .ᴅᴀʟʟᴇ 🅕
 ║ 4⃣.ʙᴀʀᴅ 🅕
.✪   ────────────────
 ┃ ▣──────────────▣
 ✪  『  *TOOL MENU* 』 
 ▣─────────────────▣
 ║ 🗣 .ᴛᴛs 🅕
 ║ 📋 .ᴅᴇʟᴇᴛᴇ 🅅
 ║ 🌐 .ᴛʀᴀɴsʟᴀᴛᴇ 🅕
 ║ ℹ️ .ɪɴꜰᴏ 🅕
 ║ 🧬 .ɢᴇᴛʙɪᴏ 🅕
 ║ 🖇️ .ᴛɪɴʏᴜʀʟ 🅕
 ║ 📧 .ᴛᴇᴍᴘᴍᴀɪʟ 🅕
 ║ 📩 .ᴄʜᴇᴄᴋᴍᴀɪʟ 🅕
 ✪   ──────────────
 ┃ ▣─────────────▣
 ✪  『 *GROUP MENU* 』 
 ▣──────────────▣
 ║ 🚫 .ᴋɪᴄᴋ @ᴜsᴇʀ 🅖
 ║ 🚫 .ʙᴀɴ @ᴜsᴇʀ 🅖
 ║ ➕ .ᴀᴅᴅ @Usᴇʀ ?
 ║ 👑 .ᴘʀᴏᴍᴏᴛᴇ @ᴜsᴇʀ 🅖
 ║ 👤 .ᴅᴇᴍᴏᴛᴇ @ᴜsᴇʀ 🅖
 ║ 📣 .ɢʀᴏᴜᴘ ᴏꜰꜰ/ᴏɴ 🅖
 ║ 🔗 .ʟɪɴᴋɢᴄ 🅖
 ║ 🕠 .ᴄʟᴏsᴇᴛɪᴍᴇ 🅖
 ║ 🕥 .ᴏᴘᴇɴᴛɪᴍᴇ 🅖
 ║ ⛓️ .ᴀɴᴛɪʟɪɴᴋ 🅖
 ║ 🗣️ .ᴀɴᴛɪᴛᴏxɪᴄ 🅖
 ║ 🚪 ʟᴇᴀᴠᴇɢᴄ 🅖
 ║ 📊 .ᴘᴏʟʟ 🅖
 ║ 🤝 .ᴊᴏɪɴ 🅖
 ║ 🔖 .ᴛᴀɢᴀʟʟ  ?
 ║ 🚫 .ʀᴇᴠᴏᴋᴇ 🅖
 ║ 💌 .ɪɴᴠɪᴛᴇ 🅖
 ✪   ────────────────
 ┃ ▣──────────────▣
 ✪  『 *OWNER MENU*』 
 ▣───────────────▣
 ║ ✏️ .sᴇᴛɴᴀᴍᴇ 🅅
 ║ 📝 .sᴇᴛʙɪᴏ 🅅
 ║ 🚫 .ʙʟᴏᴄᴋ 🅅
 ║ ✅ .ᴜɴʙʟᴏᴄᴋ
 ║ 😴 .sʟᴇᴇᴘ 🅅
 ║ 🔁 .ᴀᴜᴛᴏʀᴇᴀᴅ 🅅
 ║ 🌐 .sᴇʟꜰ 🅅
 ║ 🌍 .ᴘᴜʙʟɪᴄ 🅅
 ║ 🆕 .ᴀᴅᴅᴏᴡɴᴇʀ 🅅
 ║ 🚮 .ᴅᴇʟᴏᴡɴᴇʀ  🅅
 ║ ➕ .ᴀᴅᴅᴘʀᴇᴍ
 ║ ➖ .ᴅᴇʟʀᴇᴍ
 ║ ➕🚫 .ᴀᴅᴅʙᴀᴅᴡᴏʀᴅ 🅅
 ║ ➖🚫 .ᴅᴇʟʙᴀᴅᴡᴏʀᴅ 🅅
 ║ 📋 .ʟɪsᴛᴘʀᴇᴍ 🅅
 ║ 📋🚫 .ʟɪsᴛʙᴀᴅᴡᴏʀᴅ 🅅
 ║ 📝 .ᴀᴜᴛᴏᴛʏᴘɪɴɢ 🅅
 ║ 🌟 .ᴀʟᴡᴀʏsᴏɴʟɪɴᴇ 🅅
 ✪   ────────────────
 ┃ ▣───────────────▣
 ✪  『 *BUG MENU 』 
 ▣─────────────────▣
 ║ 🐞 .ʙᴜɢ 🅕
 ✪   ─────────────────
 ┃ ▣─────────────────▣
 ✪  『 *STICKER MENU*』 
 ▣───────────────────▣
 ║ 🎨 .sᴛɪᴄᴋᴇʀ 🅕
 ✪   ─────────────────
 ┃ ▣─────────────────▣
 ✪  『 *SEARCH MENU* 』 
 ▣─────────────────
 ║ 🔍 .ɢᴏᴏɢʟᴇ 🅕
 ║ 📷 .ɪɴsᴛᴀ 🅕
 ║ 📦 - .ᴀᴘᴋ 🅕
 ║ 🎬 - .ʏᴛs 🅕
 ║ 🌦️ - .ᴡᴇᴀᴛʜᴇʀ 🅕
 ║ 🎵 - .ʟʏʀɪᴄs 🅕
 ║ 🕵️️ - .ɢɪᴛʜᴜʙsᴛᴀʟᴋ 🅕
 ║ 👤 - .ɪɢs 🅕
 ✪   ─────────────────
 ┃ ▣─────────────────▣
 ✪  『 *DOWNLOD MENU* 』 
 ▣─────────────────▣
 ║ 📽️ - .ᴠɪᴅᴇᴏ 🅕
 ║ 🎵 - .sᴏɴɢ 🅕
 ║ 📂 - .ꜰʙ 🅕
 ║ 📦 - .ɢᴅʀɪᴠᴇ 🅕
 ║ 📦 - .ɢɪᴛᴄʟᴏɴᴇ 🅕
 ✪   ─────────────────
 ┃ ▣──────────────▣
 ✪  『  *ANIME 18+* 』 
 ▣───────────────▣
 ║ 🚫 - .ᴀɴᴛɪɴsꜰᴡ 🅕
 ║ 🔞 - .ɴsꜰᴡᴍᴇɴᴜ 🅕
 ╚═══════════════╝
 ╔═══════════════╗
 ║🤖 𝐆𝐒𝐒_𝚩𝚯𝚻𝐖𝚫
 ║════════════════
 ║  👨‍💻 *𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐠𝐬𝐬 𝐭𝐞𝐚𝐦*
 ╚═══════════════╝
`,
  nsfwmenu: `
✪   ───────────────
┃ ▣───────────▣
✪  『  *ANIME MENU* 』 
 ▣───────────────▣
 ║ 🍑 - .ʜᴇɴᴛᴀɪ 🅕 
 ║ 😺 - .ɴᴇᴋᴏ  🅕 
 ║ 🙇♂️ - .ᴛʀᴀᴘ   🅕 
 ║ 💦 - .ɢᴀsᴍ 🅕 
 ║ 😮 - .ᴀʜᴇɢᴀᴏ 🅕 
 ║ 🍑 - .ᴀss 🅕 
 ║ 🔞 - .ʙᴅsᴍ 🅕 
 ║ 👄 - .ʙʟᴏᴡᴊᴏʙ 🅕 
 ║ 👀 - .ᴄᴜᴄᴋᴏʟᴅ 🅕 
 ║ 💦 - .ᴄᴜᴍ 🅕
 ║ 👩🦰 - .ᴍɪʟꜰ 🅕 
 ║ 🦄 - .ᴇʙᴀ 🅕 
 ║ 💋 - .ᴇʀᴏ 🅕 
 ║ 👠 - .ꜰᴇᴍᴅᴏᴍ 🅕 
 ║ 👣 - .ꜰᴏᴏᴛ 🅕 
 ║ 🥂 - .ɢᴀɴɢʙᴀɴɢ 🅕
 ║ 👓 - .ɢʟᴀssᴇs 🅕 
 ║ 🎸 - .ᴊᴀʜʏ 🅕 
 ║ 🍆 - .ᴍᴀsᴛᴜʀʙᴀᴛɪᴏɴ 🅕 
 ║ 📚 - .ᴍᴀɴɢᴀ   🅕 
 ║ 😼 - .ɴᴇᴋᴏ-ʜᴇɴᴛᴀɪ  🅕 
 ║ 😽 - .ɴᴇᴋᴏ-ʜᴇɴᴛᴀɪ2 🅕 
 ║ 🍭 - .ɴsꜰᴡʟᴏʟɪ 🅕 
 ║ 🎉 - .ᴏʀɢʏ 🅕 
 ║ 👙 - .ᴘᴀɴᴛɪᴇs 🅕 
 ║ 🍑 - .ᴘᴜssʏ 🅕 
 ║ 🐙 - .ᴛᴇɴᴛᴀᴄʟᴇs 🅕
 ║ 🦵 - .ᴛʜɪɢʜs 🅕 
 ║ 👭 - .ʏᴜʀɪ 🅕 
 ║ 🩱 - .ᴢᴇᴛᴛᴀɪ 🅕 
 ╚═══════════════╝
 ╔═══════════════╗
 ║🤖 𝐆𝐒𝐒_𝚩𝚯𝚻𝐖𝚫
 ║════════════════
 ║  👨‍💻 *𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐠𝐬𝐬 𝐭𝐞𝐚𝐦*
 ╚═══════════════╝
  `
};
