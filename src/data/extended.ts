// Extended content data - from LinkedIn export

export const publications = {
  title: "Publications",
  featured: [
    {
      title: "Ebola's Paper Trail",
      publication: "VICE",
      date: "July 2015",
      description: "There is a data collection problem in West Africa. Paper can fix it.",
      url: "https://www.vice.com/en/article/kbzv8v/ebolas-paper-trail"
    },
    {
      title: "Altered social trajectories and risks of violence among young Syrian women seeking refuge in Turkey",
      publication: "BMC Women's Health",
      date: "January 2019",
      description: "Qualitative study exploring risks of gender-based violence against Syrian adolescent girls and young women in Turkey and how these risks were shaped by displacement.",
      url: "https://bmcwomenshealth.biomedcentral.com/articles/10.1186/s12905-019-0710-9"
    },
    {
      title: "Peering into the Black Box: A Holistic Framework for Innovating at the Intersection of ICT & Health",
      publication: "IGI Global",
      date: "September 2007",
      description: "Book chapter on health-related ICT use cases in developing regions, covering surveillance, research, provider-to-provider communication, education, and logistics.",
      url: "https://www.igi-global.com/chapter/peering-into-black-box/22626"
    }
  ],
  all: [
    {
      title: "Ebola's Paper Trail",
      publication: "VICE",
      date: "July 2015",
      description: "There is a data collection problem in West Africa. Paper can fix it.",
      url: "https://www.vice.com/en/article/kbzv8v/ebolas-paper-trail"
    },
    {
      title: "Altered social trajectories and risks of violence among young Syrian women seeking refuge in Turkey",
      publication: "BMC Women's Health",
      date: "January 2019",
      description: "Qualitative study exploring risks of gender-based violence against Syrian adolescent girls and young women in Turkey and how these risks were shaped by displacement.",
      url: "https://bmcwomenshealth.biomedcentral.com/articles/10.1186/s12905-019-0710-9"
    },
    {
      title: "Feasibility and acceptability of mobile phone platforms to deliver interventions to address gender-based violence among Syrian adolescent girls and young women in Izmir, Turkey",
      publication: "Vulnerable Children and Youth Studies",
      date: "November 2019",
      description: "Qualitative study exploring the feasibility of mobile phone platforms to deliver GBV prevention interventions to displaced Syrian youth.",
      url: "https://www.tandfonline.com/doi/abs/10.1080/17450128.2019.1687965"
    },
    {
      title: "Defining effective voucher management information systems",
      publication: "Population Council / Reproductive Health",
      date: "August 2012",
      description: "Blueprint for information systems to support scalable reproductive health voucher programs, based on system evaluations in Bangladesh, Cambodia, Kenya, Uganda, and Tanzania.",
      url: "https://knowledgecommons.popcouncil.org/departments_sbsr-rh/483/"
    },
    {
      title: "Peering into the Black Box: A Holistic Framework for Innovating at the Intersection of ICT & Health",
      publication: "IGI Global",
      date: "September 2007",
      description: "Book chapter examining health-related ICT use cases in developing regions, with recommendations for practitioners, researchers, funders, and policy makers.",
      url: "https://www.igi-global.com/chapter/peering-into-black-box/22626"
    },
    {
      title: "Making Sight Affordable (Part 1): Aurolab Pioneers Production of Low-Cost Technology for Cataract Surgery",
      publication: "Innovations: Technology, Governance, Globalization",
      date: "July 2006",
      description: "Case study on Aurolab's pioneering production of affordable cataract surgery technology.",
      url: "https://bit.ly/3siyPnX"
    },
    {
      title: "Ubiquitous Computing and Privacy in the Workplace: A Case Study of Nurse Locator Badges at Eden Medical Center",
      publication: "Samuelson Technology, Law, and Public Policy Clinic, Boalt School of Law",
      date: "",
      description: "Case study examining privacy implications of ubiquitous computing technologies in healthcare workplace settings.",
      url: ""
    }
  ]
};

interface Role {
  title: string;
  date: string;
  location?: string;
  description: string;
  highlights: string[];
}

interface CareerItem {
  company: string;
  url?: string;
  roles: Role[];
}

