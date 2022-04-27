import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailBlog() {
    const params = useParams()
    const [getParam, setGetParam] = useState('')
    useEffect(() => {
      setGetParam(params.article)
    }, [])
    

    return (
        <div>
            <p>Halo Banh Ini Detail Blog</p>
            <p>{getParam}</p>
        </div>
    )
}

export default DetailBlog;