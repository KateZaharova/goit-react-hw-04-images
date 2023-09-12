/*import { Loader } from "../Loader/Loader";
import { SearchBar } from "components/SearchBar/Searchbar";
import { Button } from "../Button/Button";
import { searchImg } from "../api";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Modal } from "../Modal/Modal";

const { Component } = require("react");

//query переименовала на request

export class App extends Component {
  state = {
    request: '',
    loading: false,
    images: [],
    page: 1,
    currentBigImage: '',
    totalHits:0,
  };

  handleSubmit = evt => {
    console.log(evt)
    evt.preventDefault();
    this.setState({
      request: evt.target.elements.request.value,
      images: [],
      page:1
    });
}

  
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
   };

  
  showImage = (largeImageURL) => {
    window.addEventListener('keydown', this.onKeyPress);
    this.setState({ currentBigImage: largeImageURL }); 
  }

    
  onClickBigImage = (evt) => {
    if (evt.target === evt.currentTarget) {
    window.removeEventListener('keydown', this.onKeyPress);  
      this.setState({currentBigImage: ""});
    }
  }
  

  onKeyPress = (evt) => {
    if (evt.code === 'Escape' && this.state.currentBigImage.length > 0) {
    window.removeEventListener('keydown', this.onKeyPress);
      this.setState({currentBigImage: ""});
    }
}

 

 async componentDidUpdate(prevProps, prevState) {
    if (prevState.request !== this.state.request ||
      prevState.page !== this.state.page) {
      
      try {
        this.setState({ loading: true });
        const newImages = await searchImg(this.state.request, this.state.page);
        this.setState(prevState => ({
          images: [...prevState.images, ...newImages.hits],
          totalHits: newImages.totalHits,
        }))
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
      //HTTP REQUEST
    }
  }
  

  render() {
    console.log(this.state.images);
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit}/>  
        <ImageGallery images={this.state.images} onClick={this.showImage} />
        {this.state.loading && <Loader loader={this.state.loading} />}
        {(this.state.images.length > 0) &&
          (this.state.images.length < this.state.totalHits) &&
          (!this.state.loading) &&
          <Button onClick={this.handleLoadMore} />
        }
        
        {this.state.currentBigImage.length > 0 && <Modal largeImageURL={this.state.currentBigImage} onClickBigImage={this.onClickBigImage} onKeyPress={this.onKeyPress} />}
        
    </div>
  );
}
};
*/