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
  ctas: [
    {
      icon: 'job-alerts',
      title: 'Get instant job alerts',
      subtitle: 'Personalised job recommendations sent straight to your email.'
    },
    {
      icon: 'create-account',
      title: 'Create an account for free',
      subtitle:
        'Shortlist jobs, manage your job alerts and receive special offers.'
    },
    {
      icon: 'upload-resume',
      title: 'Upload your resume',
      subtitle:
        'Upload your resume so our employers can match your details to the best jobs.'
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
