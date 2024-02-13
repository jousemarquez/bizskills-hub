let array = [
    {
        name: "Consulting Services for Small Businesses Service",
        category: "Consulting",
        oldPrice: "£1100",
        newPrice: "£850.75",
        img: "../img/smallbusiness.jpeg"
    },
    {
        name: "Financial Advisory Services",
        category: "Financial",
        oldPrice: "£1240",
        newPrice: "£999.99",
        img: "../img/office.jpg"
    },
    {
        name: "Human Resources Management Services",
        category: "HR",
        oldPrice: "£2000",
        newPrice: "£1200",
        img: "../img/hr.jpeg"
    },
    {
        name: "Digital Transformation Services",
        category: "Digital",
        oldPrice: "£1600",
        newPrice: "£900.50",
        img: "../img/digital.jpg"
    },
    {
        name: "Customer Service Excellence",
        category: "Customers",
        oldPrice: "£1800",
        newPrice: "£1350.25",
        img: "../img/customer.webp"
    },
    {
        name: "Legal and Compliance Services",
        category: "Legal",
        oldPrice: "£3250",
        newPrice: "£2189.99",
        img: "../img/legal.webp"
    },
    {
        name: "Executive Coaching and Mentoring Services",
        category: "Coaching",
        oldPrice: "£3140",
        newPrice: "£2805",
        img: "../img/coaching.jpeg"
    }
]


let i = 0;
for (let card of array) {
    ++i;
    card.id = i;
    addCard(card, createCard, "service");
}
