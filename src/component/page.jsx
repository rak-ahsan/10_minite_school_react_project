import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="container vh-100 d-flex justify-content-center v-100 align-items-center">
            <div className="row">
              <div className="not text-center">
                 <h1>Oops! You seem to be lost.</h1>
                 <h1 style={{color:"red"}}>🥺 404 Not Found</h1>
              </div>
            </div>
        </div>
    )
}