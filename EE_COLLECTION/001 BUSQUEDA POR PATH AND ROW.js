var collection = ee.ImageCollection ("LANDSAT/LC08/C01/T1_TOA")
 .filter (ee.Filter.eq('WRS_PATH' ,33 ))
 .filter (ee.Filter.eq('WRS_ROW', 42 ))
 .filterMetadata ('CLOUD_COVER','Less_Than', 10)
 .sort ('CLOUD_COVER')
 .filterDate ('2016-01-01', '2016-12-31');

 print('collection', collection );
 
 Map.addLayer (collection);