export const earlierCareer: { title: string; subtitle: string; items: CareerItem[] } = {
  title: "Earlier Career",
  subtitle: "Consulting & Advisory Work",
  items: [
    {
      company: "The Bureau Adventure Games",
      url: "https://www.thebureauorlando.com/",
      roles: [
        {
          title: "Strategic Advisor",
          date: "June 2019 - Present",
          description: "Advisor and investor to Make Real Inc, spearheading business development strategies and partnership efforts.",
          highlights: [
            "Coached executive team to navigate funding landscape from concept to profitable product",
            "Developed expansion strategies and streamlined operations, reducing 10-15% of cost basis"
          ]
        }
      ]
    },
    {
      company: "The World Bank",
      roles: [
        {
          title: "Strategy Consultant",
          date: "May 2009 - December 2009",
          location: "Washington DC",
          description: "Drafted \"Health Systems, Information Flows, and Technology Choices: The Promise of eHealth in Africa\" for the Health, Nutrition, and Population Group.",
          highlights: [
            "Created eHealth primer serving as foundation for World Bank's eHealth and mHealth strategies in Africa"
          ]
        }
      ]
    },
    {
      company: "Microsoft",
      roles: [
        {
          title: "Business Consultant",
          date: "July 2006 - March 2009",
          location: "Corporate, EMEA, and South Africa",
          description: "Led design and creation of Microsoft's NGO ICT4D Academy, an initiative to empower Microsoft's consumer base in regions where public sector and civil society represent significant market portions.",
          highlights: [
            "Managed global teams and vendors to establish Academy from concept to reality",
            "Conducted primary and secondary market research supporting business expansion across Asia-Pacific, Europe, Middle East, and Africa"
          ]
        }
      ]
    },
    {
      company: "The Blum Center for Developing Economies",
      url: "https://blumcenter.berkeley.edu/",
      roles: [
        {
          title: "Independent Consultant",
          date: "August 2007 - December 2007",
          location: "Kampala, Uganda",
          description: "Implemented pilot of shared medical transportation program in rural Uganda.",
          highlights: [
            "Worked with national government, local transportation providers, and other entities",
            "Set up training programs, developed branding, and executed marketing strategies",
            "Launched effective pilot delivering emergency medical transportation for urgent care"
          ]
        }
      ]
    },
    {
      company: "Intel Corporation",
      roles: [
        {
          title: "Consultant",
          date: "November 2005 - May 2006",
          description: "Conducted extensive market feasibility study for a digital health product.",
          highlights: [
            "Undertook fieldwork in target markets to support cost-benefit analysis",
            "Developed product strategy to help national health systems enhance healthcare delivery"
          ]
        }
      ]
    },
    {
      company: "HP",
      roles: [
        {
          title: "Consultant",
          date: "February 2004 - June 2004",
          location: "Palo Alto, California",
          description: "Undertook cost-benefit analyses of operating systems and shared computing platforms.",
          highlights: [
            "Conducted market, financial, and technology analyses",
            "Made recommendations incorporated into long-term strategy with measurable financial results"
          ]
        }
      ]
    },
    {
      company: "United States Postal Service",
      roles: [
        {
          title: "Cybersecurity Consultant",
          date: "August 2002 - August 2004",
          location: "Berkeley, California",
          description: "Part of Doug Tygar's Cybersecurity Group at UC Berkeley, focused on revenue protection.",
          highlights: [
            "Designed and administered information, process, and physical security audits",
            "Implemented best practices by reviewing code, process, and compliance",
            "Conducted audits of global and domestic USPS partners"
          ]
        }
      ]
    }
  ]
};

