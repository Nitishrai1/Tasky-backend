

// unit testing 
// const sum=(a,b)=>{
//     return a+b;
// }



// const mul=(a,b)=>{
//     return a*b
// }

// describe('sum module',()=>{
//     it('add 1 to 2 to equals 3',()=>{
//         expect(sum(1,2)).toBe(3);
//     });
// });

// describe('mul module',()=>{
//     it('mul 1 snd 4 to equals 4',()=>{
//         expect(mul(1,4)).toBe(4);
//     })

//     it('mul 2 snd 4 to equals 8',()=>{
//         expect(mul(2,4)).toBe(8);
//     })
//     it('mul 5 snd 2 to equals 10',()=>{
//         expect(mul(5,2)).toBe(10);
//     })
//     it('mul 8 snd 2 to equals 16',()=>{
//         expect(mul(8,2)).toBe(16)
//     })

//     it('add 10 to 12 to equals 22',()=>{
//         expect(sum(10,12)).toBe(22);
//     })
// })


// testing a http req using supertest
const request = require('supertest');
const {app,server} = require('../index');  // Import your app

describe('POST /sum', () => {

    afterAll(()=>{
        server.close();
    })
    it("should return the sum of the numbers", async () => {
        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        });

        expect(res.statusCode).toBe(200);  // Expect 200 status code
        expect(res.body.answer).toBe(3);   // Expect the sum to be 3
    });
    it("should return the sum of the numbers", async () => {
        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        });

        expect(res.statusCode).toBe(411);  // Expect 200 status code
        expect(res.body.answer).toBe("Invalid input");   // Expect the sum to be 3
    });
});
