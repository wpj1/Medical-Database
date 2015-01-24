var Device = function(equipmentIn, modelIn, snIn, manufacturerIn, dlIn) {
	this.equipment = equipmentIn;
	this.model = modelIn;
	this.sn = snIn;
	this.manufacturer = manufacturerIn;
	this.dl = dlIn;
};

Device.prototype.getEquipment = function () {
	return this.equipment;
}

Device.prototype.getModel = function () {
	return this.model;
}

Device.prototype.getSerialNumber = function () {
	return this.sn;
}

Device.prototype.getManufacturer = function () {
	return this.manufacturer;
}

Device.prototype.getDownloadLink = function () {
	return this.dl;
}





var A = new Device('Infant Incubator', 'Medikraft', '-', 'Marula.udyagindia.pvt.ltd', 'no link yet');
var B = new Device("Infant Warmer", "ISIS mediprama", "40161274", "Incubator-surveillance-intelligence-systeme", "no link yet");
var C = new Device("Suction Machine", "GIMA", "3021", "Gima Italy", "no link yet");



/*
var variableData = [
	{name: "Mario", type: "Protagonist"},
	{name: "Luigi", type: "Protagonist"},
	{name: "Toad", type: "Protagonist"},
	{name: "Wario", type: "Antagonist"}];
	*/

var variableData = [A, B, C];