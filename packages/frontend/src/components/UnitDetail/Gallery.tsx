import { Carousel } from "flowbite-react";

const Gallery = () => (
  <div className="h-96">
    <Carousel slide={false}>
      <img src="/condos/1.jpg" alt="..." />
      <img src="/condos/2.jpg" alt="..." />
      <img src="/condos/3.jpg" alt="..." />
      <img src="/condos/4.jpg" alt="..." />
      <img src="/condos/5.jpg" alt="..." />
      <img src="/condos/6.jpg" alt="..." />
      <img src="/condos/7.jpg" alt="..." />
    </Carousel>
  </div>
);

export default Gallery;
