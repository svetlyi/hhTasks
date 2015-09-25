var a = [1];
var b = [1];
var counter = 2;
var newLog = console.log;
var logCounter = 1000;
var logLevel = 1000;
console.log = function(msg) {
    if (logCounter == 0) {
        newLog(msg);
    }
}

while(a.length != 237 || a[0].toString().length < 5) {
    logCounter--;
    if (logCounter<0) {
        logCounter = logLevel;
    }
    console.log('------');
    console.log(a);
    console.log(b);
    console.log('--');
    oldA = a;
    a = sumIt(a, b);
    console.log(a);
    console.log('------');
    b = oldA;
    counter++;
}
logCounter = 0;
console.log("Answer: ");
console.log(counter);
function sumIt(a, b) {
    //a = [123, 456, 789];
    var result = [];
    if (b.length < a.length) {
        b.unshift(0);
    }
    var bLength = b.length - 1;
    var tmpSum = 0;
    var additional = 0;
    
    for (var i = bLength; i >= 0; i--) {
        tmpSum = a[i] + b[i];
        if (tmpSum > 99999) { //here
            tmpSum = tmpSum / 100000; //here
            tmpSum = tmpSum.toString();
            tmpSum = tmpSum.split('.');
            console.log(tmpSum);
            var tmpAdditional = additional;
            additional = parseInt(tmpSum[0]);
            if(undefined == tmpSum[1]) {
                tmpSum = 0;
            } else {
                tmpSum = tmpSum[1];
                if (tmpSum.length < 4) { //here
                    var powCount = tmpSum.length - 1;
                    tmpSum = parseInt(tmpSum);
                    for(powIndex = 0; powIndex < powCount; powIndex++) {
                        tmpSum = tmpSum * 10;
                    }
                }
                tmpSum = parseInt(tmpSum);
            }
            tmpSum = tmpSum + parseInt(tmpAdditional);
        } else {
            tmpSum = tmpSum + parseInt(additional);
            additional = 0;
        }
        result.unshift(tmpSum);
    }
    if (additional > 0) {
        result.unshift(additional);
    }

    return result;
}
