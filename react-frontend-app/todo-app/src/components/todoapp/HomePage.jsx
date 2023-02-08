import {useParams} from "react-router-dom"

export default function HomePage() {

    const {username} = useParams();

    return (
        <div>Home Page {username}</div>
    )
}