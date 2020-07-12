import React, { Component } from "react";
import { Tooltip } from "antd";
import { Popconfirm } from "antd";
import { connect } from "react-redux";
import { withRouter } from "next/router";

//includes
import QuickViewModal from "./QuickViewModal";
import Link from "next/link";
import actions from "../../../redux/actions";

const products = {
  category: [
    {
      displayName: "",
      slug: "",
    },
  ],
  images: [
    {
      large: "/images/default-image.png",
      medium: "/images/default-image.png",
      thumbnail: "/images/default-image.png",
    },
  ],
  name: "",
  price: "",
};
class ProductCard extends Component {
  state = {
    showQuickView: false,
    productData: products,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== prevState.data && nextProps.data) {
      return {
        productData: nextProps.data,
      };
    }
    return null;
  }

  showModal = () => {
    this.setState({
      showQuickView: true,
    });
  };

  handleCancel = (e) => {
    this.setState({
      showQuickView: false,
    });
  };

  render() {
    const { productData } = this.state;

    let checkSkeleton = this.state.productData.name === "" ? true : false;

    let loginToken = this.props.authentication.token;
    return (
      <div className={"product-card " + (checkSkeleton && "skeleton")}>
        {this.state.showQuickView && (
          <QuickViewModal
            title="Quick View Product"
            visible={this.state.showQuickView}
            onCancel={this.handleCancel}
            data={productData}
          />
        )}
        <div className="product-box-shadow">
          <div className="hover-items-image">
            <div className="card-hover-items">
              <div className="card-items">
                <Tooltip
                  placement="topLeft"
                  title="Quick View"
                  arrowPointAtCenter
                >
                  <img
                    src="/images/medical.png"
                    alt="medical.png"
                    onClick={this.showModal}
                  />
                </Tooltip>
              </div>
              <div className="card-items">
                <Tooltip
                  placement="topLeft"
                  title="Add to Cart"
                  arrowPointAtCenter
                >
                  <img src="/images/bag.png" alt="bag.jpg" />
                </Tooltip>
              </div>
              <div className="card-items">
                <Tooltip
                  placement="topLeft"
                  title="Add to Wishlist"
                  arrowPointAtCenter
                >
                  {loginToken ? (
                    productData.hasOnWishlist ? (
                      <Popconfirm
                        title="Are you sure you want to remove this from wishlist?"
                        onConfirm={() =>
                          this.props.removeFromWishList(
                            productData.hasOnWishlist._id
                          )
                        }
                        // onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                      >
                        <a>
                          <img
                            data-tip="Add to Wishlist"
                            src="/images/heart-blue.png"
                          />
                        </a>
                      </Popconfirm>
                    ) : (
                      <img
                        data-tip="Add to Wishlist"
                        src="/images/heart.png"
                        data-tip="Add to Wishlist"
                        onClick={() =>
                          this.props.addWishListItems(product.slug)
                        }
                      />
                    )
                  ) : (
                    <Link href={`/login`}>
                      <a>
                        <img
                          data-tip="Add to Wishlist"
                          src="/images/heart.png"
                        />
                      </a>
                    </Link>
                  )}
                </Tooltip>
              </div>
              <div className="card-items">
                <Tooltip
                  placement="topLeft"
                  title="Add to Compare"
                  arrowPointAtCenter
                >
                  <img src="/images/sliders.png" alt="slider.jpg" />
                </Tooltip>
              </div>
            </div>
            <Link
              href={`/products/[slug]`}
              key={productData.slug}
              as={`/products/${productData.slug}`}
            >
              <div className="image img-skeleton">
                <img
                  src={`${process.env.SERVER_BASE_URL}/uploads/${productData.images[0].medium}`}
                  onError={(ev) => {
                    ev.target.src = "/images/default-image.png";
                  }}
                  alt={productData.name}
                  className="productImg-loader"
                />
              </div>
            </Link>
          </div>

          <Link
            href={`/products/[slug]`}
            key={productData.slug}
            as={`/products/${productData.slug}`}
          >
            <div className="card-body">
              <div className="card-category small-line">
                <div className="cate">
                  {productData.category.map((cate, i) => {
                    return (
                      <span key={i}>
                        {cate.displayName}
                        {productData.category.length !== i + 1 && " - "}
                      </span>
                    );
                  })}
                </div>
                {!checkSkeleton && (
                  <div className="stars">
                    {productData?.stars?.averageStar &&
                      Array(Math.round(productData.stars.averageStar))
                        .fill(0)
                        .map((num, i) => {
                          return (
                            <i
                              className="fa fa-star"
                              aria-hidden="true"
                              key={i}
                            ></i>
                          );
                        })}
                  </div>
                )}
              </div>
              <div className="prod-name medium-line">{productData.name}</div>
              <div className="prod-price large-line">
                {!checkSkeleton && "Rs"} {productData.price}
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect((state) => state, actions)(withRouter(ProductCard));
