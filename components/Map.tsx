// "use client";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // Fix for the missing default marker icon in Leaflet + Next.js
// const customIcon = new L.Icon({
//   iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//   shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

// export default function Map() {
//   const position: [number, number] = [4.8156, 7.0498]; // Your NGO Coordinates

//   return (
//     <MapContainer 
//       center={position} 
//       zoom={13} 
//       scrollWheelZoom={false} 
//       className="h-full w-full"
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={position} icon={customIcon}>
//         <Popup>
//           Our NGO Headquarters <br /> Port Harcourt, Nigeria.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// }