import ErrorBoundary from "../components/commonComponents/ErrorBoundary";
import CheckoutHeader from "../components/checkOutPageComp.jsx/CheckoutHeader";
import DeliveryAddress from "../components/checkOutPageComp.jsx/DeliveryAddress";
import OrderSummaryCard from "../components/checkOutPageComp.jsx/OrderSummaryCard";
import { useParams, useNavigate } from "react-router-dom";
import { GET_CHECKOUT_PRODUCT } from "../graphql/query/getProduct";
import { useQuery } from "@apollo/client/react";
import { useState } from "react";
import { useMessage } from "../context/MessageContext";
import { CREATE_ORDER } from "../graphql/mutations/order";
import { useMutation } from "@apollo/client/react";

function SecureCheckOutPage() {
  const { showError } = useMessage();
  const { productId, quantity } = useParams();
  const navigate = useNavigate();

  const initialFormData = {
    fullName: "",
    phoneNum: "",
    streetAddress: "",
    city: "",
    state: "",
    pinCode: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  // handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // check phone number format
  const checkPhoneNumFormat = (num) => {
    const phoneRegex = /^[6-9]\d{9}$/;

    if (phoneRegex.test(num)) {
      return true;
    } else {
      console.log("Invalid phone number");
      return false;
    }
  };

  // apollo client
  const [createOrder, { loading: orderLoading }] = useMutation(CREATE_ORDER, {
    onCompleted: (data) => {
      // payment page pe bhejo order_id ke saath
      navigate(`/payment/${data.createOrder.orderId}`);
    },
    onError: (err) => {
      showError(err.message);
    },
  });

  // form submit
  const handleSubmit = (e, productId, quantity) => {
    e.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.phoneNum.trim() ||
      !formData.city.trim() ||
      !formData.pinCode.trim() ||
      !formData.state.trim() ||
      !formData.streetAddress.trim()
    ) {
      showError("Kuch To Khali Hai Daya");
      return;
    }

    if (formData.phoneNum) {
      const isValidPhone = checkPhoneNumFormat(formData.phoneNum);

      if (!isValidPhone) {
        showError("Bhai Phone Number Dal");
        return;
      }
    }

    if (
      formData.pinCode.trim().length !== 6 ||
      !/^\d+$/.test(formData.pinCode.trim())
    ) {
      showError("Pin Code 6 digit ka number hona chahiye");
      return;
    }

    createOrder({
      variables: {
        input: {
          productId: productId,
          quantity: parseInt(quantity),
          address: {
            fullName: formData.fullName.trim(),
            phoneNum: formData.phoneNum.trim(),
            streetAddress: formData.streetAddress.trim(),
            city: formData.city.trim(),
            state: formData.state.trim(),
            pinCode: formData.pinCode.trim(),
          },
        },
      },
    });
  };

  const { data, loading, error } = useQuery(GET_CHECKOUT_PRODUCT, {
    variables: { productId, quantity: parseInt(quantity) },
    skip: !productId,
  });

  return (
    <>
      <section className="p-3 md:p-10 text-white grid grid-cols-1 md:grid-cols-9 bg-[#0B1323] font-sans gap-5">
        <div className="col-span-5 space-y-5">
          <ErrorBoundary fallback={<div>Heading Component Fatta!</div>}>
            <CheckoutHeader />
          </ErrorBoundary>

          <ErrorBoundary fallback={<div>Heading Component Fatta!</div>}>
            <DeliveryAddress
              handleSubmit={handleSubmit}
              formData={formData}
              handleChange={handleChange}
            />
          </ErrorBoundary>
        </div>

        <div className="col-span-4">
          <ErrorBoundary fallback={<div>Product Info Component Fatta!</div>}>
            <OrderSummaryCard
              data={data}
              loading={loading}
              error={error}
              handleSubmit={handleSubmit}
              orderLoading={orderLoading}
            />
          </ErrorBoundary>
        </div>
      </section>
    </>
  );
}
export default SecureCheckOutPage;
