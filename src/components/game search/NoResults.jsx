import { GoAlertFill } from "react-icons/go";

const NoResults = () => {
  return (
    <div className="self-center py-[18px] text-lg text-red-700 flex items-center">
      No Results <GoAlertFill className="ml-2" />
    </div>
  );
};

export default NoResults;
