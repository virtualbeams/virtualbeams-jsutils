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

	Array.create = function(length) {
		var arr = new Array(length || 0);
		i = length;

		if(arguments.length > 1) {
			var args = Array.prototype.slice.call(arguments, 1);
			while(i--) {
				arr[length - 1 - i] = Array.create.apply(this, args);
			}
		}

		return arr;
	};

})();
