let array = [
    {
        name: "José Márquez",
        job: "CEO",
        description: "José Márquez, the visionary leader at Bizskills Hub, has spearheaded the company for 15 years, orchestrating its expansion with over 20 stores across the UK. His strategic acumen has played a pivotal role in steering the company's growth and establishing a dominant presence in the competitive retail market.",
        img: "../img/jouse.jpeg"
    },
    {
        name: "Sara Rodríguez",
        job: "SEO Specialist",
        description: "Sara Rodríguez is a diligent SEO Specialist at Bizskills Hub, dedicated to optimizing websites and elevating their search engine rankings. Her expertise drives increased organic traffic and enhances the online visibility of businesses.",
        img: "../img/jessica.jpg"
    },
    {
        name: "Álex Marín",
        job: "Cloud Computing Consultant",
        description: "Álex Marín, a proficient Cloud Computing Consultant at Bizskills Hub, offers expert advice and implements cutting-edge cloud computing solutions to optimize business operations and enhance overall efficiency.",
        img: "../img/carlos.jpg"
    },
    {
        name: "Carlos Fernández",
        job: "DataSys Administrator",
        description: "Carlos Fernández excels as a skilled DataSys Administrator at Bizskills Hub, overseeing the meticulous management and maintenance of organizational databases. He ensures data integrity and security for the entire infrastructure.",
        img: "../img/emilio.jpg"
    },
    {
        name: "Rigoberto Carnero",
        job: "Digital Marketing Specialist",
        description: "Rigoberto Carnero, the Digital Marketing Specialist at Bizskills Hub, is a maestro in developing and implementing effective digital marketing strategies. His expertise drives business growth and engagement in the online sphere.",
        img: "../img/rigoberto.jpg"
    },
    {
        name: "Sara Chen",
        job: "Cybersecurity Analyst",
        description: "Sara Chen, the dedicated Cybersecurity Analyst at Bizskills Hub, specializes in identifying and mitigating security risks in software applications and computer networks. Her efforts ensure robust cybersecurity measures for the organization.",
        img: "../img/sara.jpg"
    },
    {
        name: "Miguel Puig",
        job: "Software Developer",
        description: "Miguel Puig, the highly skilled Software Developer at Bizskills Hub, brings extensive experience to the table. His expertise lies in designing and developing innovative software solutions tailored to meet the dynamic needs of business environments.",
        img: "../img/miguel.jpg"
    },
    {
        name: "Jessica Rodríguez",
        job: "Corporate Finance Analyst",
        description: "Jessica Rodríguez, as the astute Corporate Finance Analyst at Bizskills Hub, analyzes financial data with precision. Her insights and recommendations are crucial for making informed business decisions.",
        img: "../img/jessica.jpg"
    }
];


let i = 0;
for (let card of array) {
    ++i;
    card.id = i;
    addCard(card, createUserCard, "user");
}
