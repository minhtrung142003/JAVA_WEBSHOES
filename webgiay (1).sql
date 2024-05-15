-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 15, 2024 lúc 11:59 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `webgiay`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) NOT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `carts`
--

INSERT INTO `carts` (`id`, `product_id`, `quantity`, `user_id`) VALUES
(230, 21, 20, 4),
(305, 25, 5, 3),
(306, 28, 5, 3),
(307, 24, 5, 3),
(355, 28, 2, 2),
(357, 25, 5, 2),
(502, 21, 5, NULL),
(503, 31, 35, NULL),
(504, 40, 10, NULL),
(505, 11, 22, NULL),
(508, 25, 5, NULL),
(1553, 10, 10, 11);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `carts_seq`
--

CREATE TABLE `carts_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `carts_seq`
--

INSERT INTO `carts_seq` (`next_val`) VALUES
(1701);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` bigint(20) NOT NULL,
  `category_description` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `is_home` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `category_description`, `icon`, `is_home`, `name`, `parent_id`) VALUES
(1, 'SẢN PHẨM NIKE', NULL, 1, 'NIKE', NULL),
(2, 'SẢN PHẨM ADIDAS', NULL, 1, 'ADIDAS', NULL),
(3, 'SẢN PHẨM JORDAN', NULL, 1, 'JORDAN', NULL),
(4, 'SẢN PHẨM YEEZY', NULL, 1, 'YEEZY', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category_seq`
--

CREATE TABLE `category_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category_seq`
--

INSERT INTO `category_seq` (`next_val`) VALUES
(201);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `galleries`
--

CREATE TABLE `galleries` (
  `id` bigint(20) NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `galleries`
--

INSERT INTO `galleries` (`id`, `image_path`, `product_id`) VALUES
(1, '0f07632c7-5953-483b-95be-3ac1947f2348.jpeg', 1),
(2, '0dc30099d-d489-41f2-b9b2-1e71c15650f1.jpeg', 2),
(3, '0b2b58027-3b2e-4895-b6df-b7467c3d90ac.jpeg', 3),
(4, '021f0c0a6-5408-47c0-a38f-f316f88511a2.jpeg', 4),
(5, '0e7cea384-3384-4d87-a50f-807a94e0c725.jpeg', 5),
(6, '0678649a5-ad74-4c1a-91c0-a7c131b36daa.jpeg', 6),
(7, '0b598b8e3-b9d8-4a53-8be3-0530b31cebdc.jpeg', 7),
(8, '05acd15d1-0321-46c7-b310-1bf3b2c3747d.jpeg', 8),
(9, '0d83bc6ae-28f1-46ce-b314-0b1439e110e1.jpeg', 9),
(10, '01c3f1b12-cff6-4d25-9b24-a7b731b61455.jpeg', 10),
(11, '090f8e296-f93e-445a-95b2-98c4a927a229.jpg', 11),
(12, '035e7cca9-fa88-4c4d-924f-a6cda110509c.jpg', 12),
(13, '007d4fc88-5291-4229-adc3-7829e9032b0c.jpg', 13),
(14, '0c6e51aba-a62d-4b77-bc33-3061b3892c13.jpg', 14),
(15, '0c6e51aba-a62d-4b77-bc33-3061b3892c13.jpg', 15),
(16, '0f1c05cd0-0939-4417-9a12-c66674e5a5bc.jpg', 16),
(17, '0129517cb-dda0-4689-8273-a11575484c3e.jpg', 17),
(18, '06af3afd7-dcba-4e13-a5b1-2cddd78a9ae9.jpg', 18),
(19, '0a905dd6d-fb8a-4a0b-88ba-8954c241cd64.jpg', 19),
(20, '07dbc4d6d-c351-4ff3-b730-d0b2c447fbab.jpg', 20),
(21, '07d77da54-d13d-4ba7-87e9-47f1c76ecd16.jpeg', 21),
(22, '0bae7806c-b218-4c1e-98ea-9b1f241a3be5.jpeg', 22),
(23, '0e2b49b7b-d6d2-4bd1-8946-5e131bf0c09d.jpeg', 23),
(24, '0aded8781-a326-42f2-9111-d76307381e0c.jpeg', 24),
(25, '0e925cc00-6b72-41c5-86c7-d0ddde9ff5ef.jpeg', 25),
(26, '0ff8c2e00-ebe8-4829-8465-bc7c1949f8cf.jpeg', 26),
(27, '0509284d6-39e5-459b-b3ab-8500c244ea62.jpeg', 27),
(28, '012717a78-9e83-4733-9b88-cb040ddcbfc0.jpeg', 28),
(29, '097c4eebc-b256-4895-a76a-71658b3d77ff.jpeg', 29),
(30, '0d6a82417-0ff4-491e-8d21-fbe2051eaf6a.jpeg', 30),
(31, '03d9fadc4-00d3-48c6-991c-9f0f0f737394.jpeg', 31),
(32, '04eba1a2d-a1b1-4d04-a736-c5e7162099d1.jpeg', 32),
(33, '051fc056e-82eb-42c7-9496-c8570e615a9e.jpeg', 33),
(34, '065fece8e-f19c-476e-a678-49bdf6cea35a.jpeg', 34),
(35, '0be04da59-e0bd-4068-bb4c-77c9394faec4.jpeg', 35),
(36, '00dca1c89-088b-4980-97ad-6c543087f0e3.jpeg', 36),
(37, '000acc382-4290-4ada-b6a8-57275b55db0f.jpeg', 37),
(38, '05702c0d7-ab1e-41b8-855d-09c19b7abb4b.jpeg', 38),
(39, '0e2e5d601-b402-4817-ad25-26a9004ae951.jpeg', 39),
(40, '0430e47f7-0505-410f-b473-b227bc05f04e.jpeg', 40),
(44, '0761db90a-4b05-41e7-a6d5-257f7ff7cb85.jpg', 41),
(45, '050122286-0d6b-4d78-a92a-130291150156.jpeg', 42),
(46, '1ea60e34f-6fad-43b9-a27f-cbb30bc36c52.jpeg', 42);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `gallery_product`
--

CREATE TABLE `gallery_product` (
  `gallery_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `order_approved_at` datetime(6) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `order_delivered_carrier_date` datetime(6) DEFAULT NULL,
  `order_delivered_customer_date` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `total_discount` int(11) NOT NULL,
  `total_price` double DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `address`, `order_approved_at`, `created_at`, `order_delivered_carrier_date`, `order_delivered_customer_date`, `email`, `first_name`, `last_name`, `phone`, `total_discount`, `total_price`, `user_id`, `user_name`, `status`) VALUES
