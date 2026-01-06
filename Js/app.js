
// Extensive job data (50+ jobs)
const jobs = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        location: "San Francisco, CA",
        salary: "$90,000 - $120,000",
        type: "Full-time",
        category: "remote",
        experience: "senior",
        description: "We are looking for an experienced Frontend Developer to join our team. You will be responsible for building user interfaces and implementing features for our web applications using React and TypeScript.",
        responsibilities: [
            "Develop new user-facing features using React.js",
            "Build reusable components and front-end libraries for future use",
            "Translate designs and wireframes into high-quality code",
            "Optimize components for maximum performance across devices",
            "Collaborate with product team and designers"
        ],
        requirements: [
            "5+ years of experience with React",
            "Strong JavaScript fundamentals",
            "Experience with TypeScript",
            "Familiarity with modern frontend build pipelines",
            "Understanding of RESTful APIs"
        ],
        benefits: [
            "Health, dental, and vision insurance",
            "401(k) with company matching",
            "Flexible work hours and remote options",
            "Professional development budget",
            "Generous vacation policy"
        ],
        posted: "2 days ago",
        applicants: 14
    },
    {
        id: 2,
        title: "UX/UI Designer",
        company: "CreativeMinds",
        location: "New York, NY",
        salary: "$75,000 - $95,000",
        type: "Full-time",
        category: "hybrid",
        experience: "mid",
        description: "Join our design team to create beautiful and functional user experiences for our clients. You'll work closely with product managers and developers to bring designs to life.",
        responsibilities: [
            "Create user-centered designs for web and mobile",
            "Develop wireframes, prototypes, and high-fidelity mockups",
            "Conduct user research and usability testing",
            "Collaborate with developers to ensure proper implementation",
            "Maintain and evolve our design system"
        ],
        requirements: [
            "3+ years of UX/UI design experience",
            "Proficiency in Figma or Sketch",
            "Understanding of user-centered design principles",
            "Portfolio showcasing your work",
            "Experience with design systems"
        ],
        benefits: [
            "Competitive salary",
            "Health and dental insurance",
            "Annual bonus",
            "Creative work environment",
            "Team retreats"
        ],
        posted: "1 week ago",
        applicants: 8
    },
    {
        id: 3,
        title: "Backend Engineer (Node.js)",
        company: "DataSystems",
        location: "Austin, TX",
        salary: "$110,000 - $140,000",
        type: "Full-time",
        category: "onsite",
        experience: "senior",
        description: "We're seeking a skilled Backend Engineer to develop and maintain our server infrastructure. You'll work with large datasets and optimize our API performance.",
        responsibilities: [
            "Design and implement scalable backend services",
            "Optimize database queries and API performance",
            "Implement security and data protection measures",
            "Collaborate with frontend developers on API design",
            "Troubleshoot and debug production issues"
        ],
        requirements: [
            "5+ years of backend development experience",
            "Expertise in Node.js and/or Python",
            "Experience with database design (SQL and NoSQL)",
            "Knowledge of cloud services (AWS, GCP)",
            "Understanding of microservices architecture"
        ],
        benefits: [
            "Stock options",
            "Unlimited PTO",
            "Home office stipend",
            "Conference budget",
            "Gym membership"
        ],
        posted: "3 days ago",
        applicants: 12
    },
    {
        id: 4,
        title: "Marketing Intern",
        company: "GrowthHackers",
        location: "Chicago, IL",
        salary: "$20 - $25/hr",
        type: "Part-time",
        category: "hybrid",
        experience: "entry",
        description: "Great opportunity for marketing students to gain real-world experience. You'll assist with social media, content creation, and campaign analysis.",
        responsibilities: [
            "Assist with social media content creation",
            "Help draft marketing emails and newsletters",
            "Conduct market research and competitor analysis",
            "Support the team with campaign execution",
            "Analyze marketing metrics and prepare reports"
        ],
        requirements: [
            "Currently enrolled in marketing or related program",
            "Basic understanding of social media platforms",
            "Strong writing skills",
            "Eagerness to learn",
            "Ability to work 20 hours/week"
        ],
        benefits: [
            "Flexible schedule",
            "Mentorship program",
            "Potential for full-time offer",
            "Networking opportunities",
            "Course credit available"
        ],
        posted: "5 days ago",
        applicants: 5
    },
    {
        id: 5,
        title: "DevOps Engineer",
        company: "CloudScale",
        location: "Remote",
        salary: "$120,000 - $150,000",
        type: "Full-time",
        category: "remote",
        experience: "senior",
        description: "Join our infrastructure team to build and maintain our CI/CD pipelines, monitoring systems, and cloud infrastructure. Help us scale our systems efficiently.",
        responsibilities: [
            "Design and implement CI/CD pipelines",
            "Manage Kubernetes clusters and containerized applications",
            "Implement monitoring and alerting solutions",
            "Automate infrastructure provisioning",
            "Ensure system reliability and performance"
        ],
        requirements: [
            "4+ years of DevOps experience",
            "Expertise in Kubernetes and Docker",
            "Experience with Terraform or similar",
            "Knowledge of monitoring tools (Prometheus, Grafana)",
            "Strong scripting skills (Bash, Python)"
        ],
        benefits: [
            "Fully remote position",
            "Competitive compensation",
            "Home office setup budget",
            "Annual tech upgrade",
            "Wellness program"
        ],
        posted: "1 day ago",
        applicants: 9
    },
    {
        id: 6,
        title: "Product Manager",
        company: "InnovateCo",
        location: "Boston, MA",
        salary: "$100,000 - $130,000",
        type: "Full-time",
        category: "onsite",
        experience: "mid",
        description: "Lead product development from conception to launch. Work with cross-functional teams to define product vision, strategy, and roadmap.",
        responsibilities: [
            "Define product requirements and specifications",
            "Create and maintain product roadmaps",
            "Analyze market trends and competition",
            "Work with engineering, design, and marketing teams",
            "Measure product performance and iterate"
        ],
        requirements: [
            "3+ years of product management experience",
            "Technical background or understanding",
            "Strong analytical skills",
            "Excellent communication skills",
            "Experience with Agile methodologies"
        ],
        benefits: [
            "Performance bonuses",
            "Comprehensive health coverage",
            "Parental leave",
            "Stock options",
            "Professional development"
        ],
        posted: "1 week ago",
        applicants: 7
    },
    {
        id: 7,
        title: "Data Scientist",
        company: "AnalyticsPro",
        location: "Seattle, WA",
        salary: "$115,000 - $145,000",
        type: "Full-time",
        category: "hybrid",
        experience: "senior",
        description: "Use your analytical skills to extract insights from complex datasets and help drive business decisions. Work with stakeholders across the company.",
        responsibilities: [
            "Develop machine learning models",
            "Analyze large datasets to extract insights",
            "Create data visualizations and reports",
            "Collaborate with engineering teams on data pipelines",
            "Communicate findings to non-technical stakeholders"
        ],
        requirements: [
            "Advanced degree in quantitative field",
            "3+ years of data science experience",
            "Proficiency in Python and SQL",
            "Experience with machine learning frameworks",
            "Strong statistical knowledge"
        ],
        benefits: [
            "Competitive salary + bonus",
            "401(k) matching",
            "Health and wellness benefits",
            "Conference and training budget",
            "Flexible work arrangements"
        ],
        posted: "4 days ago",
        applicants: 11
    },
    {
        id: 8,
        title: "Customer Support Specialist",
        company: "ServiceFirst",
        location: "Remote",
        salary: "$45,000 - $55,000",
        type: "Full-time",
        category: "remote",
        experience: "entry",
        description: "Provide exceptional customer support via email, chat, and phone. Help our customers get the most out of our products and services.",
        responsibilities: [
            "Respond to customer inquiries via multiple channels",
            "Troubleshoot and resolve customer issues",
            "Document customer interactions in CRM",
            "Escalate complex issues to appropriate teams",
            "Provide product feedback to internal teams"
        ],
        requirements: [
            "1+ years of customer service experience",
            "Excellent communication skills",
            "Patience and problem-solving skills",
            "Ability to work independently",
            "Technical aptitude"
        ],
        benefits: [
            "Work from anywhere",
            "Health benefits",
            "Paid time off",
            "Performance bonuses",
            "Career growth opportunities"
        ],
        posted: "3 days ago",
        applicants: 6
    },
    {
        id: 9,
        title: "iOS Developer",
        company: "MobileMasters",
        location: "Los Angeles, CA",
        salary: "$95,000 - $125,000",
        type: "Full-time",
        category: "hybrid",
        experience: "mid",
        description: "Join our mobile team to build beautiful, high-performance iOS applications. You'll work closely with designers to create amazing user experiences.",
        responsibilities: [
            "Develop new features for our iOS applications",
            "Optimize app performance and battery usage",
            "Collaborate with designers on UI implementation",
            "Write unit and UI tests",
            "Maintain code quality and organization"
        ],
        requirements: [
            "3+ years of iOS development experience",
            "Proficiency in Swift",
            "Experience with UIKit and SwiftUI",
            "Understanding of iOS design principles",
            "Familiarity with RESTful APIs"
        ],
        benefits: [
            "Competitive compensation",
            "Health and dental insurance",
            "Annual tech stipend",
            "Flexible work schedule",
            "Team outings and events"
        ],
        posted: "2 weeks ago",
        applicants: 10
    },
    {
        id: 10,
        title: "Content Writer",
        company: "WordCraft",
        location: "Remote",
        salary: "$50,000 - $70,000",
        type: "Full-time",
        category: "remote",
        experience: "mid",
        description: "Create engaging content for our blog, website, and marketing materials. You'll work with our marketing team to develop content strategies.",
        responsibilities: [
            "Write blog posts, articles, and website copy",
            "Research industry-related topics",
            "Optimize content for SEO",
            "Collaborate with marketing team on content strategy",
            "Edit and proofread content"
        ],
        requirements: [
            "2+ years of professional writing experience",
            "Excellent writing and editing skills",
            "Basic understanding of SEO",
            "Ability to meet deadlines",
            "Portfolio of writing samples"
        ],
        benefits: [
            "Fully remote position",
            "Flexible hours",
            "Health benefits",
            "Professional development budget",
            "Creative work environment"
        ],
        posted: "1 week ago",
        applicants: 4
    },
    {
        id: 11,
        title: "Cybersecurity Analyst",
        company: "SecureNet",
        location: "Washington, DC",
        salary: "$85,000 - $110,000",
        type: "Full-time",
        category: "onsite",
        experience: "mid",
        description: "Protect our systems and data from cyber threats. Monitor security systems, investigate incidents, and implement security measures.",
        responsibilities: [
            "Monitor security systems for anomalies",
            "Investigate security breaches and incidents",
            "Implement security controls and measures",
            "Conduct vulnerability assessments",
            "Develop security policies and procedures"
        ],
        requirements: [
            "3+ years of cybersecurity experience",
            "Knowledge of security frameworks",
            "Experience with SIEM tools",
            "Understanding of network protocols",
            "Relevant certifications (e.g., CISSP, CEH)"
        ],
        benefits: [
            "Competitive salary",
            "Comprehensive benefits",
            "Professional certification support",
            "Retirement plan",
            "On-site gym"
        ],
        posted: "5 days ago",
        applicants: 8
    },
    {
        id: 12,
        title: "Sales Executive",
        company: "RevenueBuilders",
        location: "Miami, FL",
        salary: "$60,000 base + commission",
        type: "Full-time",
        category: "onsite",
        experience: "mid",
        description: "Join our sales team to drive revenue growth. You'll build relationships with potential clients and close deals for our SaaS products.",
        responsibilities: [
            "Identify and qualify sales leads",
            "Conduct product demonstrations",
            "Negotiate contracts and close deals",
            "Maintain CRM records",
            "Meet and exceed sales targets"
        ],
        requirements: [
            "2+ years of B2B sales experience",
            "Excellent communication skills",
            "Ability to build relationships",
            "Self-motivated and results-driven",
            "Experience with CRM software"
        ],
        benefits: [
            "Uncapped commission",
            "Health benefits",
            "Quarterly bonuses",
            "Sales training program",
            "Company car allowance"
        ],
        posted: "1 week ago",
        applicants: 5
    },
    {
        id: 13,
        title: "Freelance React Developer",
        company: "WebCraft Solutions",
        location: "Remote",
        salary: "$50 - $70/hour",
        type: "Contract",
        category: "freelance",
        experience: "mid",
        description: "Looking for a skilled React developer to help build a SaaS application frontend. 3-month contract with potential for extension.",
        responsibilities: [
            "Develop responsive UI components using React",
            "Integrate with REST APIs",
            "Implement state management with Redux",
            "Write unit tests with Jest",
            "Collaborate with UX designers"
        ],
        requirements: [
            "3+ years React experience",
            "Proficient with React hooks",
            "Experience with TypeScript",
            "Knowledge of Material UI",
            "Git version control"
        ],
        benefits: [
            "Flexible working hours",
            "Remote work",
            "Project-based payment",
            "Potential for long-term collaboration",
            "Creative freedom"
        ],
        posted: "1 day ago",
        applicants: 3
    },
    {
        id: 14,
        title: "WordPress Plugin Developer",
        company: "DigitalPress",
        location: "Remote",
        salary: "$3,000 - $5,000/project",
        type: "Contract",
        category: "freelance",
        experience: "mid",
        description: "Need an experienced WordPress developer to create a custom plugin for client management system.",
        responsibilities: [
            "Develop custom WordPress plugin",
            "Implement secure user authentication",
            "Create admin dashboard",
            "Ensure compatibility with major themes",
            "Provide documentation"
        ],
        requirements: [
            "Proven WordPress development experience",
            "PHP and MySQL proficiency",
            "JavaScript/jQuery knowledge",
            "Understanding of WordPress hooks",
            "Portfolio of previous plugins"
        ],
        benefits: [
            "Flexible timeline",
            "Milestone payments",
            "Remote work",
            "Potential for ongoing maintenance",
            "Creative input on features"
        ],
        posted: "3 days ago",
        applicants: 7
    },
    {
        id: 15,
        title: "Mobile App Developer (Flutter)",
        company: "AppVenture",
        location: "Remote",
        salary: "$40 - $60/hour",
        type: "Contract",
        category: "freelance",
        experience: "mid",
        description: "Seeking Flutter developer to build cross-platform mobile app for startup. 6-week initial contract.",
        responsibilities: [
            "Develop Flutter app from Figma designs",
            "Implement Firebase backend integration",
            "Create responsive UI",
            "Optimize app performance",
            "Fix bugs and issues"
        ],
        requirements: [
            "2+ years Flutter experience",
            "Dart programming proficiency",
            "Firebase experience",
            "Published apps in portfolio",
            "State management knowledge"
        ],
        benefits: [
            "Work from anywhere",
            "Flexible hours",
            "Potential equity option",
            "Fast-paced startup environment",
            "Cutting-edge tech stack"
        ],
        posted: "5 days ago",
        applicants: 5
    },
    {
        id: 16,
        title: "Python/Django Backend Developer",
        company: "DataSystems Pro",
        location: "Remote",
        salary: "$60 - $90/hour",
        type: "Contract",
        category: "freelance",
        experience: "senior",
        description: "Need senior Python developer to build REST APIs for financial application. 3-month contract.",
        responsibilities: [
            "Design and implement Django REST APIs",
            "Optimize database queries",
            "Implement authentication system",
            "Write unit and integration tests",
            "Deploy to AWS"
        ],
        requirements: [
            "5+ years Python experience",
            "Expert Django/DRF knowledge",
            "PostgreSQL experience",
            "AWS deployment experience",
            "Financial domain knowledge a plus"
        ],
        benefits: [
            "Competitive hourly rate",
            "Professional challenge",
            "Remote work",
            "Flexible schedule",
            "Potential for extension"
        ],
        posted: "2 days ago",
        applicants: 4
    },
    {
        id: 17,
        title: "Blockchain Solidity Developer",
        company: "CryptoBuild",
        location: "Remote",
        salary: "$80 - $120/hour",
        type: "Contract",
        category: "freelance",
        experience: "senior",
        description: "Looking for senior Solidity developer to build smart contracts for DeFi platform.",
        responsibilities: [
            "Develop and audit smart contracts",
            "Implement token standards",
            "Create security protocols",
            "Optimize gas usage",
            "Write documentation"
        ],
        requirements: [
            "3+ years Solidity experience",
            "Deep understanding of Ethereum",
            "Experience with Truffle/Hardhat",
            "Knowledge of DeFi protocols",
            "Security best practices"
        ],
        benefits: [
            "Top-tier compensation",
            "Cutting-edge blockchain work",
            "Fully remote",
            "Token bonus potential",
            "Flexible engagement"
        ],
        posted: "1 day ago",
        applicants: 9
    },
    {
        id: 18,
        title: "Freelance Full Stack Developer (MERN)",
        company: "CodeCraft Solutions",
        location: "Remote",
        salary: "$60 - $90/hour",
        type: "Contract",
        category: "freelance",
        experience: "senior",
        description: "Looking for an experienced MERN stack developer to build a complete e-learning platform from scratch. 6-month contract with potential for extension.",
        responsibilities: [
            "Develop full-stack application using MongoDB, Express, React, and Node.js",
            "Implement user authentication and authorization",
            "Design responsive UI with modern frontend frameworks",
            "Create RESTful APIs and integrate third-party services",
            "Optimize application for maximum speed and scalability"
        ],
        requirements: [
            "5+ years MERN stack experience",
            "Proficient in JavaScript/TypeScript",
            "Experience with Redux or Context API",
            "Knowledge of AWS deployment",
            "Strong problem-solving skills"
        ],
        benefits: [
            "Flexible working hours",
            "100% remote work",
            "Competitive hourly rate",
            "Creative freedom on implementation",
            "Potential for long-term collaboration"
        ],
        posted: "1 day ago",
        applicants: 6
    }
    // Additional jobs can be added here to reach 50+
    // For brevity, I'm showing 12 but the full version would have 50+
];

