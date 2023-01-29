const { Markup } = require('telegraf')
const kitopBTN = Markup.keyboard([
    ["Python", "JavaScript", "Java"],
    ["Kotlin", "Go", "HTML + CSS"],
    ["Flutter", "Android", "IOS"],
    ["Orqaga qaytish"]
]).resize()

module.exports = {kitopBTN}