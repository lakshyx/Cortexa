export const J_AND_K_COLLEGES = [
  { id: 'jk1', name: "NIT Srinagar", streams: ["PCM", "Engineering"], cutoff: 75, location: "Srinagar, J&K", type: "Government" },
  { id: 'jk2', name: "University of Kashmir", streams: ["PCM", "PCB", "Commerce", "Arts", "Multiple streams"], cutoff: 60, location: "Srinagar, J&K", type: "Government" },
  { id: 'jk3', name: "SKUAST Kashmir", streams: ["PCB", "Science", "Agriculture/Science"], cutoff: 65, location: "Srinagar, J&K", type: "Government" },
  { id: 'jk4', name: "Jammu University", streams: ["PCM", "PCB", "Commerce", "Arts", "Multiple streams"], cutoff: 60, location: "Jammu, J&K", type: "Government" },
  { id: 'jk5', name: "NIT Jalandhar", streams: ["PCM", "Engineering"], cutoff: 80, location: "Punjab (near J&K)", type: "Government" },
  { id: 'jk6', name: "Government Medical College Srinagar", streams: ["PCB", "Medical", "MBBS"], cutoff: 85, location: "Srinagar, J&K", type: "Government" },
  { id: 'jk7', name: "Government Medical College Jammu", streams: ["PCB", "Medical", "MBBS"], cutoff: 85, location: "Jammu, J&K", type: "Government" },
  { id: 'jk8', name: "SMVDU", streams: ["PCM", "Engineering", "Engineering/Science"], cutoff: 70, location: "Katra, J&K", type: "Government" },
  { id: 'jk9', name: "Cluster University Srinagar", streams: ["Commerce", "Arts", "Science", "Arts/Commerce/Science"], cutoff: 55, location: "Srinagar, J&K", type: "Government" },
  { id: 'jk10', name: "Cluster University Jammu", streams: ["Commerce", "Arts", "Science", "Arts/Commerce/Science"], cutoff: 55, location: "Jammu, J&K", type: "Government" }
];

export const ALL_INDIA_COLLEGES = [
  { id: 'ai1', name: "IIT Bombay", streams: ["PCM", "Engineering"], cutoff: 95, location: "Mumbai", type: "Government" },
  { id: 'ai2', name: "IIT Delhi", streams: ["PCM", "Engineering"], cutoff: 95, location: "Delhi", type: "Government" },
  { id: 'ai3', name: "AIIMS Delhi", streams: ["PCB", "Medical"], cutoff: 95, location: "Delhi", type: "Government" },
  { id: 'ai4', name: "Delhi University", streams: ["PCM", "PCB", "Commerce", "Arts", "Multiple"], cutoff: 85, location: "Delhi", type: "Government" },
  { id: 'ai5', name: "VIT Vellore", streams: ["PCM", "Engineering"], cutoff: 75, location: "Vellore", type: "Private" },
  { id: 'ai6', name: "Manipal University", streams: ["PCM", "PCB", "Engineering", "Medical", "Engineering/Medical"], cutoff: 70, location: "Manipal", type: "Private" },
  { id: 'ai7', name: "Symbiosis Pune", streams: ["Commerce", "Arts", "Commerce/Law"], cutoff: 75, location: "Pune", type: "Private" },
  { id: 'ai8', name: "Christ University Bangalore", streams: ["PCM", "PCB", "Commerce", "Arts", "Multiple"], cutoff: 70, location: "Bangalore", type: "Private" }
];

