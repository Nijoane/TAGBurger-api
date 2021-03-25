const models = require('../db/models');

module.exports = { 
  async store(request, response){
    const { name, email, password, role, restaurant } = request.body;

    const user = await models.Users.create({
      name,
      email,
      password,
      role,
      restaurant,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return response.json(user);
  }
}