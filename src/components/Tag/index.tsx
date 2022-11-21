import { TagComponent } from "./styles";

interface TagProps {
  text: string;
  changeBackground?: boolean;
}

export function Tag({ text, changeBackground = false }: TagProps) {
  return (
    <TagComponent changeBackground={changeBackground}>{text}</TagComponent>
  );
}
