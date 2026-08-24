import { Header } from "../components/Header"
import './notfound.css'
export function NotFoundPage() {
    return (
        <><Header />
            <title>not found</title>

            <div className="not-found">
                <p>Not Found! 404</p>
            </div>
        </>
    )
}