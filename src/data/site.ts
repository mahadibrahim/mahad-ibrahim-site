// Site content data - migrated from Hugo config

export const siteConfig = {
  title: "MIB",
  description: "Learn about Mahad",
  url: "https://mahadbullo.com",
  email: "iammahadbullo@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/mahadbullo/",
    substack: "https://substack.com/@mahadbullo",
    vimeo: "https://vimeo.com/gobee"
  }
};

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "More", href: "/more" },
  { name: "Contact", href: "#contact" },
  { name: "Writing", href: "https://substack.com/@mahadbullo", external: true },
  { name: "Videos", href: "https://vimeo.com/gobee", external: true }
];

export const hero = {
  intro: "Hi, my name is",
  title: "Mahad.",
  subtitle: "User Research Leader and Product Thinker",
  content: "I lead user research at Included Health, connecting member insights to business outcomes. I've built and led global teams across 25+ countries—from corporate strategy rooms to field research during the West African Ebola crisis. I'm equally comfortable setting organizational vision, managing teams, or doing hands-on research.",
  image: "/images/hero.jpg",
  resumeUrl: "/Mahad_Ibrahim_CV.pdf"
};

export const about = {
  title: "About Me",
  image: "/images/me.JPG",
  content: `I operate across the full spectrum—setting organizational strategy, building and mentoring teams, and doing hands-on research at the Senior Staff level. My work has taken me from corporate boardrooms to rural health clinics across four continents, including emergency response in Liberia, Sierra Leone, and Guinea during the Ebola crisis.

At Included Health, I've led discovery for our first new product in three years (achieving 5/5 member satisfaction), transformed research operations to deliver 4x volume at 54% lower cost, and defined multi-year strategies for flagship products addressing $40M+ opportunities. My work spans strategic product innovation, operational excellence, and cross-functional leadership across clinical, product, and design teams.

Before Included Health, I served as Managing Partner at Gobee Group, a boutique global design consultancy. Over 13 years, I managed strategy and vision for 60+ projects across 25+ countries, working with organizations including Microsoft, UNICEF, the World Bank, and the Clinton Health Access Initiative on medical devices, health data products, and technology solutions.

PhD from UC Berkeley with Fulbright research in Egypt.`,
  skills: [
    "User Research & Strategy",
    "Product Discovery",
    "Research Operations",
    "Cross-Functional Leadership",
    "Healthcare Innovation",
    "Human-Centered Design",
    "Global Health Technology",
    "Stakeholder Management"
  ]
};

export const experience = {
  title: "Experience",
  items: [
    {
      company: "Included Health",
      url: "https://www.includedhealth.com",
      roles: [
        {
          title: "Senior Staff UX Researcher",
          date: "August 2025 - Present",
          description: "Promoted to Senior Staff role. Lead user research across organization. Member of product leadership group.",
          highlights: [
            "Led discovery for company's first new product in three years (Cancer Support Program), achieving perfect 5/5 member satisfaction",
            "Transformed research operations: 4x volume increase, 54% cost reduction, top 10 globally by study volume",
            "Defined multi-year strategies for flagship products addressing $40M+ opportunities",
            "Built research infrastructure enabling evidence-based decision making at scale across organization"
          ],
          tools: ["Maze", "Marvin", "RallyUXR", "Sprig"]
        },
        {
          title: "Staff UX Researcher",
          date: "October 2022 - August 2025",
          description: "Focused on internal Care and Clinical teams. Member of product leadership group.",
          highlights: [
            "Led foundational research that created new internal tool stack (Care App)",
            "Spearheaded 0-1 revamp of multiple service lines including Claims and Concierge Referral services",
            "Launched product satisfaction tracking surveys across Care and Clinical teams"
          ]
        }
      ]
    },
    {
      company: "Gobee Group",
      url: "https://gobeegroup.com",
      roles: [
        {
          title: "Managing Partner",
          date: "2009 - 2022",
          description: "Managed boutique global design consultancy focused on human-centered innovation in healthcare and social impact.",
          highlights: [
            "Set corporate strategy and vision for 13 years",
            "Led 60+ projects across 25+ countries",
            "Worked with Microsoft, UNICEF, World Bank, Clinton Health Access Initiative",
            "Developed medical devices, health data products, and technology solutions",
            "Managed multidisciplinary teams across global engagements"
          ]
        }
      ]
    },
    {
      company: "Cell-ED",
      url: "https://cell-ed.com",
      roles: [
        {
          title: "Chief Technology Officer",
          date: "2013 - 2015",
          description: "Built foundational business and technology strategy for mobile-first adult education platform serving low-literacy, low-resourced learners.",
          highlights: [
            "Architected location-agnostic micro-learning model delivering 3-minute lessons via any mobile device, even without internet",
            "Developed scalable platform strategy enabling education delivery through basic phones, smartphones, tablets, and computers",
            "Created technology framework that proved to accelerate learning by 84% (later validated through randomized controlled trials)",
            "Platform has since won Library of Congress Literacy Award (2016) and Harvard Kennedy School Top 25 Innovations Award (2017)"
          ]
        }
      ]
    }
  ]
};

