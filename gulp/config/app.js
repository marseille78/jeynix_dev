module.exports = {
  pug: {
    pretty: true,
    data: {
      dataHead: require('../data/dataHead.json'),
      dataSectWelcome: require("../data/dataSectWelcome.json"),
      dataSectFaceRejuvenation: require("../data/dataSectFaceRejuvenation.json"),
      dataSectHeadReplacement: require("../data/dataSectHeadReplacement.json"),
      dataSectFaceReplacement: require("../data/dataSectFaceReplacement.json"),
      dataSectAboutUs: require("../data/dataSectAboutUs.json"),
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