import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/Ladies_bags1.jpg';
import img2 from '../images/3piece1.webp';

const HoverBox = ({ products }) => {
  return (
    <div 
      style={{
        position: 'absolute', 
        top: '100%', 
        left: '0', 
        backgroundColor: 'white', 
        border: '1px solid #ccc', 
        padding: '10px', 
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        zIndex: 1,
        marginTop: '5px'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
        {products.map(product => (
          <div key={product.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link to={`/new_arrival`}>
              <img 
                src={product.img1 === '1.jpg' ? img1 : img2} 
                alt={product.name} 
                style={{ width: '200px', height: '175px', marginBottom: '5px' }} 
              />
            </Link>
            <span>{product.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverBox;



// import React from 'react';
// import img1 from '../images/1.jpg';
// import img2 from '../images/2.jpg';

// const HoverBox = ({ products }) => {
//   return (
//     <div 
//       style={{
//         position: 'absolute', 
//         top: '100%', 
//         left: '0', 
//         backgroundColor: 'white', 
//         border: '1px solid #ccc', 
//         padding: '10px', 
//         boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//         zIndex: 1,
//         marginTop: '5px'
//       }}
//     >
//       <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
//         {products.map(product => (
//           <div key={product.id} style={{ display: 'flex', alignItems: 'center' }}>
//             <img src={product.img1 === '1.jpg' ? img1 : img2} alt={product.name} style={{ width: '100px', height: '100px', margin: '10px' }} />
//             <span>{product.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HoverBox;
