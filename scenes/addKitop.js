const { Scenes, Composer } = require('telegraf');
const File = require('./../model/file');
const { kitopBTN } = require('../helpers/kitop');
const { startKeyboard } = require('../helpers/startKeyboard');

const etap1 = new Composer();
etap1.hears("kitopqosh", async msg =>{
    await msg.reply("Qaysi turdagi kitopni qo'shmoqchisiz ?", kitopBTN);
    return msg.wizard.next();
}) 
etap1.hears("Orqaga qaytish", async msg =>{
    await msg.reply('Bosh sahifa', startKeyboard)
    return msg.scene.leave()
})

const etap2 = new Composer();
etap2.on('message', async msg =>{
    const kitopNomi = msg.message.text;
    msg.scene.state.kitopturi = kitopNomi;
    await msg.reply("Kitopingizni tashlang")
    return msg.wizard.next();
})


const etap3 = new Composer();
etap3.on('message', async msg =>{
    const document = msg.message.document;
    const file_name = document.file_name;
    const file_id = document.file_id;
    const booktype = msg.scene.state.kitopturi;
    await File.create({file_id, file_name, booktype})
    await msg.reply('Kitopingizni saqlab qoydik', startKeyboard)
    return msg.scene.leave();
})

const kitopqosh = new Scenes.WizardScene('kitopqosh', etap1, etap2, etap3);
module.exports = {kitopqosh}