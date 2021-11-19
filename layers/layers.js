var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_NDVI_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8083911.649978, 2395605.406234, 8132387.638179, 2431415.207015]
                            })
                        });
var lyr_FloodproneareaofSurat_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Flood prone area of Surat",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FloodproneareaofSurat_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8084097.597745, 2395608.185282, 8132187.807022, 2431412.712355]
                            })
                        });
var format_NEW_SUDA_BOUNDARY_2016_3 = new ol.format.GeoJSON();
var features_NEW_SUDA_BOUNDARY_2016_3 = format_NEW_SUDA_BOUNDARY_2016_3.readFeatures(json_NEW_SUDA_BOUNDARY_2016_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NEW_SUDA_BOUNDARY_2016_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NEW_SUDA_BOUNDARY_2016_3.addFeatures(features_NEW_SUDA_BOUNDARY_2016_3);
var lyr_NEW_SUDA_BOUNDARY_2016_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NEW_SUDA_BOUNDARY_2016_3, 
                style: style_NEW_SUDA_BOUNDARY_2016_3,
                interactive: true,
                title: '<img src="styles/legend/NEW_SUDA_BOUNDARY_2016_3.png" /> NEW_SUDA_BOUNDARY_2016'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_NDVI_1.setVisible(true);lyr_FloodproneareaofSurat_2.setVisible(true);lyr_NEW_SUDA_BOUNDARY_2016_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NDVI_1,lyr_FloodproneareaofSurat_2,lyr_NEW_SUDA_BOUNDARY_2016_3];
lyr_NEW_SUDA_BOUNDARY_2016_3.set('fieldAliases', {'Id': 'Id', 'AREA': 'AREA', });
lyr_NEW_SUDA_BOUNDARY_2016_3.set('fieldImages', {'Id': 'Range', 'AREA': 'TextEdit', });
lyr_NEW_SUDA_BOUNDARY_2016_3.set('fieldLabels', {'Id': 'inline label', 'AREA': 'header label', });
lyr_NEW_SUDA_BOUNDARY_2016_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});