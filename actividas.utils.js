(function () {
	"use strict";

	Math.randomLimit = function (min, max) {
		/// <param name="min" type="Number"></param>
		/// <param name="max" type="Number"></param>
		/// <returns type="Number"></returns>
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	String.prototype.format = function (array) {
		/// <param name="array" type="Array" elementType="String"></param>
		/// <returns type="String"></returns>
		var theString = this.toString();

		for (var i = 0; i < array.length; i++) {
			var regEx = new RegExp("\\{" + (i) + "\\}", "gm");
			theString = theString.replace(regEx, array[i]);
		}

		return theString;
	};

	String.format = function (text, array) {
		/// <param name="text" type="String"></param>
		/// <param name="array" type="Array" elementType="String"></param>
		/// <returns type="String"></returns>
		return text.format(array);
	};

	String.prototype.randomLimit = function(size) {
		var option = this;
		var text = '';

		for(var i = 0; i < size; i++){
			text += option.charAt(Math.floor(Math.random() * option.length));
		}

		return text;
	};

	String.randomString = function(size, kase) {
		var option = 'abcdefghijklmnopqrstuvwxyz0123456789';
		if(kase){
			option = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		}

		return option.randomLimit(size);
	};

	Array.prototype.insert = function(index, item){
		this.splice(index, 0, item);
	};

	Array.insert = function(array, index, item){
		array.insert(index, item);
	};

	Array.create = function(dimensions, value) {
    // Create new array
    var array = new Array(dimensions[0] || 0);
    var i = dimensions[0];

    // If dimensions array's length is bigger than 1
    // we start creating arrays in the array elements with recursions
    // to achieve multidimensional array
    if (dimensions.length > 1) {
	    // Remove the first value from the array
	    var args = Array.prototype.slice.call(dimensions, 1);
	    // For each index in the created array create a new array with recursion
	    while(i--) {
	        array[dimensions[0]-1 - i] = Array.create(args, value);
	    }
    // If there is only one element left in the dimensions array
    // assign value to each of the new array's elements if value is set as param
    } else {
      if (typeof value !== 'undefined') {
        while(i--) {
            array[dimensions[0]-1 - i] = value;
        }
      }
    }

    return array;
	};

})();