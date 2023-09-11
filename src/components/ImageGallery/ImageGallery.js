import {ImageGalleryList, ImageGalleryItemLi} from "./ImageGallery.styled";
import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({images, onClick}) => {
    return (
        <>
        <ImageGalleryList className="gallery">
                {images.map(item => (
                 <ImageGalleryItemLi key={item.id}>
                     <ImageGalleryItem item={item} onClick={onClick} />   
                 </ImageGalleryItemLi>
                
                ))}
        </ImageGalleryList>
        </>
        
    )
}