interface BruhComponentProps {
  triggered?: boolean;
  randomNum: number;
  position: string;
  index: number;
}

export const BruhComponent = ({
  triggered,
  randomNum,
  position,
  index,
}: BruhComponentProps) => (
  <p
    className={`fixed text-[25rem] select-none transition ease-in-out delay-100 ${position} ${
      triggered && randomNum == index ? "opacity-40" : "opacity-0"
    }`}
  >
    🗿
  </p>
);
