


const ServiceData = [
  {
    id: 1,
    url: "/shop.jpg",
    title: "Zoo Shopping",
    body: "The zoo shopping service offers a variety of souvenirs, toys, and educational materials for visitors of all ages.",
    intro: "Discover a wide range of zoo-themed merchandise, from plush toys to educational books, at our zoo shops.",
    appear: "Our zoo shops are conveniently located throughout the zoo, offering a pleasant shopping experience with friendly staff ready to assist.",
    lifeStyle: "Visitors can purchase souvenirs that reflect the diverse wildlife and unique experiences they encounter at the zoo.",
    
    warn: "Please be mindful of your purchases and consider the environmental impact of the products you buy.",
    preserve: "A portion of the proceeds from our zoo shops goes towards wildlife conservation efforts and supporting the zoo's educational programs."
  }
,
{
  id: 2,
  url: "/guide.jpg",
  title: "Guide Service(Free)",
  body: "The guide service offers informative tours led by knowledgeable guides, enhancing the visitor experience with insights into the animals and their habitats.",
  intro: "Enhance your zoo visit with our guided tours, led by expert guides who provide fascinating insights into the animals and their natural habitats.",
  appear: "Our guide service features professional guides who are passionate about wildlife and eager to share their knowledge.",
  lifeStyle: "Guided tours offer a deeper understanding of the zoo's inhabitants, their behaviors, and the conservation efforts in place.",
  warn: "Please arrive on time for your scheduled tour and follow the guide's instructions for a safe and enjoyable experience.",
  preserve: "Our guided tours are designed to educate visitors about conservation and inspire a commitment to protecting wildlife."
}
,
{
  id: 3,
  url: "/train.jpg",
  title: "Zoo Train",
  body: "The zoo train offers a fun and convenient way to explore the zoo, providing easy access to various exhibits and attractions.",
  intro: "Hop on the zoo train for a relaxing and scenic ride around the zoo, making it easy to see all the exhibits and attractions.",
  appear: "The zoo train features comfortable seating, informative commentary, and scenic routes that take you to key areas of the zoo.",
  lifeStyle: "The zoo train is perfect for families, providing a fun and efficient way to navigate the zoo while learning about the animals.",
  warn: "Please stay seated while the train is in motion and follow all safety instructions provided by the conductor.",
  preserve: "Using the zoo train helps reduce foot traffic in sensitive areas, contributing to the preservation of animal habitats within the zoo."
}
,
{
  id: 4,
  url: "/resto.jpg",
  title: "Zoo Restauration",
  body: "The zoo restauration service offers a variety of dining options to satisfy your hunger during your visit, from quick snacks to full meals.",
  intro: "Enjoy a delicious meal or a quick snack at our zoo restaurants and cafes, offering a variety of options to suit every taste.",
  appear: "Our zoo restauration facilities are conveniently located throughout the zoo, providing comfortable seating and a diverse menu.",
  lifeStyle: "Whether you're looking for a quick bite or a leisurely meal, our zoo restaurants offer something for everyone, including vegetarian and kid-friendly options.",
  warn: "Please dispose of your waste properly and be mindful of the environment by using recycling bins provided.",
  preserve: "Our zoo restaurants are committed to sustainability, using eco-friendly packaging and sourcing ingredients locally whenever possible."
}

]

ServiceData.forEach((habitat, index) => {
    habitat.id = index + 1; 
});

export default ServiceData