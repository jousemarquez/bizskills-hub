let array = [
    {
        name: "Full MacroHard Onfire Suit",
        category: "Business",
        oldPrice: "£124",
        newPrice: "£99.99",
        img: "img/macro.png"
    },
    {
        name: "Advanced SQL",
        category: "Database",
        oldPrice: "£200",
        newPrice: "£120",
        img: "img/sql.jpeg"
    },
    {
        name: "Introduction to software development for business",
        category: "Business",
        oldPrice: "£140",
        newPrice: "£105",
        img: "img/softbusiness.jpeg"
    },
    {
        name: "Basic cybersecurity for companies",
        category: "Cybersecurity",
        oldPrice: "£180",
        newPrice: "£135.25",
        img: "img/cyber.jpeg"
    },
    {
        name: "New Digital Marketing 3.0",
        category: "Marketing",
        oldPrice: "£250",
        newPrice: "£189.99",
        img: "img/webmark.jpg"
    },
    {
        name: "Mid Range Corporate Finance",
        category: "Business",
        oldPrice: "£110",
        newPrice: "£85.75",
        img: "img/finance.webp"
    },
    {
        name: "SalesForce and MySQL",
        category: "Database",
        oldPrice: "£160",
        newPrice: "£90.50",
        img: "img/databasemgm.jpg"
    }
]


let i = 0;
for (let card of array) {
    ++i;
    card.id = i;
    addCard(card, createCard, "product");
}
