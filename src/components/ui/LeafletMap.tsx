"use client";

import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { site, whatsappLink } from "@/content/site";
import type { NearbyPlace } from "@/content/nearby";

const dotIcon = (isActive: boolean) =>
  L.divIcon({
    className: "nexora-marker",
    html: `<span style="display:block;width:${isActive ? 20 : 13}px;height:${isActive ? 20 : 13}px;background:${isActive ? "#F4F5F6" : "#99D508"};border:2px solid #060B0F;border-radius:50%"></span>`,
    iconSize: isActive ? [20, 20] : [13, 13],
    iconAnchor: isActive ? [10, 10] : [6.5, 6.5],
    popupAnchor: [0, -10],
  });

const mainIcon = L.divIcon({
  className: "nexora-marker-main",
  html: `<span style="display:grid;place-items:center;width:34px;height:34px;background:#99D508;border:3px solid #060B0F;border-radius:50%"><span style="width:10px;height:10px;background:#060B0F;border-radius:50%"></span></span>`,
  iconSize: [34, 34],
  iconAnchor: [17, 17],
  popupAnchor: [0, -18],
});

function MapController({
  activeLocation,
  center,
}: {
  activeLocation: NearbyPlace | null;
  center: { lat: number; lng: number };
}) {
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
  center,
}: {
  locations: NearbyPlace[];
  activeLocation: NearbyPlace | null;
  setActiveLocation: (loc: NearbyPlace | null) => void;
  center: { lat: number; lng: number };
}) {
  return (
    <div className="nexora-map relative z-0 h-full w-full">
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          attribution="&copy; Google Maps"
        />

        <MapController activeLocation={activeLocation} center={center} />

        <Marker
          position={[center.lat, center.lng]}
          icon={mainIcon}
          eventHandlers={{ click: () => setActiveLocation(null) }}
        >
          <Popup>
            <div className="min-w-[190px] p-1">
              <p className="text-base font-bold text-[#060B0F]">{site.name}</p>
              <p className="mb-3 text-xs text-[#666]">{site.descriptor}</p>
              <div className="flex flex-col gap-2">
                {/* Was a dead button - now a real booking action, consistent with the rest of the site. */}
                <a
                  href={whatsappLink(`Hello ${site.name}, I would like to book a tour.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded bg-[#99D508] py-2 text-center text-xs font-bold uppercase tracking-wider text-[#060B0F]"
                >
                  Book a Tour
                </a>
                <a
                  href={site.directionsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded border border-[#060B0F] py-2 text-center text-xs font-medium uppercase tracking-wider text-[#060B0F]"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </Popup>
        </Marker>

        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            icon={dotIcon(activeLocation?.id === loc.id)}
            eventHandlers={{ click: () => setActiveLocation(loc) }}
          >
            <Popup>
              <div className="min-w-[170px] p-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#5c7f05]">
                  {loc.category}
                </p>
                <p className="mb-2 text-sm font-medium text-[#060B0F]">{loc.name}</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                  <span className="text-xs text-[#666]">{loc.dist}</span>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium text-[#1a56db] underline"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <style>{`
        .nexora-map .leaflet-container { background: #10171F; font-family: inherit; }
        .nexora-map .leaflet-popup-content-wrapper,
        .nexora-map .leaflet-popup-tip { background: #fff; color: #060B0F; border-radius: 4px; }
        .nexora-map .leaflet-control-attribution {
          background: rgba(6,11,15,0.75) !important;
          color: rgba(244,245,246,0.55) !important;
        }
        .nexora-map .leaflet-control-attribution a { color: rgba(244,245,246,0.8) !important; }
      `}</style>
    </div>
  );
}
