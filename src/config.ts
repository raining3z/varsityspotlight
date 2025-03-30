export interface Sport {
  id: number;
  label: string;
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
};

export default config;
