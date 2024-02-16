import React from "react";

const App = () => {
  const products = [
    {
      id: 1,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE4xT1sEp8Wtp3Y5u6IMYMz5l5jQ701-MDfMAgszDsDpTcZv2_z4lRj6zGbUus9R5fow&usqp=CAU",
      title: "Pomegranate",
      price: 24,
    },
    {
      id: 2,
      thumbnail: "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Avocados-3d84a3a.jpg?quality=90&resize=556,505",
      title: "Avocado",
      price: 53,
    },
    {
      id: 3,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1xDJqojK9rds4B4d9svK-ix3bf_YsL7Ma4w&usqp=CAU",
      title: "Grapes",
      price: 65,
    },
    {
      id: 4,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTDeIaeOJ7CSPvLIq3lChxCxPdtFH1MctgQ&usqp=CAU",
      title: "Pineapple",
      price: 30,
    },  {
      id: 5,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfnESPea1OfS8FVtyTcFx3RFyjG5aTrgPFuQ&usqp=CAU",
      title: "Banana",
      price: 64,
    },
    {
      id: 6,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6eluXzxsKXp3MLH4OhirwCrPm2Ivc4hxGQ&usqp=CAU",
      title: "Orange",
      price: 54,
    },
    {
      id: 7,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlX6xeBZQCd5t98yIHUyL6s8mzxb7ESU1OYg&usqp=CAU",
      title: "Strawberry",
      price: 69,
    },
    {
      id: 8,
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR35dKWN9Y3pSc7Q3wu-4yOwZEt0X6b00P-g&usqp=CAU",
      title: "Mango",
      price: 50,
    },
    
  ];

  return (
    <div className="container mx-auto mt-10">
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded p-4 flex flex-col justify-between">
          <img
            className="mx-auto"
            src={product.thumbnail}
            alt={product.title}
          />
          <div className="flex flex-col items-center">
            <h3 className="text-center mt-2 text-lg font-semibold">
              {product.title}
            </h3>
            <p className="text-center mt-1 text-gray-700">${product.price}</p>
          </div>
          <button className="block mx-auto mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default App;
