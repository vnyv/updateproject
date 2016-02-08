var should = require("should")
    , routes = require("../routes");

var request = {};
var response = {
    viewName: ""
    , data : {}
    , render: function(view, viewData) {
        this.viewName = view;
        this.data = viewData;
    }
};

describe("Routing", function(){
    describe("Default Route", function(){
        it("should provide the a title and the index view name", function(){
        routes.index(request, response);
        response.viewName.should.equal("index");
        });

    });
});

describe("Routing", function(){
    describe("Default Route", function(){
        it("should provide the a title and the master view name", function(){
        routes.master(request, response);
        response.viewName.should.equal("master");
        });

    });
});

describe("Routing", function(){
    describe("Default Route", function(){
        it("should provide the a title and the masterpage view name", function(){
        routes.master_2(request, response);
        response.viewName.should.equal("master_2");
        });

    });
});

describe("Routing", function(){
    describe("Default Route", function(){
        it("should provide the a title and the template create view name", function(){
        routes.create_template2(request, response);
        response.viewName.should.equal("create_template2");
        });

    });
});

describe("Routing", function(){
    describe("Default Route", function(){
        it("should provide the a title and the template create view name", function(){
        routes.create_template2(request, response);
        response.viewName.should.equal("create_template2");
        });

    });
});

describe("Routing", function(){
    describe("Default Route", function(){
        it("should provide the a title and the product stage view name", function(){
        routes.prod_stage(request, response);
        response.viewName.should.equal("prod_stage");
        });

    });
});


describe("Routing", function(){
    describe("Default Route", function(){
        it("should provide the a title and the product stage view name", function(){
        routes.cloud_service(request, response);
        response.viewName.should.equal("cloud_service");
        });

    });
});
