const pkg = require('../../package.json');

module.exports = {
  appVersion: pkg.version,
  assetPath: '/public',
  pageTitle: 'PxlPro Jobs',
  navItems: [
    {
      label: 'Home',
      href: '#'
    },
    {
      label: 'Find a job',
      href: '#find-a-job'
    },
    {
      label: 'Careers advice',
      href: '#careers'
    },
    {
      label: 'Job Alerts',
      href: '#job-alerts'
    },
    {
      label: 'Your Jobs',
      href: '#your-jobs'
    }
  ],
  heroMessage: 'Search 1,570 jobs.',
  heroSubtitle: 'Hundreds of new career opportunities each day. Find your perfect job.',
  browseSectorMessage: 'Browse jobs by sector',
  browseFeaturedMessage: 'Featured jobs',
  browseItems: [
    {
      label: 'Accountancy & Finance',
      href: 'accountancy-finance',
      quantity: '41'
    },
    {
      label: 'Architecture, Building & Planning',
      href: 'architecture-building-planning',
      quantity: '71'
    },
    {
      label: 'Art & Design',
      href: 'art-design',
      quantity: '59'
    },
    {
      label: 'Building & Construction',
      href: 'building-construction',
      quantity: '49'
    },
    {
      label: 'Business Management',
      href: 'business-management',
      quantity: '247'
    },
    {
      label: 'Catering & Hospitality',
      href: 'catering-hospitality',
      quantity: '14'
    },
    {
      label: 'Computers & IT',
      href: 'computers-it',
      quantity: '55'
    },
    {
      label: 'Education',
      href: 'education',
      quantity: '193'
    },
    {
      label: 'Engineering',
      href: 'engineering',
      quantity: '47'
    },
    {
      label: 'Media & Journalism',
      href: 'media-journalism',
      quantity: '123'
    },
    {
      label: 'Retail & Wholesale',
      href: 'retail-wholesale',
      quantity: '100'
    },
    {
      label: 'Sales',
      href: 'sales',
      quantity: '29'
    },
    {
      label: 'Sciences',
      href: 'sciences',
      quantity: '79'
    },
    {
      label: 'Sports & Fitness',
      href: 'sports-fitness',
      quantity: '72'
    }
  ],
  featuredItems: [
    {
      logo: 'microsoft',
      role: 'Business Systems Analyst',
      location: 'New York City',
      salary: '$30,000 - $40,000'
    },
    {
      logo: 'amex',
      role: 'Paralegal Positions',
      location: 'Newton, MA',
      salary: 'Competitive salary'
    },
    {
      logo: 'nasa',
      role: 'Operations Director',
      location: 'Cape Canaveral, FL',
      salary: 'Up to $100,000'
    }
  ],
  ctas: [
    {
      icon: 'icon_email',
      title: 'Get instant job alerts',
      subtitle: 'Personalised job recommendations sent straight to your email.'
    },
    {
      icon: 'icon_profile',
      title: 'Create an account for free',
      subtitle:
        'Shortlist jobs, manage your job alerts and receive special offers.'
    },
    {
      icon: 'icon_upload',
      title: 'Upload your resume',
      subtitle:
        'Upload your resume so our employers can match your details to the best jobs.'
    }
  ],
  employers: [
    {
      employer: 'Citi',
      logo: 'citi'
    },
    {
      employer: 'AgStar',
      logo: 'agstar'
    },
    {
      employer: 'Ford',
      logo: 'ford'
    },
    {
      employer: 'IOXUS',
      logo: 'ioxus'
    },
    {
      employer: 'Nike',
      logo: 'nike'
    },
    {
      employer: 'Oracle',
      logo: 'oracle'
    }
  ],
  footerItems: [
    {
      label: 'Browse jobs',
      href: '#browse-jobs'
    },
    {
      label: 'Search employers',
      href: '#search-employers'
    },
    {
      label: 'Terms & Conditions',
      href: '#terms-and-conditions'
    },
    {
      label: 'Privacy',
      href: '#privacy'
    },
    {
      label: 'About Us',
      href: '#about-us'
    },
    {
      label: 'Contact Us',
      href: '#contact-us'
    }
  ],
  socialIcons: [
    {
      label: 'Facebook',
      src: 'Facebook.svg'
    },
    {
      label: 'Twitter',
      src: 'Twitter.svg'
    },
    {
      label: 'Google Plus',
      src: 'GooglePlus.svg'
    },
    {
      label: 'LinkedIn',
      src: 'LinkedIn.svg'
    }
  ]
};
