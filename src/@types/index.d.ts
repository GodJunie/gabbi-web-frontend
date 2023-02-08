interface CharacterDto {
  body?: number;
  face?: number[];
  head?: number;
  cloth?: number;
  eyes?: number;
}

interface UserDto {
  username?: string;
  character?: CharacterDto;
}

type CharacterParts = "body" | "eyes" | "cloth" | "head" | "face";