export const moreProjects = {
  title: "Additional Projects",
  subtitle: "Global Health & Social Impact Work",
  items: [
    {
      title: "Real-Time Ebola Data",
      client: "USAID and NetHope",
      date: "2014 - 2015",
      description: "Conducted on-the-ground research in Guinea, Liberia, and Sierra Leone during the Ebola crisis to develop rapid approaches to better manage critical epidemic data flows. Led team of 20 researchers, data scientists, and technologists under emergency conditions.",
      highlights: [
        "Created 300-page design guide and framework for paper forms to support real-time data technology",
        "Designed hybrid paper-and-digital system integrating with existing workflows",
        "Featured in VICE"
      ],
      url: "https://www.vice.com/en/article/kbzv8v/ebolas-paper-trail",
      tags: ["Global Health", "Crisis Response", "Data Systems"]
    },
    {
      title: "The Abundant Birth Project",
      client: "Expecting Justice",
      date: "2020 - 2021",
      description: "Pilot program providing targeted basic income ($1,000/month) to approximately 150 Black and Pacific Islander women in San Francisco during pregnancy and first six months postpartum.",
      highlights: [
        "Led virtual design sprint and multiple rounds of prototyping with users",
        "Developed approaches for eligibility, distribution, tracking, and support",
        "Designed and implemented Salesforce case management system"
      ],
      url: "https://www.expectingjustice.org/abundant-birth-project/",
      tags: ["Social Impact", "Health Equity", "Service Design"]
    },
    {
      title: "Reimagine Lab",
      client: "Blue Shield of California Foundation",
      date: "2017 - 2020",
      description: "Created the first innovation lab for domestic violence prevention. Sixteen fellows over three years yielded three ventures that secured $1.3 million in seed funding.",
      highlights: [
        "Designed human-centered design informed lab model from scratch",
        "Led fellowship focused on learning and applying human-centered design",
        "Incubated three ventures from concept to seed funding"
      ],
      url: "https://reimaginelab.org/",
      tags: ["Innovation Lab", "Social Impact", "Human-Centered Design"]
    },
    {
      title: "Handheld Pneumonia Screening Device",
      client: "Major Medical Device Manufacturer (Masimo)",
      date: "2016 - 2018",
      description: "Led large-scale design research effort across 4-5 priority country markets on three continents for innovative pneumonia screening technology.",
      highlights: [
        "Managed research team of SMEs, design researchers, innovation strategists",
        "Designed mixed-method approach for device UX, go-to-market strategy, and training",
        "Facilitated discovery and design sessions at corporate headquarters"
      ],
      url: "https://www.masimo.com/products/continuous/rad-g/",
      tags: ["Medical Devices", "Global Health", "Design Research"]
    },
    {
      title: "Non-invasive Surfactant Research",
      client: "Bill & Melinda Gates Foundation",
      date: "2020 - 2021",
      description: "Research in Ethiopia and South Africa on treatment options for Respiratory Distress Syndrome (RDS) in newborns, focusing on non-invasive surfactant as a new treatment option for low-resource settings.",
      highlights: [
        "Mapped patient and provider journeys for RDS admittance, referral, and care",
        "Developed potential use cases for RDS treatment bundles",
        "Combined qualitative fieldwork, quantitative modeling, and secondary research"
      ],
      tags: ["Global Health", "Maternal & Child Health", "Medical Research"]
    },
    {
      title: "Nio Far Dakar",
      client: "Bill & Melinda Gates Foundation and USAID",
      date: "2018 - 2019",
      description: "Designed and facilitated multi-day convening of design and health experts from more than 65 organizations focused on Design for Health.",
      highlights: [
        "Developed facilitation approach engaging attendees in mission teams",
        "Led both experience design and logistics of the convening"
      ],
      url: "https://www.designforhealth.org/resources/nio-far-dakar-2019",
      tags: ["Convenings", "Design for Health", "Global Health"]
    },
    {
      title: "OptimizeARV",
      client: "Clinton Health Access Initiative",
      date: "2010 - 2014",
      description: "Web-based platform allowing governments to procure life-saving antiretrovirals (ARVs). Managed product team to develop cutting-edge platform from concept to launch.",
      highlights: [
        "Leveraged private and public data to help governments make better procurement decisions",
        "Streamlined procurement process, reducing critical analyses from months to seconds",
        "Enabled lookups, action analysis, and benchmarking to increase treatment access"
      ],
      tags: ["Healthcare Technology", "Global Health", "Product Development"]
    },
    {
      title: "Digital Sales App for Point-of-Care Testing",
      client: "Fortune 500 Pharmaceutical Company (Roche)",
      date: "2015 - 2018",
      description: "Translated complex health economic models into easy-to-use web and iPad app for sales teams promoting point-of-care infectious disease testing suite.",
      highlights: [
        "Distilled years of economic modeling into seconds-fast calculations",
        "Created data visualization enabling clear sales narratives",
        "Delivered from design research through data structures to final product"
      ],
      url: "https://diagnostics.roche.com/us/en/products/product-category/point-of-care-testing.html",
      tags: ["Healthcare Technology", "Data Visualization", "Sales Enablement"]
    },
    {
      title: "Growing Up Liberian",
      client: "Government of Liberia",
      date: "2011 - 2012",
      description: "Interactive tool exploring the life of youth and adolescents across Liberia using census data. Novel narrative-based interface simplifying large datasets.",
      highlights: [
        "Designed user-friendly platform with story-based navigation technique",
        "Developed technology to host and manage millions of data points",
        "Made census accessible to policymakers, journalists, and data users"
      ],
      tags: ["Data Visualization", "Civic Tech", "Youth Development"]
    },
    {
      title: "Parental Engagement Platform (PREP)",
      client: "Robin Hood Foundation / Blue Engine",
      date: "2013 - 2014",
      description: "Led development of parental engagement platform establishing effective communication between parents, teachers, and students at Blue Engine schools.",
      highlights: [
        "Conducted six months of design research at Blue Engine school in the Bronx",
        "Prepared landscape analysis of existing product space",
        "Delivered design aligned with research-driven design principles"
      ],
      tags: ["Education Technology", "Social Impact", "Service Design"]
    }
  ]
};

