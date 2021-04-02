const models = require('../db/models');

module.exports = { 
  async get(request, response){
    try{
      const users = await models.Users.findAll();

      return response.status(200).json(users);
    } catch (error){
      return response.status(400).json({ message: error.message });
    }

  },

  async getbyUid(request, response){

    const users = await models.Users.findAll({
      where: 
        { id: request.params.id },
    })
    return response.status(200).json(users);
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

    return response.status(200).json(user);
  },

  async userUpdate(request, response){
    const {id, name, email, password, role, restaurant } = request.body;
    const users = await models.Users.update(
      { 
        id,
        name, 
        email, 
        password, 
        role, 
        restaurant 
      },
      {
        where:
        { id: request.params.id }
      } 
    )
    return response.status(200).json(users);
  },

  async userDelete(request, response){
    const users = await models.Users.destroy({
      where:
      { id: request.params.id}
    }); 

    return response.status(200).json(users);
  }
}