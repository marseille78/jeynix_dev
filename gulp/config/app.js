module.exports = {
  pug: {
    pretty: true,
    data: {
      dataHead: require('../data/dataHead.json'),
      dataSectWelcome: require("../data/dataSectWelcome.json"),
      dataSectReplaceHead: require("../data/dataSectReplaceHead.json"),
      dataSectYounger: require("../data/dataSectYounger.json"),
      dataSectReplaceFace: require("../data/dataSectReplaceFace.json"),
    },
  },

  imagemin: {
    verbose: true
  },

  fonter: {
    // Вказуємо необхідні формати (окрім woff2)
    formats: ["ttf", "woff"],
  },

  icons: {
    imgName: 'sprite.png',
    cssName: 'sprite.scss',
    padding: 1
  }
};