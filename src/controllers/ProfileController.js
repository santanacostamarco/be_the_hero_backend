const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;
        const { page = 1 } = request.query;
        const limit = 5;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*')
            .limit(limit)
            .offset((page - 1) * limit);

        const [count] = await connection('incidents')
            .select('*')
            .where('ong_id', ong_id)
            .count();

        response.header('X-Total-Count', count['count(*)']);

        response.json(incidents);
    }
}