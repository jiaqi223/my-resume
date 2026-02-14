
export function Button({ 
  children, 
  onClick, 
  className = '', 
  type = 'button', 
  variant = 'primary', // 预设样式类型
  style = {} 
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      // 组合基础类名、变体类名和外部传入的类名
      className={`custom-btn btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
}