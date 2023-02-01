const DiscordCdnUrl = 'https://cdn.discordapp.com';

export function getDiscordAvaterImageUrl(data: DiscordUserDto): string {
  if (data.avatar) return `${DiscordCdnUrl}/avatars/${data.id}/${data.avatar}.png`;
  else return '';
}
