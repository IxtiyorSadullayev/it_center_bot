const { Composer, Scenes, Markup } = require('telegraf')
const Montaj = require('./../model/montaj');
const etap1 = new Composer();
const { kitopBTN } = require('../helpers/kitop')
const { startKeyboard } = require('../helpers/startKeyboard')
etap1.on('message', async msg => {
    const text = `
    Kerakli videolarni biz so'ragan ma'lumotlarni kiritgan holda to'ldirib bering.
    Quyidagi dasturlashdan qaysi biri haqida video qo'shmoqchisiz. ?
    `
    await msg.reply(text, kitopBTN)
    return msg.wizard.next();
})

const etap2 = new Composer()
etap2.hears('Python', async msg => {
    msg.scene.state.videotype = 'Python';
    await msg.reply("Video haqida qisqacha ma'lumot kiriting. Kimning kursi nechta video shu kabi.", {reply_markup: {remove_keyboard: true}})
    return msg.wizard.next()
})

etap2.hears('JavaScript', async msg => {
    msg.scene.state.videotype = 'JavaScript';
    await msg.reply("Video haqida qisqacha ma'lumot kiriting. Kimning kursi nechta video shu kabi.", {reply_markup: {remove_keyboard: true}})
    return msg.wizard.next()
})

etap2.hears('Java', async msg => {
    msg.scene.state.videotype = 'Java';
    await msg.reply("Video haqida qisqacha ma'lumot kiriting. Kimning kursi nechta video shu kabi.", {reply_markup: {remove_keyboard: true}})
    return msg.wizard.next()
})

etap2.hears('Kotlin', async msg => {
    msg.scene.state.videotype = 'Kotlin';
    await msg.reply("Video haqida qisqacha ma'lumot kiriting. Kimning kursi nechta video shu kabi.", {reply_markup: {remove_keyboard: true}})
    return msg.wizard.next()
})

etap2.hears('Go', async msg => {
    msg.scene.state.videotype = 'Go';
    await msg.reply("Video haqida qisqacha ma'lumot kiriting. Kimning kursi nechta video shu kabi.", {reply_markup: {remove_keyboard: true}})
    return msg.wizard.next()
})

etap2.hears('HTML + CSS', async msg => {
    msg.scene.state.videotype = 'HTML + CSS';
    await msg.reply("Video haqida qisqacha ma'lumot kiriting. Kimning kursi nechta video shu kabi.", {reply_markup: {remove_keyboard: true}})
    return msg.wizard.next()
})

etap2.hears('Flutter', async msg => {
    msg.scene.state.videotype = 'Flutter';
    await msg.reply("Video haqida qisqacha ma'lumot kiriting. Kimning kursi nechta video shu kabi.", {reply_markup: {remove_keyboard: true}})
    return msg.wizard.next()
})

etap2.hears('Android', async msg => {
    msg.scene.state.videotype = 'Android';
    await msg.reply("Video haqida qisqacha ma'lumot kiriting. Kimning kursi nechta video shu kabi.", {reply_markup: {remove_keyboard: true}})
    return msg.wizard.next()
})

etap2.hears('IOS', async msg => {
    msg.scene.state.videotype = 'IOS';
    await msg.reply("Video haqida qisqacha ma'lumot kiriting. Kimning kursi nechta video shu kabi.", {reply_markup: {remove_keyboard: true}})
    return msg.wizard.next()
})

etap2.hears('Orqaga qaytish', async msg => {
    await msg.reply("Boshlang'ich bo'lim", startKeyboard);
    return msg.scene.leave();
})

const etap3 = new Composer();
etap3.on('message', async msg =>{
    msg.scene.state.description = msg.message.text;
    await msg.reply('Videoning ssilkasini joylashtring,');
    return msg.wizard.next();
})

const etap4 = new Composer();
etap4.on('message', async msg =>{
    const videotype = msg.scene.state.videotype;
    const description = msg.scene.state.description;
    const url = msg.message.text;
    console.log(videotype, description, url)
    await Montaj.create({videotype, description, url})
    await msg.reply('Video qoshganingiz uchun katta rahmat. ', startKeyboard);
    return msg.scene.leave();
})

const montajKirit = new Scenes.WizardScene('montajqosh', etap1, etap2, etap3, etap4)
module.exports = { montajKirit }