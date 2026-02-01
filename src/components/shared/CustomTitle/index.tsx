export const CustomTitle = ({
  text,
  description = "",
  underlineText = "",
  classNameDescription = "text-[1.25rem] text-primary-blue font-bold",
  classContainer = "m-[30px] mx-[100px]",
}: {
  text: string;
  description?: string;
  underlineText?: string;
  classNameDescription?: string;
  classContainer?: string;
}) => {
  return (
    <div className={classContainer}>
      <h2 className="text-left text-[1.5rem] md:text-[2rem] text-primary-blue font-semibold">
        {text}
      </h2>
      <p className={classNameDescription}>
        <span className="underline decoration-[#90E0EF] decoration-[4px] underline-offset-8 text-primary-blue">
          {underlineText}
        </span>
        {description}
      </p>
    </div>
  );
};
