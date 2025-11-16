// import React from 'react';
// import { Link } from 'react-router-dom';

// const CartProductCard = ({cartProduct}) => {
//     console.log(cartProduct);
//     const {productId, productImage, productName, userName, userEmail, price, color, size, description} = cartProduct || {}
//     return (
//         <tr>
//             <td>
//                 <div className="flex items-center gap-3">
//                     <div className="avatar">
//                         <Link to={productImage} >
//                             <img 
//                             className='w-20 h-20 object-cover'
//                                 src={productImage}
//                                 alt="product Image" />
//                         </Link>
//                     </div>
//                     <div>
//                         <div className="font-bold">Name: {productName}</div>
//                         <div className="text-sm opacity-50">United States</div>
//                     </div>
//                 </div>
//             </td>
//             <td>
//                 Zemlak, Daniel and Leannon
//                 <br />
//                 <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
//             </td>
//             <td>Purple</td>
//             <th>
//                 <button className="btn btn-ghost btn-xs">details</button>
//             </th>
//         </tr>
//     );
// };

// export default CartProductCard;