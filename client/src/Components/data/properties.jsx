// src/data/properties.js
export const properties = [
  {
    id: 1,
    title: "Luxury Villa with Ocean View",
    description: "Stunning 5-bedroom villa with panoramic ocean views, private pool, and modern amenities.",
    price: 2500000,
    location: "Malibu, California",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Ocean View", "Private Pool", "Smart Home", "Wine Cellar", "Home Theater", "Gourmet Kitchen"],
    yearBuilt: 2020,
    agent: {
      name: "Sarah Johnson",
      phone: "+1 (234) 567-8901",
      email: "sarah@premiumestate.com",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    coordinates: { lat: 34.0259, lng: -118.7798 }
  },
  {
    id: 2,
    title: "Modern Penthouse in Manhattan",
    description: "Luxurious penthouse with rooftop terrace, floor-to-ceiling windows, and premium finishes.",
    price: 3500000,
    location: "Manhattan, NY",
    type: "Penthouse",
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Rooftop Terrace", "Concierge", "Gym", "Wine Cellar", "Smart Home"],
    yearBuilt: 2019,
    agent: {
      name: "Michael Chen",
      phone: "+1 (234) 567-8902",
      email: "michael@premiumestate.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  // Add more properties...
];