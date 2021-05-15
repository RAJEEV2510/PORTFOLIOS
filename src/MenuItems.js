import React from 'react';
function MenuItems({menuitems}) {
    return (
        <div className="portfolio">
            {
                menuitems.map((item)=>{

                    return (<>

                            <div className="my-portfolio">
                                <div className="image-data">
                                    <img src={item.image} alt="no-image"></img>
                                
                                <ul className="hover-items">
                                    <li>
                                        <a href={item.link1}>{item.icon1}</a>
                                    </li>
                                   
                                </ul>
                                </div>
                                <h5 className="h5-title">
                                    <br></br>
                                    {item.title}
                                </h5>
                               
                            </div>
                    </>)
                })
            }
        </div>
    );
}

export default MenuItems;