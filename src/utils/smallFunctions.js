// order status style
export const BadgeStyle = (status) => {
  let styleStatus = status.toLowerCase();
  if (styleStatus === "pending") {
    return "bg-amber-950/80 border-amber-800/60 text-amber-400";
  } else if (styleStatus === "delivered") {
    return "bg-emerald-950/80 border-emerald-800/60 text-emerald-400";
  } else if (styleStatus === "shipped") {
    return "bg-blue-950/80 border-blue-800/60 text-blue-400";
  } else if (styleStatus === "cancelled") {
    return "bg-red-950/80 border-red-800/60 text-red-400";
  }
};