export const CAREERS = [
  { id: 'c1', title: "Software Engineer", stream: "PCM", expectedSalary: "5-25 LPA", exam: "JEE/CUET", growth: "High", description: "Designs and builds software applications and systems. High demand across all sectors.", degree: "B.Tech/B.E. in CS/IT" },
  { id: 'c2', title: "Data Scientist", stream: "PCM", expectedSalary: "8-30 LPA", exam: "CUET/GATE", growth: "Very High", description: "Analyzes complex data to find insights and build predictive models.", degree: "B.Tech/B.Sc in CS/Stat/Math" },
  { id: 'c3', title: "Mechanical Engineer", stream: "PCM", expectedSalary: "4-15 LPA", exam: "JEE", growth: "Moderate", description: "Designs, analyzes, manufactures, and maintains mechanical systems.", degree: "B.Tech/B.E. in Mechanical" },
  { id: 'c4', title: "Civil Engineer", stream: "PCM", expectedSalary: "4-12 LPA", exam: "JEE", growth: "High", description: "Plans, designs, and oversees construction and maintenance of building structures and infrastructure.", degree: "B.Tech/B.E. in Civil" },
  { id: 'c5', title: "Doctor (MBBS)", stream: "PCB", expectedSalary: "8-20 LPA", exam: "NEET UG", growth: "Stable", description: "Diagnoses and treats patients in hospitals and clinics.", degree: "MBBS" },
  { id: 'c6', title: "Dentist", stream: "PCB", expectedSalary: "6-15 LPA", exam: "NEET", growth: "Stable", description: "Diagnoses and treats issues relating to teeth and gums.", degree: "BDS" },
  { id: 'c7', title: "Pharmacist", stream: "PCB", expectedSalary: "3-10 LPA", exam: "NEET/State CET", growth: "Good", description: "Prepares and dispenses medical drugs.", degree: "B.Pharm" },
  { id: 'c8', title: "Biotechnology Researcher", stream: "PCB", expectedSalary: "4-15 LPA", exam: "CUET/GATE", growth: "High", description: "Uses biological systems and living organisms to develop or create different products.", degree: "B.Tech/B.Sc in Biotech" },
  { id: 'c9', title: "CA (Chartered Accountant)", stream: "Commerce", expectedSalary: "7-25 LPA", exam: "CA Foundation", growth: "High", description: "Manages financial accounts, audits, and tax planning for organizations.", degree: "CA" },
  { id: 'c10', title: "MBA Finance", stream: "Commerce", expectedSalary: "8-30 LPA", exam: "CAT", growth: "High", description: "Manages financial resources of a company or organization.", degree: "BBA/B.Com + MBA" },
  { id: 'c11', title: "Banking Professional", stream: "Commerce", expectedSalary: "4-15 LPA", exam: "IBPS/SBI PO", growth: "Stable", description: "Works in various roles within banking and financial institutions.", degree: "Any Graduation" },
  { id: 'c12', title: "Entrepreneur", stream: "Commerce", expectedSalary: "Variable", exam: "No specific exam", growth: "Very High", description: "Builds and manages businesses, creating products and jobs.", degree: "Any Degree" },
  { id: 'c13', title: "Graphic Designer", stream: "Arts", expectedSalary: "3-12 LPA", exam: "NID/NIFT", growth: "High", description: "Creates visual content for brands, media, and digital platforms.", degree: "B.Des / B.F.A" },
  { id: 'c14', title: "UI/UX Designer", stream: "Arts", expectedSalary: "5-20 LPA", exam: "NID/NIFT/CUET", growth: "Very High", description: "Designs user interfaces and experiences for digital products.", degree: "B.Des / B.Tech / Any" },
  { id: 'c15', title: "Lawyer", stream: "Arts", expectedSalary: "4-20 LPA", exam: "CLAT/AILET", growth: "High", description: "Represents clients in legal matters and advises on laws and regulations.", degree: "LLB / BA LLB" },
  { id: 'c16', title: "NDA Officer", stream: "PCM", expectedSalary: "6-15 LPA", exam: "NDA Exam", growth: "Stable", description: "Serves in the Indian Armed Forces after completing NDA training.", degree: "NDA Training" },
  { id: 'c17', title: "UPSC/IAS Officer", stream: "Arts", expectedSalary: "7-18 LPA", exam: "UPSC CSE", growth: "Prestigious", description: "Administers government policies and public services.", degree: "Any Degree" },
  { id: 'c18', title: "Teacher/Professor", stream: "Arts", expectedSalary: "4-15 LPA", exam: "CUET/NET", growth: "Stable", description: "Educates students at school, college, or university levels.", degree: "B.Ed / Masters / PhD" },
  { id: 'c19', title: "Journalist", stream: "Arts", expectedSalary: "3-10 LPA", exam: "CUET/IIMC entrance", growth: "Moderate", description: "Researches, writes, and reports news stories for media organizations.", degree: "BA Journalism / Mass Comm" },
  { id: 'c20', title: "Environmental Scientist", stream: "PCB", expectedSalary: "4-12 LPA", exam: "CUET/GATE", growth: "Growing", description: "Studies environmental problems and develops solutions for sustainability.", degree: "B.Sc/B.Tech Environmental Science" }
];

