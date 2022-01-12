// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseImage = (image: any) => {
  image = image.fields ? image.fields : image;
  const response = {
    imageName: image.imageName,
    imageFile: image.imageFile.fields.file.url,
    imageHeight: '',
    imageWidth: '',
    imageCaption: image.imageCaption,
    imageLink: image.link,
  };
  return response;
};

export default parseImage;
