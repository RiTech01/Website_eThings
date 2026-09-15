import PaidSearchLandingPage from '../components/PaidSearchLandingPage';

const page={
  route:'/hire-developers/',category:'developers',label:'engineering talent',
  title:'Hire Software Developers in India | Ething Solutions',
  description:'Hire pre-vetted software developers from India. Get matched engineering profiles based on your technology, experience and team requirements.',
  h1:'Hire Pre-Vetted Software Developers in 48 Hours',
  subhead:'Get matched with experienced developers based on your technology, seniority and project requirements.',
  cta:'Get 3 Vetted Profiles',formTitle:'Find Vetted Engineers',formCopy:'Tell us what you need. We’ll send matched profiles.',defaultNeed:'Software Developer',
  benefitHeading:'Skip Months of Recruiting. Start With Vetted Engineers.',
  benefits:[['Pre-Vetted Talent','Technical and professional screening before profiles reach you.'],['Profiles Within 48 Hours','Tell us what you need and receive relevant engineers quickly.'],['Flexible Hiring','Scale your team up or down as requirements change.'],['Up to 60% Cost Savings','Access experienced engineering talent without traditional hiring overhead.']],
  skillsHeading:'Hire Developers Across Your Technology Stack',skills:['AI & Generative AI','Python','React','Node.js','Full Stack','Java','.NET','DevOps','Cloud','Data Engineering','Machine Learning','Mobile'],
  processHeading:'From Requirement to Engineer in Four Steps',steps:['Tell Us What You Need','Receive Vetted Profiles','Interview Your Shortlist','Start Building'],profileLabel:'Developer Profile',
  profiles:[['Senior Python Engineer','Backend systems · APIs · cloud'],['AI/ML Engineer','Applied AI · ML pipelines · data'],['Full Stack Engineer','React · Node.js · product delivery']],
  faqs:[['How quickly can I receive developer profiles?','Matched profiles can be shared within 48 hours after requirements are understood.'],['How are developers vetted?','Profiles are technically and professionally screened before they are shared.'],['Can I interview developers before hiring?','Yes. You can interview shortlisted developers before committing.'],['Can I hire developers for short-term projects?','Flexible engagement models can support changing project requirements.'],['Do you provide onsite, hybrid and remote developers?','Ething supports onsite, hybrid and remote engagement models.'],['Can I scale the team up or down?','Yes. Flexible hiring is designed to adapt as requirements change.'],['Which technologies do you support?','The page highlights AI, web, cloud, data, mobile and core engineering technologies.'],["What happens if a developer isn't the right fit?",'A replacement guarantee is available; confirm applicable terms with Ething.']],
  finalHeading:'Tell Us What You’re Building. We’ll Find the Engineers.'
};

export default function HireDevelopers(){return <PaidSearchLandingPage page={page}/>;}

