module.exports = {
  siteTitle: 'Mr Arms Length Mortgage',
  siteDescription: 'Educating Canadians how to invest in mortgages using their RRSPs.',
  authorName: 'Alain St Pierre',
  twitterUsername: 'aspcanada',
  authorAvatar: 'profile.jpg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  Hi there, my name is Alain St. Pierre, founder of Mr. Arm’s Length Mortgage and 
  ASP Canada Real Estate Group.  My passion is to teach Canadians how to invest in 
  mortgages using their RRSP’s (and other registered accounts). I’ve become the defacto 
  “Arm’s Length Mortgage” guy, as Ranked #1 on Google
  `,
  siteUrl: 'http://mr-arms-length-mortgage.com/',
  disqusSiteUrl: 'http://mr-arms-length-mortgage.com/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: 'cover.png', // file in content/images
  googleAnalyticsId: 'UA-27562409-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/icon.png',
  postsPerPage: 6,
  disqusShortname: 'mrarmslengthmortgage',
  headerTitle: 'Mr Arms Length Mortgage',
  headerLinksIcon: '', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'What Is It?',
      url: '/what-is-it',
    },
    {
      label: 'Benefits',
      url: '/what-is-it/benefits-features-in-an-arms-length-mortgage',
    },
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about-me',
    },
    {
      label: 'Contact',
      url: '/contact-me/expression-of-interest-form',
    },
    
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about-me',
        },
        {
          label: 'What Is It?',
          url: '/what-is-it',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/aspcanada',
        },
        {
          label: 'Website',
          url: 'https://www.alainstpierre.com',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/aspcanada',
        },
      ],
    },
  ],
}
