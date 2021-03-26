const models = require('../db/models');

module.exports = { 
  async get(request, response){
    const users = await models.Users.findAll();

    return response.json(users);
  },

  async byUid(request, response){

    const users = await models.Users.findAll({
      where: 
        { id: request.params.id },
    })
    return response.json(users);
  },

  async create(request, response){
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