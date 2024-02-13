let array = [
    {
        name: "José Márquez",
        job: "CEO",
        description: "José Márquez, as Bizskills Hub CEO, has steered the company for 15 years, successfully expanding with over 20 stores across the UK. His leadership has been instrumental in navigating the company's growth and establishing a strong presence in the retail market.",
        img: "../img/people/jouse.jpeg"
    },
    {
        name: "Sara Rodríguez",
        job: "Data Entry Operator",
        description: "As a Data Entry Operator, Sarah brings seven years of experience and a keen eye for detail. With a background in administrative roles, she excels in maintaining the accuracy and integrity of our data. Sarah is proficient in data entry software and the Microsoft Office Suite, ensuring that our data management is both precise and efficient.",
        img: "../img/people/jessica.jpg"
    },
    {
        name: "Álex Marín",
        job: "Support Technician",
        description: "Alex, with nine years of experience in technical roles, leads our Support Technician team. His expertise lies in diagnosing and troubleshooting hardware and software issues. Alex is known for his excellent problem-solving skills and clear communication. His technical degrees and certifications make him an invaluable asset in resolving complex technical challenges.",
        img: "../img/people/carlos.jpg"
    },
    {
        name: "Carlos Fernández",
        job: "Network Administrator",
        description: "Carlos, a seasoned Network Administrator with over ten years of experience, spearheads the design, implementation, and maintenance of our network infrastructure. With a background in cybersecurity, he ensures the security and optimal performance of our network. Carlos holds Cisco and other relevant certifications, bringing a wealth of knowledge to our IT landscape.",
        img: "../img/people/emilio.jpg"
    },
    {
        name: "Rigoberto Carnero",
        job: "Web Designer",
        description: "Rigoberto, our creative Web Designer, boasts seven years of experience in crafting visually appealing and user-friendly websites. With a background in graphic design, he collaborates seamlessly with cross-functional teams on web development projects. Ryan stays updated on industry trends, ensuring our online presence reflects the latest design innovations.",
        img: "../img/people/rigoberto.jpg"
    },
    {
        name: "Sara Chen",
        job: "Programmer",
        description: "Sara, our skilled Programmer with eight years of experience, is at the forefront of software development. With a background in creating innovative solutions, she collaborates with cross-functional teams to define software requirements and resolve defects. Emily's proficiency in Java, C++, and Python contributes to the seamless development of our cutting-edge applications.",
        img: "../img/people/sara.jpg"
    },
    {
        name: "Miguel Puig",
        job: "Software Tester",
        description: "Miguel, our Software Tester, has six years of experience ensuring the quality of our software applications. His background in quality assurance and meticulous testing methodologies guarantees the reliability of our products. Michael's attention to detail and analytical skills play a vital role in identifying and documenting software defects.",
        img: "../img/people/miguel.jpg"
    },
    {
        name: "Jessica Rodríguez",
        job: "Help Desk Technician",
        description: "Sara's Twin, Jessica, our customer service-oriented Help Desk Technician, brings five years of experience to the team. With a background in technical support, she responds promptly to user inquiries, resolves technical problems, and documents and escalates issues as needed. Jessica's friendly demeanor and technical acumen make her an essential part of our support system.",
        img: "../img/people/jessica.jpg"
    }
];


let i = 0;
for (let card of array) {
    ++i;
    card.id = i;
    addCard(card, createUserCard, "user");
}
