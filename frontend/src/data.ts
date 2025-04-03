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
