export type Quest = {
  id: string;
  title?: string;
  description?: string;
  user_id: string;
  type: string;
  status: string;
  experience_points: number;
  due_date: string;
  company: {
    id: string;
    name: string;
    logo_url: string;
    linkedin_url: string;
  } | null;
  contact: {
    id?: string;
    first_name?: string;
    last_name?: string;
    profile_image?: string;
    linkedin_url?: string;
  } | null;
  job:
    | {
        id?: string;
        title?: string;
      }
    | Record<string, never>;
  created_at: string;
};
