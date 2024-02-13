let array = [
    {
        name: "Introduction to corporate finance",
        category: "Business",
        oldPrice: "£110",
        newPrice: "£85.75",
        img: "../img/finance.webp"
    },
    {
        name: "Full Office Suit Course",
        category: "Business",
        oldPrice: "£124",
        newPrice: "£99.99",
        img: "../img/office.jpg"
    },
    {
        name: "Advanced MySQL and Postgre",
        category: "Database",
        oldPrice: "£200",
        newPrice: "£120",
        img: "../img/sql.jpeg"
    },
    {
        name: "Introduction to DataBases",
        category: "Database",
        oldPrice: "£160",
        newPrice: "£90.50",
        img: "../img/databasemgm.jpg"
    },
    {
        name: "Advance Cybersecurity",
        category: "Cybersecurity",
        oldPrice: "£180",
        newPrice: "£135.25",
        img: "../img/cyber.jpeg"
    },
    {
        name: "New Digital Marketing 3.0",
        category: "Marketing",
        oldPrice: "£250",
        newPrice: "£189.99",
        img: "../img/webmark.jpg"
    },
    {
        name: "Mid range for Software Development",
        category: "Business",
        oldPrice: "£140",
        newPrice: "£105",
        img: "../img/softbusiness.jpeg"
    }
]


let i = 0;
for (let card of array) {
    ++i;
    card.id = i;
    addCard(card, createCard, "service");
}
