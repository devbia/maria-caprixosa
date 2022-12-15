

export const CheckBox = ({ label, checkboxClass = "", labelClass = "" }) => (<div className={`flex gap-2 ${labelClass}`}><input type="checkbox" className={`checkbox ${checkboxClass}`} />{label}</div>); 