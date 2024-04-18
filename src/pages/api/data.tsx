const dropwDownOptions = [
  'Accounting',
  'Airlines/Aviation',
  'Alternative Dispute Resolution',
  'Alternative Medicine',
  'Animation',
  'Apparel & Fashion',
  'Architecture & Planning',
  'Arts and Crafts',
  'Automotive',
  'Aviation & Aerospace',
  'Banking',
  'Biotechnology',
  'Broadcast Media',
  'Building Materials',
  'Business Supplies and Equipment',
  'Capital Markets',
  'Chemicals',
  'Civic & Social Organization',
  'Civil Engineering',
  'Commercial Real Estate',
  'Computer & Network Security',
  'Computer Games',
  'Computer Hardware',
  'Computer Networking',
  'Computer Software',
  'Construction',
  'Consumer Electronics',
  'Crypto',
  'Consumer Goods',
  'Consumer Services',
  'Cosmetics',
  'Dairy',
  'Defense & Space',
  'Design',
  'Edtech',
  'Education Management',
  'E-Learning',
  'Electrical/Electronic Manufacturing',
  'Entertainment',
  'Environmental Services',
  'Events Services',
  'Executive Office',
  'Facilities Services',
  'Farming',
  'Financial Services',
  'Fine Art',
  'Fishery',
  'Food & Beverages',
  'Food Production',
  'Fund-Raising',
  'Furniture',
  'Gambling & Casinos',
  'Glass, Ceramics & Concrete',
  'Government Administration',
  'Government Relations',
  'Graphic Design',
  'Health, Wellness and Fitness',
  'Higher Education',
  'Hospital & Health Care',
  'Hospitality',
  'Human Resources',
  'Import and Export',
  'Individual & Family Services',
  'Industrial Automation',
  'Information Services',
  'Information Technology and Services',
  'Insurance',
  'International Affairs',
  'International Trade and Development',
  'Internet',
  'Investment Banking',
  'Investment Management',
  'Judiciary',
  'Law Enforcement',
  'Law Practice',
  'Legal Services',
  'Legislative Office',
  'Leisure, Travel & Tourism',
  'Libraries',
  'Logistics and Supply Chain',
  'Luxury Goods & Jewelry',
  'Machinery',
  'Management Consulting',
  'Maritime',
  'Marketing and Advertising',
  'Market Research',
  'Mechanical or Industrial Engineering',
  'Media Production',
  'Medical Devices',
  'Medical Practice',
  'Mental Health Care',
  'Military',
  'Mining & Metals',
  'Motion Pictures and Film',
  'Museums and Institutions',
  'Music',
  'Nanotechnology',
  'Newspapers',
  'Nonprofit Organization Management',
  'Oil & Energy',
  'Online Media',
  'Outsourcing/Offshoring',
  'Package/Freight Delivery',
  'Packaging and Containers',
  'Paper & Forest Products',
  'Performing Arts',
  'Pharmaceuticals',
  'Philanthropy',
  'Photography',
  'Plastics',
  'Political Organization',
  'Primary/Secondary Education',
  'Printing',
  'Professional Training & Coaching',
  'Program Development',
  'Public Policy',
  'Public Relations and Communications',
  'Public Safety',
  'Publishing',
  'Railroad Manufacture',
  'Ranching',
  'Real Estate',
  'Recreational Facilities and Services',
  'Religious Institutions',
  'Renewables & Environment',
  'Research',
  'Restaurants',
  'Retail',
  'Security and Investigations',
  'Semiconductors',
  'Shipbuilding',
  'Sporting Goods',
  'Sports',
  'Staffing and Recruiting',
  'Supermarkets',
  'Telecommunications',
  'Textiles',
  'Think Tanks',
  'Tobacco',
  'Translation and Localization',
  'Transportation/Trucking/Railroad',
  'Utilities',
  'Venture Capital & Private Equity',
  'Veterinary',
  'Warehousing',
  'Wholesale',
  'Wine and Spirits',
  'Wireless',
  'Writing and Editing',
];

const Roleoption=[
    {
        serial : 'A',
        value:'Founder or CXO'
    },
    {
        serial : 'B',
        value:'Product Team'
    },
    {
        serial : 'C',
        value:'Marketing Team'
    },
    {
        serial : 'D',
        value:'VC'
    },
    {
        serial : 'E',
        value:'Other'
    },
   
]
const goalOptions = [
    {
        serial : 'A',
        value:'Get hired'
    },
    {
        serial : 'B',
        value:'Get promoted'
    },
    {
        serial : 'C',
        value:'Connect with like-minded people'
    },
    {
        serial : 'D',
        value:'Structure approach to growth'
    },
    {
        serial : 'E',
        value:'Build a growth team'
    },
]

export const data = [
  {
    id: 1,
    stepCount: '',
    question: 'Up-skilling requires time commitment',
    desc: (
      <>
        <p>
          The GrowthX experience is designed by keeping in mind the working
          hours founders & full time operators typically work in.
        </p>
        <p>You will spend</p>
        <ul>
          <li>- 6 hours/week for the first 5 weeks</li>
          <li>- 15 hours/week for the last 3 weeks</li>
        </ul>
      </>
    ),
    type: 'Iagree',
    buttonText: 'I agree',
    name: 'iagree',
  },
  {
    id: 2,
    stepCount: 1,
    question: 'What is your first name?*',
    desc: '',
    type: 'text',
    name: 'firstName',
    placeholder: 'First Name',
    buttonText: (
      <>
        OK <span className=''></span>
      </>
    ),
  },
  {
    id: 3,
    stepCount: 2,
    question: 'and your last name?*',
    desc: '',
    name: 'lastName',
    type: 'text',
    placeholder: 'Last name ',
    buttonText: (
      <>
        OK <span className=''></span>
      </>
    ),
  },
  {
    id: 4,
    stepCount: 3,
    question: 'What industry is your company in?*',
    desc: 'We will personalize your learning experience accordingly',
    type: 'dropdown',
    name: 'industry',
    placeholder:"Please select industry",
    options: dropwDownOptions || [],
    buttonText: (
      <>
        OK <span className=''></span>
      </>
    ),
  },
  {
    id: 5,
    stepCount: 4,
    question: 'Your role in your company?*',
    desc: 'We want to understand how you spend your time right now.',
    type: 'multiple',
    note: '[ 🔴DEVELOPER NOTICE: Options in the questions ahead depend on this questions response/s. ]',
    options: Roleoption ||[],
    name: 'role',
    buttonText: (
      <>
        OK <span className=''></span>
      </>
    ),
  },
  {
    id: 6,
    stepCount: 5,
    question: 'What is your professional goal for the next 12 months?',
    desc: '',
    name: 'goal',
    type: 'multiple-morethanone',
    options: goalOptions || [],
    buttonText: (
      <>
        OK <span className=''></span>
      </>
    ),
  },
  {
    id: 7,
    stepCount: 6,
    name: 'email',
    question: 'Email youd like to register with?*',
    desc: 'We will keep all our communications with you through this email. Do check your spam inbox if you can not find our application received email.',
    type: 'text',
    placeholder:"Email",
    note: '[🔴DEVELOPER NOTICE: Responses submitted to this form will be forwarded to the email you text here, for you to test data submissions.]',
    buttonText: (
      <>
        OK <span className=''></span>
      </>
    ),
  },
];