export const awards = {
  title: "Awards & Honors",
  items: [
    {
      title: "Fulbright Scholar",
      organization: "U.S. Department of State",
      date: "2005",
      description: "Selected as Fulbright Scholar to conduct research and teaching in Egypt."
    },
    {
      title: "Ford Foundation Dissertation Fellowship - Honorable Mention",
      organization: "Ford Foundation",
      date: "2007",
      description: "Fellowship program seeking to increase diversity of college and university faculties and maximize educational benefits of diversity."
    },
    {
      title: "Mentored Researcher Award",
      organization: "University of California, Office of the President",
      date: "2007",
      description: "Awarded to promising doctoral students whose research contributes to diversifying the academy."
    },
    {
      title: "Foreign Language and Area Studies Summer Fellow",
      organization: "U.S. Department of Education",
      date: "",
      description: "Fellowship supporting advanced language study and area studies research."
    },
    {
      title: "Al-Falah Award for Technology Transfer",
      organization: "Center for Middle Eastern Studies, UC Berkeley",
      date: "",
      description: "Recognition for work in technology transfer related to Middle Eastern studies."
    },
    {
      title: "The Rocca Scholarship in Advanced African Studies",
      organization: "Center for African Studies, UC Berkeley",
      date: "",
      description: "Scholarship supporting advanced research in African studies."
    },
    {
      title: "Management of Technology Fellow",
      organization: "United Nations Industrial Development Organization (UNIDO)",
      date: "",
      description: "Fellowship for management of technology research and practice."
    },
    {
      title: "Summer Research Grant",
      organization: "Berkeley Center for the Information Society",
      date: "",
      description: "Research grant supporting information society studies."
    },
    {
      title: "Fellow",
      organization: "Samuelson Technology, Law, and Public Policy Clinic, Boalt School of Law",
      date: "",
      description: "Fellowship at the intersection of technology, law, and public policy."
    },
    {
      title: "Big Ideas 2005 Winner - International Health and Development",
      organization: "Bears Breaking Boundaries, UC Berkeley",
      date: "2005",
      description: "Competition recognizing innovative ideas for international health and development."
    },
    {
      title: "Big Ideas 2007 Winner - IT for Society",
      organization: "Bears Breaking Boundaries, UC Berkeley",
      date: "2007",
      description: "Competition recognizing innovative applications of information technology for social good."
    },
    {
      title: "Big Ideas 2007 Winner - Neglected Diseases",
      organization: "Bears Breaking Boundaries, UC Berkeley",
      date: "2007",
      description: "Competition recognizing innovative approaches to neglected disease challenges."
    },
    {
      title: "Big Ideas 2007 Winner - Curricular Innovation",
      organization: "Bears Breaking Boundaries, UC Berkeley",
      date: "2007",
      description: "Competition recognizing innovative approaches to curriculum development."
    },
    {
      title: "Library of Congress Literacy Award",
      organization: "Library of Congress",
      date: "2016",
      description: "Awarded to Cell-ED, where I served as CTO and built the foundational business and technology strategy.",
      project: "Cell-ED"
    },
    {
      title: "Harvard Kennedy School Top 25 Innovations Award",
      organization: "Harvard Kennedy School",
      date: "2017",
      description: "Cell-ED recognized among the top 25 innovations in American government.",
      project: "Cell-ED"
    },
    {
      title: "$1.3M Seed Funding for Incubated Ventures",
      organization: "Reimagine Lab / Blue Shield of California Foundation",
      date: "2020",
      description: "Three ventures from the first innovation lab for domestic violence prevention secured seed funding.",
      project: "Reimagine Lab"
    }
  ]
};

