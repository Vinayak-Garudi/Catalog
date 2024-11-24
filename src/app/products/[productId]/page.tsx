interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { productId } = params;
  const idForUpdate: boolean = productId !== "add";

  return (
    <div>
      <h1>Product ID: {idForUpdate ? productId : ""}</h1>
    </div>
  );
};

export default ProductPage;
