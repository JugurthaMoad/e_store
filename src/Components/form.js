export const Input = ({ label, type, ...rest }) => {
  return (
    <label className=" h-24 flex flex-col justify-center">
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl font-medium text-gray-500 py-1">
        {label}
      </span>
      <input
        type={type}
        name={label}
        className="bg-white border-b w-full text-xl focus:outline-none focus:py-4"
        placeholder={`your ${label}`}
        {...rest}
      />
    </label>
  );
};

export const ValidateButton = ({ label, ...rest }) => {
  return (
    <button
      className="block p-2 w-full h-12 flex justify-center items-center  uppercase text-white bg-black my-4"
      {...rest}
    >
      {label}
    </button>
  );
};
