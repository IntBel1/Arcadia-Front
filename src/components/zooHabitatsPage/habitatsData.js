const HabitatData = [
  {
    id: 1,
    url: "/savana.png",
    title: "African savannah",
    body: "The African Savanna is a vast grassland ecosystem known for its diverse wildlife and distinct wet and dry seasons.",
    intro: "Discover the rich and diverse world of the African Savanna, where majestic animals roam free and the landscape changes with the seasons.",
    appear: "The African Savanna features open grasslands with scattered trees and shrubs, experiencing distinct wet and dry seasons.",
    lifeStyle: "The savanna supports a variety of life, including large herbivores, predators, and numerous bird species.",
    animals: [
      "Elephant,",
      "Lion,",
      "Black Rhinoceros,",
      "Cheetah,",
      "Common Hippopotamus ",
      "Common Ostrich,",
      "Giraffe,",
      "Grey Wolf,",
      "Greater Flamingo,",
      "Zebra,",
      "Leopard"
    ],
    warn: "The African Savanna faces threats from habitat loss, poaching, and climate change.",
    preserve: "Conservation efforts include protecting wildlife reserves, anti-poaching measures, and promoting sustainable land use practices."
  }
  ,
  {
    id: 2,
    url: "/tropical.png",
    title: "Asian Rainforest",
    body: "Asian Tropical Forests are dense, biodiverse ecosystems teeming with exotic flora and fauna.",
    intro: "Venture into the lush, vibrant world of the Asian Tropical Forest, where a plethora of life forms coexist in harmony.",
    appear: "These forests are characterized by thick vegetation, high rainfall, and a warm climate, creating a thriving environment for diverse species.",
    lifeStyle: "The tropical forest supports a vast array of plants and animals, many of which are unique to these regions.",
    animals: [
      "Amur Tiger,",
      "Asian Elephant,",
      "Bengal Tiger,",
      "Indian Rhinoceros,",
      "Orangutan,",
      "Red Panda,",
      "Snow Leopard"
    ],
    warn: "Asian Tropical Forests are threatened by deforestation, habitat fragmentation, and illegal wildlife trade.",
    preserve: "Conservation efforts focus on protecting forest areas, sustainable logging practices, and wildlife conservation programs."
  }  
,
{
  id: 3,
  url: "/desert.png",
  title: "Australian desert",
  body: "The Australian Desert is a harsh, arid environment known for its unique wildlife and dramatic landscapes.",
  intro: "Experience the rugged beauty of the Australian Desert, where unique wildlife has adapted to thrive in extreme conditions.",
  appear: "The Australian Desert is characterized by its vast, sandy expanses, rocky outcrops, and sparse vegetation.",
  lifeStyle: "This desert supports a range of specially adapted plants and animals that can survive with minimal water.",
  animals: [
    "Fennec Fox,",
    "Koala,",
    "Meerkat"
    
  ],
  warn: "The Australian Desert faces threats from climate change, invasive species, and human activities.",
  preserve: "Conservation efforts include habitat protection, control of invasive species, and sustainable land management."
}

,
{
  id: 4,
  url: "/jungle_sud.png",
  title: "South American jungle",
  body: "The South American Jungle, particularly the Amazon Rainforest, is a lush, biodiverse ecosystem crucial to the planet's health.",
  intro: "Explore the vibrant, diverse world of the South American Jungle, home to an incredible array of wildlife and plant species.",
  appear: "This jungle is characterized by dense vegetation, high humidity, and a warm climate, creating a lush, green environment.",
  lifeStyle: "The jungle supports an incredible variety of life, including countless species of plants, animals, and insects.",
  animals: [
    "Bonobo,",
    "Chimpanzee,",
    "Giant Panda,",
    "Gorilla,",
    "Lemur"
  ],
  warn: "The South American Jungle is threatened by deforestation, illegal logging, and climate change.",
  preserve: "Conservation efforts focus on protecting forest areas, sustainable development, and preserving indigenous cultures."
}

,
{
  id: 5,
  url: "/acrotique.png",
  title: "Arctic region",
  body: "The Arctic Region is a cold, harsh environment characterized by ice-covered landscapes and unique, specially adapted wildlife.",
  intro: "Journey to the icy wilderness of the Arctic Region, where life thrives in one of the most extreme environments on Earth.",
  appear: "The Arctic is characterized by its ice-covered landscapes, extreme cold, and long periods of darkness and light.",
  lifeStyle: "The Arctic supports a variety of life, including mammals, birds, and marine species adapted to cold environments.",
  animals: [
    "California Sea Lion,",
    "Emperor Penguin,",
    "Eurasian Brown Bear,",
    "Grizzly Bear"
    
  ],
  warn: "The Arctic Region is threatened by climate change, melting ice, and pollution.",
  preserve: "Conservation efforts focus on reducing carbon emissions, protecting marine environments, and sustainable fishing practices."
}

   
]

HabitatData.forEach((habitat, index) => {
    habitat.id = index + 1; 
});

export default HabitatData;