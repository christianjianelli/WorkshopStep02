sap.ui.define([
	"sap/m/MessageToast",
	"sap/m/Input"
], function (MessageToast, Input) {
	"use strict";
	
	MessageToast.show("SAPUI5 is ready");
	
	new Input({
		value: "Workshop Fiori",
		width: "50%"
	}).placeAt("content");
	
});