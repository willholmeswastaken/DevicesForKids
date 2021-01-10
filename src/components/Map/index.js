import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { getCenterAndZoom } from './util'

import { siteMetadata } from '../../../gatsby-config'

const Map = ({
  width,
  height,
  zoom,
  center,
  bounds,
  padding,
  styles,
  sources,
  layers,
  minZoom,
  maxZoom,
  markers
}) => {
  const { mapboxToken } = siteMetadata

  console.log(mapboxToken);

  if (!mapboxToken) {
    console.error(
      'ERROR: Mapbox token is required in gatsby-config.js siteMetadata'
    )
  }

  // this ref holds the map DOM node so that we can pass it into Mapbox GL
  const mapNode = useRef(null)

  // this ref holds the map object once we have instantiated it, so that we
  // can use it in other hooks
  const mapRef = useRef(null)

  // construct the map within an effect that has no dependencies
  // this allows us to construct it only once at the time the
  // component is constructed.
  useEffect(() => {
    console.log('in effect')
    let mapCenter = center
    let mapZoom = zoom

    // If bounds are available, use these to establish center and zoom when map first loads
    if (bounds && bounds.length === 4) {
      const { center: boundsCenter, zoom: boundsZoom } = getCenterAndZoom(
        mapNode.current,
        bounds,
        padding
      )
      mapCenter = boundsCenter
      mapZoom = boundsZoom
    }

    // Token must be set before constructing map
    mapboxgl.accessToken = mapboxToken

    const map = new mapboxgl.Map({
      container: mapNode.current,
      style: `mapbox://styles/mapbox/${styles[0]}`,
      center: mapCenter,
      zoom: mapZoom,
      minZoom,
      maxZoom,

    })
    mapRef.current = map
    window.map = map // for easier debugging and querying via console

    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    map.on('load', () => {
      console.log('map onload')
      // add sources
      Object.entries(sources).forEach(([id, source]) => {
        map.addSource(id, source)
      })

      // add layers
      layers.forEach(layer => {
        map.addLayer(layer)
      })
    })

    if (markers.length > 0) {
      for (let i = 0; i < markers.length; i++) {
        const marker = markers[i]
        new mapboxgl.Marker()
          .setLngLat([marker.long, marker.lat])
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<p>${marker.name}</p>`
          ))
          .addTo(map);
      }
    }
    map.addControl(new mapboxgl.FullscreenControl());


    // hook up map events here, such as click, mouseenter, mouseleave
    // e.g., map.on('click', (e) => {})
    // when this component is destroyed, remove the map

    return () => {
      map.remove()
    }
  }, [])

  // based on incoming props.  Just beware that you might need to add additional
  // You can use other `useEffect` hooks to update the state of the map
  // based on incoming props.  Just beware that you might need to add additional
  // refs to share objects or state between hooks.
  return (
    <div style={{
      width: width,
      height: height,
      position: 'relative',
      flex: '1 0 auto'
    }}
    >
      <div ref={mapNode} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

Map.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  bounds: PropTypes.arrayOf(PropTypes.number),
  minZoom: PropTypes.number,
  maxZoom: PropTypes.number,
  styles: PropTypes.arrayOf(PropTypes.string),
  padding: PropTypes.number,
  sources: PropTypes.object,
  layers: PropTypes.arrayOf(PropTypes.object),
  markers: PropTypes.arrayOf(PropTypes.object)
}

Map.defaultProps = {
  width: 'auto',
  height: '100%',
  center: [0, 0],
  zoom: 0,
  minZoom: 0,
  bounds: null,
  maxZoom: 24,
  styles: ['light-v9', 'dark-v9', 'streets-v11'],
  padding: 0.1, // padding around bounds as a proportion
  sources: {},
  layers: [],
  markers: []
}

export default Map