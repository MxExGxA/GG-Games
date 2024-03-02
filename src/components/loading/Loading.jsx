import BtnLoading from "../load more button/BtnLoading";

const Loading = () => {
  return (
    <div className="loading-container fixed w-lvw h-lvh top-0 left-0 bg-black bg-opacity-80 text-white font-bold text-3xl flex items-center justify-center">
      <BtnLoading color={"white"} />
    </div>
  );
};

export default Loading;
