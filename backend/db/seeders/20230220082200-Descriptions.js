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
        img: "https://cdn-icons-png.flaticon.com/512/1260/1260086.png",
       body: 'SMM',
        userId: 1,
      },
      {
        img: 'https://cdn-icons-png.flaticon.com/512/2223/2223044.png',
       body: 'Чат-боты',
        userId: 1,
      },
      {
        img: 'https://static.vecteezy.com/system/resources/previews/007/571/196/non_2x/landing-page-line-icon-vector.jpg',
       body: 'Проектирование лендинговых страниц',
        userId: 1,
      },
      {
        img: 'https://cdn-icons-png.flaticon.com/512/4212/4212583.png',
       body: 'Аэоросъемка',
        userId: 1,
      },
      {
        img: 'https://cdn-icons-png.flaticon.com/512/2818/2818102.png',
       body: '3D Визуализация',
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
