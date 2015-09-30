var tableId, locCol, where, mapCenter, pmap, layer, progLayer, heatmap, geocoder;

function initialize() {
	
	geocoder = new google.maps.Geocoder();
	//Creates the map object and specifies the dimensions contained in style.css
	map = new google.maps.Map(document.getElementById('map-canvas'), {
		center: {
			lat: 42.954173, 
			lng: -78.825171,
		},		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	
	locCol ='address';
	tableId= '1Eo6IL9XQeFww5ygZNLSkz20Pb_7M59gwwouDPISe';
	
	layer = new google.maps.FusionTablesLayer({
		query: {
			select: locCol,
			from: tableId
		},
		//These two items state that the InfoWindow will use the FT InfoWindow
		//The InfoWindows can also be suppressed and add custom in Google Maps API
		//But it is a bit more coding, FT InfoWindows are easily customizable!
		styleId: 2,
		templateId: 2
	});
	layer.setMap(map);
	
	var tableId2 = '1Eo6IL9XQeFww5ygZNLSkz20Pb_7M59gwwouDPISe',
	locCol2 = 'address'
	var tableId3 = '1H50U186b_WdVoCBmqiufJ5uyAkoXel8jT4VJ9bER',
	locCol3 = 'location'
		
	smslayer = new google.maps.FusionTablesLayer({
		query: {
			select: locCol2,
			from: tableId2
		},
		templateId:2,
		styleId:2
	});
	smslayer.setMap(map);
	odklayer = new google.maps.FusionTablesLayer({
		query: {
			select: locCol3,
			from: tableId3
		},
		templateId:2,
		styleId:2
	});
	odklayer.setMap(map);
	
	//Creates initial FusionTablesLayer
	
	
	//Creates the object that stores the user selection from the "Survey" Dropdown.
	identityBox = document.getElementById('demmap');
	//sets the FT layer specified above on the map (change map to null in parentheses)
	mapCenter = new google.maps.LatLng();
	
	
	var legend = document.createElement('div');
	var content =[];
	legend.id ='legend';
	legend.index = 1;
	map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
	content.push('<h2><font color="#003399">GRAFFITI Reports - Severity</font><h2>');
	content.push('<h3><font color="white">SMS Data Collection Conversation</font><h3>');
	content.push('<p><font color="white"><div class="lgdIcon acute"></div>High</font></p>');
	content.push('<p><font color="white"><div class="lgdIcon moderate"></div>Moderate</font></p>');
	content.push('<p><font color="white"><div class="lgdIcon low"></div>Low</font></p>');
	legend.innerHTML = content.join('');
		
}

/*
function clickProgram(){
	removePrograms();
	tableId = '1mcDqPlFXyFHvNh1AEQhfRVypICQlHZM6sMJ7x0Rf';
	locCol = 'Latitude';
	selProg = fundedBox.value;
	if (selProg !=0){
		var query = "https://www.googleapis.com/fusiontables/v1/query?sql=SELECT Latitude, Longitude, Program FROM "+ tableId +" WHERE Focus_Area ='" + selProg +"' ORDER BY Program&key=AIzaSyDgfgOcUEAuuHJZ0ChHUUlWSuh2LkrqrWw";
		var queryurl = encodeURI(query);
		var jqxhr = $.get(queryurl, dataHandlerBounds);
		
		var progLayer  = new google.maps.FusionTablesLayer({
			query: {
				select: locCol,
				from: tableId,
				where: "Focus_Area = '"+selProg +"'"
			},
			styleId: 2,
			templateId: 2
		});
		
		progLayer.setMap(map);
		
	}else{
		
	};
}
*/

function getIdentity(){
	var shunt = identityBox.value;
	var content=[];
	if (shunt == 1) {
		tableId = '10JHV6vRW-drEjRvSyKdntpeLpEq3u9-8uWX30dHD',
		locCol = 'address',
	content.push('<h2><font color="#003399">Blighted Property</font><h2>');
	content.push('<h3><font color="white">Open Data Kit Survey Mapping</font><h3>');
	content.push('<p><font color="white"><div class="lgdIcon acute"></div>Distressed</font></p>');
	content.push('<p><font color="white"><div class="lgdIcon moderate"></div>Fair</font></p>');
	content.push('<p><font color="white"><div class="lgdIcon low"></div>Good</font></p>');
	legend.innerHTML = content.join('');
	}else if (shunt == 3) {
		tableId = '1p_ur9NAoLgz_wCzlw6RghLIImnQXMTbAcBEk9H3X',
		locCol = 'Coordinates'
	content.push('<h2><font color="#003399">Urban Tree Cover - Status Code</font><h2>');
	content.push('<h3><font color="white">Open Data Kit Survey Mapping</font><h3>');
	content.push('<p><font color="white"><div class="lgdIcon acute"></div>0-1</font></p>');
	content.push('<p><font color="white"><div class="lgdIcon moderate"></div>2-3</font></p>');
	content.push('<p><font color="white"><div class="lgdIcon low"></div>3-4</font></p>');
	content.push('<p><font color="white"><div class="lgdIcon blue"></div>4-8</font></p>');
	legend.innerHTML = content.join('');
	}else if(shunt==2){
		tableId = '1H50U186b_WdVoCBmqiufJ5uyAkoXel8jT4VJ9bER',
		locCol = 'location'
	content.push('<h2><font color="#003399">Graffiti - Severity</font><h2>');
	content.push('<h3><font color="white">Open Data Kit Survey Mapping</font><h3>');
	content.push('<p><font color="white"><div class="lgdIcon acute"></div>High</font></p>');
	content.push('<p><font color="white"><div class="lgdIcon moderate"></div>Moderate</font></p>');
	content.push('<p><font color="white"><div class="lgdIcon low"></div>Low</font></p>');
	legend.innerHTML = content.join('');
	}else if(shunt==4){
		tableId = '1Eo6IL9XQeFww5ygZNLSkz20Pb_7M59gwwouDPISe',
		locCol = 'address'
	content.push('<h2><font color="#003399">GRAFFITI Reports - Severity</font><h2>');
	content.push('<h3><font color="white">SMS Data Collection Conversation</font><h3>');
	content.push('<p><font color="white"><div class="lgdIcon acute"></div>High</font></p>');
	content.push('<p><font color="white"><div class="lgdIcon moderate"></div>Moderate</font></p>');
	content.push('<p><font color="white"><div class="lgdIcon low"></div>Low</font></p>');
	legend.innerHTML = content.join('');
	}else if(shunt==5){
		tableId = '1Nj2nfsHP2DJEv-4yVxnC6B37Nj-G6Fmz5UjoOpQw',
		locCol = 'Location'
	content.push('<h2><font color="#003399">GRAFFITI Reports - Severity</font><h2>');
	content.push('<h3><font color="white">Web-based Data Collection Conversation</font><h3>');
	content.push('<p><font color="white"><div class="lgdIcon acute"></div>High</font></p>');
	content.push('<p><font color="white"><div class="lgdIcon moderate"></div>Moderate</font></p>');
	content.push('<p><font color="white"><div class="lgdIcon low"></div>Low</font></p>');
	}else if(shunt==6){
		tableId = '1TlYvbwc9pBOGl5ofzPwDjPR-TCsq2871SiOlBcY4',
		locCol = 'location'
	content.push('<h2><font color="#003399">GRAFFITI Reports</font><h2>');
	content.push('<h3><font color="white">By Medium of Report</font><h3>');
	content.push('<p><font color="white"><div class="lgdIcon red"></div>Open Data Kit</font></p>');
	content.push('<p><font color="white"><div class="lgdIcon blue"></div>SMS Reports</font></p>');

	}
	
	
}
function addLayers(){
	var content = [];
		var tableId2 = '1Eo6IL9XQeFww5ygZNLSkz20Pb_7M59gwwouDPISe',
		locCol2 = 'address'
		var tableId3 = '1H50U186b_WdVoCBmqiufJ5uyAkoXel8jT4VJ9bER',
		locCol3 = 'location'
	content.push('<h2><font color="#003399">GRAFFITI Reports - Severity</font><h2>');
	content.push('<h3><font color="white">SMS Data Collection Conversation</font><h3>');
	content.push('<p><font color="white"><div class="lgdIcon acute"></div>High</font></p>');
	content.push('<p><font color="white"><div class="lgdIcon moderate"></div>Moderate</font></p>');
	content.push('<p><font color="white"><div class="lgdIcon low"></div>Low</font></p>');
		
	smslayer = new google.maps.FusionTablesLayer({
		query: {
			select: locCol2,
			from: tableId2
		},
		templateId:2,
		styleId:2
	});
	smslayer.setMap(map);
	odklayer = new google.maps.FusionTablesLayer({
		query: {
			select: locCol3,
			from: tableId3
		},
		templateId:2,
		styleId:2
	});
	odklayer.setMap(map);
	
	
	
}


function updateMap(){
	removeLayer();
	layer = new google.maps.FusionTablesLayer({
		query: {
			select: locCol,
			from: tableId
		},
		templateId:2,
		styleId:2
	});
	layer.setMap(map);
	
}

//user 	
function toggleHeatmap() {
	removeLayer();
	heatmap.setMap(heatmap.getMap() ? null: map);
	
}
function changeRadius() {
	heatmap.set('radius',heatmap.get('radius') ? null: 15);
}

function removeLayer(){
	layer.setMap(null);
	smslayer.setMap(null);
	odklayer.setMap(null);
}
function dataHandlerBounds(data){
	
	var newLoc = new Array();
	var bounds = new google.maps.LatLngBounds();
	
	for(i=0;i< data.rows.length; i++){
		var point = new google.maps.LatLng(
			data.rows[i][0],
			data.rows[i][1]);
		newLoc.push({
			location:point,
		});
		bounds.extend(point);
	}
	
	heatmap = new google.maps.visualization.HeatmapLayer({
		data: newLoc,
		map: map
	});
	heatmap.setMap(heatmap.getMap() ? null: map);
	layer.setMap(layer.getMap() ? map: null);	
	map.fitBounds(bounds);
}
function codeAddress(){
	var location = document.getElementById('address').value;
	geocoder.geocode({'address':location},function(results,status){
		if (status == google.maps.GeocoderStatus.OK){
			map.setCenter(results[0].geometry.location);
			map.setZoom(14);
			var marker = new google.maps.Marker({
					map: map,
					position: results[0].geometry.location
			});
			
		}else{
			alert('Geocode was unsuccessful because: ' + status);
		}
	});
	
}


google.maps.event.addDomListener(window,'load',initialize);

			