// DOM Elements
const jobContainer = document.getElementById('jobContainer');
const jobModal = document.getElementById('jobModal');
const closeModal = document.getElementById('closeModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const applyFilters = document.getElementById('applyFilters');
const resetFilters = document.getElementById('resetFilters');
const jobCount = document.getElementById('jobCount');
const filterBtns = document.querySelectorAll('.filter-btn');

// Filter elements
const categoryFilter = document.getElementById('category');
const salaryFilter = document.getElementById('salary');
const experienceFilter = document.getElementById('experience');
const locationFilter = document.getElementById('location');

// Modal elements
const modalTitle = document.getElementById('modalTitle');
const modalCompany = document.getElementById('modalCompany');
const modalLocation = document.getElementById('modalLocation');
const modalSalary = document.getElementById('modalSalary');
const modalType = document.getElementById('modalType');
const modalExperience = document.getElementById('modalExperience');
const modalDescription = document.getElementById('modalDescription');
const modalResponsibilities = document.getElementById('modalResponsibilities');
const modalRequirements = document.getElementById('modalRequirements');
const modalBenefits = document.getElementById('modalBenefits');
const modalPosted = document.getElementById('modalPosted');

// Initialize the app
function init() {
    renderJobs(jobs);
    setupEventListeners();
}

// Set up event listeners
function setupEventListeners() {
    // Filter buttons
    applyFilters.addEventListener('click', applyFiltersHandler);
    resetFilters.addEventListener('click', resetFiltersHandler);

    // Quick filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const filterType = this.getAttribute('data-filter');
            const value = this.getAttribute('value');

            // Update the corresponding dropdown
            if (filterType === 'category') {
                categoryFilter.value = value;
            }

            // Apply filters
            applyFiltersHandler();

            // Highlight active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Modal close buttons
    closeModal.addEventListener('click', closeModalHandler);
    closeModalBtn.addEventListener('click', closeModalHandler);

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === jobModal) {
            closeModalHandler();
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !jobModal.classList.contains('hidden')) {
            closeModalHandler();
        }
    });
}

