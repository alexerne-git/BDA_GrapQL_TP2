const colorC = require('ansi-colors');
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiAsPromised = require('chai-as-promised');
const server = require('../srcAdmin/index');


chai.should();
chai.use(chaiHttp);
chai.use(chaiAsPromised)

let res = {
    json:(obj)=>{ console.log(obj)}, 
    send:(obj)=>{console.log(obj)}
}

jsonToString = (obj)=>{
    return (Object.keys(obj).map(function(k) { return obj[k] })).toString()
}

const CRUDTest =(urlAD, sessionUser, data )=>{
    describe('', ()=>{
        it('', ()=>{
            console.log(`\n-----------API ${urlAD}------------\n`)
        }).timeout(0); 
    })

    describe(`# test Created /${urlAD}`, () => {
        it(`# test Created /${urlAD}`, async () => {
            const res = await chai.request(server)
                .post('/'+urlAD)
                .send({
                    ...data,
                    session:sessionUser
                 })
            if(res.status < 400){
                chai.expect(res.body.ok).to.true
                chai.expect(res.body.results, `obj results not found ::: status code ${colorC.red(res.status)}`).to.exist
                console.log(`#${colorC.blue('Created')} url= /${urlAD}/ | is ok ::: status code: ${colorC.green(res.status)} info: ${res.body.info}`)
            }else{
                console.log(`#${colorC.red(`Created url= /${urlAD} | not found `)}::: status code: ${colorC.red(res.status)}`)
                chai.expect(res.body.err, `Created error ${colorC.red(res.body.err)} ::: status code ${colorC.red(res.status)}`).to.not.exist
                chai.expect(res.body.results, `obj results not found ::: status code ${colorC.red(res.status)}`).to.exist
            }
        }).timeout(0);
    })

    describe(`# test Read /${urlAD}`, () => {
        it(`# test Read /${urlAD}`, async () => {
            const res = await chai.request(server)
                .get('/'+urlAD)
                .send({
                    session:sessionUser
                })
            if(res.status < 400){
                chai.expect(res.body.ok).to.true
                chai.expect(res.body.results, `obj results not found ::: status code ${colorC.red(res.status)}`).to.exist
                console.log(`#${colorC.blue('Read')} url= /${urlAD}/ | is ok ::: status code: ${colorC.green(res.status)} info: ${res.body.info}`)
            }else {
                console.log(`#${colorC.red(`Read url= /${urlAD} | not found `)}::: status code: ${colorC.red(res.status)}`)
                chai.expect(res.body.err, `Read error ${colorC.red(res.body.err)} ::: status code ${colorC.red(res.status)}`).to.not.exist
                chai.expect(res.body.results, `obj results not found ::: status code ${colorC.red(res.status)}`).to.exist
            }
        }).timeout(0);
    })

    describe(`# test Update /${urlAD}`, () => {
        it(`# test Update /${urlAD}`, async () => {
            const res = await chai.request(server)
                .put('/'+urlAD)
                .send({
                    ...data,
                    session:sessionUser
                 })
            if(res.status < 400){
                chai.expect(res.body.ok).to.true
                chai.expect(res.body.results, `obj results not found ::: status code ${colorC.red(res.status)}`).to.exist
                console.log(`#${colorC.blue('Update')} url= /${urlAD}/ | is ok ::: status code: ${colorC.green(res.status)} info: ${res.body.info}`)
            }else{
                console.log(`#${colorC.red(`Update url= /${urlAD} | not found `)}::: status code: ${colorC.red(res.status)}`)
                chai.expect(res.body.err, `Update error ${colorC.red(res.body.err)} ::: status code ${colorC.red(res.status)}`).to.not.exist
                chai.expect(res.body.results, `obj results not found ::: status code ${colorC.red(res.status)}`).to.exist
            }
        }).timeout(0); 
    })

    describe(`# test Delete /${urlAD}`, () => {
        it(`# test Delete /${urlAD}`, async () => {
            const res = await chai.request(server)
                .delete('/'+urlAD)
                .send({
                    ...data,
                    session:sessionUser
                 })
            if(res.status < 400){
                chai.expect(res.body.ok).to.true
                chai.expect(res.body.results, `obj results not found ::: status code ${colorC.red(res.status)}`).to.exist
                console.log(`#${colorC.blue('Delete')} url= /${urlAD}/ | is ok ::: status code: ${colorC.green(res.status)} info: ${res.body.info}`)
            }else{
                console.log(`#${colorC.red(`Delete url= /${urlAD} | not found `)}::: status code: ${colorC.red(res.status)}`)
                chai.expect(res.body.err, `Delete error ${colorC.red(res.body.err)} ::: status code ${colorC.red(res.status)}`).to.not.exist
                chai.expect(res.body.results, `obj results not found ::: status code ${colorC.red(res.status)}`).to.exist
            }
        }).timeout(0); 
    })
}

module.exports = CRUDTest
