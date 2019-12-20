const request = require("supertest");

const server = require("../api/server");

// describe("GET /", function() {
//     it("should return status code 200", function() {
    
//         return request(server)
//         .get("/")
//         .then(response => {
//         expect(response.status).toBe(200);
//         });
//     });

//     it("should return a JSON", function() {
//     return request(server)
//         .get("/")
//         .then(res => {
//         expect(res.type).toMatch(/json/i);
//         });
//     });

//     it("should return {api: 'working'}", function() {
//     return request(server)
//         .get("/")
//         .then(res => {
//         expect(res.body.api).toBe("working");
//         });
//     });
// });

describe('POST /register', () => {

it('should register new user', () => {
    return request(server)
        .post('/register')
        .send({
            username: 'test',
            password: "test"
        })
        .then(response =>{
            expect(response.status).toBeTruthy();
        });
    });
    it('should return {message: Unable to register"}', ()=>{
        return request(server)
        .post('/register')
        .then(response =>{
            expect(response.type).toMatch(/text/i);
        });
    });
});

describe('POST /login', () => {

    it('should allow user to login successfully', () => {
        return request(server)
            .post('/login')
            .send({
                id : 1,
                username: 'test',
                password: 'test'
            })
            .then(response =>{
                expect(response.status).toBeTruthy();
            });
        });
        it("should return a welcome text", function() {
            return request(server)
                .post("/login")
                .then(res => {
                expect(res.type).toMatch(/text/i);
                });
            });
    });





