interface IItemProps {
  isSelected: boolean;
  activeColor: {
    bg: string;
    stroke: string;
    text: string;
    border: string;
  };
  onClick: (item: string) => void;
  children: string;
}

function CheckIcon({ activeColor }: { activeColor?: IItemProps['activeColor'] }) {
  return (
    <svg
      className="absolute top-0 right-0 z-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle fill={activeColor?.bg} cx="10" cy="10" r="10" />
      <path
        d="M5.76611 10.025L8.57255 12.9057L14.2338 7.09473"
        stroke={activeColor?.stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Item({ isSelected, children, activeColor, onClick }: IItemProps) {
  const itemCSS = {
    selected: `relative w-83 h-83 text-center text-body1 ${activeColor.text} rounded-full border border-solid ${activeColor.border}`,
    default:
      'relative w-83 h-83 text-center text-body1 text-gray10 rounded-full border border-solid border-gray4',
  };

  return (
    <button
      onClick={() => onClick(children)}
      className={isSelected ? itemCSS.selected : itemCSS.default}
      type="button"
    >
      {isSelected && <CheckIcon activeColor={activeColor} />}
      {children}
    </button>
  );
}
export default Item;
