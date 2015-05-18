/// <reference path='../_all.ts' />

module mapdemo {
    export interface ISharedData {

        currentLocation: {};
        currentViewport: {};
        currentMarker: {};
        currentAddress: string;

        getLocationOrViewport(): {};
        setCurrentViewport(value);
        setCurrentLocation(value);
    }
}