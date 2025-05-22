
export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  shortDescription: string;
  category: string[];
  images: string[];
  ecoImpactScore: 'high' | 'medium' | 'low';
  activities: string[];
  bestTimeToVisit: string;
  priceRange: string;
  latitude: number;
  longitude: number;
  featured: boolean;
}

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Sinharaja Forest Reserve",
    location: "Sabaragamuwa Province",
    description: "Sinharaja is a UNESCO World Heritage Site and biodiversity hotspot. This lowland rainforest is home to endemic wildlife and rare bird species. The dense vegetation and natural streams create a magical atmosphere for eco-tourists. Guided walks through the forest offer opportunities to spot rare birds, butterflies, and if you're lucky, purple-faced langurs and other mammals. Conservation efforts here focus on preserving the rainforest ecosystem while allowing sustainable tourism.",
    shortDescription: "A pristine UNESCO rainforest with incredible biodiversity and endemic species.",
    category: ["forest", "wildlife", "unesco"],
    images: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    ],
    ecoImpactScore: "high",
    activities: ["Bird Watching", "Hiking", "Photography", "Nature Walks", "Research"],
    bestTimeToVisit: "January to March and August to September",
    priceRange: "$$ - $$$",
    latitude: 6.4,
    longitude: 80.4,
    featured: true
  },
  {
    id: "2",
    name: "Yala National Park",
    location: "Southern Province",
    description: "Yala combines a strict nature reserve with a national park and is renowned for having one of the highest leopard densities in the world. The park consists of five blocks, with only two open to the public. Besides leopards, Yala is home to elephants, sloth bears, crocodiles, and many bird species. Safari drives offer an exciting way to experience the wildlife, while the dramatic landscapes from rocky outcrops to lagoons and beaches provide stunning backdrops. Visitors are encouraged to respect wildlife by maintaining distance and not disturbing the animals.",
    shortDescription: "Famous national park with the highest leopard density in the world and diverse ecosystems.",
    category: ["wildlife", "safari", "coastal"],
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    ],
    ecoImpactScore: "medium",
    activities: ["Safari", "Wildlife Photography", "Camping", "Bird Watching"],
    bestTimeToVisit: "February to July",
    priceRange: "$$ - $$$",
    latitude: 6.3,
    longitude: 81.5,
    featured: true
  },
  {
    id: "3",
    name: "Ella Rock",
    location: "Uva Province",
    description: "Ella Rock offers one of Sri Lanka's most spectacular hiking experiences. The journey starts from the charming town of Ella and takes you through tea plantations, dense forests, and along railway tracks before a steeper climb to the summit. From the top, panoramic views extend across the Ella Gap to the south coast on clear days. This moderate hike takes 3-4 hours round trip and is a perfect way to experience the natural beauty of Sri Lanka's hill country while supporting local guides and small businesses in Ella town.",
    shortDescription: "A breathtaking hike through tea plantations to panoramic mountain views.",
    category: ["mountain", "hiking", "cultural"],
    images: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
    ],
    ecoImpactScore: "high",
    activities: ["Hiking", "Photography", "Tea Plantation Tours", "Village Visits"],
    bestTimeToVisit: "March to May and August to October",
    priceRange: "$",
    latitude: 6.87,
    longitude: 81.05,
    featured: false
  },
  {
    id: "4",
    name: "Pigeon Island National Park",
    location: "Eastern Province",
    description: "Pigeon Island is one of the two marine national parks in Sri Lanka. Located near Trincomalee, this small island is named after the rock pigeon that colonizes it. The surrounding coral reef is home to dozens of coral species, hundreds of reef fish, and several species of turtles and blacktip reef sharks. Snorkeling and diving are popular activities, with visitors encouraged to practice responsible marine tourism by not touching corals or disturbing marine life. Conservation efforts focus on protecting the coral reef from damage and pollution.",
    shortDescription: "Vibrant coral reef marine park with exceptional snorkeling and diving opportunities.",
    category: ["beach", "wildlife", "marine"],
    images: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
    ],
    ecoImpactScore: "medium",
    activities: ["Snorkeling", "Diving", "Beach Relaxation", "Wildlife Observation"],
    bestTimeToVisit: "April to September",
    priceRange: "$$",
    latitude: 8.7,
    longitude: 81.2,
    featured: true
  },
  {
    id: "5",
    name: "Knuckles Mountain Range",
    location: "Central Province",
    description: "The Knuckles Mountain Range, named for its resemblance to a clenched fist, is a UNESCO World Heritage Site offering pristine wilderness, cloud forests, and rich biodiversity. The range is home to numerous endemic species of plants and animals. Hiking trails vary from easy walks to challenging multi-day treks through diverse terrain including montane forests, grasslands, and waterfalls. Traditional villages within the range provide glimpses into rural Sri Lankan life. Eco-tourism initiatives here focus on community involvement and preservation of both natural and cultural heritage.",
    shortDescription: "Misty mountain range with diverse ecosystems and challenging treks through cloud forests.",
    category: ["mountain", "hiking", "unesco", "wildlife"],
    images: [
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    ],
    ecoImpactScore: "high",
    activities: ["Trekking", "Camping", "Bird Watching", "Photography", "Village Homestays"],
    bestTimeToVisit: "January to March and July to September",
    priceRange: "$$ - $$$",
    latitude: 7.46,
    longitude: 80.78,
    featured: false
  },
  {
    id: "6",
    name: "Mirissa Beach",
    location: "Southern Province",
    description: "Mirissa Beach is known for its laid-back atmosphere and is one of Sri Lanka's prime whale watching locations. From December to April, blue whales and sperm whales can be spotted relatively close to shore. The crescent-shaped beach with palm trees offers beautiful sunsets and surfing opportunities. Responsible whale watching operators maintain distance from marine mammals and limit viewing time. The town supports eco-friendly accommodations and beach cleanup initiatives to preserve the natural beauty of the coastline.",
    shortDescription: "Peaceful crescent beach known for ethical whale watching and surfing opportunities.",
    category: ["beach", "wildlife", "marine"],
    images: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac"
    ],
    ecoImpactScore: "medium",
    activities: ["Whale Watching", "Surfing", "Snorkeling", "Beach Relaxation", "Fishing Village Tours"],
    bestTimeToVisit: "November to April",
    priceRange: "$$ - $$$",
    latitude: 5.94,
    longitude: 80.45,
    featured: false
  },
  {
    id: "7",
    name: "Anuradhapura Ancient City",
    location: "North Central Province",
    description: "Anuradhapura, a UNESCO World Heritage Site, was the first established kingdom in ancient Sri Lanka. This sacred city is renowned for its well-preserved ruins of ancient Sri Lankan civilization, including stupas, temples, and palaces. The sacred Bodhi Tree, the oldest historically documented tree in the world, attracts Buddhist pilgrims. Visitors can explore the ancient city by bicycle, experiencing the serene atmosphere while learning about Sri Lanka's rich cultural heritage. Conservation efforts focus on preserving the archaeological treasures while promoting cultural understanding.",
    shortDescription: "Ancient UNESCO city with sacred Buddhist sites and remarkable archaeological ruins.",
    category: ["cultural", "unesco", "historical"],
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac"
    ],
    ecoImpactScore: "high",
    activities: ["Historical Tours", "Cycling", "Photography", "Religious Pilgrimage", "Archaeology"],
    bestTimeToVisit: "June to September",
    priceRange: "$$",
    latitude: 8.31,
    longitude: 80.41,
    featured: false
  },
  {
    id: "8",
    name: "Bundala National Park",
    location: "Southern Province",
    description: "Bundala National Park is an important wintering ground for migratory water birds in Sri Lanka. This wetland sanctuary is home to thousands of flamingoes, many species of birds, crocodiles, and elephants. The diverse landscape includes lagoons, dunes, and beaches. Unlike the more famous Yala, Bundala offers a more peaceful safari experience with fewer crowds. The park implements visitor management practices to minimize disturbance to bird populations and monitors water quality to protect the lagoon ecosystems that support rich biodiversity.",
    shortDescription: "Wetland sanctuary with thousands of birds including flamingoes and abundant wildlife.",
    category: ["wildlife", "bird watching", "coastal"],
    images: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
    ],
    ecoImpactScore: "high",
    activities: ["Bird Watching", "Safari", "Photography", "Nature Walks"],
    bestTimeToVisit: "November to March",
    priceRange: "$$",
    latitude: 6.2,
    longitude: 81.2,
    featured: false
  }
];

export const categories = [
  { id: "all", name: "All Destinations" },
  { id: "beach", name: "Beaches" },
  { id: "forest", name: "Forests" },
  { id: "wildlife", name: "Wildlife" },
  { id: "mountain", name: "Mountains" },
  { id: "cultural", name: "Cultural" },
  { id: "unesco", name: "UNESCO Sites" },
  { id: "marine", name: "Marine" },
  { id: "safari", name: "Safari" },
  { id: "hiking", name: "Hiking" },
  { id: "bird watching", name: "Bird Watching" },
  { id: "coastal", name: "Coastal" },
  { id: "historical", name: "Historical" },
];
