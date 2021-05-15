import React from 'react';

function Category({setCategories}) {
    const category=["ALL","Python","Javascript","Firebase+react","Firebase+js","hacking","Nodejs","mern","reactnative"]
    return (
        <>
        <div className="category">
            {category.map((item)=>{

                return(
                    <>
                      <div className="category-btn">
                             <button className="btns" onClick={()=>{
                                 setCategories(item)
                             }}> {item}</button>
                     </div>

                    </>
                )
            })}
                     
        </div>
        </>
    );
}

export default Category;