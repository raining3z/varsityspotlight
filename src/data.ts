export interface Player {
  id: number;
  sportId: number;
  // sportId: number;
  // createdBy: string;
  // active: boolean;
  profile: {
    firstName: string;
    lastName: string;
    gender: string;
    position: string;
    // positionLong: string;
    // height: string;
    weight: number;
    // wingspan: string;
    // verticalLeap: number;
  };
  // school: {
  //   schoolName: string;
  //   city: string;
  //   state: string;
  //   schoolUrl: string;
  //   gpa: number;
  //   graduationYear: number;
  // };
  // skills: string[];
  // highlights: string;
  // coachNotes: string;
  // committed: string;
  // social: {
  //   twitter: string;
  //   facebook: string;
  //   linkedin: string;
  //   instagram: string;
  // };
  // image: string;
  // stats: {
  //   [key: string]: number;
  // };
}

export const players: Player[] = [
  {
    id: 1,
    sportId: 1,
    profile: {
      firstName: 'Aubrey',
      lastName: 'Chase',
      gender: 'F',
      position: 'PF',
      // positionLong: 'Power Forward',
      // height: '6\'4"',
      weight: 0,
      // wingspan: '6\'10"',
      // verticalLeap: 79,
    },
  },
  {
    id: 2,
    sportId: 2,
    profile: {
      firstName: 'Basia',
      lastName: 'Walls',
      gender: 'M',
      position: 'OL',
      // positionLong: 'Offensive Line',
      // height: '6\'11"',
      weight: 230,
      // wingspan: '6\'3"',
      // verticalLeap: 26,
    },
  },
  {
    id: 3,
    sportId: 3,
    profile: {
      firstName: 'Carter',
      lastName: 'Brooks',
      gender: 'M',
      position: 'CF',
      // positionLong: 'Center Forward',
      // height: '6\'2"',
      weight: 185,
      // wingspan: '6\'6"',
      // verticalLeap: 34,
    },
  },
  {
    id: 4,
    sportId: 4,
    profile: {
      firstName: 'Delaney',
      lastName: 'Rivera',
      gender: 'F',
      position: 'S',
      weight: 145,
    },
  },
  {
    id: 5,
    sportId: 1,
    profile: {
      firstName: 'Emerson',
      lastName: 'Lee',
      gender: 'F',
      position: 'SG',
      weight: 135,
    },
  },
  {
    id: 6,
    sportId: 2,
    profile: {
      firstName: 'Finn',
      lastName: 'Douglas',
      gender: 'M',
      position: 'QB',
      weight: 210,
    },
  },
  {
    id: 7,
    sportId: 3,
    profile: {
      firstName: 'Gia',
      lastName: 'Anderson',
      gender: 'F',
      position: 'LW',
      weight: 120,
    },
  },
  {
    id: 8,
    sportId: 4,
    profile: {
      firstName: 'Hudson',
      lastName: 'Blake',
      gender: 'M',
      position: 'MB',
      weight: 200,
    },
  },
  {
    id: 9,
    sportId: 1,
    profile: {
      firstName: 'Isla',
      lastName: 'Nguyen',
      gender: 'F',
      position: 'PG',
      weight: 125,
    },
  },
  {
    id: 10,
    sportId: 2,
    profile: {
      firstName: 'Jaxon',
      lastName: 'Taylor',
      gender: 'M',
      position: 'RB',
      weight: 205,
    },
  },
  {
    id: 11,
    sportId: 3,
    profile: {
      firstName: 'Kira',
      lastName: 'Santos',
      gender: 'F',
      position: 'RW',
      weight: 130,
    },
  },
  {
    id: 12,
    sportId: 4,
    profile: {
      firstName: 'Luca',
      lastName: 'Martinez',
      gender: 'M',
      position: 'OH',
      weight: 190,
    },
  },
];
