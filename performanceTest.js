var loadtest = require('loadtest');
var should = require('should');

describe("Performance Test", function() {
    var noRequestPerHour = 100000;
    var avgRequestTime = 1000;

    var host = 'http://localhost:3000'

    // it("performance testing  -> '/' ", function(done) {
    //     this.timeout(1000 * 60);

    //     var options = {
    //         "url": host + '/',
    // "maxSeconds": 15, // cantidad de segundos que va a durar la prueba
    // "concurrency": 10, // cantidad de peticiones concurrentes que se van a hacer al servidor
    //         "statusCallback": statusCallback
    //     };

    //     var gLatency;

    //     function statusCallback(latency, result, error) {
    //         gLatency = latency;
    //     }

    //     var operation = loadtest.loadTest(options, function(error) {
    //         if (error) {
    //             console.error('Got an error: %s', error);
    //         } else if (operation.running == false) {
    //             console.info("\n=========================================================================================================\n")
    //             console.info("\tThreshold : No of request per hour = " + noRequestPerHour  + ", Avg request time in millis = " + avgRequestTime)
    //             console.info("\n=========================================================================================================\n")
    //             console.info("Total Requests :", gLatency.totalRequests);
    //             console.info("Total Failures :", gLatency.totalErrors);
    //             console.info("Requests Per Second :", gLatency.rps);
    //             console.info("Requests Per Hour :", (gLatency.rps * 3600));
    //             console.info("Average Request Time(Mills) :", gLatency.meanLatencyMs);
    //             console.info("Minimum Request Time(Mills) :", gLatency.minLatencyMs);
    //             console.info("Maximum Request Time(Mills) :", gLatency.maxLatencyMs);
    //             console.info("Percentiles :", gLatency.percentiles)
    //             console.info("\n=========================================================================================================\n")

    //             gLatency.totalErrors.should.equal(0);
    //             (gLatency.rps * 3600).should.be.greaterThan(noRequestPerHour);
    //             (gLatency.meanLatencyMs).should.be.below(avgRequestTime);

    //             done();
    //         }
    //     });
    // });

    it("performance testing  -> '/projects' getAll ", function(done) {
        this.timeout(1000 * 60);

        var options = {
            "url": host + '/projects',
            "maxSeconds": 30, // cantidad de segundos que va a durar la prueba
            "concurrency": 10, // cantidad de peticiones concurrentes que se van a hacer al servidor
            "statusCallback": statusCallback
        };

        var gLatency;

        function statusCallback(latency, result, error) {
            gLatency = latency;
        }

        var operation = loadtest.loadTest(options, function(error) {
            if (error) {
                console.error('Got an error: %s', error);
            } else if (operation.running == false) {
                console.info("\n=========================================================================================================\n")
                console.info("\tThreshold : No of request per hour = " + noRequestPerHour  + ", Avg request time in millis = " + avgRequestTime)
                console.info("\n=========================================================================================================\n")
                console.info("Total Requests :", gLatency.totalRequests);
                console.info("Total Failures :", gLatency.totalErrors);
                console.info("Requests Per Second :", gLatency.rps);
                console.info("Requests Per Hour :", (gLatency.rps * 3600));
                console.info("Average Request Time(Mills) :", gLatency.meanLatencyMs);
                console.info("Minimum Request Time(Mills) :", gLatency.minLatencyMs);
                console.info("Maximum Request Time(Mills) :", gLatency.maxLatencyMs);
                console.info("Percentiles :", gLatency.percentiles)
                console.info("\n=========================================================================================================\n")

                gLatency.totalErrors.should.equal(0);
                (gLatency.rps * 3600).should.be.greaterThan(noRequestPerHour);
                (gLatency.meanLatencyMs).should.be.below(avgRequestTime);

                done();
            }
        });
    });
});