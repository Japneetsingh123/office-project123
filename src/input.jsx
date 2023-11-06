


export const input = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  multiline,
  className,
}) => {
  

  
  const input_tailwind =
    'p-5 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60'

  return (
    <div className={('flex flex-col w-full gap-2', className)}>
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
      </div>
      {multiline ? (
        <textarea
          id={id}
          type={type}
          className={(input_tailwind, 'min-h-[10rem] max-h-[20rem] resize-y')}
          placeholder={placeholder}
        
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          className={(input_tailwind)}
          placeholder={placeholder}
          
        />
      )}
    </div>
  )
}




