import { Minus, Plus, Trash2, ArrowLeft, WalletCards } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client/react";
import { DELETE_CART_DATA } from "../../graphql/mutations/product";
import { useMessage } from "../../context/MessageContext";

const CartItem = ({ item }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(item.quantity);
  const { showError, showSuccess } = useMessage();

  const [deleteCartData, { loading }] = useMutation(DELETE_CART_DATA, {
    refetchQueries: ["GetCartData"],
  });

  const handleDelete = async () => {
    try {
      const { data } = await deleteCartData({
        variables: {
          productId: item.productId,
        },
      });

      showSuccess(data?.deleteCartData?.message);
    } catch (error) {
      showError(error?.message);
    }
  };

  const handleCheckOut = () => {
    navigate(`/check-out/${item.productId}/${quantity}`);
  };

  return (
    <div className="grid grid-cols-[66px_minmax(0,1fr)_66px_90px_auto] items-center gap-3 border-b border-[#202a40] px-4 py-4 last:border-b-0">
      {/* Product Image */}
      <div className="relative h-[70px] w-[70px] overflow-hidden rounded-sm bg-[#080f20]">
        <img
          src={item.image}
          alt={item.productName}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Information */}
      <div className="min-w-0">
        <h3 className="truncate text-[15px] font-bold text-gray-200">
          {item.productName}
        </h3>

        {/* Stock */}
        <p className="mt-1 truncate text-[9px] font-semibold text-emerald-400">
          ● {item.inStock ? "In Stock" : "Out Of Stock"}
        </p>

        {/* Details */}
        <p className="mt-1 truncate text-[10px] text-gray-400">
          {item.description}
        </p>
      </div>

      {/* Quantity */}
      <div className="flex h-7 items-center justify-between rounded-sm bg-[#080f20] px-2">
        <button
          disabled={quantity === 1}
          className="text-gray-400 hover:text-white"
          onClick={() => setQuantity((prev) => prev - 1)}
        >
          <Minus size={12} />
        </button>

        <span className="text-[12px] text-white">{quantity}</span>

        <button
          className="text-gray-400 hover:text-white"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <Plus size={12} />
        </button>
      </div>

      {/* Price */}
      <div className="text-right">
        {item.salePrice ? (
          <>
            <p className="text-[14px] font-bold text-orange-400">
              ₹{item.salePrice}
            </p>

            <p className="text-[10px] text-gray-500 line-through">
              ₹{item.price}
            </p>
          </>
        ) : (
          <>
            <p className="text-[14px] font-bold text-orange-400">
              ₹{item.price}
            </p>
          </>
        )}
      </div>

      <div className="flex flex-col gap-5 items-end">
        {/* Delete */}
        <button
          className="text-gray-500 transition hover:text-red-400"
          title="Remove item"
          disabled={loading}
          onClick={handleDelete}
        >
          <Trash2 size={16} />
        </button>

        {/* Check Out Process */}
        <button
          type="button"
          onClick={handleCheckOut}
          className="group inline-flex items-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-[12px] font-semibold text-cyan-400 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:text-cyan-300 active:scale-95 cursor-pointer"
          title="Proceed to checkout"
        >
          <span>Checkout</span>
          <WalletCards
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </div>
  );
};

const MyCart = ({ data, loading, error }) => {
  const navigate = useNavigate();
  const totalData = data?.getCartData?.length;

  if (loading)
    return (
      <>
        <div className="bg-gray-800 flex items-center justify-center">
          Loading...
        </div>
      </>
    );

  if (error)
    return (
      <>
        <div className="flex justify-center items-center bg-gray-800">
          {error.message}
        </div>
      </>
    );

  return (
    <main>
      {/* Header */}
      <div className="mb-4 flex items-center gap-2">
        <h1 className="text-[24px] font-bold">My Cart</h1>

        <span className="rounded-full bg-blue-600/20 px-2 py-0.5 text-[12px] font-bold text-blue-400">
          {totalData} ITEMS
        </span>
      </div>

      {/* Cart Container */}
      <div className="overflow-hidden rounded-md bg-[#151e32]">
        {data?.getCartData?.map((item) => (
          <CartItem key={item.cartId} item={item} />
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="mt-6 flex items-center justify-between">
        {/* Continue Shopping */}
        <button
          onClick={() => navigate("/filter")}
          className="
            flex items-center gap-1
            text-[12px] font-semibold
            text-gray-300
            transition hover:text-white
          "
        >
          <ArrowLeft size={12} />
          Continue Hardware Shopping
        </button>
      </div>
    </main>
  );
};

export default MyCart;
