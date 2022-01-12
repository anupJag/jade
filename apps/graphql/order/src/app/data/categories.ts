import { ICategoryType } from '../types';

const data = [
  {
    "id": "5f9c100e67b2b700c3682395",
    "name": "Grocery",
    "categoryIdentifier": "/grocery",
    "isRootCategory": true,
    "parentId": null,
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c105467b2b700c3682396",
    "name": "Milk",
    "categoryIdentifier": "/milk",
    "isRootCategory": false,
    "parentId": "5f9c100e67b2b700c3682395",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c106267b2b700c3682397",
    "name": "Fresh Vegetables",
    "categoryIdentifier": "/freshVeg",
    "isRootCategory": false,
    "parentId": "5f9c100e67b2b700c3682395",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c108267b2b700c3682398",
    "name": "Dairy Products",
    "categoryIdentifier": "/dairyProducts",
    "isRootCategory": false,
    "parentId": "5f9c100e67b2b700c3682395",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c108c67b2b700c3682399",
    "name": "Daily needs",
    "categoryIdentifier": "/dailyNeeds",
    "isRootCategory": false,
    "parentId": "5f9c100e67b2b700c3682395",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c10c567b2b700c368239b",
    "name": "Bakery & Biscuits",
    "categoryIdentifier": "/bakeryBiscuits",
    "isRootCategory": false,
    "parentId": "5f9c100e67b2b700c3682395",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c10d567b2b700c368239c",
    "name": "Ready to Cook",
    "categoryIdentifier": "/readyToCook",
    "isRootCategory": false,
    "parentId": "5f9c100e67b2b700c3682395",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c10de67b2b700c368239d",
    "name": "Beverages",
    "categoryIdentifier": "/beverages",
    "isRootCategory": false,
    "parentId": "5f9c100e67b2b700c3682395",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c10e967b2b700c368239e",
    "name": "Rice & Rice Products",
    "categoryIdentifier": "/rice",
    "isRootCategory": false,
    "parentId": "5f9c100e67b2b700c3682395",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c10f467b2b700c368239f",
    "name": "Snacks & Sweets",
    "categoryIdentifier": "/snacksSweets",
    "isRootCategory": false,
    "parentId": "5f9c100e67b2b700c3682395",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c110167b2b700c36823a0",
    "name": "Staples & Spices",
    "categoryIdentifier": "/staplesSpices",
    "isRootCategory": false,
    "parentId": "5f9c100e67b2b700c3682395",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c110b67b2b700c36823a1",
    "name": "Flours & Pulses",
    "categoryIdentifier": "/floursPulses",
    "isRootCategory": false,
    "parentId": "5f9c100e67b2b700c3682395",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c111a67b2b700c36823a2",
    "name": "Spreads & Sauces",
    "categoryIdentifier": "/spreads",
    "isRootCategory": false,
    "parentId": "5f9c100e67b2b700c3682395",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c112567b2b700c36823a3",
    "name": "Breakfast cereals",
    "categoryIdentifier": "/breakfastCereals",
    "isRootCategory": false,
    "parentId": "5f9c100e67b2b700c3682395",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c112c67b2b700c36823a4",
    "name": "Baby Food",
    "categoryIdentifier": "/babyFood",
    "isRootCategory": false,
    "parentId": "5f9c100e67b2b700c3682395",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c113267b2b700c36823a5",
    "name": "Pet Food",
    "categoryIdentifier": "/petFood",
    "isRootCategory": false,
    "parentId": "5f9c100e67b2b700c3682395",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c113d67b2b700c36823a6",
    "name": "Meat & Fish",
    "categoryIdentifier": "/meat",
    "isRootCategory": false,
    "parentId": "5f9c100e67b2b700c3682395",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c116567b2b700c36823a7",
    "name": "Full Cream Milk",
    "categoryIdentifier": "/fullCreamMilk",
    "isRootCategory": false,
    "parentId": "5f9c105467b2b700c3682396",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c117067b2b700c36823a8",
    "name": "Toned Milk",
    "categoryIdentifier": "/tonedMilk",
    "isRootCategory": false,
    "parentId": "5f9c105467b2b700c3682396",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c117867b2b700c36823a9",
    "name": "Cow Milk",
    "categoryIdentifier": "/cowMilk",
    "isRootCategory": false,
    "parentId": "5f9c105467b2b700c3682396",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c117f67b2b700c36823aa",
    "name": "Tetra Milk",
    "categoryIdentifier": "/tetraMilk",
    "isRootCategory": false,
    "parentId": "5f9c105467b2b700c3682396",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c118c67b2b700c36823ab",
    "name": "Flavored Milk",
    "categoryIdentifier": "/flavouredMilk",
    "isRootCategory": false,
    "parentId": "5f9c105467b2b700c3682396",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c119167b2b700c36823ac",
    "name": "Vegan Milk",
    "categoryIdentifier": "/veganMilk",
    "isRootCategory": false,
    "parentId": "5f9c105467b2b700c3682396",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c11c267b2b700c36823ad",
    "name": "Leafy Vegetables",
    "categoryIdentifier": "/leafyVeg",
    "isRootCategory": false,
    "parentId": "5f9c106267b2b700c3682397",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c160867b2b700c36823ae",
    "name": "Exotic Vegetables",
    "categoryIdentifier": "/exoticVeg",
    "isRootCategory": false,
    "parentId": "5f9c106267b2b700c3682397",
    "image": "https://gratisography.com/wp-content/uploads/2018/05/gratisography-293H-1170x780.jpg",
    "children": null
  },
  {
    "id": "5f9c16a567b2b700c36823af",
    "name": "Vegetables",
    "categoryIdentifier": "/vegetables",
    "isRootCategory": false,
    "parentId": "5f9c106267b2b700c3682397",
    "image": "https://image.shutterstock.com/image-photo/deformed-aberrant-abnormal-anomalous-red-600w-690714022.jpg",
    "children": null
  },
  {
    "id": "5f9c185a67b2b700c36823b0",
    "name": "Curd",
    "categoryIdentifier": "/curd",
    "isRootCategory": false,
    "parentId": "5f9c108267b2b700c3682398",
    "image": "https://4.imimg.com/data4/BJ/ES/ANDROID-52064905/product-500x500.jpeg",
    "children": null
  },
  {
    "id": "5f9c188067b2b700c36823b1",
    "name": "Paneer",
    "categoryIdentifier": "/paneer",
    "isRootCategory": false,
    "parentId": "5f9c108267b2b700c3682398",
    "image": "https://myfoodstory.com/wp-content/uploads/2016/10/How-to-make-Paneer-3.jpg",
    "children": null
  },
  {
    "id": "5f9c190767b2b700c36823b2",
    "name": "Butter",
    "categoryIdentifier": "/butter",
    "isRootCategory": false,
    "parentId": "5f9c108267b2b700c3682398",
    "image": "https://dairyfarmersofcanada.ca/sites/default/files/product_butter_thumb.jpg",
    "children": null
  },
  {
    "id": "5f9c192c67b2b700c36823b3",
    "name": "Ghee",
    "categoryIdentifier": "/ghee",
    "isRootCategory": false,
    "parentId": "5f9c108267b2b700c3682398",
    "image": "https://5.imimg.com/data5/NY/EH/XE/SELLER-24207714/cow-ghee-desi-500x500.jpg",
    "children": null
  },
  {
    "id": "5f9c19a867b2b700c36823b4",
    "name": "Bread",
    "categoryIdentifier": "/bread",
    "isRootCategory": false,
    "parentId": "5f9c108c67b2b700c3682399",
    "image": "https://www.ndtv.com/cooks/images/bread%20%281%29.jpg",
    "children": null
  },
  {
    "id": "5f9c19fa67b2b700c36823b5",
    "name": "Eggs",
    "categoryIdentifier": "/eggs",
    "isRootCategory": false,
    "parentId": "5f9c108c67b2b700c3682399",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwVKdfnz3gm8hqCZyjyn1wtKSftU-8Fo47Pw&usqp=CAU",
    "children": null
  },
  {
    "id": "5f9c1a2867b2b700c36823b6",
    "name": "Coconut Water",
    "categoryIdentifier": "/cocoWater",
    "isRootCategory": false,
    "parentId": "5f9c108c67b2b700c3682399",
    "image": "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy82NjQwMjc0L29yaWdpbi5qcGciLCJleHBpcmVzX2F0IjoxNjMzNDg2MzY5fQ._nd0XRl4R2FvqfgXA4ESxNyITQjaW-8GG-HJpX2bCMg/img.jpg?width=980",
    "children": null
  },
  {
    "id": "5f9c1a7167b2b700c36823b7",
    "name": "Cookies",
    "categoryIdentifier": "/cookies",
    "isRootCategory": false,
    "parentId": "5f9c10c567b2b700c368239b",
    "image": "https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg",
    "children": null
  },
  {
    "id": "5f9c1a9467b2b700c36823b8",
    "name": "Rusk",
    "categoryIdentifier": "/rusk",
    "isRootCategory": false,
    "parentId": "5f9c10c567b2b700c368239b",
    "image": "https://5.imimg.com/data5/CV/JE/MY-59699080/400gm-elaichi-rusk-500x500.jpg",
    "children": null
  },
  {
    "id": "5f9c1ab367b2b700c36823b9",
    "name": "Biscuits",
    "categoryIdentifier": "/biscuits",
    "isRootCategory": false,
    "parentId": "5f9c10c567b2b700c368239b",
    "image": "https://cdn.statically.io/img/www.flavourstreat.com/f=auto/wp-content/uploads/2020/04/bakery-style-biscuits.jpg",
    "children": null
  },
  {
    "id": "5f9c1b0067b2b700c36823ba",
    "name": "Pasta",
    "categoryIdentifier": "/pasta",
    "isRootCategory": false,
    "parentId": "5f9c10d567b2b700c368239c",
    "image": "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x375.jpg",
    "children": null
  },
  {
    "id": "5f9c1b2167b2b700c36823bb",
    "name": "Noodles",
    "categoryIdentifier": "/noodles",
    "isRootCategory": false,
    "parentId": "5f9c10d567b2b700c368239c",
    "image": "https://i.ytimg.com/vi/EcW1rRyofmE/hqdefault.jpg",
    "children": null
  },
  {
    "id": "5f9c1b4867b2b700c36823bc",
    "name": "Soups",
    "categoryIdentifier": "/soups",
    "isRootCategory": false,
    "parentId": "5f9c10d567b2b700c368239c",
    "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/06/vegetable-soup.jpg",
    "children": null
  },
  {
    "id": "5f9c1b9167b2b700c36823bd",
    "name": "Tea",
    "categoryIdentifier": "/tea",
    "isRootCategory": false,
    "parentId": "5f9c10de67b2b700c368239d",
    "image": "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2010/04/mint-chai-mint-tea-recipe-1-500x375.jpg",
    "children": null
  },
  {
    "id": "5f9c1c3967b2b700c36823be",
    "name": "Coffee",
    "categoryIdentifier": "/coffee",
    "isRootCategory": false,
    "parentId": "5f9c10de67b2b700c368239d",
    "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?webp=true&quality=90&resize=500%2C454",
    "children": null
  },
  {
    "id": "5f9c1c7067b2b700c36823bf",
    "name": "Electronics",
    "categoryIdentifier": "/electronics",
    "isRootCategory": true,
    "parentId": null,
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c1c9e67b2b700c36823c0",
    "name": "Mobiles",
    "categoryIdentifier": "/mobile",
    "isRootCategory": false,
    "parentId": "5f9c1c7067b2b700c36823bf",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c1cb767b2b700c36823c1",
    "name": "Laptops",
    "categoryIdentifier": "/laptop",
    "isRootCategory": false,
    "parentId": "5f9c1c7067b2b700c36823bf",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c1cbb67b2b700c36823c2",
    "name": "TV",
    "categoryIdentifier": "/tv",
    "isRootCategory": false,
    "parentId": "5f9c1c7067b2b700c36823bf",
    "image": "https://via.placeholder.com/150",
    "children": null
  },
  {
    "id": "5f9c1d6967b2b700c36823c3",
    "name": "Smart TV",
    "categoryIdentifier": "/smartTV",
    "isRootCategory": false,
    "parentId": "5f9c1cbb67b2b700c36823c2",
    "image": "https://images-na.ssl-images-amazon.com/images/I/71D89swgrvL._SX679_.jpg",
    "children": null
  },
  {
    "id": "5f9c1da667b2b700c36823c4",
    "name": "Normal TV",
    "categoryIdentifier": "/normalTV",
    "isRootCategory": false,
    "parentId": "5f9c1cbb67b2b700c36823c2",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJLF8BCjQQDFN8M5y4xN4nUqF7suicpFSnYw&usqp=CAU",
    "children": null
  },
  {
    "id": "5f9c1e3c67b2b700c36823c5",
    "name": "Normal Phones",
    "categoryIdentifier": "/normalPhone",
    "isRootCategory": false,
    "parentId": "5f9c1c9e67b2b700c36823c0",
    "image": "https://images.buyingiq.com/p/1/6/76/332976/11151314-nokia-105-black-picture-big.jpg",
    "children": null
  },
  {
    "id": "5f9c1e5967b2b700c36823c6",
    "name": "Smart Phones",
    "categoryIdentifier": "/samrtPhone",
    "isRootCategory": false,
    "parentId": "5f9c1c9e67b2b700c36823c0",
    "image": "https://m.media-amazon.com/images/I/712Ex7xDndL._AC._SR360,460.jpg",
    "children": null
  }
];
export default data;
