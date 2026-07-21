"use client";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom Leaflet Icons
const createCustomIcon = (isActive: boolean) => {
  return L.divIcon({
    className: "custom-leaflet-icon",
    html: `<div style="
      width: ${isActive ? '24px' : '16px'};
      height: ${isActive ? '24px' : '16px'};
      background-color: ${isActive ? '#FFFFFF' : '#99D508'};
      border: 3px solid #0C0C0C;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(153,213,8,0.5);
      transition: all 0.3s ease;
    "></div>`,
    iconSize: isActive ? [24, 24] : [16, 16],
    iconAnchor: isActive ? [12, 12] : [8, 8],
    popupAnchor: [0, -12],
  });
};

const mainIcon = L.divIcon({
  className: "custom-leaflet-main-icon",
  html: `<div style="
    width: 48px;
    height: 48px;
    background-color: #99D508;
    border: 4px solid #0C0C0C;
    border-radius: 50%;
    box-shadow: 0 0 30px rgba(153,213,8,1);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  ">
    <div style="width: 16px; height: 16px; background-color: #0C0C0C; border-radius: 50%;"></div>
    <div style="position: absolute; width: 100%; height: 100%; border-radius: 50%; border: 3px solid #99D508; animation: pulse 1.5s infinite; top: -3px; left: -3px;"></div>
  </div>
  <style>
    @keyframes pulse {
      0% { transform: scale(1); opacity: 1; }
      100% { transform: scale(1.8); opacity: 0; }
    }
  </style>`,
  iconSize: [48, 48],
  iconAnchor: [24, 24],
  popupAnchor: [0, -24],
});

type LocationPoint = {
  id: string;
  category: string;
  name: string;
  dist: string;
  lat: number;
  lng: number;
};

// Map controller to handle panning when active location changes
function MapController({ activeLocation, center }: { activeLocation: LocationPoint | null, center: { lat: number, lng: number } }) {
  const map = useMap();
  
  useEffect(() => {
    if (activeLocation) {
      map.setView([activeLocation.lat, activeLocation.lng], 16, { animate: true });
    } else {
      map.setView([center.lat, center.lng], 14, { animate: true });
    }
  }, [activeLocation, map, center]);

  return null;
}

export default function LeafletMap({
  locations,
  activeLocation,
  setActiveLocation,
  center
}: {
  locations: LocationPoint[];
  activeLocation: LocationPoint | null;
  setActiveLocation: (loc: LocationPoint | null) => void;
  center: { lat: number; lng: number };
}) {
  
  return (
    <div className="w-full h-full relative z-0 leaflet-container-dark">
      <MapContainer 
        center={[center.lat, center.lng]} 
        zoom={14} 
        scrollWheelZoom={false}
        zoomControl={true}
        style={{ height: '100%', width: '100%', borderRadius: '40px' }}
      >
        {/* Google Maps Standard Tiles */}
        <TileLayer
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          attribution='&copy; Google Maps'
        />
        
        <MapController activeLocation={activeLocation} center={center} />

        {/* Main Marker */}
        <Marker 
          position={[center.lat, center.lng]} 
          icon={mainIcon}
          eventHandlers={{
            click: () => setActiveLocation(null)
          }}
        >
          <Popup className="custom-popup">
            <div className="p-2 bg-white text-[#0C0C0C] rounded-lg min-w-[200px]">
              <div className="font-black text-lg mb-1">Nexora Square</div>
              <div className="text-xs font-medium text-gray-600 mb-3">Premium Coworking Space</div>
              <div className="flex flex-col gap-2">
                <button className="w-full py-2 bg-[#0C0C0C] text-white text-xs uppercase tracking-wider rounded hover:bg-[#99D508] hover:text-[#0C0C0C] transition-colors">
                  Book a Tour
                </button>
                <a 
                  href="https://maps.app.goo.gl/WpEx9BwzG7SN3Hxn8" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full py-2 bg-[#99D508] text-[#0C0C0C] font-bold text-center text-xs uppercase tracking-wider rounded transition-colors inline-block"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </Popup>
        </Marker>

        {/* Directory Markers */}
        {locations.map(loc => (
          <Marker 
            key={loc.id}
            position={[loc.lat, loc.lng]}
            icon={createCustomIcon(activeLocation?.id === loc.id)}
            eventHandlers={{
              click: () => setActiveLocation(loc)
            }}
          >
            <Popup className="custom-popup">
              <div className="p-1 bg-white text-[#0C0C0C] rounded-lg min-w-[180px]">
                <div className="text-xs font-bold text-[#99D508] uppercase mb-1">{loc.category}</div>
                <div className="font-medium text-sm mb-2">{loc.name}</div>
                <div className="flex justify-between items-center border-t border-gray-100 pt-2">
                  <span className="text-xs font-light text-gray-500">{loc.dist}</span>
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs font-medium text-blue-600 hover:underline"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Dark theme adjustments for Leaflet Popups */}
      <style>{`
        .leaflet-container-dark .leaflet-container {
          background: #0C0C0C;
          font-family: inherit;
        }
        .leaflet-container-dark .leaflet-popup-content-wrapper,
        .leaflet-container-dark .leaflet-popup-tip {
          background: white;
          color: #0C0C0C;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        }
        .leaflet-container-dark .leaflet-control-attribution {
          background: rgba(12,12,12,0.7) !important;
          color: rgba(215,226,234,0.5) !important;
        }
        .leaflet-container-dark .leaflet-control-attribution a {
          color: rgba(215,226,234,0.8) !important;
        }
      `}</style>
    </div>
  );
}
