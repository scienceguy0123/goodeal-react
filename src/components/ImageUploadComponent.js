import React , { Component }from 'react';
import Resizer from "react-image-file-resizer";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newImages: [],
    };
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.onImageRemove = this.onImageRemove.bind(this);
  }

  fileChangedHandler(event) {
    var fileInput = false;
    if (event.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          event.target.files[0],
          300,
          300,
          "JPEG",
          60,
          0,
          (uri) => {
            // console.log(uri);
            this.setState({ newImages: this.state.newImages.concat(uri) });
            console.log(this.state);

                        
            //send latest data to parent component
            this.props.handleImages(this.state.newImages) 
          },
          "base64",
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
    }
  }

  onImageRemove(index) {
    this.state.newImages.splice(index, 1);
    this.setState({ newImages: this.state.newImages});

    //send latest data to parent component
    this.props.handleImages(this.state.newImages) ;
  }


  render() {
    return (
      <div className="upload-image">
        <input type="file" onChange={this.fileChangedHandler} />
        {this.state.newImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt="" width="100"></img>
            <button onClick={(e) => {this.onImageRemove(index)}}>Remove</button>
          </div>
        ))}
      </div>

    );
  }
}

export default ImageUpload;