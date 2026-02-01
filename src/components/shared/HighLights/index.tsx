import checkIcon from "../../../assets/icons/check.svg";

type HighLightsProps = {
  highlights: string[];
  className?: string;
  itemClassName?: string;
  iconWrapperClassName?: string;
  textClassName?: string;
};

export const HighLights = ({
  highlights,
  className = "flex flex-col gap-5",
  itemClassName = "flex items-center gap-4",
  iconWrapperClassName = "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(23,74,128,0.12)]",
  textClassName = "text-base md:text-lg font-medium text-[#123B4F]",
}: HighLightsProps) => {
  return (
    <ul className={className}>
      {highlights.map((text) => (
        <li key={text} className={itemClassName}>
          <span className={iconWrapperClassName}>
            <img src={checkIcon} alt="Check icon" className="h-4 w-4" />
          </span>
          <p className={textClassName}>{text}</p>
        </li>
      ))}
    </ul>
  );
};
