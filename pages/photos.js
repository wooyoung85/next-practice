import HeadInfo from "../components/HeadInfo"
import Image from 'next/image'
import photosStyles from "../styles/Photos.module.css"
import Link from "next/link"

const photos = ({ photos }) => {
    return (
        <div>
            <HeadInfo title="My Blog Photos"></HeadInfo>
            <h1>My Photos</h1>
            <ul className={photosStyles.photos}>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <Link href={`/photos/${photo.id}`}>
                            <a><Image src={photo.thumbnailUrl} width={100} height={100} alt={photo.title} />
                                <p>{photo.title}</p></a>
                        </Link>

                    </li>
                ))}

            </ul>
        </div>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`)
    const photos = await res.json();

    return {
        props: {
            photos
        }
    }
}

export default photos
