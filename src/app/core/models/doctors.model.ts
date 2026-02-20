export interface Doctor {
  _id?: string;
  name: string;
  slug: string;
  specialty: string;
  city: string;
  hospital: string;
  experience: number;
  fee: number;
  verified: boolean;
  image?: string;
}
