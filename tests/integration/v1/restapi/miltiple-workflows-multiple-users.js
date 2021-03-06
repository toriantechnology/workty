'use strict';
/**
 * Created by Alex Levshin on 20/7/16.
 */
var RootFolder = process.env.ROOT_FOLDER;
var ApiMajorVersion = process.env.API_MAJOR_VERSION;

if (!global.rootRequire) {
    global.rootRequire = function (name) {
        return require(RootFolder + '/' + name);
    };
}

var config = rootRequire('config');
var SubVersion = config.restapi.getLatestVersion().sub;
var util = require('util');

var restApiHelper = rootRequire('tests/integration/v' + ApiMajorVersion + '/restapi-helper');
describe('Multiple workflows per multiple regular users Rest API', function () {
    _debug('Run multiple workflows per multiple regulars user Rest API tests for version v' + ApiMajorVersion + '/' + SubVersion);

    function _error(data) {
        var msg = util.inspect(data, { depth: null });
        console.error(msg);
    }

    function _debug(data) {
        var msg = util.inspect(data, { depth: null });
        console.log(msg);
    }

    before(function (done) {
        done();
    });

    after(function (done) {
        done();
    });

    it('should create run stop and delete 10 workflows with 5 workties instances each based on 2 workties for 5 users', function (done) {
        this.timeout(999999999);

        var numOfWorkflows = 10;
        var numOfWorktiesInstances = 5;
        var numOfWorkties = 2;
        var numOfUsers = 5;
        var POLLING_TIMEOUT_MS = 10000;

        var usersOptions = [];
        for (var idx = 0; idx < numOfUsers; idx++) {
            usersOptions.push({numOfWorkflows: numOfWorkflows, numOfWorktiesInstances: numOfWorktiesInstances, numOfWorkties: numOfWorkties});
        }

        restApiHelper.doStopTest(usersOptions, POLLING_TIMEOUT_MS, done);
    });

    it('should create run and delete 10 workflows with 3 workties instances each based on 2 workties for 10 users', function (done) {
        this.timeout(999999999);

        var numOfWorkflows = 10;
        var numOfWorktiesInstances = 3;
        var numOfWorkties = 2;
        var numOfUsers = 10;
        var POLLING_TIMEOUT_MS = 10000;

        var usersOptions = [];
        for (var idx = 0; idx < numOfUsers; idx++) {
            usersOptions.push({numOfWorkflows: numOfWorkflows, numOfWorktiesInstances: numOfWorktiesInstances, numOfWorkties: numOfWorkties});
        }

        restApiHelper.doRunTest(usersOptions, POLLING_TIMEOUT_MS, done);
    });

    it('should create run and delete 100 workflows with 10 workties instances each based on 2 workties for 10 users', function (done) {
        this.timeout(999999999);

        var numOfWorkflows = 100;
        var numOfWorktiesInstances = 10;
        var numOfWorkties = 2;
        var numOfUsers = 10;
        var POLLING_TIMEOUT_MS = 45000;

        var usersOptions = [];
        for (var idx = 0; idx < numOfUsers; idx++) {
            usersOptions.push({numOfWorkflows: numOfWorkflows, numOfWorktiesInstances: numOfWorktiesInstances, numOfWorkties: numOfWorkties});
        }

        restApiHelper.doRunTest(usersOptions, POLLING_TIMEOUT_MS, done);
    });

    it('should create run and delete 10 workflows with 50 workties instances each based on 2 workties for 50 users', function (done) {
        this.timeout(999999999);

        var numOfWorkflows = 10;
        var numOfWorktiesInstances = 50;
        var numOfWorkties = 2;
        var numOfUsers = 50;
        var POLLING_TIMEOUT_MS = 45000;

        var usersOptions = [];
        for (var idx = 0; idx < numOfUsers; idx++) {
            usersOptions.push({numOfWorkflows: numOfWorkflows, numOfWorktiesInstances: numOfWorktiesInstances, numOfWorkties: numOfWorkties});
        }

        restApiHelper.doRunTest(usersOptions, POLLING_TIMEOUT_MS, done);
    });

    it('should create run and delete 100 workflows with 100 workties instances each based on 2 workties for 100 users', function (done) {
        this.timeout(999999999);

        var numOfWorkflows = 100;
        var numOfWorktiesInstances = 100;
        var numOfWorkties = 100;
        var numOfUsers = 100;
        var POLLING_TIMEOUT_MS = 45000;

        var usersOptions = [];
        for (var idx = 0; idx < numOfUsers; idx++) {
          usersOptions.push({numOfWorkflows: numOfWorkflows, numOfWorktiesInstances: numOfWorktiesInstances, numOfWorkties: numOfWorkties});
        }

        restApiHelper.doRunTest(usersOptions, POLLING_TIMEOUT_MS, done);
    });
});
