import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/MANALI.jpg";
import tourImg09 from "../images/GOA.jpg";
import tourImg10 from "../images/UDAIPUR.jpg";
import tourImg11 from "../images/MCLEODGANJ.jpg";
import tourImg12 from "../images/RISHIKESH.jpg";
import tourImg13 from "../images/DARJEELING.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: "Somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
  {
    id: "09",
    title: "Excursion to Solang Valley",
    city: "Manali",
    distance: 500,
    address: "Somewhere in Himachal Pradesh",
    price: 59,
    maxGroupSize: 8,
    desc: "With spectacular valleys, breathtaking views, snowcapped mountains, and lush forests of oak, deodar, and pine, Manali is a magical hill station at the northern end of Kullu valley in Himachal Pradesh. Gifted to the world by the mighty Himalayas, it is known to be one of the most popular destinations.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: true,
  },
  {
    id: "10",
    title: "Beaches, Sunsets and Crazy Nights",
    city: "Goa",
    distance: 1000,
    address: "Somewhere in Southwest India",
    price: 69,
    maxGroupSize: 8,
    desc: "Lying on the western coast, Goa is India's smallest state and unlike any other, known for its endless beaches, stellar nightlife, eclectic seafood, world-heritage listed architecture. Spread across just 3,702 km, Goa lies in the Konkan region. It is a far cry from the hippie haven or a beach getaway, and one of the only few destinations that is open 24/7.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg09,
    featured: true,
  },
  {
    id: "11",
    title: "The city of Lakes",
    city: "Udaipur",
    distance: 700,
    address: "Somewhere in Rajasthan",
    price: 49,
    maxGroupSize: 5,
    desc: "Udaipur, also known as the City of Lakes, is one of the most visited tourist places in Rajasthan. Located around stunning water lakes and enveloped by the Aravalli Hills in all directions, Udaipur is known for its azure lakes, magnificent palaces, vibrant culture and delectable food. Along with being a must-visit destination, it is also one of the best places to experience luxury in India.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg10,
    featured: true,
  },
  {
    id: "12",
    title: "Land of His Holiness the Dalai Lama",
    city: "Mcleodganj",
    distance: 500,
    address: "Somewhere in Himachal Pradesh",
    price: 49,
    maxGroupSize: 8,
    desc: "Famous for being home to the Tibetan spiritual leader Dalai Lama, Mcleod Ganj is culturally blessed by a prominent Tibetan influence owing to the major settlement of Tibetans here who fled their homeland. It is also worth noting that Tibet's exiled government is also based solely in Mcleodganj which is also why it's called the Little Lhasa.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg11,
    featured: true,
  },
  {
    id: "13",
    title: "Yoga Capital of the World",
    city: "Rishikesh",
    distance: 300,
    address: "Somewhere in Uttarakhand",
    price: 49,
    maxGroupSize: 6,
    desc: "Located in the foothills of the Himalayas along the convergence of Ganga and Chandrabhaga River, Rishikesh is a small town in the Dehradun district, located close to Haridwar in Uttarakhand. Rishikesh (also called as Hrishikesh) is known for its adventure activities, ancient temples, popular cafes and as the Yoga Capital of the World.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg12,
    featured: true,
  },
  {
    id: "14",
    title: "Queen of The Himalayas",
    city: "Darjeeling",
    distance: 1500,
    address: "Somewhere in West Bengal",
    price: 79,
    maxGroupSize: 8,
    desc: "Darjeeling, the former summer capital of India under the British Raj, has evolved into one of India's most sought-after hill stations. This picturesque hill destination in West Bengal is ideal for a romantic honeymoon. Darjeeling, nestled among acres of tea estates, is 2,050 metres above sea level and thus a cool climate all year.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg13,
    featured: true,
  },
];

export default tours;