app.factory("convert", function () {
    var newstring = "";
    function MInToHours(time) {
        var hr = 0;
        var min = 0;
        hr = Math.round(time / 60);
        min = time % 60;
        newstring = hr + "hr "
        if (min != 0) {
            newstring += min + "min"
        }
        return newstring;
    }

    return {
      hours: MInToHours
    }
});
     function convertDistance(distance, inUnit, outUnit) {
        return Math.round(distance * kmRates[outUnit] / kmRates[inUnit]);
      }
    
      return {
        /*km2Mile: convertKMToMile*/
        hours: convertDistance
      }
    });