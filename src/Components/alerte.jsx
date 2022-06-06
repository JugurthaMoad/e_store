export const AlertMessage = ({ active, message, hundleAlerte }) => {
  return (
    <div
      className={
        active === true ? "w-screen h-screen fixed bottom-0 z-[280]" : "hidden"
      }
    >
      <div className="w-screen h-screen  fixed bottom-0  opacity-50 z-[200] bg-black"></div>
      <div className="w-screen h-screen fixed bottom-0 flex  justify-center items-center z-[200]">
        <div className="w-2/3 h-48 bg-white text-black flex flex-col justify-center items-center rounded">
          <span className="w-full p-2 text-red-900 z-[380] block text-center text-3xl">
            {message}
          </span>
          <span
            onClick={() => hundleAlerte()}
            className="block p-2 bg-black text-white"
          >
            Ok
          </span>
        </div>
      </div>
    </div>
  );
};
