const {Composer, Scenes, Markup}  = require('telegraf');
const { startKeyboard } = require('../helpers/startKeyboard');
const Guruh = require('./../model/guruh');
const etap1 = new Composer();
etap1.on("message", async msg=>{
    const guruhlar = await Guruh.find();
    const btns = Markup.inlineKeyboard([
        ...guruhlar.map((data, index) => [Markup.button.callback(index+1, data._id)])
    ])
    const texts = guruhlar.map((data, index) => `${index+1} ${data.name}`)
    const text = `
    Jami guruhlar soni: ${guruhlar.length}
    \n${texts.join('\n')}
    `
    await msg.reply(text, btns);
    return msg.scene.leave();
})

const addetap1=new Composer();
addetap1.on("message", async msg=>{
    await msg.reply('Guruh nomini kiriting.')
    return msg.wizard.next();
})

const addetap2 = new Composer();
addetap2.on('message', async msg=>{
    msg.scene.state.name = msg.message.text;
    await msg.reply('Guruhning url manzilini qoldiring.')
    return msg.wizard.next();
})

const addetap3=new Composer();
addetap3.on("message", async msg=>{
    const name = msg.scene.state.name;
    const url = msg.message.text;
    const newguruh = await Guruh.create({name, url})
    await msg.reply("Bosh sahifa", startKeyboard);
    return msg.scene.leave();
})

const guruhlar = new Scenes.WizardScene('guruhlar', etap1);
const addguruhlar = new Scenes.WizardScene('addguruhlar', addetap1, addetap2, addetap3);
module.exports = {guruhlar, addguruhlar}