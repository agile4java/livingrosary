

var methods = {

  printDetectItVars: function (msgHeader) {
    console.log(msgHeader);
    console.log();
    console.log('detectIt.deviceType: ' + detectIt.deviceType);
    console.log('detectIt.hasMouse: ' + detectIt.hasMouse);
  },

  // test the update function to see if it alters
  // default values
  // detectIt.update();
  // printVars("Values after calling update but before ind vars: ");


  getIndividualVars: function (msgHeader) {
    const detectIt = require('detect-it');
    var deviceType = detectIt.deviceType;
    var passiveEvents = detectIt.passiveEvents;
    var hasMouse = detectIt.hasMouse;
    var hasTouch = detectIt.hasTouch;
    var primaryInput = detectIt.primaryInput;
  },


  // set up function to print detectIt to console
  printDetectIt: function (msgHeader) {
    console.log(msgHeader);
    console.log();
    console.log(detectIt);
    console.log();
  },

  // console log individual detectIt vars
  printCompare: function (msgHeader) {
    console.log(msgHeader);
    console.log('Individual properties of detectIt:');
    console.log();
    console.log('detectIt.deviceType: ' + detectIt.deviceType);
    console.log('deviceType: ' + deviceType);
    console.log();
    console.log('detectIt.passiveEvents: ' + detectIt.passiveEvents);
    console.log('passiveEvents: ' + passiveEvents);
    console.log();
  }
}

exports.data = methods;