(1502, '123 Main Street', NULL, NULL, NULL, NULL, 'john.doe@example.com', 'John', 'Doe', '123456789', 10, 100, 123, 'john_doe', NULL),
(1752, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 133, 11, NULL, NULL),
(1802, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 267, 13, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders_seq`
--

CREATE TABLE `orders_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orders_seq`
--

INSERT INTO `orders_seq` (`next_val`) VALUES
(1901);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_cart_items`
--

CREATE TABLE `order_cart_items` (
  `order_id` bigint(20) NOT NULL,
  `cart_item_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_items`
--

CREATE TABLE `order_items` (
  `id` bigint(20) NOT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `order_id` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order_items`
--

INSERT INTO `order_items` (`id`, `price`, `quantity`, `order_id`, `product_id`) VALUES
(752, NULL, 2, 1502, 1),
(1002, NULL, 1, 1752, 9),
(1052, NULL, 2, 1802, 9);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_items_seq`
--

CREATE TABLE `order_items_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order_items_seq`
--

INSERT INTO `order_items_seq` (`next_val`) VALUES
(1151);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `payment`
--

CREATE TABLE `payment` (
  `id` bigint(20) NOT NULL,
  `order_id` bigint(20) DEFAULT NULL,
  `payment_time` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `payment_seq`
--

CREATE TABLE `payment_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `payment_seq`
--

INSERT INTO `payment_seq` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `short_description` varchar(165) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `description`, `discount`, `price`, `quantity`, `short_description`, `title`) VALUES
(1, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa.', 8, 2800000, 10, 'Mã SP: FD2292 100', 'NIKE INTERACT RUN'),
(2, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa. ', 10, 2900000, 10, 'Mã SP: CD5432 121', 'NIKE AIR MAX EXCEE'),
(3, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa. ', 10, 3200000, 10, 'Mã SP: DZ5993 001', 'NIKE PEGASUS 40'),
(4, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa. ', 10, 3600000, 10, 'Mã SP: FD0736 003', 'NIKE V2K RUN'),
(5, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa. ', 10, 3200000, 10, 'Mã SP: CT3839 100', 'NIKE AIR FORCE 1 BLACK SWOOSH'),
(6, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa. ', 10, 3900000, 10, 'Mã SP: CZ0375 100', 'AIR FORCE 1 SHADOW'),
(7, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa. ', 10, 2800000, 10, 'Mã SP: DC3432 125', 'TENNIS NIKECOURT VAPOR LITE HC'),
(8, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa. ', 10, 3600000, 10, 'Mã SP: DZ1847 100', 'NIKE AIR FORCE 1 SHADOW \'GUNDAM'),
(9, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa. ', 10, 3200000, 10, 'Mã SP: DV3853 001', 'NIKE AIR ZOOM PEGASUS 40'),
(10, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa. ', 10, 3600000, 10, 'Mã SP: FZ3650 053', 'NIKE STRUCTURE 25 PREMIUM'),
(11, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 2200000, 5, 'Mã SP: IF4317', 'ADIDAS X_PLRPHASE'),
(12, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 1950000, 5, 'Mã SP: IF4317', 'ADIDAS CLIMAWARM BOUNCE \'BLACK\''),
(13, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 2200000, 5, 'Mã SP: HP7567', 'ADIDAS RUN FALCON 3.0'),
(14, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 1850000, 5, 'Mã SP:  IF4311', 'ADIDAS CLIMAWARM BOUNCE \'BLACK WHITE\''),
(15, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 2900000, 5, 'Mã SP:  ID0544', 'ADIDAS PROPHERE GREY'),
(16, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 2900000, 5, 'Mã SP:  FZ6294', 'ADIDAS FORUM 84 LOW'),
(17, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 2800000, 5, 'Mã SP:  IG8660', 'ADIDAS CAMPUS 00S'),
(18, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 1800000, 5, 'Mã SP:  IG7347', 'ADIDAS RACER TR23'),
(19, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 2200000, 5, 'Mã SP:  IF5416', 'ADIDAS SUPERSTAR'),
(20, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 2700000, 5, 'Mã SP:  IG8660', 'ADIDAS CAMPUS 00S'),
(21, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 4800000, 5, 'Mã SP: FN8903 111', 'AIR JORDAN 1 LOW \'JADE SMOKE\''),
(22, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 3200000, 5, 'Mã SP: FN8903 111', 'JORDAN 1 LOW NU RETRO'),
(23, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 3500000, 5, 'Mã SP:  DV5141 102', 'JORDAN 1 LOW NU RETRO'),
(24, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 3900000, 5, 'Mã SP: FB2269 106', 'JORDAN STADIUM 90'),
(25, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 4200000, 5, 'Mã SP: 553560 140', 'AIR JORDAN 1 LOW'),
(26, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 5800000, 5, 'Mã SP: 554725 078', 'JORDAN 1 MID LIGHT SMOKE GREY'),
(27, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 4200000, 5, 'Mã SP: FV3622 141', 'JORDAN 1 LOW SASHIKO'),
(28, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 3600000, 5, 'Mã SP:  553560 515', 'JORDAN 1 LOW SKY J PURPLE'),
(29, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 3600000, 5, 'Mã SP: FD9092 300', 'AIR JORDAN 1 LOW SE CRAFT'),
(30, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 3500000, 5, 'Mã SP: AR1002 100 - AR1000 100', 'AIR JORDAN COURTSIDE 23'),
(31, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 20, 15000000, 5, 'Mã SP: EF2829', 'YEEZY BOOST 350 PIRATE BLACK'),
(32, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 20, 12000000, 5, 'Mã SP: EF2829', 'YEEZY BOOST 700 V2 STATIC'),
(33, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 20, 9000000, 5, 'Mã SP: FZ5240', 'YEEZY BOOST 350 V2 SAND TAUPE'),
(34, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 15, 8000000, 5, 'Mã SP: GY4109', 'YEEZY BOOST 700 V3'),
(35, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 15, 12000000, 5, 'Mã SP: GW1229', 'YEEZY BOOST 350 V2 BELUGA REFLECTIVE'),
(36, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 15, 13000000, 5, 'Mã SP: BY1604', 'YEEZY BOOST 350 V2 OREO'),
(37, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 15, 10000000, 5, 'Mã SP: GY7164', 'YEEZY BOOST 350 V2 DAZZLING BLUE'),
(38, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 15, 8000000, 5, 'Mã SP: GZ8668', 'YEEZY BOOST 380'),
(39, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 15, 9000000, 5, 'Mã SP: HQ4540', 'YEEZY BOOST 350 V2 ONYX'),
(40, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 20, 12000000, 5, 'Mã SP: CP9654', 'YEEZY BOOST 350 V2 ZEBRA');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_categories`
--

CREATE TABLE `product_categories` (
  `product_id` bigint(20) NOT NULL,
  `category_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product_categories`
--

INSERT INTO `product_categories` (`product_id`, `category_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 2),
(12, 2),
(13, 2),
(14, 2),
(15, 2),
(16, 2),
(17, 2),
(18, 2),
(19, 2),
(20, 2),
(21, 3),
(22, 3),
(23, 3),
(24, 3),
(25, 3),
(26, 3),
(27, 3),
(28, 3),
(29, 3),
(30, 3),
(31, 4),
(32, 4),
(33, 4),
(34, 4),
(35, 4),
(36, 4),
(37, 4),
(38, 4),
(39, 4),
(40, 4),
(41, 3),
(42, 2),
(42, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_tags`
--

CREATE TABLE `product_tags` (
  `product_id` bigint(20) NOT NULL,
  `tag_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product_tags`
--

INSERT INTO `product_tags` (`product_id`, `tag_id`) VALUES
(1, 1),
(5, 2),
(8, 2),
(11, 1),
(14, 2),
(15, 2),
(17, 2),
(21, 1),
(24, 2),
(25, 2),
(28, 2),
(31, 1),
(35, 2),
(38, 2),
(40, 1),
(41, 2),
(42, 1),
(42, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tags`
--

CREATE TABLE `tags` (
  `id` bigint(20) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `tag_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tags`
--

INSERT INTO `tags` (`id`, `icon`, `tag_name`) VALUES
(1, 'SẢN PHẨM MỚI', 'SẢN PHẨM MỚI'),
(2, 'SẢN PHẨM KHUYẾN MÃI', 'SẢN PHẨM KHUYẾN MÃI'),
(3, 'SẢN PHẨM NỔI BẬT', 'SẢN PHẨM NỔI BẬT');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tags_seq`
--

CREATE TABLE `tags_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tags_seq`
--

INSERT INTO `tags_seq` (`next_val`) VALUES
(251);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `address`, `created_at`, `email`, `fullname`, `password`, `phone_number`, `updated_at`) VALUES
(11, 'Thành Phố Thủ Đức', NULL, 'trung@gmail.com', 'Hà Minh Trung', 'trung123', '0703796485', NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK2y94svpmqttx80mshyny85wqr` (`parent_id`);

--
-- Chỉ mục cho bảng `galleries`
--
ALTER TABLE `galleries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKrtklx4cs0ffjc57vfyai15ikd` (`product_id`);

--
-- Chỉ mục cho bảng `gallery_product`
--
ALTER TABLE `gallery_product`
  ADD PRIMARY KEY (`gallery_id`,`product_id`),
  ADD KEY `FKlnxt69ao2ydxd8jxe05pkd6on` (`product_id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `order_cart_items`
--
ALTER TABLE `order_cart_items`
  ADD PRIMARY KEY (`order_id`,`cart_item_id`),
  ADD KEY `FKdyxwb1cp33fujmfh5jskwk9va` (`cart_item_id`);

--
-- Chỉ mục cho bảng `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKbioxgbv59vetrxe0ejfubep1w` (`order_id`),
  ADD KEY `FKlf6f9q956mt144wiv6p1yko16` (`product_id`);

--
-- Chỉ mục cho bảng `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`product_id`,`category_id`),
  ADD KEY `FK7cpkh0ajt3apyej1vtjsvbbeb` (`category_id`);

--
-- Chỉ mục cho bảng `product_tags`
--
ALTER TABLE `product_tags`
  ADD PRIMARY KEY (`product_id`,`tag_id`),
  ADD KEY `FKpur2885qb9ae6fiquu77tcv1o` (`tag_id`);

--
-- Chỉ mục cho bảng `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `galleries`
--
ALTER TABLE `galleries`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `FK2y94svpmqttx80mshyny85wqr` FOREIGN KEY (`parent_id`) REFERENCES `category` (`id`);

--
-- Các ràng buộc cho bảng `galleries`
--
ALTER TABLE `galleries`
  ADD CONSTRAINT `FKrtklx4cs0ffjc57vfyai15ikd` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Các ràng buộc cho bảng `gallery_product`
--
ALTER TABLE `gallery_product`
  ADD CONSTRAINT `FKierpmee6nggikgsyselqkdfl6` FOREIGN KEY (`gallery_id`) REFERENCES `galleries` (`id`),
  ADD CONSTRAINT `FKlnxt69ao2ydxd8jxe05pkd6on` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Các ràng buộc cho bảng `order_cart_items`
--
ALTER TABLE `order_cart_items`
  ADD CONSTRAINT `FK43cgy9em7hy55stkecgw7nti9` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `FKdyxwb1cp33fujmfh5jskwk9va` FOREIGN KEY (`cart_item_id`) REFERENCES `carts` (`id`);

--
-- Các ràng buộc cho bảng `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `FKbioxgbv59vetrxe0ejfubep1w` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `FKlf6f9q956mt144wiv6p1yko16` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Các ràng buộc cho bảng `product_categories`
--
ALTER TABLE `product_categories`
  ADD CONSTRAINT `FK7cpkh0ajt3apyej1vtjsvbbeb` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `FKppc5s0f38pgb35a32dlgyhorc` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Các ràng buộc cho bảng `product_tags`
--
ALTER TABLE `product_tags`
  ADD CONSTRAINT `FK8gmf959fnpxtkagtk56mbaj0e` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `FKpur2885qb9ae6fiquu77tcv1o` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
