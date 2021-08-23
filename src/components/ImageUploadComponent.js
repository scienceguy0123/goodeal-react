import React , { useRef, useState, useEffect }from 'react';
import ImageUploading from 'react-images-uploading';

export const ImageUpload = (props) => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 6;

    const onChange = ( imageList, addUpdateIndex) => {
        // data for submit
       
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
        props.handleImages(imageList);
        
      };

    // const handleImages = (imageList) =>{
    //   props.handleImages(imageList)
    // }
      return (
        <div className="App">
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
            
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <button type='button'
                  style={isDragging ? { color: 'red' } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
                &nbsp;
                <button onClick={onImageRemoveAll} type='button'>Remove all images</button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image['data_url']} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <button onClick={() => onImageUpdate(index)} type='button'>Update</button>
                      <button onClick={() => onImageRemove(index)} type='button'>Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>
      );
    }
    