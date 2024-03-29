package greenwatch.client;



import greenwatch.client.service.GetPollutionService;
import greenwatch.client.utils.GeoUtils;
import greenwatch.common.request.GetPollutionsRequest;
import greenwatch.common.response.GetPollutionsResponse;
import greenwatch.common.vo.PollutionTO;

import java.util.List;

import android.app.ProgressDialog;
import android.content.Context;
import android.content.Intent;
import android.graphics.drawable.Drawable;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Bundle;
import android.view.View;

import com.google.android.maps.GeoPoint;
import com.google.android.maps.MapActivity;
import com.google.android.maps.MapView;
import com.google.android.maps.Overlay;
import com.google.android.maps.OverlayItem;

public class GreenWatchMap extends MapActivity {
    private ProgressDialog mProgressDialog;
    private Drawable mMapIcon;
    private List<Overlay> mOverlays;
	private LocationManager mLocationManager;
	private MapView mMapView;
	private LocationListener mLocationListener;
    
	/** Called when the activity is first created. */
	
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);  
        mMapView = (MapView) findViewById(R.id.mapview);
        mMapView.setBuiltInZoomControls(true);
        
		mProgressDialog = new ProgressDialog(this);
		mProgressDialog.setProgressStyle(ProgressDialog.STYLE_SPINNER);
		mProgressDialog.setMessage(getResources().getString(R.string.edit_waiting));
		mProgressDialog.setCancelable(false);
		mProgressDialog.setIndeterminate(true);

		mMapIcon = this.getResources().getDrawable(R.drawable.muell);

		mOverlays = mMapView.getOverlays();
		
		mMapView.getController().setZoom(15);
		mLocationManager = (LocationManager)getSystemService(Context.LOCATION_SERVICE);
    }
    
    @Override
    protected boolean isRouteDisplayed() {
        return false;
    }

	@Override
	protected void onResume() {
		super.onResume();
		if(mLocationListener==null) {
			// map is drawn the first time - add the location listener
			String locationProvider = CurrentLocation.getBestLocationProvider(mLocationManager);
			updateLocation(mLocationManager.getLastKnownLocation(locationProvider));
			mLocationListener = new LocationListener() {
				public void onLocationChanged(Location location) {
					updateLocation(location);
				}
				public void onProviderEnabled(String s){
				}
				public void onProviderDisabled(String s){
				}
				public void onStatusChanged(String s, int i, Bundle b){
				}		
			};
			this.mLocationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0, 0, mLocationListener);
		}
	}
    
	private void updateLocation(Location location) {
		if(location!=null) {
			GeoPoint geoPoint = GeoUtils.createGeoPoint(location.getLatitude(), location.getLongitude());
			mMapView.getController().setCenter(geoPoint);
			int minLat = geoPoint.getLatitudeE6() - mMapView.getLatitudeSpan() / 2;
			int minLng = geoPoint.getLongitudeE6() - mMapView.getLongitudeSpan() / 2;
			int maxLat = geoPoint.getLatitudeE6() + mMapView.getLatitudeSpan() / 2;
			int maxLng = geoPoint.getLongitudeE6() + mMapView.getLongitudeSpan() / 2;
			getPolutions(GeoUtils.convertGeoInt2Dbl(minLat), GeoUtils.convertGeoInt2Dbl(minLng), 
					GeoUtils.convertGeoInt2Dbl(maxLat), GeoUtils.convertGeoInt2Dbl(maxLng));
			
			//mapView.get
		}
	}

	public void myClickHandler(View view) {
		switch (view.getId()) {
		case R.id.main_new_pollution:
			final Intent intentRep = new Intent(this,
					ReportPollutionActivity.class);
			startActivityForResult(intentRep,1);
		}
	}
	
	@Override
	protected void onActivityResult(int requestCode, int resultCode, Intent data) {
		if (requestCode == 1) {
			String locationProvider = CurrentLocation.getBestLocationProvider(mLocationManager);
			updateLocation(mLocationManager.getLastKnownLocation(locationProvider));
		}
	}

	public void getPolutions(double minLat, double minLng, double maxLat, double maxLng) {
		GetPollutionService service = new GetPollutionService() {
    		@Override
    		protected void onPreExecute() {
    			mProgressDialog.show();
    		}
			@Override
			protected void onPostExecute(GetPollutionsResponse result) {
				mProgressDialog.dismiss();
				mOverlays.clear();
				
				GreenWatchItemizedOverlay itemizedoverlay = new GreenWatchItemizedOverlay(mMapIcon, GreenWatchMap.this);
				
				for (PollutionTO pollutionVO : result.getPollutions()) {
					GeoPoint point = GeoUtils.createGeoPoint(pollutionVO.getLatitude(), pollutionVO.getLongitude());
					OverlayItem overlayitem = new OverlayItem(point, "Pollution", "Pollution");
					itemizedoverlay.addOverlay(overlayitem);
				}
				mOverlays.add(itemizedoverlay);
			}

    	};
    	
		service.execute(new GetPollutionsRequest(minLat, minLng, maxLat, maxLng));		
	}
    
    
}