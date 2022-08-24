import { BruhComponent } from "./BruhComponent";

const bruhEffectProps = [
  "left-24 -top-[8rem] rotate-180",
  "-right-[8rem] top-0 -rotate-90",
  "right-24 -bottom-[10rem]",
  "-left-[10rem] bottom-0 rotate-90",
];

interface BruhEffectProps {
  triggered?: boolean;
  randomNum: number;
}

export const BruhEffect = ({ triggered, randomNum }: BruhEffectProps) => (
  <>
    {bruhEffectProps.map((position, index) => (
      <BruhComponent
        key={index}
        index={index + 1}
        triggered={triggered}
        randomNum={randomNum}
        position={position}
      />
    ))}
  </>
);
