import { useEffect, useState } from "react";
import CategoryRow from "../category row/CategoryRow";
import SectionTitle from "../section Title/SectionTitle";
import { BiCategoryAlt } from "react-icons/bi";
import { apiRequest } from "../../utils/apiRequest";
import { multiQueryTemplate } from "../../utils/apiQueries";
import Loading from "../loading/Loading";
import { useDispatch } from "react-redux";
import { handleLoadState } from "../../redux/loadingSlice";

const gameThemes = [
  { id: 1, name: "Action" },
  { id: 19, name: "Horror" },
  { id: 38, name: "OpenWorld" },
  { id: 21, name: "Survival" },
  { id: 34, name: "Educational" },
  { id: 17, name: "Fantasy" },
  { id: 27, name: "Comedy" },
];

let multiQuery = "";
gameThemes.forEach((theme) => {
  multiQuery += multiQueryTemplate(theme.name, theme.id);
});

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [categoriesData, SetCategoriesData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading) {
      dispatch(handleLoadState());
    }
  }, [loading]);

  useEffect(() => {
    const apiRes = async () => {
      const config = {
        method: "post",
        path: "multiquery",
        data: multiQuery,
      };
      const res = await apiRequest(config);
      SetCategoriesData(res);
    };
    apiRes().finally(() => setLoading(false));
  }, []);
  return (
    <div
      id="categories"
      className="categories-container min-h-lvh flex flex-col items-center w-3/4 pt-10 pb-10"
    >
      {!loading ? (
        <>
          <SectionTitle
            title={"Categories"}
            icon={
              <BiCategoryAlt className="text-red-700 text-[13rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            }
          />
          {categoriesData &&
            categoriesData?.map((category) => (
              <CategoryRow
                key={category.name}
                title={category.name.split(" ")[0]}
                categoryData={category}
              />
            ))}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Categories;
