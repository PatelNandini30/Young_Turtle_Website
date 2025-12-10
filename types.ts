export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  image: string;
}

export interface JobPost {
  id: string;
  title: string;
  team: string;
  location: string;
  seniority: string;
  description: string[];
}

export interface Quote {
  id: string;
  text: string;
  author: string;
  role: string;
}

export interface Product {
  id: string;
  title: string;
  type: 'AIF' | 'Solutions';
  description: string;
  features: string[];
}
