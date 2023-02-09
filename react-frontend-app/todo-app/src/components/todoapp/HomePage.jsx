import { Fragment } from "react";
import {useParams, Link} from "react-router-dom"

export default function HomePage() {

    const {username} = useParams();

    return (
        <Fragment>
            <div>Home Page {username}</div>
            <Link to='/todo'>Go to Todo List</Link>
        </Fragment>

    )
}