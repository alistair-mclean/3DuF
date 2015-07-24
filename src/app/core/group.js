var Params = require("./values").Params;

class Group {
    constructor(name = "New Group") {
        this.params = {};
        this.parent = null;
        this.name = new values.StringValue(name);
    }

    //TODO: Write code for handling groups and decide on a data model!
    //TODO: Replace Params with non-static method.
    toJSON() {
        let output = {};
        output.params = Params.toJSON(this.params);
        output.name = this.name;
        //output.parent should be an index, but that won't work for this internal method!
        return output;
    }

    //TODO: fromJSON()
}

module.exports = Group;