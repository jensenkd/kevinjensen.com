


// ******************************************************************************************
// Configuration Start		
// ******************************************************************************************

//*********************Google MAP *********************/
		
		var color = "#9E2811" // google map background colour
		var saturation = 100 // 
		var mapLatitude=40.710892 
		var mapLongitude=-74.004920//(Fist Value Latitude, Second Value ), get YOUR coordenates here!: http://itouchmap.com/latlong.html
		var mapZoom_value=16 // Map zoom level parameter only numeric  


// Google map marker example 2 locations 
		//map-marker #1
		var marker1_Latitude=40.707892 
		var marker1_Longitude=-74.008920
		var marker1_content="<h2>Mathew</h2> Bridge Water, NJ" // marker or  on click content (Info Window) 
		var marker1_pointerUrl = 'assets/img/map-marker.png' // set your color pointer here!

		//map-marker #2
		var marker2_Latitude=40.710892
		var marker2_Longitude=-74.012920
		var marker2_content="<h2>Mathew</h2>San Diego California" // marker or  on click content (Info Window) 
		var marker2_pointerUrl = 'assets/img/map-marker.png' // set your color pointer here!

//********************* Google MAP END *********************/



//****************************************************************************
		  		// Google map 
//****************************************************************************
			//dragable mobile
			var drag;
			if($(window).width()<796){drag=false;}else{drag=true;}
			
		/* googleMaps */
		
				function map_canvas_loaded() {
				var latlng = new google.maps.LatLng(mapLatitude,mapLongitude);
				
				// setting styles here 
				var styles = [
					{
						"featureType": "landscape",
						"stylers": [
							{"hue": "#000"},
							{"saturation": -100},
							{"lightness": 40},
							{"gamma": 1}
						]
					},
					{
						"featureType": "road.highway",
						"stylers": [
							{"hue": color},
							{"saturation": saturation},
							{"lightness": 20},
							{"gamma": 1}
						]
					},
					{
						"featureType": "road.arterial",
						"stylers": [
							{"hue": color},
							{"saturation": saturation},
							{"lightness": -10},
							{"gamma": 1}
						]
					},
					{
						"featureType": "road.local",
						"stylers": [
							{"hue": color},
							{"saturation": saturation},
							{"lightness": 20},
							{"gamma": 1}
						]
					},
					{
						"featureType": "water",
						"stylers": [
							{"hue": "#000"},
							{"saturation": -100},
							{"lightness": 15},
							{"gamma": 1}
						]
					},
					{
						"featureType": "poi",
						"stylers": [
							{"hue": "#000"},
							{"saturation": -100},
							{"lightness": 25},
							{"gamma": 1}
						]
					}
				];		
				var options = {
				 center : latlng,
				 mapTypeId: google.maps.MapTypeId.ROADMAP,
				 zoom : mapZoom_value,
				 styles: styles
				};
				var map_canvas = new google.maps.Map(document.getElementById('map_canvas'), options);
				
			
			
				
				//****************************************************************************
		  		// marker 1 content 
				//****************************************************************************
				var pointer1 = new google.maps.LatLng(marker1_Latitude,marker1_Longitude);
				
				var marker1= new google.maps.Marker({
				 position : pointer1,
				 map : map_canvas,
				 icon: marker1_pointerUrl //Custom Pointer URL
				 });
				
				google.maps.event.addListener(marker1,'click',
				 function() {
				 var infowindow = new google.maps.InfoWindow(
				 {content:marker1_content });
				 infowindow.open(map_canvas,marker1);
				 });
				// marker 1 END



				//****************************************************************************
		  		// marker 2 content 
				//****************************************************************************
				var pointer2 = new google.maps.LatLng(marker2_Latitude,marker2_Longitude);
				
				var marker2= new google.maps.Marker({
				 position : pointer2,
				 map : map_canvas,
				 icon: marker2_pointerUrl //Custom Pointer URL
				 });
				
				google.maps.event.addListener(marker2,'click',
				 function() {
				 var infowindow = new google.maps.InfoWindow(
				 {content:marker2_content });
				 infowindow.open(map_canvas,marker2);
				 });
				// marker 2 END
				
			}

				window.onload = function() {
				 map_canvas_loaded();
				};
			/* End */
			

//Google map end 