export interface Sport {
  id: number;
  label: string;
}

export interface NavigationLink {
  id: number;
  label: string;
  link: string;
}

export interface Navigation extends NavigationLink {
  subNav: NavigationLink[];
}

const config = {
  sports: [
    {
      id: 1,
      label: 'Basketball',
    },
    {
      id: 2,
      label: 'Football',
    },
    {
      id: 3,
      label: 'Baseball',
    },
    {
      id: 4,
      label: 'Volleyball',
    },
  ] as Sport[],

  navigation: [
    {
      id: 1,
      label: 'Home',
      link: '/link',
    },
    {
      id: 2,
      label: 'Players',
      link: '/players',
      subNav: [
        {
          id: 1,
          label: 'Basketball',
          link: '/players/basketball',
        },
        {
          id: 2,
          label: 'Baseball',
          link: '/players/baseball',
        },
        {
          id: 3,
          label: 'Football',
          link: '/players/football',
        },
        {
          id: 4,
          label: 'Volleyball',
          link: '/players/volleyball',
        },
      ],
    },
    {
      id: 3,
      label: 'Another Menu',
      link: '/players',
      subNav: [
        {
          id: 1,
          label: 'Another Item',
          link: '/players/basketball',
        },
        {
          id: 2,
          label: 'Another Item',
          link: '/players/baseball',
        },
      ],
    },
  ] as Navigation[],
};

export default config;
