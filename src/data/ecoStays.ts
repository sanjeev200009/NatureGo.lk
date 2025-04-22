
import { EcoStay } from "@/types";

export const ecoStays: EcoStay[] = [
  {
    id: "1",
    name: "Ella Canopy Treehouse",
    location: "Ella",
    description: "Experience the magic of Ella from this eco-friendly treehouse nestled in the heart of the jungle. This sustainable retreat offers panoramic views of Ella Rock and Little Adam's Peak while being built with reclaimed materials and powered by solar energy. Wake up to the sounds of birds and enjoy organic breakfast made from locally sourced ingredients.",
    shortDescription: "Sustainable treehouse with panoramic views of Ella's mountains",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRyZWVob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1647891940243-77a6483a152e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRyZWVob3VzZSUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1618767689160-da3fb810aad7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dHJlZWhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    ],
    pricePerNight: 120,
    maxGuests: 2,
    amenities: ["Solar powered", "Rainwater harvesting", "Organic breakfast", "Eco-friendly toiletries", "Yoga deck"],
    type: "stay",
    ecoRating: 5,
    ecoImpactScore: "high",
    ecoFeatures: ["Solar powered", "Composting toilet", "Rainwater harvesting", "Farm-to-table dining"],
    availability: {
      startDate: new Date("2025-05-01"),
      endDate: new Date("2025-12-31"),
      unavailableDates: [
        new Date("2025-05-15"),
        new Date("2025-05-16"),
        new Date("2025-06-10"),
        new Date("2025-06-11")
      ]
    },
    reviews: [
      {
        userId: "user1",
        userName: "Sarah T.",
        rating: 5,
        comment: "The most magical experience! Waking up to birdsong and watching the mist roll over the mountains was incredible. Truly sustainable luxury.",
        date: new Date("2025-03-10")
      },
      {
        userId: "user2",
        userName: "Michael P.",
        rating: 4,
        comment: "Unique stay with breathtaking views. The eco-friendly aspects were impressive, though the composting toilet takes some getting used to.",
        date: new Date("2025-02-28")
      }
    ],
    badges: ["eco-certified", "nature-stay"]
  },
  {
    id: "2",
    name: "Sigiriya Elephant Safari",
    location: "Sigiriya",
    description: "Join our ethical elephant safari near the ancient rock fortress of Sigiriya. This half-day experience allows you to observe elephants in their natural habitat without riding or exploiting them. Our expert guides are passionate conservationists who will share their knowledge about Sri Lankan elephants and their importance to the ecosystem. A portion of proceeds goes directly to elephant conservation efforts.",
    shortDescription: "Ethical elephant safari supporting conservation efforts near Sigiriya",
    images: [
      "https://images.unsplash.com/photo-1589818917899-5c0fee2ff5b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlcGhhbnQlMjBzYWZhcml8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlcGhhbnQlMjBzcmklMjBsYW5rYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1577406288003-c6d0cc9b5563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNpZ2lyaXlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    ],
    pricePerNight: 85,
    maxGuests: 8,
    amenities: ["Ethical wildlife viewing", "Expert guides", "Conservation contribution", "Refreshments", "Transportation"],
    type: "experience",
    ecoRating: 5,
    ecoImpactScore: "high",
    ecoFeatures: ["Wildlife conservation", "No-riding policy", "Small group sizes", "Local employment"],
    availability: {
      startDate: new Date("2025-05-01"),
      endDate: new Date("2025-12-31"),
      unavailableDates: [
        new Date("2025-05-20"),
        new Date("2025-05-21"),
        new Date("2025-07-15")
      ]
    },
    reviews: [
      {
        userId: "user3",
        userName: "Emma L.",
        rating: 5,
        comment: "Such a respectful way to see these magnificent creatures. Our guide was incredibly knowledgeable, and I loved knowing our money went toward conservation.",
        date: new Date("2025-03-15")
      },
      {
        userId: "user4",
        userName: "David R.",
        rating: 5,
        comment: "Highlight of our Sri Lanka trip! Saw a herd with babies, and the guide explained so much about elephant behavior. Highly recommend!",
        date: new Date("2025-02-20")
      }
    ],
    badges: ["eco-certified", "carbon-neutral"]
  },
  {
    id: "3",
    name: "Yala Eco Safari Camp",
    location: "Yala",
    description: "Experience the wild side of Sri Lanka at our eco-safari camp on the edge of Yala National Park. Our luxury tents blend seamlessly with the environment, providing comfort while minimizing impact. Enjoy guided safaris with our expert trackers to spot leopards, elephants, and countless bird species. Our camp operates on 100% renewable energy and follows strict zero-waste principles.",
    shortDescription: "Luxury eco-tents near Yala National Park with guided wildlife safaris",
    images: [
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FmYXJpJTIwY2FtcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwdGVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1581343980590-c889aa8a3a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGVvcGFyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    ],
    pricePerNight: 245,
    maxGuests: 3,
    amenities: ["Private safari guide", "All meals included", "Luxury eco-tents", "Solar-heated showers", "Stargazing deck"],
    type: "stay",
    ecoRating: 4,
    ecoImpactScore: "high",
    ecoFeatures: ["Solar power", "Water conservation", "Zero-waste policy", "Local employment", "Wildlife conservation"],
    availability: {
      startDate: new Date("2025-05-01"),
      endDate: new Date("2025-10-31"),
      unavailableDates: [
        new Date("2025-05-25"),
        new Date("2025-05-26"),
        new Date("2025-05-27"),
        new Date("2025-06-15"),
        new Date("2025-06-16")
      ]
    },
    reviews: [
      {
        userId: "user5",
        userName: "James K.",
        rating: 5,
        comment: "Unforgettable experience! We saw leopards on both our game drives. The tents are luxurious yet eco-friendly, and the food was incredible.",
        date: new Date("2025-03-05")
      },
      {
        userId: "user6",
        userName: "Anika J.",
        rating: 4,
        comment: "The perfect balance of luxury and sustainability. Truly impressive commitment to the environment. Our guide was exceptional too.",
        date: new Date("2025-02-15")
      }
    ],
    badges: ["eco-certified", "nature-stay", "carbon-neutral"]
  },
  {
    id: "4",
    name: "Knuckles Mountain Trek",
    location: "Knuckles",
    description: "Embark on a 3-day guided trek through the UNESCO-protected Knuckles Mountain Range. Experience diverse ecosystems from cloud forests to grasslands while staying in basic but comfortable eco-lodges run by local communities. Our small-group policy ensures minimal environmental impact while providing an authentic adventure experience. All guides are locals with deep knowledge of the area's flora, fauna, and cultural heritage.",
    shortDescription: "Three-day guided trek through UNESCO-protected Knuckles Mountain Range",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW4lMjB0cmVrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1445363692815-ebcd599f7621?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW4lMjB0cmVrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWluJTIwdHJla3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    ],
    pricePerNight: 175,
    maxGuests: 6,
    amenities: ["Local guides", "Community lodging", "All meals", "Wildlife spotting", "Cultural interactions"],
    type: "hike",
    ecoRating: 5,
    ecoImpactScore: "high",
    ecoFeatures: ["Leave No Trace principles", "Community-based tourism", "Cultural preservation", "Sustainable trail use"],
    availability: {
      startDate: new Date("2025-05-01"),
      endDate: new Date("2025-11-30"),
      unavailableDates: [
        new Date("2025-06-01"),
        new Date("2025-06-02"),
        new Date("2025-06-03"),
        new Date("2025-07-20"),
        new Date("2025-07-21"),
        new Date("2025-07-22")
      ]
    },
    reviews: [
      {
        userId: "user7",
        userName: "Liam H.",
        rating: 5,
        comment: "One of the best treks I've ever done. Physically challenging but incredibly rewarding. Our guide knew every plant and bird we encountered!",
        date: new Date("2025-03-20")
      },
      {
        userId: "user8",
        userName: "Priya S.",
        rating: 4,
        comment: "Beautiful landscapes and great guides. The community lodges are basic but comfortable, and the food was delicious. Pack good rain gear!",
        date: new Date("2025-01-15")
      }
    ],
    badges: ["eco-certified", "nature-stay"]
  },
  {
    id: "5",
    name: "Mirissa Beach Eco Cabana",
    location: "Mirissa",
    description: "Stay in our charming eco-cabanas just steps from Mirissa's famous beach. Each cabana is handcrafted using traditional techniques and natural materials like bamboo, reclaimed wood, and palm thatch. Enjoy the perfect balance of rustic charm and modern comfort with open-air rain showers, locally made furnishings, and private verandas. Our property features an organic garden that supplies our beachfront restaurant.",
    shortDescription: "Beachfront eco-cabanas made from natural materials in Mirissa",
    images: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2glMjBjYWJhbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1541004995602-b3e898709909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBjYWJhbmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1549294413-26f195650dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRyb3BpY2FsJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    ],
    pricePerNight: 95,
    maxGuests: 2,
    amenities: ["Beachfront access", "Organic restaurant", "Free bicycles", "Yoga sessions", "Whale watching trips"],
    type: "stay",
    ecoRating: 4,
    ecoImpactScore: "medium",
    ecoFeatures: ["Natural building materials", "Water conservation", "Organic gardens", "Plastic-free policy", "Local craftsmanship"],
    availability: {
      startDate: new Date("2025-05-01"),
      endDate: new Date("2025-12-31"),
      unavailableDates: [
        new Date("2025-05-10"),
        new Date("2025-05-11"),
        new Date("2025-06-05"),
        new Date("2025-06-06")
      ]
    },
    reviews: [
      {
        userId: "user9",
        userName: "Thomas B.",
        rating: 5,
        comment: "Paradise found! Our cabana was simple but beautiful, and falling asleep to the sound of waves was magical. The staff were incredibly welcoming too.",
        date: new Date("2025-03-25")
      },
      {
        userId: "user10",
        userName: "Olivia F.",
        rating: 4,
        comment: "Loved the eco-friendly approach and beachfront location. The cabanas have character and charm, though they get quite warm during the day.",
        date: new Date("2025-02-10")
      }
    ],
    badges: ["nature-stay"]
  },
  {
    id: "6",
    name: "Kandy Heritage Tea Experience",
    location: "Kandy",
    description: "Immerse yourself in Sri Lanka's tea heritage with this day-long experience in the hills around Kandy. Visit a traditional tea plantation where you'll learn about sustainable farming practices, try your hand at tea picking, and participate in a tea-making workshop. Meet the families who have been cultivating tea for generations and enjoy a farm-to-table lunch featuring local specialties. This experience supports fair trade practices and organic farming.",
    shortDescription: "Sustainable tea plantation tour and workshop in Kandy highlands",
    images: [
      "https://images.unsplash.com/photo-1566419808810-927259f927da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhJTIwcGxhbnRhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVhJTIwcGxhbnRhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1557818451-167be6486c0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVhJTIwY2VyZW1vbnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    ],
    pricePerNight: 65,
    maxGuests: 8,
    amenities: ["Tea workshop", "Farm lunch", "Guided tour", "Tea tasting", "Photo opportunities"],
    type: "experience",
    ecoRating: 4,
    ecoImpactScore: "medium",
    ecoFeatures: ["Organic farming", "Fair trade practices", "Cultural preservation", "Farm-to-table dining"],
    availability: {
      startDate: new Date("2025-05-01"),
      endDate: new Date("2025-12-31"),
      unavailableDates: [
        new Date("2025-05-18"),
        new Date("2025-05-25"),
        new Date("2025-06-08")
      ]
    },
    reviews: [
      {
        userId: "user11",
        userName: "Sophia C.",
        rating: 5,
        comment: "A fascinating insight into tea production. The workshop was hands-on and fun, and the lunch was one of the best meals we had in Sri Lanka.",
        date: new Date("2025-03-15")
      },
      {
        userId: "user12",
        userName: "Raj P.",
        rating: 5,
        comment: "Educational and enjoyable experience. The plantation was beautiful, and meeting the tea pickers and learning about their lives was enlightening.",
        date: new Date("2025-02-28")
      }
    ],
    badges: ["eco-certified"]
  }
];
