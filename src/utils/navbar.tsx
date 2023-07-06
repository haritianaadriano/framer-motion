import { useRouter } from "next/router"

export default function Navbar(){
    const router = useRouter();

    function toLanding(){
        router.push("/landing");
    }

    function toButton(){
        router.push("/button");
    }

    function toCard(){
        router.push("/card")
    }

    return(
        <div>
            <nav>
            <ul>
                <li onClick={toLanding}><a>Home</a></li>
                <li onClick={toButton}><a>Button</a></li>
                <li onClick={toCard}><a>Card</a></li>
            </ul>
            </nav>
        </div>
    )
}