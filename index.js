const express = require('express');
const { Telegraf, session, Scenes } = require('telegraf');
const mongoose = require('mongoose');
const File = require('./model/file');
const Guruh = require('./model/guruh');
const { startWizard } = require('./scenes/register');
const { menHaqimda } = require('./scenes/meningMalumotlarim');
const { kitop } = require('./scenes/kitoplar');
const { kitopqosh } = require('./scenes/addKitop');
const { startKeyboard } = require('./helpers/startKeyboard');
const { videoscene } = require('./scenes/Videolar');
const { videokiritscene } = require('./scenes/addvideo');
const Video = require('./model/Video');
const { montajScene } = require('./scenes/dizayn');
const { montajKirit } = require('./scenes/addMontaj');
const Montaj = require('./model/montaj');
const { guruhlar, addguruhlar } = require('./scenes/guruhlar');
require('dotenv').config();


const TOKEN = process.env.TOKEN;
const PORT = process.env.PORT || 5000;
const WEBHOOK_URL = process.env.WEBHOOK_URL + '/bot';

mongoose.set('strictQuery', false)

mongoose.connect('mongodb+srv://ixtiyor99:ixtiyor99@cluster0.tswb9nh.mongodb.net/?retryWrites=true&w=majority')
    .then(data => console.log('Bazaga boglandi'))
    .catch(err => console.log(`Hatolik bor ${err.message}`))

const app = express();
const bot = new Telegraf(TOKEN);
const stage = new Scenes.Stage();
app.use(express.json());
app.use(bot.webhookCallback('/bot'));
bot.use(session())
bot.use(stage.middleware())
bot.use(new Scenes.Stage([startWizard, menHaqimda, kitop, kitopqosh, videoscene, videokiritscene, montajScene, montajKirit, guruhlar, addguruhlar]))

bot.start(async msg => {
    await msg.scene.enter('start')
})

bot.hears("⚙️ Mening ma'lumotlarim.", async msg => {
    await msg.scene.enter('men')
})

bot.hears("📚 Dasturlashga oid kitoplar.", async msg => {
    await msg.scene.enter('kitop')
})

bot.hears("🎞 Dasturlashga oid videolar.", async msg => {
    await msg.scene.enter('video')
})

bot.hears("📹 Dizayn va Montaj", async msg=>{
    await msg.scene.enter("montaj")
})

bot.hears("🕸 It ga oid guruhlar va kanallar", async msg =>{
    await msg.scene.enter("guruhlar")
})

bot.hears("kitopqosh", async msg => {
    await msg.scene.enter("kitopqosh")
})

bot.hears("videoqosh", async msg=>{
    await msg.scene.enter('videoqosh')
})

bot.hears("montajqosh", async msg=>{
    await msg.scene.enter("montajqosh")
})

bot.hears("addguruhlar", async msg =>{
    await msg.scene.enter("addguruhlar")
})

bot.hears("Orqaga qaytish", async msg => {
    await msg.reply('Bosh menu', startKeyboard)
})


bot.on('callback_query', async msg => {

    const id = msg.callbackQuery.data;
    const file = await File.findById(id);
    const video = await Video.findById(id);
    const montaj = await Montaj.findById(id);
    const guruh = await Guruh.findById(id);
    await msg.answerCbQuery('Kitop yuborilmoqda.')
    if(file){
        return    await msg.replyWithDocument(file.file_id)
    }
    else if(video){
        return await msg.reply(video.url)
    }
    else if(montaj){
        return await msg.reply(montaj.url)
    }
    else if(guruh){
        return await msg.reply(guruh.url);
    }
    else {
        return await msg.reply("Ma'lumot topa olmadim.")
    }

})


app.get('/', async (req, res) => {
    try {
        res.status(200).json('Turtkul Academy Bot.')
    } catch (e) {
        res.status(500).json('DB error')
    }
})


app.post('/bot', async (req, res) => {
    try {
        res.status(200).json('Turtkul Academy Bot.')
    } catch (e) {
        res.status(500).json('DB error')
    }
})

app.listen(PORT, () => console.log(`Server listen on port ${PORT}`))
bot.launch({
    webhook: {
        domain: WEBHOOK_URL,
        hookPath: '/bot',
        cb: app
    }
})