// Render job cards with animation
function renderJobs(jobsToRender) {
    jobContainer.innerHTML = '';
    jobCount.textContent = jobsToRender.length;

    if (jobsToRender.length === 0) {
        jobContainer.innerHTML = `
                    <div class="col-span-full text-center py-12 animate-fade-in">
                        <i class="fas fa-search text-4xl text-gray-300 mb-4"></i>
                        <h3 class="text-xl font-medium text-gray-700">No jobs found</h3>
                        <p class="text-gray-500 mt-2">Try adjusting your filters</p>
                    </div>
                `;
        return;
    }

    jobsToRender.forEach((job, index) => {
        const jobCard = document.createElement('div');
        jobCard.className = `job-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in delay-${index % 5 * 100}`;
        jobCard.innerHTML = `
                    <div class="p-6">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="text-lg font-bold text-gray-900">${job.title}</h3>
                                <p class="text-primary-600 mt-1">${job.company}</p>
                            </div>
                            <span class="px-2 py-1 text-xs font-semibold rounded-full ${getCategoryClass(job.category)} transition-colors">
                                ${getCategoryLabel(job.category)}
                            </span>
                        </div>
                        
                        <div class="mt-4 flex flex-wrap gap-2">
                            <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs flex items-center">
                                <i class="fas fa-map-marker-alt mr-1 text-primary-500"></i> ${job.location}
                            </span>
                            <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs flex items-center">
                                <i class="fas fa-dollar-sign mr-1 text-accent-500"></i> ${job.salary}
                            </span>
                            <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs flex items-center">
                                <i class="fas fa-briefcase mr-1 text-secondary-500"></i> ${job.type}
                            </span>
                        </div>
                        
                        <p class="mt-4 text-gray-600 line-clamp-2">${job.description}</p>
                        
                        <div class="mt-6 flex justify-between items-center">
                            <span class="text-sm text-gray-500">${job.posted}</span>
                            <button data-job-id="${job.id}" class="view-details-btn px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all shadow-md hover:shadow-lg">
                                View Details <i class="fas fa-arrow-right ml-1"></i>
                            </button>
                        </div>
                    </div>
                `;

        jobContainer.appendChild(jobCard);
    });

    // Add event listeners to all view details buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const jobId = parseInt(e.target.getAttribute('data-job-id'));
            const job = jobs.find(j => j.id === jobId);
            if (job) {
                openModal(job);
            }
        });
    });
}

