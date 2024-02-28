'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const types = [
      {
       id:1, 
       title:'Тариф Simple',
       price:800,
       description:'Лекция Карточки-памятки по теме лекции Скидка 15% на всё меню в день мероприятия'
      },
      {
        id:2,
        title:'Тариф Basic',
        price:1500,
        description: 'Включает все опции тарифа Simple +возможность задать индивидуальный вопрос в форму при записи, а также возможность поучаствовать в разборе кейсов на after-party'
      },
      {
       id:3,
       title:'Тариф Pro',
       price:6000,
       description:'включает все опции тарифов simple и basic + любой напиток и блюдо в подарок + индивидуальная консультация адвоката',
      },
    ]
    const data = types.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Tarifs", data);
  },

  async down(queryInterface, Sequelize) {
    await Tarif.destroy({ truncate: { cascade: true } });
  }
};
