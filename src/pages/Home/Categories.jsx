

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

    // console.log(categories)
  return (
    <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-3 items-center px-5 max-w-7xl mx-auto py-10'>
        {
            categories.map(category => <div className='flex gap-2 items-center p-3 border border-gray-200 rounded-xl' key={category}>
                <img  className='h-14 w-14 object-cover' src={category.image} alt={category.category} />
                <h2 className='lg font-semibold'>{category.category}</h2>
            </div>)
        }
    </div>
  )
}
