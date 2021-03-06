/// <reference path='../_all.ts' />

module mapdemo {
	export interface IMapScope extends ng.IScope {
        showIntro: boolean;
        showHomeComponent: boolean;
        location: ng.ILocationService;
        introVm: IntroController;
        formVm: FormController;
        testform: ng.IFormController;

        marker: {};
        markers: {};
        markerAddress: string;
        markerStatue: string;
	}
}