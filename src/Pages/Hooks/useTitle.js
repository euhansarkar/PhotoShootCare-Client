import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - PhotoShoot Care`
    }, [title])
}

export default useTitle;