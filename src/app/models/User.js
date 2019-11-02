import { Model, Sequelize } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_has: Sequelize.STRING,
        provider: Sequelize.BOLLEAN,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
