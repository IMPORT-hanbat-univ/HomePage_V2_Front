import { useState } from "react";

const Pagenation = ({ 
  total, //전체 포스트 수
  postsPerPage, // 한번에 보여줄 포스트 수
  currentPage, // 현재 페이지
  setCurrentPage // 현재 페이지 설정 함수
}) => {
  const totalPages = Math.ceil(total / postsPerPage); // 전체 페이지 수
  const displayedPageCount = 10; // 한번에 표시될 페이지 수
  const [startPage, setStartPage] = useState(1); // 페이징 시작 번호

  currentPage > totalPages ? setCurrentPage(totalPages) : null;

  const prevButtonClick = () => {
    currentPage === 1 ? 
      null : (
      setCurrentPage(currentPage - 1),
      currentPage % displayedPageCount === 1 ? 
        setStartPage(startPage - displayedPageCount) : 
        null
    )
  }

  const nextButtonClick = () => {
    currentPage === totalPages ? 
      null : (
      setCurrentPage(currentPage + 1),
      currentPage % displayedPageCount === 0 ?
        setStartPage(startPage + displayedPageCount) :
        null
    )
  }

  return (
    <nav>
      <button onClick={prevButtonClick}>
        {'<'}
      </button>

      {Array(totalPages)
        .fill()
        .map((arr, i) => (
          <buttons
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </buttons>
        ))
        .slice(startPage - 1, startPage + displayedPageCount - 1)
      }

      <button onClick={nextButtonClick}>
       {'>'}
      </button>
    </nav>
  );
}

export default Pagenation;