export const additionalTestimonials = [
  {
    quote: "To be on a team with Mahad is to be on a winning team -- whether as a boss, colleague, or business partner. Mahad is unparalleled at organizing and inspiring teams, and he methodically and unflinchingly tackles problems of any scale. The depth and breadth of his experience and expertise makes him an indispensable player who can work on any project at any level.",
    name: "Alexis Santos",
    title: "CEO",
    company: "The Bureau Adventure Games"
  },
  {
    quote: "I have known Mahad for over 10 years and had the pleasure of working with him on multiple projects. Mahad's ability to breakdown and communicate complex ideas to bring it to life is unmatched. His demeanor was always composed and confident and he has a keen sense of emotional intelligence. His ability to connect with all team members and clients throughout the organization was impressive.",
    name: "Bette Mengesha",
    title: "Principal, HR Business Partner",
    company: "American Water"
  },
  {
    quote: "I have had the great pleasure of working with Mahad on too many projects to count. What I appreciate about him is that he cares deeply about the work. He wants to do it the right way. He listens to the concerns of stakeholders and synthesizes solutions. He's also amazing at communicating in cross-cultural contexts. I have been in many countries with Mahad and I have always marveled at his ability to build rapport with just about anyone in any context.",
    name: "Benjamin Harrison",
    title: "Host",
    company: "Uxbridge-Shimoda LLC"
  },
  {
    quote: "Mahad genuinely cares about people and the problem at hand. I have seen him firsthand managing a team of diverse individuals across multiple timezones and paying attention to details in every context. In 2010, I brought Mahad in to save a project I was running. His care and attention to detail revived the project. He drastically improved the team dynamics. The client was impressed. Mahad turned the project into an outstanding success.",
    name: "Muhammad Farag",
    title: "Senior Software Developer",
    company: "Hive.co"
  },
  {
    quote: "Mahad is a self-motivated leader and advisor with the capacity to build a project from the ground up. The meetings I have had with him as a colleague or advisor have reliably been some of the most valuable of my career. He's a team builder who will build relationships and assemble the necessary talent and resource to make the business work. My company would not exist without his support, advice, and friendship.",
    name: "Gregry Livingston",
    title: "Co-founder & CTO",
    company: "Homecare Club"
  },
  {
    quote: "During my time at Gobee, Mahad not only was a great manager and consistently brought valuable perspectives to the table, but also a mentor. He not only encouraged me to found my own business, but actively mentored me and my business partner in building out the business. In little under three years, our business has seen consistent and continual growth. Mahad's keen business sense and approach to sales have impacted us beyond our wildest dreams.",
    name: "Michael Waas",
    title: "Co-Founder",
    company: "Hollander-Waas Jewish Heritage Services"
  }
];

export const teaching = {
  title: "Teaching",
  items: [
    {
      course: "ML 599 | Re-imagining Leadership for 21st Century Projects",
      institution: "Augsburg College",
      role: "Instructor",
      date: "Summer 2019",
      description: "Successful project management is strongly correlated to good leadership of teams. Corporate, non-profit, and public sector projects are increasing in complexity requiring the close collaboration and coordination of disparate disciplines, organizations, and teams. This course helps students unpack the critical leadership skills needed to form and lead teams to optimal project outcomes using emotional intelligence, communication, conflict management, and clarity of strategic vision and purpose."
    }
  ]
};

export const languages = [
  { name: "English", proficiency: "Native" },
  { name: "Arabic", proficiency: "Elementary" },
  { name: "Portuguese", proficiency: "Elementary" },
  { name: "Somali", proficiency: "Elementary" }
];
