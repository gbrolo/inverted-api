import { expect } from 'chai'
import request from 'supertest'
import app from '../../app'

describe("GET /iecho", () => {
  it ("returns reversed string response", async () => {
    const response = await request(app).get('/iecho?text=test')

    expect(response.status).to.eql(200)
    expect(response.body).to.eql({"text":"tset","palindrome":false})
  })
})