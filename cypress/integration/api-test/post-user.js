describe('POST /users', function (){
    it('should verify that user can perform POST request', function () {
        cy.fixture('example.json').then(data=>{
            data.users.map(user=>(
                cy.request({
                    method: 'POST',
                    url: '/users',
                    body: user
                }).then(res =>{
                    expect(res.status).to.eq(201)
                    expect(res.body.name).to.be.eq(user.name)
                    expect(res.body.job).to.be.eq(user.job)
                    expect(res.duration).to.be.lessThan(2000)
                    expect(res.headers[`content-type`]).to.contain('application/json')
                })
            ))
        })
    });
})