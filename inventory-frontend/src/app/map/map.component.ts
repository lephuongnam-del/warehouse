import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var H: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  title = 'HereMapDemo';

  @ViewChild("map", { static: true }) public mapElement: ElementRef;

   @Input() lat: any ;
   @Input() lng: any ;

  public width: any = '1000px';
  public height: any = '600px';

  private platform: any;
  private map: any;

  start: any;
  finish: any;
  router: any;
  directions: any;

  public query: string;
  private search: any;
  private ui: any;
  public address: string = '';


  public constructor() {
    this.query = "";
  }

  public ngOnInit() {
    this.platform = new H.service.Platform({
      app_id: 'DemoAppId01082013GAL',
      app_code: 'AJKnXv84fjrb0KIHawS0Tg',
      useCIT: true,
      useHTTPS: true
    });
    this.search = new H.places.Search(this.platform.getPlacesService());
    this.router = this.platform.getRoutingService();
    this.directions = [];

  }



  public ngAfterViewInit() {
    let pixelRatio = window.devicePixelRatio || 1;
    let defaultLayers = this.platform.createDefaultLayers({
      tileSize: pixelRatio === 1 ? 256 : 512,
      ppi: pixelRatio === 1 ? undefined : 320
    });

    this.map = new H.Map(this.mapElement.nativeElement,
      defaultLayers.normal.map, { pixelRatio: pixelRatio });

    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    var ui = H.ui.UI.createDefault(this.map, defaultLayers);

    this.map.setCenter({ lat: this.lat, lng: this.lng });
    this.map.setZoom(14);

    //this.setUpClickListener(this.map);  

    this.dropMarker({ lat: "10.762622", lng: "106.660172" }, "HCM")
    this.dropMarker({ lat: "21.028511", lng: "105.804817" }, "HN")
    this.start = "10.762622,106.660172"
    this.finish = "21.028511,105.804817"
    this.route(this.start, this.finish)
  }

  public places(query: string) {
    this.map.removeObjects(this.map.getObjects());
    this.search.request({ "q": query, "at": this.lat + "," + this.lng }, {}, (data: { results: { items: string | any[]; }; }) => {
      console.log("lat"+ data)
      for (let i = 0; i < data.results.items.length; i++) {
        
        this.dropMarker({ "lat": data.results.items[i].position[0], "lng": data.results.items[i].position[1] }, data.results.items[i]);
        if (i == 0)
          this.map.setCenter({ lat: data.results.items[i].position[0], lng: data.results.items[i].position[1] })
      }
    }, (error: any) => {
      console.error(error);
    });
  }

  private dropMarker(coordinates: any, data: any) {
    let marker = new H.map.Marker(coordinates);
    marker.setData("<p>" + data + "</p>");
    marker.addEventListener('tap', (event: { target: { getPosition: () => any; getData: () => any; }; }) => {
      let bubble = new H.ui.InfoBubble(event.target.getPosition(), {
        content: event.target.getData()
      });
      this.ui.addBubble(bubble);
    }, false);
    this.map.addObject(marker);
  }

  public route(start: any, finish: any) {
    let params = {
      "mode": "fastest;car",
      "waypoint0": "geo!" + this.start,
      "waypoint1": "geo!" + this.finish,
      "representation": "display"
    }
    //this.map.removeObjects(this.map.getObjects());

    this.router.calculateRoute(params, (data: any) => {
      if (data.response) {
        console.log("success")
        this.directions = data.response.route[0].leg[0].maneuver;
        data = data.response.route[0];
        let lineString = new H.geo.LineString();
        data.shape.forEach((point: string) => {
          let parts = point.split(",");
          lineString.pushLatLngAlt(parts[0], parts[1]);
        });
        let routeLine = new H.map.Polyline(lineString, {
          style: { strokeColor: "blue", lineWidth: 5 }
        });
        let startMarker = new H.map.Marker({
          lat: this.start.split(",")[0],
          lng: this.start.split(",")[1]
        });
        let finishMarker = new H.map.Marker({
          lat: this.finish.split(",")[0],
          lng: this.finish.split(",")[1]
        });
        this.map.addObjects([routeLine, startMarker, finishMarker]);
        this.map.setViewBounds(routeLine.getBounds());
      }
      console.log(data)
    }, (error: any) => {
      console.log("error")
      console.error(error);
    });
  }

  //public setUpClickListener(map: any) {  
  // let self = this;  
  // this.map.addEventListener('tap', function (evt: { currentPointer: { viewportX: any; viewportY: any; }; }) {  
  //   let coord = map.screenToGeo(evt.currentPointer.viewportX, evt.currentPointer.viewportY);  
  //   self.lat = Math.abs(coord.lat.toFixed(4)) + ((coord.lat > 0) ? 'N' : 'S');  
  //   self.lng = Math.abs(coord.lng.toFixed(4)) + ((coord.lng > 0) ? 'E' : 'W');  
  //   self.dropMarker({"lat": Math.abs(coord.lat.toFixed(4)),  "lng": Math.abs(coord.lng.toFixed(4))}, "abc");
  //   //self.fetchAddress(coord.lat, coord.lng);  
  // });  
  //}  

  //private fetchAddress(lat: any, lng: any): void {  
  // let self = this;  
  // let geocoder: any = this.platform.getGeocodingService(),  
  //   parameters = {  
  //     prox: lat + ', ' + lng + ',20',  
  //     mode: 'retrieveAreas',  
  //     gen: '9'  
  //   };  


  // geocoder.reverseGeocode(parameters,  
  //   function (result: { Response: { View: { Result: { Location: { Address: any; }; }[]; }[]; }; }) {  
  //     let data = result.Response.View[0].Result[0].Location.Address;  
  //     self.address = data.Label + ', ' + data.City + ', Pin - ' + data.PostalCode + ' ' + data.Country;  
  //   }, function (error: any) {  
  //     alert(error);  
  //   });  
  //}  

}
