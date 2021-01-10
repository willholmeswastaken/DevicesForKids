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

  if (!mapboxToken) {
    console.error(
      'ERROR: Mapbox token is required in gatsby-config.js siteMetadata'
    )
  }

  const mapNode = useRef(null)

  const mapRef = useRef(null)

  useEffect(() => {
    let mapCenter = center
    let mapZoom = zoom

    if (bounds && bounds.length === 4) {
      const { center: boundsCenter, zoom: boundsZoom } = getCenterAndZoom(
        mapNode.current,
        bounds,
        padding
      )
      mapCenter = boundsCenter
      mapZoom = boundsZoom
    }

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
    window.map = map

    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    map.on('load', () => {
      Object.entries(sources).forEach(([id, source]) => {
        map.addSource(id, source)
      })

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

    return () => {
      map.remove()
    }
  }, [])

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
  padding: 0.1,
  sources: {},
  layers: [],
  markers: []
}

export default Map