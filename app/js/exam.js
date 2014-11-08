(function(){
    var body = null;
    var target = null;
    
    var loadTestCase = function(){
        var config = reuiqre.config({
        });
    };
    
    window.onload = function(){
        body = document.querySelector("body");
        target = body.getAttribute("data-question");

        require(["../js/lib/mocha.js"], function(){
            mocha.setup('bdd');
            require(["../js/lib/should.min.js"], function(){
                var jsFile = target + ".js";
                var testCase = "../test/test-" + target + ".js";
                require([jsFile, testCase], function(){
                    mocha.run();
                });
            });
        });
    };
    
})();
