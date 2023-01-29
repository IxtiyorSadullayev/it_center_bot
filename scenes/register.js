const { Scenes, Composer } = require('telegraf');
const { startKeyboard } = require('../helpers/startKeyboard');
const WizardScene = Scenes.WizardScene;
const User = require('./../model/user');
// Ismni so'rab oladi. bu scene da
const etap1 = new Composer();
etap1.start(async msg => {
    const condidate = await User.findOne({id: msg.from.id});
    if(condidate){
        const fam = condidate.fam;
        const name = condidate.name;
        const phone = condidate.phone;
        await msg.reply(
            `Assalomu aleykum guruhimizga xush kelibsiz.  `,
            startKeyboard
        )
        return msg.scene.leave()
    }
    await msg.reply("Assalomu aleykum. Bizning safimizga hush kelibsiz. Biz bilan bo'lmoq uchun o'z ma'lumotlaringizni biz bilan o'rtoqlashing. \nQuyidagi ketma ketliklarni bajaring.")
    await msg.reply('Guruhimiz faoliyatida sizning ismingiz biz uchun muhum. \nShuning uchun ismingizni kiriting. ')
    return msg.wizard.next();
})

// Bu scenda ismni kiritib oladi va undan keyin familiyani so'raydi.
const etap2 = new Composer();
etap2.on('message', async msg => {
    msg.scene.state.id = msg.message.from.id;
    msg.scene.state.username = msg.message.from.username || 'Foydalanuvchida username mavjud emas.';
    msg.scene.state.name = msg.message.text;
    await msg.reply('Katta rahmat. Ismningizni aniqlab oldik. Iltimos Familiyangizni ham kiriting.')
    return msg.wizard.next();
})

const etap3 = new Composer();
etap3.on('message', async msg => {
    msg.scene.state.fam = msg.message.text;
    await msg.reply('Katta rahmat. Endi telefon raqamingizni qoldiring.', {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: "Telefon raqamim.",
                        request_contact: true
                    }
                ]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    })
    return msg.wizard.next();
})

const etap4 = new Composer();
etap4.on('message', async msg => {
    msg.scene.state.phone = msg.message.contact.phone_number;
    const name = msg.scene.state.name;
    const fam = msg.scene.state.fam;
    const phone = msg.scene.state.phone;
    await User.create({id: msg.from.id, username: msg.from.username, name: name, fam: fam, phone: phone});
    await msg.reply(
        `Ro'yxatdan o'tganingiz uchun katta rahmat 
        \nSizning ismningiz: ${name}
        \nSiznig familiyangiz: ${fam}
        \nSizning telefon raqamingiz: ${phone}
        `,
        startKeyboard
    )
    return msg.scene.leave();
})

const startWizard = new WizardScene('start', etap1, etap2, etap3, etap4);
module.exports = { startWizard }