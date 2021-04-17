import { useState } from "react";
import PageFilter from "../../Shared/Pagination/PageFilter";
import List from "../../Design/List";

const Pagination = ({ projects }) => {
  const MAX_PER_PAGE = 4;
  const [page, setPage] = useState(1);

  const handlePageClick = (page) => {
    setPage(page);
  };

  const maxPages = Math.ceil(projects.length / MAX_PER_PAGE);
  const pagedItems = projects.slice(
    (page - 1) * MAX_PER_PAGE,
    page * MAX_PER_PAGE
  );
  return (
    <>
      <div className="row">
        <List projects={pagedItems} students={pagedItems} />

        <PageFilter
          currentPage={page}
          max={maxPages}
          onClick={handlePageClick}
        />
      </div>
    </>
  );
};

export default Pagination;
