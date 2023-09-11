import {Img } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({item, onClick}) => {
    return (
        <>
            <Img src={item.webformatURL} alt={item.tags} className="gallery-item" onClick={() => {onClick(item.largeImageURL)}} />
        </>
    )
}