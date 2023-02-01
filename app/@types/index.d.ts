type ProviderIdType = 'google.com' | 'password';

type MembershipType = 'monthly' | 'annually' | 'permanent';

interface UserDto {
  username?: string;
  membership?: {
    id?: MembershipType;
    start_at?: Date | string;
    end_at?: Date | string;
  };
  point?: number;
  exp?: number;
  level?: number;
}

interface DiscordUserDto {
  id: string;
  username: string;
  email: string;
  avatar?: string;
}

interface BlogPostDto {
  id: string;
  title: string;
  excerpt: string;
  created_at: Date;
  feature_image: string;
  url: string;
  tags?: { name: string; id: string }[];
  authors: { name: string }[];
}
