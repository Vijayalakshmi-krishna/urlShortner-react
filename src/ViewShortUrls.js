import React, { useState, useEffect } from 'react'

const ViewShortUrls = () => {

    const [urlData, setUrlData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/getallurl")
            .then((res) => res.json())

            .then((data) => {

                setUrlData(data);
            });
    }, []);
    // console.log(urlData)

    // console.log("In view Page")
    // console.log(urlData)
    //console.log(urlData[0].longurl)
    const urlDelete = (shortid) => {
        //event.preventDefault()
        console.log(shortid)
        fetch(`http://localhost:3001/deleteurl/` + shortid, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        })
            .catch(error => console.error("Error: ", error))
            .then(() => console.log("Deleteted"));
    }

    return (
        <div>
            <hr></hr>
            <div>
                {urlData.map((url, index) => (
                    
                    <div className="urllist" key={index}>
                       
                        <p>{url.longurl}</p>
                        <p>
                            <a href={"http://localhost:3001/" + url.shorturl}
                                target="_blank">http://localhost:3001/{url.shorturl}
                            </a>

                        </p>
                        <p>
                            {url.description}
                            <span className="clickcount">
                                {url.clickcount}
                            </span>
                        </p>

                        <p>                            
                            <input type="button" className="delete" value = "Delete" onClick={()=>{urlDelete(url.shorturl)}}/>
                        </p>
                    </div>
                ))
                }
            </div>            
        </div>
    )
}


export default ViewShortUrls