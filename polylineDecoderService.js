import React from 'react';
const polyline = require('@mapbox/polyline');

class PolylineDecoderService {
  static decode(encodedPolyline) {
    return polyline.decode(encodedPolyline);
  }
}

export default PolylineDecoderService;
