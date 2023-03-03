export default {
  siteTitle: 'Klog',
  siteDescription: 'KEGのBLOG、略してKlogです。',
  favicon: '/favicon.ico',
  siteImagePath: '/images/MyBlogTitle.png',
  footer: '© 2023 Klog',
  dateFormat: 'dd.MM.yyyy HH:mm',
  socialMedia: {
    twitter: 'KEG_0717',
    github: 'K1-2896',
  },
  pageSize: 5,
  categories: [
    {
      name: 'theme',
      color: 'btn-warning',
      image: '/images/theme.jpg',
      order: 1,
    },
  ],
  categorySettings: {
    order: 'name', // name | count
    layout: 'card', //button | card
    image: '',
    color: 'btn-primary',
    countVisibility: true,
  },
  searchOptions: {
    includeScore: true,
    includeMatches: true,
    keys: [
      { name: 'title', weight: 3 },
      { name: 'description', weight: 2 },
    ],
  },
  i18n: {
    search: {
      placeholder: 'Search post title and description...',
    },
    archive: {
      select: 'Select Year',
    },
    page: 'Page',
    resultFound: ' result(s) found',
  },
};
