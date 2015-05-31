module.exports = {
    attributes: {
        name: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        userName: {
            type: 'string',
            unique: true
        },
        role: {
            type:'string',
            enum: ['parent', 'child']
        }
        // children: {
        //     collection: 'User'
        // }
    }
}