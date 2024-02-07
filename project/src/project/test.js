// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// import ReactPaginate from 'react-paginate';

// // Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// export default function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <div>
//             <h3>Item #{item}</h3>  
//           </div>
//         ))}
//     </>
//   );
// }

// function PaginatedItems({ itemsPerPage }) {
//   // Here we use item offsets; we could also use page offsets
//   // following the API or data you're working with.
//   const [itemOffset, setItemOffset] = useState(0);

//   // Simulate fetching items from another resources.
//   // (This could be items from props; or items loaded in a local state
//   // from an API endpoint with useEffect and useState)
//   const endOffset = itemOffset + itemsPerPage;
//   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//   const currentItems = items.slice(itemOffset, endOffset);
//   const pageCount = Math.ceil(items.length / itemsPerPage);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % items.length;
//     console.log(
//       `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//   };

//   return (
//     <>
//       <Items currentItems={currentItems} />
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//       />
//     </>
//   );
// }

// // Add a <div id="container"> to your HTML to see the component rendered.
// // ReactDOM.render(
// //   <PaginatedItems itemsPerPage={4} />,
// //   document.getElementById('container')
// // );
import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

import gsap from "https://esm.sh/gsap";
import { useGSAP } from "https://esm.sh/@gsap/react";

const { useRef } = React;

function App() {
  const container = useRef();
  const circle = useRef();

  useGSAP((context) => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
        // use selectors...
      gsap.to(".box", { rotation: "+=360", duration: 3 });
      
      // or refs...
      gsap.to(circle.current, { rotation: "-=360" });
    });

    console.log(context);
    
  }, { scope: container }); // <-- scope for selector text (optional)

  return (
    <div className="App">
      <div ref={container} className="container">
        <div className="box gradient-blue">selector</div>
        <div className="circle gradient-green" ref={circle}>
          Ref
        </div>
      </div>
      <div className="box gradient-blue">selector</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);