export const CustomTitle = ({
  text,
  description = "",
  underlineText = "",
  classNameDescription = "text-[1.25rem] text-primary-blue font-bold",
  classContainer = "m-[30px] mx-[100px]",
  textColor = "text-primary-blue",
}: {
  text: string;
  description?: string;
  underlineText?: string;
  classNameDescription?: string;
  classContainer?: string;
  textColor?: string;
}) => {
  return (
    <div className={classContainer}>
      <h2 className={`text-left text-[1.5rem] md:text-[2rem] ${textColor} font-semibold`}>
        {text}
      </h2>
      <p className={`${classNameDescription} ${textColor}`}>
        <span className={`underline decoration-[#90E0EF] decoration-[4px] underline-offset-8 ${textColor}`}>
          {underlineText}
        </span>
        {description}
      </p>
    </div>
  );
};
