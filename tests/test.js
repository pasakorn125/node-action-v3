const assert = require('assert')
const request = require('supertest')
const app = require('../index')

describe('Validate setting the test', () => {
    it('should be ok', () => {
        assert.ok(true)
    })
})

describe('GET "/" ' ,() => {
    it('respond with Hello!', (done) => {
        request(app).get('/').expect('Hello!',done)



    })


})

describe('GET "/item" ' ,() => {
    it('respond array of items', (done) => {
        let want = [{id: 1, name: 'Iphone12 pro max'
        ,id: 2, name: 'nokia 3310'}]
        request(app).get('/item').expect('items',done)



    })


})