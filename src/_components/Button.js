import { Link } from "@/i18n/navigation";

function Button({
  href,
  children,
  onClick,
  className = "",
  rounded = "rounded-lg",
  bgColor = "bg-main-blue",
  textColor = "text-white",
  icon: Icon,
  iconPosition = "start",
  flipOnEnglish = false,
  type = "button",
  ...props
}) {
  // التعديل هنا: خلينا className في الآخر وتأكدنا إن الـ Hover يشتغل من غير تضارب
  const combinedClasses = `${rounded} px-4 py-3 inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 ${bgColor} ${textColor} ${className}`;

  const renderIcon = () => {
    if (!Icon) return null;
    if (typeof Icon === "object") return Icon;
    if (typeof Icon === "function") {
      return (
        <Icon className={`w-5 h-5 ${flipOnEnglish ? "ltr:rotate-180" : ""}`} />
      );
    }
    return null;
  };

  const content = (
    <>
      {iconPosition === "start" && renderIcon()}
      {children && <span>{children}</span>}
      {iconPosition === "end" && renderIcon()}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={combinedClasses}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
