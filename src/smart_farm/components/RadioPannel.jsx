function RadioPannel({name, fields, value, onChange}) {
  const radioGroupCss = "flex mb-1 h-fit";
  const radioCss = "hidden peer";
  const labelCss = "block px-5 py-2 border border-gray-200 bg-white rounded-md cursor-pointer select-none duration-200 transition-all ease-in-out peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-500 hover:border-blue-500 hover:text-blue_500";

  return (
    <div className={radioGroupCss}>
      {
        fields.map(({label: l, value: v}, i) =>
          <div key={i}>
            <input type="radio" className={radioCss} id={`input-radio-${name}-${v}`} name={name} value={v} onChange={e =>onChange(e.target.value)} checked={value == v}/>
            <label className={labelCss} htmlFor={`input-radio-${name}-${v}`}>{l}</label>
          </div>
        )
      }
    </div>
  );
}

export default RadioPannel;