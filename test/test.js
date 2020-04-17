const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiAsPromised = require('chai-as-promised');
const CRUDTest = require('./crudTest')
const server = require('../srcAdmin/index');
const colorC = require('ansi-colors');

chai.should();
chai.use(chaiHttp);
chai.use(chaiAsPromised)

// simulateur de reponse/resultat HTTP..   exemple res.json, res.send
let res = {
    json:(obj)=>{ console.log(obj)}, 
    send:(obj)=>{console.log(obj)}
}

// retourner string avec tout les valeur d'un prototype json (pas des objet SVP)
jsonToString = (obj)=>{
    return (Object.keys(obj).map(function(k) { return obj[k] })).toString()
}

// s'execute avant tout les test
before(async(done) => {
    console.log('\n\n-----------------------\n--\n-- START TEST\n--\n-------------------------\n');
    done();
});

// s'execute apres tout les test
after(done => {
    console.log('\n\n-----------------------\n--\n-- END TEST\n--\n-------------------------');
    done();
});

// s'execute avant de chaque test
beforeEach(done => {
    //console.log('\n');
    done();
});

// s'execute apre chaque test
afterEach(done => {
    //console.log('\n');
    done();
});


//--------  DESCRIPTION DES TEST -----------
describe('# test', () => {
    /************************************************************/
    /****************** TEST MYSQL CONNECTION********************/
    /************************************************************/
    describe('# test', () => {
        it('# Mysql connection', async () => {
            const result = await asyncQuery('show status like "Connections%"')
            chai.expect(result.code, result.sqlMessage).to.not.exist
            chai.expect(result[0].Variable_name, result).to.exist
            console.log('# mysql connect is OK')
        }).timeout(0); 
    })

    /************************************************************/
    /****************** TEST ASSETS FONCTIONS *******************/
    /************************************************************/
    describe('\n\n-------focntion test------\n', () => {
        // test mysql ASSETS FONCTIONS
        it('#1 fonction asyncMysq dans mysqlConf', async () => {
            console.log('\n------- Fonctions test  ------\n')
            const result = await asyncQuery('SELECT 1 as n1')
            chai.expect(result[0].n1).to.equal(1)
            console.log('#1 fonction asyncQuery is ok')
        }).timeout(0); 

        it('\n #2 test fonction isVide dans  mysqlConf', (done) => {
            isVide({notVide:'no'})? done(new Error('no found')) :
            (done(), console.log('#2 function isVide is ok'))
        }).timeout(0);

        it('\n #3 test fonction cleen dans util', (done) => {
            cleen('*+/#n1') != 'n1'? done(new Error('no found')) :
            (done(), console.log('#4 function cleen is ok'))
        }).timeout(0);

        it('\n #4 test fonction cleanArray dans util', (done) => {
            let results = cleanArray(['*/n1','n2/+,','()&n3']) 
            jsonToString(results) != `n1,n2,n3` ? done(new Error('no found :'+jsonToString(results))) :
            (done(), console.log('#5 function cleanArray is ok'))
        }).timeout(0);
    })

    /************************************************************/
    /************ TEST CRUD - ROUTAGE TEST SIMPLIFIE ************/
    /************************************************************/
    describe('API ROUTER /test', () => {
        CRUDTest('test', 'EM49NzIsasEpD061unupEiihQUr9XCSa', {
            dataValue: 'test'
        })
    })

    /************************************************************/
    /****************** SESSION - ROUTAGE TEST  *****************/
    /************************************************************/
    describe('GET /session', () => {
        urlAD = 'session'
        it(`# test Read /${urlAD}`, async () => {
            const res = await chai.request(server)
                .get('/'+urlAD)
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
})
