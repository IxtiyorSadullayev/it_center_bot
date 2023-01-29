const { Scenes, Composer } = require('telegraf');
const { startKeyboard } = require('../helpers/startKeyboard');
const WizardScene = Scenes.WizardScene;
const User = require('./../model/user');
const etap1 = new Composer();
etap1.on("message",async msg => {
    const user = await User.findOne({id: msg.message.from.id});
    const name = user.name;
    const fam = user.fam;
    const phone = user.phone;
    const id = user.id;
    const text = `
    ⚙️ Sizning id raqamingiz: ${id}
    \n👨‍💻 Sizning ismingiz: ${name}
    \n👨‍💻 Sizning familiyangiz ${fam}
    \n📞 Sizning telefon raqamingiz: ${phone}
    `
    await msg.replyWithHTML(`<b> ${text} </b>`, startKeyboard)
    return msg.scene.leave();
})



const menHaqimda = new WizardScene('men', etap1);
module.exports = {menHaqimda};