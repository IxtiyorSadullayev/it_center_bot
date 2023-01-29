// 📚 Dasturlashga oid kitoplar.
const { Scenes, Composer, Markup } = require('telegraf');
const File = require('./../model/file')
const { kitopBTN } = require('../helpers/kitop');
const { startKeyboard } = require('../helpers/startKeyboard');
const { inlineTugmachalar, MyKeyboard } = require('../helpers/inlineKeyboardData');
const WizardScene = Scenes.WizardScene;

const etap1 = new Composer();
etap1.hears("📚 Dasturlashga oid kitoplar.", async msg => {
    msg.reply('Quyidagi kitoplardan qaysi biri sizga kerak.', kitopBTN)
})

etap1.hears("Orqaga qaytish", async msg => {
    await msg.reply('Bosh sahifa', startKeyboard)
    return msg.scene.leave()
})

etap1.hears("Python", async msg => {
    const files = await File.find({ booktype: "Python" })
    const names = files.map(book => book.file_name);
    let nomlar = []
    for (let i = 0; i < names.length; i++) {
        let nom = `${i + 1} ${names[i]}`
        nomlar.push(nom);
    }
    const text = `
    Barcha kitoplar soni: ${nomlar.length}
    \n${nomlar.join('\n')}
    `

    let knopkalar = files.map((data, index) => [{text: index+1, callback_data: data._id}])
    await msg.reply(`${text}`, {
        reply_markup: {
            inline_keyboard: knopkalar,
            selective: true,
        },
    })
});

etap1.hears("JavaScript", async msg => {
    const files = await File.find({ booktype: "JavaScript" })
    const names = files.map(book => book.file_name);
    let nomlar = []
    for (let i = 0; i < names.length; i++) {
        let nom = `${i + 1} ${names[i]}`
        nomlar.push(nom);
    }
    const text = `
    Barcha kitoplar soni: ${nomlar.length}
    \n${nomlar.join('\n')}
    `

    let knopkalar = files.map((data, index) => [{text: index+1, callback_data: data._id}])
    await msg.reply(`${text}`, {
        reply_markup: {
            inline_keyboard: knopkalar,
            selective: true,
        },
    })
});

etap1.hears("Java", async msg => {
    const files = await File.find({ booktype: "Java" })
    const names = files.map(book => book.file_name);
    let nomlar = []
    for (let i = 0; i < names.length; i++) {
        let nom = `${i + 1} ${names[i]}`
        nomlar.push(nom);
    }
    const text = `
    Barcha kitoplar soni: ${nomlar.length}
    \n${nomlar.join('\n')}
    `

    let knopkalar = files.map((data, index) => [{text: index+1, callback_data: data._id}])
    await msg.reply(`${text}`, {
        reply_markup: {
            inline_keyboard: knopkalar,
            selective: true,
        },
    })
});

etap1.hears("Kotlin", async msg => {
    const files = await File.find({ booktype: "Kotlin" })
    const names = files.map(book => book.file_name);
    let nomlar = []
    for (let i = 0; i < names.length; i++) {
        let nom = `${i + 1} ${names[i]}`
        nomlar.push(nom);
    }
    const text = `
    Barcha kitoplar soni: ${nomlar.length}
    \n${nomlar.join('\n')}
    `

    let knopkalar = files.map((data, index) => [{text: index+1, callback_data: data._id}])
    await msg.reply(`${text}`, {
        reply_markup: {
            inline_keyboard: knopkalar,
            selective: true,
        },
    })
});
etap1.hears("Go", async msg => {
    const files = await File.find({ booktype: "Go" })
    const names = files.map(book => book.file_name);
    let nomlar = []
    for (let i = 0; i < names.length; i++) {
        let nom = `${i + 1} ${names[i]}`
        nomlar.push(nom);
    }
    const text = `
    Barcha kitoplar soni: ${nomlar.length}
    \n${nomlar.join('\n')}
    `

    let knopkalar = files.map((data, index) => [{text: index+1, callback_data: data._id}])
    await msg.reply(`${text}`, {
        reply_markup: {
            inline_keyboard: knopkalar,
            selective: true,
        },
    })
});

etap1.hears("HTML + CSS", async msg => {
    const files = await File.find({ booktype: "HTML + CSS" })
    const names = files.map(book => book.file_name);
    let nomlar = []
    for (let i = 0; i < names.length; i++) {
        let nom = `${i + 1} ${names[i]}`
        nomlar.push(nom);
    }
    const text = `
    Barcha kitoplar soni: ${nomlar.length}
    \n${nomlar.join('\n')}
    `

    let knopkalar = files.map((data, index) => [{text: index+1, callback_data: data._id}])
    await msg.reply(`${text}`, {
        reply_markup: {
            inline_keyboard: knopkalar,
            selective: true,
        },
    })
});

etap1.hears("Flutter", async msg => {
    const files = await File.find({ booktype: "Flutter" })
    const names = files.map(book => book.file_name);
    let nomlar = []
    for (let i = 0; i < names.length; i++) {
        let nom = `${i + 1} ${names[i]}`
        nomlar.push(nom);
    }
    const text = `
    Barcha kitoplar soni: ${nomlar.length}
    \n${nomlar.join('\n')}
    `

    let knopkalar = files.map((data, index) => [{text: index+1, callback_data: data._id}])
    await msg.reply(`${text}`, {
        reply_markup: {
            inline_keyboard: knopkalar,
            selective: true,
        },
    })
});
etap1.hears("Android", async msg => {
    const files = await File.find({ booktype: "Android" })
    const names = files.map(book => book.file_name);
    let nomlar = []
    for (let i = 0; i < names.length; i++) {
        let nom = `${i + 1} ${names[i]}`
        nomlar.push(nom);
    }
    const text = `
    Barcha kitoplar soni: ${nomlar.length}
    \n${nomlar.join('\n')}
    `

    let knopkalar = files.map((data, index) => [{text: index+1, callback_data: data._id}])
    await msg.reply(`${text}`, {
        reply_markup: {
            inline_keyboard: knopkalar,
            selective: true,
        },
    })
});

etap1.hears("IOS", async msg => {
    const files = await File.find({ booktype: "IOS" })
    const names = files.map(book => book.file_name);
    let nomlar = []
    for (let i = 0; i < names.length; i++) {
        let nom = `${i + 1} ${names[i]}`
        nomlar.push(nom);
    }
    const text = `
    Barcha kitoplar soni: ${nomlar.length}
    \n${nomlar.join('\n')}
    `

    let knopkalar = files.map((data, index) => [{text: index+1, callback_data: data._id}])
    await msg.reply(`${text}`, {
        reply_markup: {
            inline_keyboard: knopkalar,
            selective: true,
        },
    })
});

const kitop = new WizardScene('kitop', etap1);
module.exports = { kitop }