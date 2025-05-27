import React from 'react';
import image from "../assets/images.jpg"
import { useDeleteProductMutation, useGetProductQuery } from '../redux/api/product';

const Home = () => {
  const { data, isLoading, error } = useGetProductQuery();
  const [deleteProduct] = useDeleteProductMutation();

  if (isLoading) return <p className="text-center mt-10 text-lg">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error!</p>;

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {data?.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center border"
          >
            <img
              src={item.image && item.image.startsWith("http") ? item.image : image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.desc}</p>
            <button
              onClick={() => handleDelete(item.id)}
              className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Home);
