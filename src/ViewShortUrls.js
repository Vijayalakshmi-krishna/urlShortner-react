import React, { useState, useEffect } from 'react'

const ViewShortUrls = () => {

    const [urlData, setUrlData] = useState([]);

    useEffect(() => {
        fetch("https://url-shortner-nodejs.herokuapp.com/getallurl")
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
        fetch(`https://url-shortner-nodejs.herokuapp.com/deleteurl/` + shortid, {
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
                            <a href={"https://url-shortner-nodejs.herokuapp.com/" + url.shorturl}
                                target="_blank">https://url-shortner-nodejs.herokuapp.com/{url.shorturl}
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