

<template>
  <div id="map">
  <!--In the following div the HERE Map will render-->
    <div id="mapContainer" style="height:600px;width:100%" ref="hereMap"></div>
  </div>
</template>

<script>
export default {
  name: "HereMap",
  props: {
    center: Object,
    appId: String,
    appCode: String,
    latitude: String,
    longitude: String,
    zoom: String,
  
    // center object { lat: 40.730610, lng: -73.935242 }
  },
  data() {
    return {
   
      platform: {},
      map: {},
      routingService: {},
      geocoder: {},
      directions: [],
      apikey: "{}"
      // You can get the API KEY from developer.here.com
    };
  },
  async mounted() {
   

    // Initialize the platform object:
    var platform = new window.H.service.Platform({
      apikey: this.apikey,
      'app_id': this.appId,
      'app_code': this.appCode 
    });
    this.platform = platform;
    this.initializeHereMap();
  },
  methods: {
    initializeHereMap() { // rendering map

      const mapContainer = this.$refs.hereMap;
      const H = window.H;
      // Obtain the default map types from the platform object
      var maptypes = this.platform.createDefaultLayers();

      // Instantiate (and display) a map object:
      var map = new H.Map(mapContainer, maptypes.vector.normal.map, {
        zoom: 10,
        center: this.center
        // center object { lat: 40.730610, lng: -73.935242 }
      });

      addEventListener("resize", () => map.getViewPort().resize());

      // add behavior control
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      // add UI
      map.ui.UI.createDefault(map, maptypes);
      // End rendering the initial map
    },
    geocode(query) {
      
        return new Promise((resolve, reject) => {
            this.geocoder.geocode({ searchText: query }, data => {
                if(data.Response.View[0].Result.length > 0) {
                    data = data.Response.View[0].Result.map(location => {
                        return {
                            lat: location.Location.DisplayPosition.Latitude,
                            lng: location.Location.DisplayPosition.Longitude
                        };
                    });
                    resolve(data);
                } else {
                    reject({ "message": "No data found" });
                }
            }, error => {
                reject(error);
            });
        });
    },
    route(start, finish) {
            const H = window.H;

    var params = {
        "mode": "fastest;car",
        "representation": "display"
    }
    var waypoints = [];
    this.map.removeObjects(this.map.getObjects());
    this.directions = [];
    waypoints = [this.geocode(start), this.geocode(finish)];
    Promise.all(waypoints).then(result => {
        var markers = [];
        for(var i = 0; i < result.length; i++) {
            params["waypoint" + i] = result[i][0].lat + "," + result[i][0].lng;
            markers.push(new H.map.Marker(result[i][0]));
        }
        this.router.calculateRoute(params, data => {
            if(data.response) {
                for(var i = 0; i < data.response.route[0].leg.length; i++) {
                    this.directions = this.directions.concat(data.response.route[0].leg[i].maneuver);
                }
                data = data.response.route[0];
                var lineString = new H.geo.LineString();
                data.shape.forEach(point => {
                    var parts = point.split(",");
                    lineString.pushLatLngAlt(parts[0], parts[1]);
                });
                var routeLine = new H.map.Polyline(lineString, {
                    style: { strokeColor: "blue", lineWidth: 5 }
                });
                this.map.addObjects([routeLine, ...markers]);
                this.map.setViewBounds(routeLine.getBounds());
            }
        }, error => {
            console.error(error);
        });
    });
  },
  created() {
 
  }
}
}
</script>

<style scoped>
#map {
  width: 60vw;
  min-width: 360px;
  text-align: center;
  margin: 5% auto;
  background-color: #ccc;
}
</style>


 