import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const result =
    score >= 90
      ? "green"
      : score >= 80
      ? "yellow"
      : score >= 70
      ? "orange"
      : score > 50
      ? "red"
      : "";
  return (
    <Badge colorScheme={result} fontSize="14px" paddingX={2} borderRadius={4}>
      {score}
    </Badge>
  );
};

export default CriticScore;