export const EXAMS = [
  { id: 'e1', name: "JEE Main", fullForm: "Joint Entrance Examination Main", body: "NTA", month: "January & April", tips: ["Practice previous year papers", "Focus on NCERT for Physics, Chemistry, Math"] },
  { id: 'e2', name: "JEE Advanced", fullForm: "Joint Entrance Examination Advanced", body: "IIT system", month: "May", tips: ["Only top JEE Main scorers qualify", "Deep conceptual understanding required"] },
  { id: 'e3', name: "NEET UG", fullForm: "National Eligibility cum Entrance Test", body: "NTA", month: "May", tips: ["NCERT Biology is key", "Practice 10 years of papers"] },
  { id: 'e4', name: "CUET", fullForm: "Common University Entrance Test", body: "NTA", month: "May-June", tips: ["Domain subjects + General Test + Language section", "NCERT is sufficient"] },
  { id: 'e5', name: "CLAT", fullForm: "Common Law Admission Test", body: "Consortium of NLUs", month: "December", tips: ["Focus on English comprehension, legal reasoning, GK"] },
  { id: 'e6', name: "NDA", fullForm: "National Defence Academy Exam", body: "UPSC", month: "April & September", tips: ["Physical fitness + Math + English + GK", "Strong discipline required"] },
  { id: 'e7', name: "CA Foundation", fullForm: "Chartered Accountancy Foundation", body: "ICAI", month: "June & December", tips: ["Concepts of accounting and law", "Consistent daily study"] }
];

export const SCHOLARSHIPS = [
  { id: 's1', name: "Prime Minister's Special Scholarship Scheme (PMSSS)", category: "Scheme", stream: "All streams", amount: "Up to Rs 1,25,000/year", summary: "For J&K domicile students going outside J&K for higher education.", apply: "AICTE portal", deadline: "Usually August-September" },
  { id: 's2', name: "J&K State Scholarship", category: "Merit-based", stream: "All streams", amount: "Variable", summary: "State government merit based for domicile holders.", apply: "SocialWelfare J&K portal", deadline: "Varies" },
  { id: 's3', name: "National Merit Scholarship", category: "Merit-based", stream: "All streams", amount: "Variable", summary: "Central government 12th marks based.", apply: "NSP portal", deadline: "Varies" },
  { id: 's4', name: "Post Matric Scholarship SC/ST", category: "Category-based", stream: "All streams", amount: "Variable", summary: "Central government for SC/ST students.", apply: "NSP portal", deadline: "Varies" },
  { id: 's5', name: "Ishan Uday", category: "Scheme", stream: "All streams", amount: "Rs 5400-7800/month", summary: "NE and J&K students UGC scheme for degree college students.", apply: "UGC portal", deadline: "Varies" },
  { id: 's6', name: "Inspire Scholarship", category: "Merit-based", stream: "PCM/PCB", amount: "Rs 80,000/year", summary: "DST India for Science stream. Top 1% in 12th.", apply: "DST-INSPIRE portal", deadline: "Varies" },
  { id: 's7', name: "Central Sector Scholarship", category: "Merit-based", stream: "All streams", amount: "Rs 10,000-20,000/year", summary: "Central government for 80th percentile + in 12th.", apply: "NSP portal", deadline: "Varies" },
  { id: 's8', name: "PM YASASVI", category: "Category-based", stream: "All streams", amount: "Rs 75,000-1,25,000/year", summary: "OBC/EBC/DNT students Central government scheme.", apply: "NSP portal", deadline: "Varies" }
];
