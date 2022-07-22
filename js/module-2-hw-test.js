const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
};
console.log(apartment);

apartment.owner = {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.certer@aptmail.com",
}
console.log(apartment);
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;