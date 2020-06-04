import React, { useState } from 'react';
import InputComponent from './Inputcomponent'
import ViewShortUrls from './ViewShortUrls'

const UrlShortBox = () => {

    const [longurl, setLongUrl] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(false)
    //const [urlData, setUrlData] = useState([]);
    const data = {

        "longurl": longurl,
        "description": description
    }
    const submit = (event) => {
        event.preventDefault()
        fetch(`http://localhost:3001/generateURL`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .catch(error => console.error("Error: ", error))
            .then(response => {
                console.log("Success: ", JSON.stringify(response))
                //setUrlData(urlData.concat((response)))
            }
                
                );

                //console.log(urlData)
            
        
    }


    return (
        <form onSubmit={submit}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <label><h5>Paste your long URL Here</h5></label>
                    </div>
                    <InputComponent type="text" value={longurl} onChange={(value) => setLongUrl(value)} />

                </div>

                <div className="row">
                    <div className="col-lg-3">
                        <label><h5>Enter Description</h5></label>
                    </div>
                    <InputComponent type="text" value={description} onChange={(value) => setDescription(value)} />
                    {error === true ? (
                        <span>Enter a valid Url</span>
                    ) : null}
                </div>

                <div className="row">
                    <div className="col-lg-3">

                    </div>
                    <div className="col-lg-6">
                        <input type="submit" value="Generate URL" />
                    </div>
                </div>
            </div>
            <ViewShortUrls />
        </form>



    )
}

export default UrlShortBox
