// Configuration file for TechES portfolio website
// Easily edit the people list and other settings here

const leadership = [
    {
        name: "Abdullah",
        role: "President",
        bio: "Computer Science student with a passion for AI and machine learning. Leading TechES to new heights.",
        image: "images/abdullah.jpg",
        cv: "cv/abdullah-cv.pdf"
    },
    {
        name: "Salem",
        role: "Vice President",
        bio: "Software Engineering student specializing in web development and cloud technologies.",
        image: "images/salem.jpg",
        cv: "cv/salem-cv.pdf"
    },
    {
        name: "Omar",
        role: "Founding Member",
        bio: "Pioneer in establishing TechES and driving its initial growth and development.",
        image: "images/omar.jpg",
        cv: "cv/omar-cv.pdf"
    },
    {
        name: "Ahmed",
        role: "Founding Member",
        bio: "Key contributor to TechES's foundation and early success.",
        image: "images/ahmed.jpg",
        cv: "cv/ahmed-cv.pdf"
    }
];

const consultingBoard = [
    {
        name: "Dr. Omer Adam",
        role: "CSE Department",
        bio: "Expert in computer science and engineering, providing valuable guidance to TechES.",
        image: "images/dr-omer.jpg"
    },
    {
        name: "Dr. Murad Khan",
        role: "CSE Department",
        bio: "Specialist in advanced computing technologies and research methodologies.",
        image: "images/dr-murad.jpg"
    },
    {
        name: "Prof. Haidar Ramadhan",
        role: "CSE Department",
        bio: "Distinguished professor with extensive experience in computer science education.",
        image: "images/prof-haidar.jpg"
    },
    {
        name: "Dr. Abdullatif BABA",
        role: "CSE Department",
        bio: "Expert in artificial intelligence and machine learning applications.",
        image: "images/dr-abdullatif.jpg"
    },
    {
        name: "Eng. Maha Alsayed",
        role: "CSE Department",
        bio: "Professional engineer with expertise in software development and project management.",
        image: "images/eng-maha.jpg"
    }
];

// Member CV data - will be expanded as members provide their details
export const memberCVs = {
    // All removed as per request
    "Priya Patel": {
        experience: [
            {
                title: "Full Stack Developer Intern",
                company: "Amazon Web Services",
                date: "May 2022 - Aug 2022",
                description: "Developed cloud-based microservices and contributed to AWS Lambda feature improvements."
            },
            {
                title: "Software Engineering Intern",
                company: "Microsoft",
                date: "May 2021 - Aug 2021",
                description: "Worked on Azure DevOps tools, implementing CI/CD pipeline improvements and creating developer documentation."
            }
        ],
        education: [
            {
                degree: "B.S. in Software Engineering",
                institution: "University of Washington",
                date: "2019 - 2023 (Expected)",
                description: "Focus on cloud computing and distributed systems. GPA: 3.9/4.0."
            }
        ],
        skills: ["JavaScript", "React", "Node.js", "AWS", "Docker", "Kubernetes", "MongoDB", "SQL", "Python", "TypeScript", "GraphQL", "CI/CD"],
        projects: [
            {
                title: "Scalable E-commerce Platform",
                date: "2022",
                description: "Built a microservices-based e-commerce platform capable of handling 10,000+ concurrent users using AWS, Node.js, and React."
            },
            {
                title: "Real-time Collaboration Tool",
                date: "2021",
                description: "Developed a web-based collaboration platform with real-time document editing using WebSockets and React."
            }
        ]
    }
    // ... keep the rest of the memberCVs who are not in the removal list ...
};

// Website configuration options
export const config = {
    societyName: "Technology and Engineering Society",
    shortName: "TechES",
    foundedYear: 2018,
    contactEmail: "contact@teches.org",
    contactPhone: "+1 (555) 123-4567",
    address: "123 Tech Campus, University Avenue",
    socialMedia: {
        twitter: "https://twitter.com/teches",
        facebook: "https://facebook.com/teches",
        linkedin: "https://linkedin.com/company/teches",
        github: "https://github.com/teches"
    }
};