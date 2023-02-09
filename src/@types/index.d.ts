type CharacterDto = {
  [key in CharacterParts]?: number[] | number;
};

interface UserDto {
  username?: string;
  character?: CharacterDto;
}

type CharacterParts = "body" | "eyes" | "cloth" | "head" | "face";
