import { Photo } from './photo';

export interface Member {
  id: number;
  username: string;
  age: number;
  imageUrl: string;
  dateOfBirth: Date;
  createdAt: Date;
  knownAs: string;
  lastActive: Date;
  gender: string;
  bio: string;
  interests: string;
  city: string;
  country: string;
  photos: Photo[];
}
