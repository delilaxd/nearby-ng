import { GpsCoordinates } from "./gps-coordinates.model";

export class Product {
    id?: any;
    name?: string;
    description?: string;
    category?: any;
    price?: number;
    gpsCoordinates?: GpsCoordinates;
    views?: number;
    image?: string;
//    distance?: number;
//    available?: boolean;
    //priceHistoryList
  }