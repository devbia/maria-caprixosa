import InputMask from "react-input-mask";

export const CheckBox = (props) => {
  const { label, checkboxClass, labelClass } = props;

  return (
    <div className={`flex gap-2 ${labelClass}`}>
      <input
        {...props}
        type="checkbox"
        className={`checkbox ${checkboxClass}`}
        defaultChecked={false}
      />
      {label}
    </div>
  );
};

export const Input = (props) => (
  <div className="form-control w-full max-w-xs">
    <label className="label m-0 pb-0">
      <span className="label-text bold mb-0 font-bold ">{props.label} {props?.obrigatorio && <span className="text-red-500">*</span>}</span>
    </label>
    <InputMask
      {...props}
      type={props?.type || "text"}
      placeholder={props?.placeholder}
      className={`input input-bordered w-full max-w-xs ${props?.isInvalid && 'border-red-500'}`}
    />
  </div>
);

export const TextArea = (props) => {
  const { label, placeholder } = props;

  return (
    <div className="form-control w-full">
      <label className="label m-0 pb-0">
        <span className="label-text bold mb-0 font-bold ">{label}</span>
      </label>
      <textarea
        {...props}
        defaultValue={props.children}
        placeholder={placeholder || ""}
        className="textarea resize-none textarea-bordered w-full"
      >
        {" "}
      </textarea>
    </div>
  );
};

export const Select = (props) => {
  const { items, label, defaultValue } = props;

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label pb-0">
        <span className="label-text font-bold pb-0">{label}</span>
      </label>
      <select className="select select-bordered" {...props}>
        <option disabled selected>
          Selecione
        </option>
        {items.map((item, i) => (
          <option key={i} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};
