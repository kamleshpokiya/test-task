const CustomeButton = ({
  icon,
  label,
  classNameContainer,
  onClick,
}: {
  icon?: React.ReactNode;
  label: string;
  classNameContainer?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`flex items-center  gap-2 rounded-[8px] px-[14px] py-3 text-sm ${classNameContainer}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default CustomeButton;
