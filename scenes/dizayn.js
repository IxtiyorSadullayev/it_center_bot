const { Composer, Scenes, Markup } = require('telegraf')
const { kitopBTN } = require('./../helpers/kitop')
const { startKeyboard } = require('./../helpers/startKeyboard')
const Montaj = require('./../model/montaj');
const etap1 = new Composer();
etap1.on('message', async msg => {
    const text = `
    Dizayn va Video mantaj bo'limi.
    `
    await msg.reply(text, kitopBTN)
    return msg.wizard.next();
})

const etap2 = new Composer()
etap2.hears('Python', async msg => {
    const videoPy = await Montaj.find({ videotype: 'Python' });
    const sorted = videoPy.map((data, index) => { return `${index + 1} ${data.description}` })
    const text = `
    Jami videolar soni : ${videoPy.length}
    \n${sorted.join('\n')}
    `
    const btn = Markup.inlineKeyboard([...videoPy.map((data, index) => [Markup.button.callback(index + 1, data._id)])])
    await msg.reply(text, btn)
})

etap2.hears('JavaScript', async msg => {
    const videoPy = await Montaj.find({ videotype: 'JavaScript' });
    const sorted = videoPy.map((data, index) => { return `${index + 1} ${data.description}` })
    const text = `
    Jami videolar soni : ${videoPy.length}
    \n${sorted.join('\n')}
    `
    const btn = Markup.inlineKeyboard([...videoPy.map((data, index) => [Markup.button.callback(index + 1, data._id)])])
    await msg.reply(text, btn)
})

etap2.hears('Java', async msg => {
    const videoPy = await Montaj.find({ videotype: 'Java' });
    const sorted = videoPy.map((data, index) => { return `${index + 1} ${data.description}` })
    const text = `
    Jami videolar soni : ${videoPy.length}
    \n${sorted.join('\n')}
    `
    const btn = Markup.inlineKeyboard([...videoPy.map((data, index) => [Markup.button.callback(index + 1, data._id)])])
    await msg.reply(text, btn)
})

etap2.hears('Kotlin', async msg => {
    const videoPy = await Montaj.find({ videotype: 'Kotlin' });
    const sorted = videoPy.map((data, index) => { return `${index + 1} ${data.description}` })
    const text = `
    Jami videolar soni : ${videoPy.length}
    \n${sorted.join('\n')}
    `
    const btn = Markup.inlineKeyboard([...videoPy.map((data, index) => [Markup.button.callback(index + 1, data._id)])])
    await msg.reply(text, btn)
})

etap2.hears('Go', async msg => {
    const videoPy = await Montaj.find({ videotype: 'Go' });
    const sorted = videoPy.map((data, index) => { return `${index + 1} ${data.description}` })
    const text = `
    Jami videolar soni : ${videoPy.length}
    \n${sorted.join('\n')}
    `
    const btn = Markup.inlineKeyboard([...videoPy.map((data, index) => [Markup.button.callback(index + 1, data._id)])])
    await msg.reply(text, btn)
})

etap2.hears('HTML + CSS', async msg => {
    const videoPy = await Montaj.find({ videotype: 'HTML + CSS' });
    const sorted = videoPy.map((data, index) => { return `${index + 1} ${data.description}` })
    const text = `
    Jami videolar soni : ${videoPy.length}
    \n${sorted.join('\n')}
    `
    const btn = Markup.inlineKeyboard([...videoPy.map((data, index) => [Markup.button.callback(index + 1, data._id)])])
    await msg.reply(text, btn)
})

etap2.hears('Flutter', async msg => {
    const videoPy = await Montaj.find({ videotype: 'Flutter' });
    const sorted = videoPy.map((data, index) => { return `${index + 1} ${data.description}` })
    const text = `
    Jami videolar soni : ${videoPy.length}
    \n${sorted.join('\n')}
    `
    const btn = Markup.inlineKeyboard([...videoPy.map((data, index) => [Markup.button.callback(index + 1, data._id)])])
    await msg.reply(text, btn)
})

etap2.hears('Android', async msg => {
    const videoPy = await Montaj.find({ videotype: 'Android' });
    const sorted = videoPy.map((data, index) => { return `${index + 1} ${data.description}` })
    const text = `
    Jami videolar soni : ${videoPy.length}
    \n${sorted.join('\n')}
    `
    const btn = Markup.inlineKeyboard([...videoPy.map((data, index) => [Markup.button.callback(index + 1, data._id)])])
    await msg.reply(text, btn)
})

etap2.hears('IOS', async msg => {
    const videoPy = await Montaj.find({ videotype: 'IOS' });
    const sorted = videoPy.map((data, index) => { return `${index + 1} ${data.description}` })
    const text = `
    Jami videolar soni : ${videoPy.length}
    \n${sorted.join('\n')}
    `
    const btn = Markup.inlineKeyboard([...videoPy.map((data, index) => [Markup.button.callback(index + 1, data._id)])])
    await msg.reply(text, btn)
})


etap2.hears('Orqaga qaytish', async msg => {
    await msg.reply("Boshlang'ich bo'lim", startKeyboard);
    return msg.scene.leave();
})


const montajScene = new Scenes.WizardScene('montaj', etap1, etap2)
module.exports = { montajScene }