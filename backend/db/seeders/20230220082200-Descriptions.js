'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const setDescriptions = [
      {
        img: 'https://static.vecteezy.com/system/resources/previews/002/206/219/original/advertising-icon-free-vector.jpg',
       body: 'Контекстная и таргетированная реклама',
        userId: 1,
      },
      {
        img: "https://www.kindpng.com/picc/m/112-1123523_social-media-marketing-icon-hd-png-download.png",
       body: 'SMM',
        userId: 1,
      },
      {
        img: 'https://img.freepik.com/premium-vector/cute-robot-logo-bot-symbol-design-chatbot-icon-concept-voice-support-service-bot-online-support_8169-538.jpg?w=2000',
       body: 'Чат-бот',
        userId: 1,
      },
      {
        img: 'https://static.vecteezy.com/system/resources/previews/007/571/196/non_2x/landing-page-line-icon-vector.jpg',
       body: 'Проектирование лендинговых страниц',
        userId: 1,
      },
      {
        img: 'https://cdn4.vectorstock.com/i/1000x1000/01/03/drone-icon-in-black-style-vector-15650103.jpg',
       body: 'Аэоросъемка',
        userId: 1,
      },
      {
        img: 'https://thumbs.dreamstime.com/b/%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5-%D0%B2%D0%B8%D0%B7%D1%83%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B-%D1%81%D0%B2%D1%8F%D0%B7%D0%B8-d-%D1%8D%D1%81%D0%BA%D0%B8%D0%B7%D0%B0-210254121.jpg',
       body: '3-D Визуализация',
        userId: 1,
      },
    ]
    const description = setDescriptions.map((description) => ({
      ...description,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
   
     await queryInterface.bulkInsert('Descriptions',description
   
    );
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Descriptions', null, {});
 
  }
};
