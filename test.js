const { Client } = require('./index');

describe("Gitea functions with invalid token", function() {
    var client = new Client({ url: "http://127.0.0.1:3000/", token: "1241414142" });

    it("should be able to get the version number", function() {
        client.version().then(ver => {
            expect(ver.lib).toEqual(require('./package.json').version);
            expect(ver.gitea).toMatch(/\d+\.\d+\.\d+/);
        });
    });

    it("should be able to get a list of repositories", function() {
        client.getRepositories().then(repos => {
            expect(repos).toEqual(jasmine.any(Array));
        });
    });

    it("should be able to get a list of users", function() {
        client.getUsers().then(users => {
            expect(users).toEqual(jasmine.any(Array));
        });
    });
});