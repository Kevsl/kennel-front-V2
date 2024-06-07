import React, { useEffect } from 'react'

export const InputTest = ({
  register,
  inputType,
  inputName,
  errorName,
}: any) => {
  useEffect(() => {
    console.log(register)
  }, [register])

  return (
    <div>
      <input
        type={inputType}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
        {...register(inputName, { required: true })}
      />
      {errorName && (
        <p className="text-red-600">Le champ {inputName} est requis</p>
      )}
    </div>
  )
}
