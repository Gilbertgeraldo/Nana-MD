const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Gilbert;;;'
                    + 'FN:Gilbert geraldo\n' // full name
                    + 'ORG:Gilbert geraldo;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6281235136510:+62 812-3513-6510\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Adul Alhy', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
