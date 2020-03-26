const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {

        const { page = 1 } = request.query;
        const limit = 5;

        const ongs = await connection('ongs')
            .select('*')
            .limit(limit)
            .offset((page - 1) * limit);

        const [count] = await connection('ongs').select('*').count();

        response.header('X-Total-Count', count['count(*)']);

        return response.json(ongs)
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return response.json({ id });
    }
}