export const education = {
  title: "Education",
  items: [
    {
      degree: "Ph.D.",
      school: "University of California, Berkeley",
      url: "https://www.berkeley.edu/",
      date: "2002 - 2009",
      description: "Dissertation: \"Peeling the Onion: The Case of the Information Technology Club Project in Egypt\"",
      note: "Fulbright Scholar, Egypt. Conducted fieldwork examining technology adoption and social change."
    },
    {
      degree: "Master of Information Management and Systems (MIMS)",
      school: "University of California, Berkeley",
      url: "https://www.berkeley.edu/",
      date: "2000 - 2002",
      description: "Masters project: Street Stories - a location-based mobile application to gather and present place-based oral histories"
    },
    {
      degree: "B.S. Applied Economics and Business Management",
      school: "Cornell University",
      url: "https://www.cornell.edu/",
      date: "1993 - 1998"
    }
  ]
};

export const projects = {
  title: "Featured Projects",
  items: [
    {
      title: "Cancer Support Program",
      description: "Led end-to-end discovery for Included Health's first new product in three years—a comprehensive Cancer Support Program for members facing cancer diagnoses. Achieved perfect 5/5 member satisfaction across all metrics through extensive member research including 20+ interviews and unmoderated testing sessions. Introduced new platform capabilities including in-app caregiver support and direct provider messaging that now serve as foundation for future product development. Gained CEO-level recognition for innovation and member-centric approach.",
      image: "/images/projects/cancer-center.jpeg",
      link: {
        text: "Press Release",
        url: "https://includedhealth.com/announcements/included-health-introduces-the-specialty-care-clinic/"
      },
      tags: ["Product Discovery", "0-1 Innovation", "Member Research"]
    },
    {
      title: "Care & Case Management for the AI Era",
      description: "Spearheaded comprehensive discovery and strategic vision for major overhaul of Care and Case Management product—a flagship offering addressing $40M+ market opportunity serving high-complexity members who account for 40% of healthcare costs. Delivered transformative 2-year product strategy through rigorous research including 10 member interviews, 20 stakeholder interviews, 60 survey respondents, and 20 unmoderated testing participants. Created vision for AI-driven care delivery with projected 40-50% efficiency gains for clinical teams and ROI improvements from 1.6:1 to 3:1. Strategy received strong executive endorsement with CEO pushing team to \"think even further out.\"",
      image: "/images/projects/ccm.jpeg",
      link: {
        text: "Announcement",
        url: "https://includedhealth.com/announcements/included-health-earns-urac-accreditation-for-case-management/"
      },
      tags: ["Strategic Vision", "AI Innovation", "Product Strategy"]
    },
    {
      title: "Research Operations Transformation",
      description: "Led comprehensive overhaul of Included Health's entire User Research technology stack to dramatically scale research capabilities and reduce operational friction. Delivered 4x increase in member research volume (200+ moderated interviews, 400+ unmoderated tests) while reducing costs and timelines. Achieved 68 studies completed annually, placing Included Health in top 10 companies globally according to Maze. Reduced insight development time from 4 hours to 30-60 minutes (4x efficiency gain) and cut cost per moderated study from $1,300 to $600 (54% reduction). Transformed organizational research capability with new research repository, User Research CRM, and expanded toolset for only $20,000 net additional cost.",
      image: "/images/projects/research-ops-framework.jpeg",
      tags: ["Operations", "Research Infrastructure", "Scaled Impact"]
    },
    {
      title: "Real-Time Ebola Data System",
      description: "Conducted on-the-ground research in Guinea, Liberia, and Sierra Leone during the Ebola crisis to develop rapid approaches to better manage critical epidemic data flows. Led a team of 20 researchers, data scientists, and technologists under emergency conditions. Created a 300-page design guide and framework that allowed paper forms to support real-time data technology. Designed a hybrid paper-and-digital system that integrated with existing workflows while providing real-time data during the epidemic. Work was featured in VICE.",
      image: "/images/projects/ebola-data.jpg",
      link: {
        text: "VICE Feature",
        url: "https://www.vice.com/en/article/kbzv8v/ebolas-paper-trail"
      },
      tags: ["Global Health", "Crisis Response", "Field Research"]
    }
  ]
};

export const contact = {
  title: "Get in Touch",
  content: "My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  email: "iammahadbullo@gmail.com"
};
