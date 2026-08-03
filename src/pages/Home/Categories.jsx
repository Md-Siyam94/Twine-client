

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


export default function Categories() {

    const categories = [
        {
            "id": 1,
            "category": "T-Shirt",
            "image": "https://i.ibb.co/pjCG5cZH/1170398-round-neck-half-sleeve-t-shirt-100-cotton-fabric-bio-washed-gsm-180-removebg-preview.png"
        },
        {
            "id": 2,
            "category": "Shirt",
            "image": "https://i.ibb.co/rfzddn5N/image.png"
        },
        {
            "id": 3,
            "category": "Pants",
            "image": "https://i.ibb.co/39gWN9Nf/image.png"
        },
        {
            "id": 4,
            "category": "Hoodie",
            "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7"
        },
        {
            "id": 5,
            "category": "Jacket",
            "image": "https://images.unsplash.com/photo-1523398002811-999ca8dec234"
        },
        {
            "id": 6,
            "category": "Sneakers",
            "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        },
        {
            "id": 7,
            "category": "Saree",
            "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c"
        },
        {
            "id": 8,
            "category": "Polo Shirt",
            "image": "https://images.unsplash.com/photo-1581655353564-df123a1eb820"
        }
    ]
    return (
        <div className=' px-5 max-w-7xl mx-auto py-10'>
            <h1 className="text-4xl font-sans mb-4">Categories</h1>
            <Swiper
                slidesPerView={4}
                breakpoints={{
                    768: {
                        slidesPerView: 5,
                    },
                    1280: {
                        slidesPerView: 6,
                    },
                }}
                spaceBetween={30}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 4500,

                }}

                modules={[Pagination, Autoplay]}
            >
                {
                    categories.map((category, index) => <SwiperSlide className=' text-center' key={index}>
                        <img height={500} width={500} className='lg:h-28 h-20 lg:w-28 w-20 object-cover mx-auto rounded-full' src={category.image} alt={category.category} />
                        <h2 className='lg font-semibold mt-2'>{category.category}</h2>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}