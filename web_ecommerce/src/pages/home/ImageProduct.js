import React, { useEffect, useState } from "react";
import axios from "axios";
import baseURL from "../../api/BaseUrl";

function ImageProduct({ id, name, tagName }) {
    const [images, setImages] = useState([]);

    // Gọi API để lấy danh sách hình ảnh khi component được render
    useEffect(() => {
        axios
            .get(baseURL + `galleries/product/` + id)
            .then((response) => {
                console.log("image", response.data);
                setImages(response.data);
            })
            .catch((error) => {
                console.error("Error fetching images:", error);
            });
    }, [id]);

    // Kiểm tra xem images có dữ liệu không trước khi truy cập images.image
    if (!images || images.length === 0) {
        return <div>No images available</div>;
    }
    if (tagName === "banchay") {
        return (
            <img
                src={`http://localhost:8080/upload/${images[0].imagePath}`}
                alt={name}
                className="showcase-img"
                width={70}
                loading = "lazy"
            />
        );
    }
    if (tagName === "moi") {
        return (
            <img
                src={`http://localhost:8080/upload/${images[0].imagePath}`}
                alt={name}
                className="showcase-img"
                style={{ width: '300px', height: '300px' }}
                loading = "lazy"
            />
        );
    }

    if (tagName === "khuyenmai") {
        return (
            <img
                src={`http://localhost:8080/upload/${images[0].imagePath}`}
                alt={name}
                className="showcase-img"
                style={{ width: '300px', height: '300px' }}
                loading = "lazy"
            />
        );
    }

    
    if (tagName === "PHỤ KIỆN") {
        return (
            <img
                src={`http://localhost:8080/upload/${images[0].imagePath}`}
                alt={name}
                className="showcase-img"
                style={{ width: '300px', height: '300px' }}
                loading = "lazy"
            />
        );
    }
}

export default ImageProduct;
