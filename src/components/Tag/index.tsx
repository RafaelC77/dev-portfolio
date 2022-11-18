import { TagComponent } from "./styles";

interface TagProps {
  text: string;
}

export function Tag({ text }: TagProps) {
  return <TagComponent>{text}</TagComponent>;
}
