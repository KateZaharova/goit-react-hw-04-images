import { Loader } from "../Loader/Loader";
import { SearchBar } from "components/SearchBar/Searchbar";
import { Button } from "../Button/Button";
import { searchImg } from "../api";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Modal } from "../Modal/Modal";
import { useState, useEffect } from "react";
//const { Component } = require("react");

//query переименовала на request

export const App = () => {
  const [request, setRequest] = useState('');
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [currentBigImage, setCurrentBigImage] = useState('');
  const [totalHits, setTotalHits] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setRequest(evt.target.elements.request.value);
    setImages([]);
    setPage(1);
    ;
  }

  const handleLoadMore = () => {
    setPage(prevItems => prevItems + 1);
  };
  
  const showImage = (largeImageURL) => {
   // window.addEventListener('keydown', onKeyPress);
    setCurrentBigImage(largeImageURL);
  };

  const onClickBigImage = (evt) => {
    if (evt.target === evt.currentTarget) {
     //window.removeEventListener('keydown', onKeyPress);
      setCurrentBigImage('');
    }
  };

  const onKeyPress = (evt) => {
    console.log(evt.code)
    if (evt.code === 'Escape') {
     // window.removeEventListener('keydown', onKeyPress);
      setCurrentBigImage('');
    }
  };
  
  useEffect(() => {
    async function getImages() {
      try {
        setLoading(true);
        const newImages = await searchImg(request, page);
        setImages(prevItems => [...prevItems, ...newImages.hits]);
        setTotalHits(newImages.totalHits);
      }
      catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
  //HTTP REQUEST
}
    if (request !== '') {
      getImages();
    }    
    }, [request, page]); 
 

   return (
      <div>
        <SearchBar onSubmit={handleSubmit}/>  
        <ImageGallery images={images} onClick={showImage} />
        {loading && <Loader loader={loading} />}
        {(images.length > 0) &&
          (images.length < totalHits) &&
          (!loading) &&
          <Button onClick={handleLoadMore} />
        }
       {currentBigImage.length > 0 &&
         <Modal largeImageURL={currentBigImage}
           onClickBigImage={onClickBigImage}
          onKeyPress={onKeyPress} 
         />}
        
    </div>
  );
};

