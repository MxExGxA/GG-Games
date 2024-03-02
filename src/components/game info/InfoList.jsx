import PropTypes from "prop-types";

const InfoList = ({ data, title }) => {
  return (
    <div className="info-list-container mb-5">
      <h3 className="info-list-header text-xl font-medium">{title}</h3>
      <ul className="list *:ml-10 *:truncate *:max-w-48 *:border-l-4 *:pl-2">
        {data?.map((d, index) => {
          if (index < 19) {
            return (
              <li title={d.name} key={index}>
                {d.name}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

InfoList.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
};

export default InfoList;
