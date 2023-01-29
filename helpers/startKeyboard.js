const { Markup } = require('telegraf');
const startKeyboard = Markup.keyboard([
    ['📚 Dasturlashga oid kitoplar.', '🎞 Dasturlashga oid videolar.'],
    ['📹 Dizayn va Montaj', '🕸 It ga oid guruhlar va kanallar'],
    ["⚙️ Mening ma'lumotlarim."]
]).resize().oneTime()

module.exports = {startKeyboard}