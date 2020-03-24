/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"infy/ui/Ui5Demo/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});