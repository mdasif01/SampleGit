sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/MessageBox'
], function (Controller,MessageBox) {
	"use strict";

	return Controller.extend("infy.ui.Ui5Demo.controller.View1", {
		onInit: function () {

		},
		onPressCancel: function (){
			MessageBox.alert("Page Cancelled");
		},
		onPress: function (){
			MessageBox.alert("Successfully Registered");
		}
	});
});