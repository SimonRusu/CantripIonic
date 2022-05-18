export class Route{
    dateAvailability: [];
    numberOfPeople: number;
    price: number;
    publishDate: string;
    routeName: string;
    startTime: string;
    thumbnailPath: string;
    activities: [{
        name: string,
        timeAvailability: [],
        timeDuration: number
    }];
}

export class RouteSQLite{
    routeId: string;
    uuid: string;
    route: Route
}