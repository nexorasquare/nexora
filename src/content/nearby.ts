export type NearbyPlace = {
  id: string;
  category: string;
  name: string;
  dist: string;
  lat: number;
  lng: number;
};

export const nearbyPlaces: NearbyPlace[] = [
  { id: "t1", category: "Transport", name: "Angadippuram Railway Station", dist: "1 km", lat: 10.9881, lng: 76.2232 },
  { id: "t2", category: "Transport", name: "Calicut International Airport", dist: "40 km", lat: 11.0752, lng: 76.1239 },
  { id: "s1", category: "Stay", name: "Hi-Ton Hotel", dist: "220 m", lat: 10.9854, lng: 76.2241 },
  { id: "s2", category: "Stay", name: "N Comfort Luxurious Apartment", dist: "1 km", lat: 10.9804, lng: 76.2196 },
  { id: "b1", category: "Banking", name: "Federal Bank", dist: "1 km", lat: 10.9844, lng: 76.2226 },
  { id: "b2", category: "Banking", name: "HDFC Bank", dist: "1 km", lat: 10.9834, lng: 76.2216 },
  { id: "b3", category: "Banking", name: "SBI Bank", dist: "1.5 km", lat: 10.9794, lng: 76.2186 },
  { id: "sh1", category: "Shopping & Malls", name: "Market City", dist: "0.05 km", lat: 10.9866, lng: 76.2238 },
  { id: "sh2", category: "Shopping & Malls", name: "Aysha Complex", dist: "0.5 km", lat: 10.9874, lng: 76.2256 },
  { id: "sh3", category: "Shopping & Malls", name: "Nesto Hypermarket", dist: "0.05 km", lat: 10.9862, lng: 76.2237 },
  { id: "sh4", category: "Shopping & Malls", name: "Bismi Hypermarket", dist: "1.00 km", lat: 10.9824, lng: 76.2276 },
  { id: "sh5", category: "Shopping & Malls", name: "Vavas Mall", dist: "1.2 km", lat: 10.9814, lng: 76.2286 },
  { id: "h1", category: "Hospitals", name: "KIMS Al Shifa Hospital", dist: "1 km", lat: 10.9799, lng: 76.2231 },
  { id: "h2", category: "Hospitals", name: "Moulana Hospital", dist: "1.7 km", lat: 10.9764, lng: 76.2206 },
  { id: "h3", category: "Hospitals", name: "EMS Hospital", dist: "3 km", lat: 10.9684, lng: 76.2136 },
  { id: "h4", category: "Hospitals", name: "MES Medical College", dist: "5 km", lat: 10.9484, lng: 76.1986 },
  { id: "f1", category: "Food & Cafe", name: "Mazali", dist: "1 km", lat: 10.9829, lng: 76.2246 },
  { id: "f2", category: "Food & Cafe", name: "Chillies Restaurant", dist: "1 km", lat: 10.9839, lng: 76.2251 },
  { id: "f3", category: "Food & Cafe", name: "Just Loaf", dist: "1.2 km", lat: 10.9819, lng: 76.2266 },
  { id: "f4", category: "Food & Cafe", name: "Grin Table", dist: "1.3 km", lat: 10.9809, lng: 76.2276 },
  { id: "f5", category: "Food & Cafe", name: "Planet Cafe", dist: "2.5 km", lat: 10.9734, lng: 76.2336 },
];

export const nearbyByCategory = nearbyPlaces.reduce<Record<string, NearbyPlace[]>>((acc, p) => {
  (acc[p.category] ||= []).push(p);
  return acc;
}, {});
