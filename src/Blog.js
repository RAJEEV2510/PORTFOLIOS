import React from 'react';
import Title from './Title';

function Blog(props) {
    return (
        <div className="blogs">
                <Title title={"My own Blog"} span={"blog"}></Title>
                <div className="allblogs">
                    <div className="blog1">    
                        <img src="https://technofaq.org/wp-content/uploads/2017/06/redroom-620x350.png"></img>
                        <h4>Hacking awareness blog</h4>
                        <br></br>
                        <a href="http://hackingcyber.epizy.com/?i=1">Visit</a>
                        
                    </div>    
                    <div className="blog2">    
                        <img src="https://lh6.googleusercontent.com/proxy/upU-Db-GVw5PY444sSSHtWjntNtp2Gb3Z1e1EBHTeZRPOQi6W7X3Udf3T8sWAA27rp0HYXas1Q2FMkUpumZNekiWO5MdoocDz9340GYGSJ-eWi8JH5eq8FU5z-2d30VAhAHd3Oc=w945-h600-p-k-no-nu"></img>
                        <h4>Techonolgy awareness blog</h4>
                        <br></br>
                        <a href="https://techupdateq.blogspot.com/">Visit</a>
                    
                    </div>    
                    <div className="blog3">    
                        <img src="https://1.bp.blogspot.com/-YuB8CuJTwzM/Xa8wnBL-j5I/AAAAAAAABrg/CdY3jpnS4pcei3ES3xCNy5KvGOEgGKYHQCLcBGAsYHQ/w945-h600-p-k-no-nu/Untitled123.png"></img>
                        <h4>Coding blog</h4>
                        <br></br>
                        <a href="https://codingso.blogspot.com/">Visit</a>
                    </div>    
                </div>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
        </div>
    );
}

export default Blog ;