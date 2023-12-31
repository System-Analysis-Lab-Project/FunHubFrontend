import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { RatingStars } from "./RatingStars";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { toast } from "react-toastify";
/* eslint-disable react/prop-types */
export default function E_Card({ product, id }) {
  const { image, name, price, description, rating, numReviews, countInStock } =
    product;
  const dispatch = useDispatch();
  const showReviewsText = true;
  function addToCardHandler() {
    if (!countInStock) return;
    dispatch(addToCart({ product }));
    toast.success("Added successfully");
  }
  return (
    <>
      <Card className="w-72  m-auto shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl bg-[#151725]">
        <Link to={`/products/${id}`}>
          <CardHeader
            shadow={false}
            floated={false}
            className="h-100 bg-[#242635]"
          >
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium text-white">
                {name}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium ml-6 text-white"
              >
                ${price}
              </Typography>
            </div>
            <div
              style={{ maxHeight: "5rem", overflow: "hidden" }}
              className="mb-2"
            >
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75 text-white"
              >
                {description}
              </Typography>
            </div>
            <RatingStars
              rating={Number(rating).toFixed(2)}
              reviews={numReviews}
              showText={showReviewsText}
            />
          </CardBody>
        </Link>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className=" shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 bg-blue-500 text-white hover:bg-blue-700"
            disabled={!countInStock}
            onClick={addToCardHandler}
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
