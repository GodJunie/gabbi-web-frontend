type CharacterDto = {
  [key in CharacterParts]?: number[] | number;
};

interface UserDto {
  username?: string;
  character?: CharacterDto;
  membership?: string;
}

type CharacterParts = "body" | "eyes" | "cloth" | "head" | "face";

type HouseDto = {
  name: string;
  location?: string;
  members?: string[];
};
