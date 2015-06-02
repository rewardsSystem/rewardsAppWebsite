var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'passport', via: 'user' },
    
    name: { type: 'string' },
    role: { type:'string', enum: ['parent', 'child'] },
    parent: { model: 'user' },
    children: { collection: 'user' },
    tasks: { collection: 'task' }
  }
};

module.exports = User;