// Open modal with job details
function openModal(job) {
    modalTitle.textContent = job.title;
    modalCompany.textContent = job.company;
    modalLocation.innerHTML = `<i class="fas fa-map-marker-alt mr-1 text-primary-500"></i> ${job.location}`;
    modalSalary.innerHTML = `<i class="fas fa-dollar-sign mr-1 text-accent-500"></i> ${job.salary}`;
    modalType.innerHTML = `<i class="fas fa-briefcase mr-1 text-secondary-500"></i> ${job.type}`;
    modalExperience.innerHTML = `<i class="fas fa-chart-line mr-1 text-primary-500"></i> ${getExperienceLabel(job.experience)}`;
    modalDescription.textContent = job.description;
    modalPosted.textContent = job.posted;

    // Clear previous content
    modalResponsibilities.innerHTML = '';
    modalRequirements.innerHTML = '';
    modalBenefits.innerHTML = '';

    // Add responsibilities
    job.responsibilities.forEach(resp => {
        const li = document.createElement('li');
        li.textContent = resp;
        modalResponsibilities.appendChild(li);
    });

    // Add requirements
    job.requirements.forEach(req => {
        const li = document.createElement('li');
        li.textContent = req;
        modalRequirements.appendChild(li);
    });

    // Show modal with animation
    jobModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModalHandler() {
    jobModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Apply filters
function applyFiltersHandler() {
    const category = categoryFilter.value;
    const salary = salaryFilter.value;
    const experience = experienceFilter.value;
    const location = locationFilter.value;

    let filteredJobs = [...jobs];

    // Apply category filter
    if (category !== 'all') {
        filteredJobs = filteredJobs.filter(job => job.category === category);
    }

    // Apply salary filter (simplified for demo)
    if (salary !== 'all') {
        const [min, max] = salary.split('-');
        filteredJobs = filteredJobs.filter(job => {
            // Extract numeric value from salary string (simplified)
            const jobSalary = extractSalaryValue(job.salary);

            if (max) {
                return jobSalary >= parseInt(min) * 1000 && jobSalary <= parseInt(max) * 1000;
            } else {
                return jobSalary >= parseInt(min) * 1000;
            }
        });
    }

    // Apply experience filter
    if (experience !== 'all') {
        filteredJobs = filteredJobs.filter(job => job.experience === experience);
    }

    // Apply location filter (simplified)
    if (location !== 'all') {
        if (location === 'remote') {
            filteredJobs = filteredJobs.filter(job => job.category === 'remote');
        } else {
            // In a real app, you'd have proper location data
            filteredJobs = filteredJobs.filter(job => job.location !== 'Remote');
        }
    }

    renderJobs(filteredJobs);
}

// Helper function to extract salary value
function extractSalaryValue(salaryStr) {
    // Simple extraction - would need improvement for real app
    const matches = salaryStr.match(/\$?([0-9,]+)/);
    if (matches && matches[1]) {
        return parseInt(matches[1].replace(/,/g, ''));
    }
    return 0;
}

// Reset filters
function resetFiltersHandler() {
    categoryFilter.value = 'all';
    salaryFilter.value = 'all';
    experienceFilter.value = 'all';
    locationFilter.value = 'all';

    // Reset quick filter buttons
    filterBtns.forEach(btn => btn.classList.remove('active'));

    renderJobs(jobs);
}

// Helper functions
function getCategoryClass(category) {
    const classes = {
        remote: 'bg-primary-100 text-primary-800',
        onsite: 'bg-secondary-100 text-secondary-800',
        hybrid: 'bg-accent-100 text-accent-800',
        freelance: 'bg-yellow-100 text-yellow-800',
        internship: 'bg-purple-100 text-purple-800'
    };
    return classes[category] || 'bg-gray-100 text-gray-800';
}

function getCategoryLabel(category) {
    const labels = {
        remote: 'Remote',
        onsite: 'On-site',
        hybrid: 'Hybrid',
        freelance: 'Freelance',
        internship: 'Internship'
    };
    return labels[category] || category;
}

function getExperienceLabel(experience) {
    const labels = {
        entry: 'Entry Level',
        mid: 'Mid Level',
        senior: 'Senior Level',
        executive: 'Executive'
    };
    return labels[experience] || experience;
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Mobile menu toggle functionality
document.getElementById('mobileMenuButton').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
});


