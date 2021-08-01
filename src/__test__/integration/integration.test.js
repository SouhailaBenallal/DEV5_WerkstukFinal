const app = require('../../app');
const request = require('supertest');

describe('GET /api/categories', () => {
    it('should return status code 200 and Json Type', (done) => {
        request(app)
            .get('/api/categories')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });
    });
});

describe('POST /api/categories', () => {
    it('should return status code 400 | missing name', (done) => {
        request(app)
            .post('/api/categories')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end(function(err, res) {
                if (err) return done(err);
                return done();
            });
    });

    it('should return status code 201', (done) => {
        request(app)
            .post('/api/categories')
            .send({ name: 'Test Category' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end(function(err, res) {
                if (err) return done(err);
                expect(res.body.message).toBe('Category has been added');
                return done();
            });
    });
});