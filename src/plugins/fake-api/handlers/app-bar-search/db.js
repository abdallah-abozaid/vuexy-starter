export const db = {
  searchItems: [
    {
      title: 'Dashboard',
      url: { name: 'dashboards-analytics' },
      category: 'dashboards',
    },
    {
      title: 'Apps & Pages',
      category: 'appsPages',
      children: [
        {
          url: { name: 'apps-calendar' },
          icon: 'tabler-calendar',
          title: 'Calendar',
        },
        {
          url: { name: 'apps-user-list' },
          icon: 'tabler-users-group',
          title: 'User List',
        },
        {
          url: { name: 'apps-user-view-id', params: { id: 21 } },
          icon: 'tabler-eye',
          title: 'User View',
        },
        {
          url: { name: 'pages-user-profile-tab', params: { tab: 'profile' } },
          icon: 'tabler-user-circle',
          title: 'User Profile - Profile',
        },
        {
          url: { name: 'pages-pricing' },
          icon: 'tabler-currency-dollar',
          title: 'Pricing',
        },
        {
          url: { name: 'pages-faq' },
          icon: 'tabler-help-circle',
          title: 'FAQ',
        },
        {
          url: { path: '/pages/misc/page-not-found' },
          icon: 'tabler-alert-circle',
          title: 'Page Not Found - 404',
        },
        {
          url: { path: '/pages/misc/not-authorized' },
          icon: 'tabler-user-x',
          title: 'Not Authorized - 401',
        },
      ],
    },
  ],
}
