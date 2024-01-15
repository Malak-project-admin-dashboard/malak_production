import React, { useState,useEffect } from 'react';
import axios from "axios";

import drage3 from "./food.png";
const itemsPerPage = 4; // Define how many items to display per page 



const items = [
    { id: 1, title: 'PROFINAL', img: drage3, desc: 'مسكن بروفينال (حسب تصريح الشركه)' },
    { id: 2, title: 'Item 2', img: drage3, desc: 'Description for item 2' },
    { id: 3, title: 'Item 3', img: drage3, desc: 'Description for item 3' },
    { id: 4, title: 'Item 4', img: drage3, desc: 'Description for item 4' },
    { id: 5, title: 'Item 5', img: drage3, desc: 'Description for item 5' },
    { id: 6, title: 'Item 6', img:drage3, desc: 'Description for item 6' },
    { id: 7, title: 'Item 7', img: drage3, desc: 'Description for item 7' },
    { id: 8, title: 'Item 8', img:drage3, desc: 'Description for item 8' },
  ];
function FoodCard() {
    const [currentPage, setCurrentPage] = useState(1); // Initialize the current page to 1
    const [foodData, setFoodData] = useState([]);

  //get all accepted food
  useEffect(() => {
    async function fetch() {
      axios
        .get("http://localhost:8000/getAllFoods")
        .then((response) => {
          
          setFoodData(response.data);
          console.log(foodData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetch();
  }, []);







    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  
    const totalPages = Math.ceil(items.length / itemsPerPage);
  
    const handleClick = (event, page) => {
      event.preventDefault();
      setCurrentPage(page);
    };
  
    const renderPageNumbers = () => {
      const pageNumbers = [];
  
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
            <a href="/" className="page-link" onClick={(event) => handleClick(event, i)}>
              {i}
            </a>
          </li>
        );
      }
  
      return pageNumbers;
    };
  
  return (
    <>
         {foodData.map((item) => {
        return (
          <div>
            <div>
              <h2>{item.foodName}</h2>
              <img src={item.foodUrl} alt="" />
              <p>{item.foodDesc}</p>
            </div>
          </div>
        );
      })}
      <div>
      <div className="row">
        {currentItems.map((item) => (
          <div className="col-lg-6" key={item.id}>
            <div className="card">
              <h2 className="card-title">{item.title}</h2>
              <img className="img-drage" src={item.img} alt="" />
              <p className="card-desc pragragh">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">{renderPageNumbers()}</ul>
      </nav>
    </div> 
    </>
  )
}

export default FoodCard;
