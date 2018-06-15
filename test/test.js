var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

describe('Record',function(){

    it('should add a record to ipfs and return a hash(String)', function(done){
        chai.request(server)
            .post('/record/saveRecord')
            .set('Accept', 'application/json')
            .send({
                "old_owner_name" : "Kappa",
                "old_owner_unique_id" : "1a",
                "current_owner_name" : "PogChamp",
                "current_owner_unique_id" : "2a",
                "nonce" : 1,
                "sell_price" : 10.0,
                "total_area" : 10.0
            })
            .end(function(err, res){
                console.log("Response :" + res);
                console.log("Test Response Body:" + JSON.stringify(res.body));
                console.log("Error:", err);
                res.should.have.status(200);
                expect(err).to.equal(null);
                done();
            });

    });
});