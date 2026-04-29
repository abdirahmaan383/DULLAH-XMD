const fs = require('fs-extra');
const path = require('path');
const { Sequelize } = require('sequelize');

if (fs.existsSync(path.join(__dirname, 'set.env'))) {
    require('dotenv').config({ path: path.join(__dirname, 'set.env') });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL || databasePath;

const database =
    DATABASE_URL === databasePath
        ? new Sequelize({
              dialect: 'sqlite',
              storage: DATABASE_URL,
              logging: false,
          })
        : new Sequelize(DATABASE_URL, {
              dialect: 'postgres',
              ssl: true,
              protocol: 'postgres',
              dialectOptions: {
                  ssl: { require: true, rejectUnauthorized: false },
              },
              logging: false,
          });

const config = {
    session: process.env.SESSION_ID || process.env.SESSION || 'DULLAH-MD;;;H4sIAAAAAAAAA62VSY7jNhSG78KtjbZmUQYKaA30PJddthxkQVuUTFsjRcmWGz5BtkFWWQTIVXKarHKEQDV0F9Cd6grQghYUJb33/Y9v+ATihOZkSCrQ/gRSRkvMSb3kVUpAG1iF7xMGmsDDHIM2cDuFnTK/x8rzNNPiex/m52UxtmA/YXuFdzSaPvD0XFWicgduTZAWu5Du3zCYXXAXj64ZPuZUtEkcr6anwYiv/U3rKPegE03mcdbqxI5QG6wtYspoHKD0QCLCcDgk1QxT9j58PAxnq/y+B4OogBcUGrvKzdfIE5RJeVnIFkJZv9uw4Bm578OPM1oc50fBbg0XlT0TNHqaw0TPO7raW6fm0nXlU369LJwAPeHnNIiJ1/dIzCmv3h33aogO4lBTQ/WwGaHB9Kzr4w4LNx7dY0XfDB860xRyV/UReh94OetmruZ5y/nKPI5b2XF0Uv05SyyrIZ5WMNEahwttKEmJ4GvwGXvJldP/ifseDcOlMDDJYJp5x5QJYjV+aGzHx6EaTRxjfmn4E/mgxkckvA9/E1CsLC+KsdJwEpkzok7kTJos/akl9SKPwbjqDpzzebsKvuBjXrC3KC/OxWqc8KJYNZB5NjZ8o8Rj/+ouzKTSHVSVYxsVuWH4MTwGAh+RuYTLKc7thiyrRabiau3yrCx6ufTQod7DbudSGtw9KjqRqu+BtnhrAkYCmnOGOU3ieg/qTYC98p7sGeGP0QXRZLnwsgEOjVHU2rD1KO7qyBilC9mTzRYXdkjTPHXCwwm6A02QsmRP8px4PZrzhFVjkuc4IDlo//R4ULVmRqKEkwH1QBtIqqTJOpQUqKkf8w/nA+Y5TtMPMeGgCXyWRGMC2pwVpAkefzBVSRKNjgPFjm6LsmEIgiLIpiQhQ5MVyaoVRk9OlzQiOcdRCtqiruuKoWmCcWv+KA4DybrQsQwkyJpmakpHV6EgmRqEhqbBtzlE4cdxdFSpgwTVskxDlTRJ0GxdgaKiWJplmvLbHJLy4zgsU1ZFSVeQ0xEtQ9Sg4RimqUhQdXTnO/GQ1NvPTRCTC38q6zoZZakJfMpyvoqLNEyw91LzLy/xfp8UMb+v4r1dLwgD7VfbhHMaB3mtrIgx2x9oSexaB2j7OMzJ5/wnjHgvWp57up14dVkaS81dm24P1Oy1oa9i09a+jk6M64/BX79b//z2569///HLGzdogvDJqKJoUNENQRIhhEJb+1jv3z7Lqb17hGMa5qAN7H6RHmZuBw1mp2oPu11zHph2YIIv8l+6zFMZN7TBNvXQoErwEhsBmnirSGxxo4RXN5GkK5peS8p0tF2d775hBLSBivB5vkvwhSDneDY48hdCMGKlvWa6fRjK1JidvNWg3x20it6ocMWVGkRB2LtK/qwc4eEW9eSx2OcwSsy46Adn5Twwzbvam0dKuievnbUOhjnYcVdchqTR6m615VgYpfctvRg92LDYzu/TIFgwL0oMcbtZIFVS5kfz2B8dh0aWnYL1lUeTfrXoD1sDV0krVEF4OD/1v8f+Gz7PPfrcmujjo0/J4xh5PsHvHfQTd52Owq35ysTzXPqP3m75BV3jzcLeZ92TVLqWs3kYcF/3d62xNJzw/OLkupI1Lt2HMbjVdZGGmPsJi0Ab5NEOgyZgSVEndz/2kzc82eaqb5uBXasOcc7NLwXzrd6oN0FUmWl6zzF/qTNg1pftuOD2L6VZSdWhCQAA',
    PREFIXE: process.env.PREFIX || '.',

    API: process.env.API_URL || 'https://api.akuari.my.id',
SIPUTZX: process.env.SIPUTZX || 'https://api.akuari.my.id',

    OWNER_NAME: process.env.OWNER_NAME || 'DULLAH-MD',
    NUMERO_OWNER: process.env.NUMERO_OWNER || process.env.OWNER_NUMBER || '255716945971',
    BOT_NAME: process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL: process.env.IMAGE_MENU || 'https://files.catbox.moe/3v4ezj.jpeg',
    MODE: process.env.PUBLIC_MODE || 'yes',
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || 'yes',
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    WARN_COUNT: process.env.WARN_COUNT || '3',
    ETAT: process.env.PRESENCE || '',
    CHATBOT: process.env.CHATBOT || 'no',
    DP: process.env.STARTING_BOT_MESSAGE || 'no',
    ADM: process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1: process.env.ANTIDELETE1 || 'no',
    ANTIDELETE2: process.env.ANTIDELETE2 || 'no',
    STATUS_MENTIONS: process.env.STATUS_MENTIONS || 'yes',
    ANTISTATUS: process.env.ANTISTATUS || 'yes',
    ANTICALL: process.env.ANTICALL || 'no',
    ANTIBAD: process.env.ANTIBAD || 'no',
    GROUP_ANTILINK: process.env.GROUP_ANTILINK || 'yes',
    AUTO_REACT: process.env.AUTO_REACT || 'no',
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'yes',
    AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || 'yes',
    AUTO_REPLY: process.env.AUTO_REPLY || 'no',
    AUTO_READ: process.env.AUTO_READ || 'no',
    AUTO_SAVE_CONTACTS: process.env.AUTO_SAVE_CONTACTS || 'no',
    AUTO_REJECT_CALL: process.env.AUTO_REJECT_CALL || 'yes',
    AUTO_BIO: process.env.AUTO_BIO || 'yes',
    AUDIO_REPLY: process.env.AUDIO_REPLY || 'no',
    AUTO_TAG_STATUS: process.env.AUTO_TAG_STATUS || 'no',
    AUTO_STICKER: process.env.AUTO_STICKER || 'no',
    WELCOME_MESSAGE: process.env.WELCOME_MESSAGE || 'yes',
    GOODBYE_MESSAGE: process.env.GOODBYE_MESSAGE || 'yes',
    RMBG_KEY: process.env.RMBG_KEY || 'MLt7fM4Sqv63U9FAt6FdPKRL',

    ANTI_VOICE: process.env.ANTI_VOICE || 'no',
    ANTI_SPAM: process.env.ANTI_SPAM || 'no',
    ANTI_REACT: process.env.ANTI_REACT || 'no',

    DATABASE_URL,
    database,
};

const fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;
