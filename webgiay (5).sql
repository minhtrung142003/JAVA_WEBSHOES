-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 10, 2024 lúc 04:30 AM
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
  `user_id` varchar(255) DEFAULT NULL,
  `color_id` bigint(20) DEFAULT NULL,
  `size_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `carts`
--

INSERT INTO `carts` (`id`, `product_id`, `quantity`, `user_id`, `color_id`, `size_id`) VALUES
(1255, 32, 1, '1', 5, NULL);

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
(1451),
(1701);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` bigint(20) NOT NULL,
  `category_description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `category_description`, `name`, `icon`, `parent_id`) VALUES
(1, 'SẢN PHẨM NIKE', 'NIKE', NULL, NULL),
(2, 'SẢN PHẨM ADIDAS', 'ADIDAS', NULL, NULL),
(3, 'SẢN PHẨM JORDAN\n', 'JORDAN', NULL, NULL),
(4, 'SẢN PHẨM YEEZY', 'YEEZY', NULL, NULL),
(5, 'PHỤ KIỆN LIÊN QUAN', 'PHỤ KIỆN', NULL, NULL);

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
-- Cấu trúc bảng cho bảng `color`
--

CREATE TABLE `color` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `color`
--

INSERT INTO `color` (`id`, `name`) VALUES
(1, 'xanh'),
(2, 'Đỏ'),
(3, 'Vàng'),
(4, 'Trắng'),
(5, 'Đen');

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
(11, '01d057965-9b6d-4661-a996-3a0f5645b0b3.jpeg', 1),
(12, '1efab1edd-f5c2-47a4-9872-2fc4ddf5e369.jpeg', 1),
(13, '20b8ac79c-d0ef-4528-9a17-f08edfa460cb.jpeg', 1),
(14, '34aeb3f51-fb82-404b-9cc2-5c6d8988cb6a.jpeg', 1),
(15, '4c0b211d4-bcb5-4718-90b2-22844d5fae3a.jpeg', 1),
(16, '00303c212-fb46-4a54-a15d-62d27e306a9d.jpeg', 2),
(17, '116d957bc-e150-4bef-8780-9f23dc93122b.jpeg', 2),
(18, '2082a3ddb-59c1-460b-9a57-94750f0a5185.jpg', 2),
(19, '3391b14db-9f21-424b-8c22-1b62ccf47990.jpg', 2),
(20, '4d5f07e19-e435-4138-bdd3-4d3058c61ac6.jpg', 2),
(21, '07f4e4295-8ea0-4097-afd3-d955a52ed42e.jpeg', 3),
(22, '1b648d9f3-9095-4281-8e16-6b56b46b7027.jpg', 3),
(23, '23d1d7a3a-f614-43ec-a76e-4f3245f4cec5.jpg', 3),
(24, '38cf6301f-facb-4089-bd6f-3896e3fbcce9.jpg', 3),
(25, '402b91bfb-e446-423a-a263-4866c6da6518.jpg', 3),
(26, '08631bdca-9f98-47b8-a8fe-375fed61e75e.jpeg', 4),
(27, '16dd7dd00-58cb-4e5f-98a1-7687d6c8ddea.jpeg', 4),
(28, '29bd8f80a-1d43-4518-99ea-3ae97359e59c.jpeg', 4),
(29, '35436a70e-ab5b-404f-9879-3df1195d95d4.jpeg', 4),
(30, '4211a34e9-450b-4068-a2c4-ef55d5ea002c.jpeg', 4),
(31, '066c66c62-1411-4f5d-b649-8f6500e7e64d.jpeg', 5),
(32, '129655ae8-1386-481d-bb53-ef15b4f87904.jpg', 5),
(33, '2bbe6f6a1-59e4-41f5-b31e-62b2fe43a967.jpg', 5),
(34, '3d1595c05-0944-42e3-a3d4-43d964baa2eb.jpg', 5),
(35, '4aa577841-ce69-43da-ae21-1e1dfd01db04.jpg', 5),
(36, '0947152db-9e8b-493b-8cd3-67f4ad46909f.jpeg', 6),
(37, '1ca1e55c0-3248-42c8-92d4-de1cba76a224.jpeg', 6),
(38, '2bcd7b8e6-834a-4464-9419-a72b1d5c8fc5.jpeg', 6),
(39, '340d80f82-b21b-4949-9822-f7c7d97ded86.jpeg', 6),
(40, '439ae68e2-64c7-4196-9cb3-b48e4a158b54.jpeg', 6),
(41, '0cb486b69-f684-4f9b-8420-55fc41cd2b13.jpeg', 7),
(42, '16ca1fcc5-ac5d-444e-9cf5-76aca5141f1e.jpg', 7),
(43, '298ed7807-6552-4311-984d-bce72e98b10e.jpg', 7),
(44, '3412880e5-c13b-41f9-ba35-efc1d2ce5a8c.jpg', 7),
(45, '474916540-d80c-414a-a2e1-4ffe7e2699da.jpg', 7),
(46, '0ca58e59e-0294-4d69-bccf-dc7c8c3f8c81.jpeg', 8),
(47, '1bbedf89b-8737-4446-8a3e-688f28442eee.jpg', 8),
(48, '201dfcefc-b83e-41f6-9948-6c05c8a0134a.jpg', 8),
(49, '3c914b814-25fa-43df-b5de-2855d5e2902f.jpg', 8),
(50, '40ddaf111-de89-44fe-bee6-03aae6566ec8.jpg', 8),
(51, '09b80ceb7-1d46-461c-8ff7-15342368928d.jpeg', 9),
(52, '18dbcbb1a-b173-4174-a1be-b24e6ee5ece7.jpg', 9),
(53, '2a0d78f96-8269-4eb3-9695-f363afb8f12b.jpg', 9),
(54, '3fc01442e-d6b3-49cf-a562-e9141c023773.jpg', 9),
(55, '417608aaa-4f5b-4aca-9fb6-a186c919a311.jpg', 9),
(56, '0a7d40e91-7783-48ff-8524-68fdf49a0a8a.jpeg', 10),
(57, '13cced408-3ee4-4289-b550-ac27505dc81d.jpg', 10),
(58, '2f02b27a4-f397-4879-a35f-94d0fd5efdee.jpg', 10),
(59, '3cc1469be-0c58-4348-9dd6-ffb6edf01f1e.jpg', 10),
(60, '4b2098e41-8636-467b-8d18-61297f91c37e.jpg', 10),
(61, '0224485e6-150e-4f60-9192-3597afb36af7.jpg', 11),
(62, '1a1a51696-0525-436a-a116-eaa4cba80120.jpeg', 11),
(63, '23ab1fda5-9d2f-4c8a-afb2-776130cfb666.jpeg', 11),
(64, '31a473ef8-7f44-45c1-aaf3-384017ff213b.jpeg', 11),
(65, '4457c74e3-2050-4032-9bfa-629f4480af68.jpeg', 11),
(66, '01c2ca7aa-0cc0-4843-846e-a6002a0fde55.jpg', 12),
(67, '1ba32df97-1df0-4ca0-943e-d49ff1ee0748.jpg', 12),
(68, '28014bf01-f0bb-4b3d-af35-bc804723e04b.jpg', 12),
(69, '3322dd54b-7bd1-4e59-aafa-6100e4ea255a.jpg', 12),
(70, '4c83042a0-952c-4aef-9ad2-ce6f34b9a9cb.jpg', 12),
(71, '0f2e92d5b-31c7-45f1-8af8-259ec0289ea7.jpg', 13),
(72, '17d7ead7f-d2e6-49eb-b4de-9249450b8471.jpg', 13),
(73, '2a9c41d24-c366-47c6-8b5f-e2dbb0e7582e.jpg', 13),
(74, '3eea80fd1-98e9-4b23-ad3e-ce7e27125436.jpg', 13),
(75, '436704caa-47d2-4af7-9c82-3c73cad37211.jpg', 13),
(76, '0f65a8f65-aa02-4045-b8cd-bd76fcf66838.jpg', 14),
(77, '1984193e5-9420-4e69-a433-cd5c473432f4.jpg', 14),
(78, '20d57df2e-9d6d-42b0-8806-e275b2a82349.jpg', 14),
(79, '3f36be805-ace8-429e-81bf-5767dde6e65b.jpg', 14),
(80, '0f6ff270e-abc4-4813-ae0f-af1cf55edee9.jpg', 15),
(81, '1aef6d5cf-dab5-4ee9-ae4c-87ba47a8c0a8.jpg', 15),
(82, '2e72d0a4e-2241-4b35-bc20-3547db26fec2.jpg', 15),
(83, '327db011a-5d36-4d98-a6c5-5899572abdb9.jpg', 15),
(84, '412014442-839b-4378-9541-66fd11e8b60a.jpg', 15),
(85, '080c6382b-48a5-43e5-a407-59a4c0de71c5.jpg', 16),
(86, '1373fbf65-1a2d-4f0f-b484-19c959778553.jpg', 16),
(87, '229dea28c-fa91-4deb-98ac-498dc792337b.jpg', 16),
(88, '33b597be9-2daf-46ec-95d3-f309710e2256.jpg', 16),
(89, '46191eb52-2448-4b34-89d5-0f05716b6e22.jpg', 16),
(90, '0fc83b74f-6450-4ef1-8ad2-9f88b1c07df1.jpg', 17),
(91, '1e2f07c2d-506b-4ebe-bd6d-2a23010286d0.jpeg', 17),
(92, '2d40e78f1-f9cd-4424-91bc-b2de2082c0d7.jpeg', 17),
(93, '3d2e8af13-1037-43eb-bcd7-04c8829b5b7b.jpeg', 17),
(94, '418cc1bb3-a567-4832-b17d-69387c799f8b.jpeg', 17),
(95, '0dd6de978-003c-49f0-9d8f-04848a5e12d0.jpg', 18),
(96, '1d0db7324-7388-4ebb-a116-b86493959648.jpg', 18),
(97, '2531a9467-03e8-4a09-a74b-cd9256abefae.jpg', 18),
(98, '3def82843-a4a8-46cf-a263-9fce6114239c.jpg', 18),
(99, '41823f7bf-140c-48ec-b425-245939b98473.jpg', 18),
(100, '0d04afcc1-f1cb-419e-8565-8602e0b5ae00.jpg', 19),
(101, '17e936504-b8af-47b2-9bfe-28e443b6208b.jpg', 19),
(102, '28f76d617-c9ec-40f1-a2d3-f436f959dc34.jpg', 19),
(103, '3f9f166ac-5af0-494b-a376-f7a2658d9a89.jpg', 19),
(104, '45d03a18b-fb31-40a2-97d3-4f9aeef4318b.jpg', 19),
(105, '0f2ce89a1-67e2-4c64-87b5-ecf0d80316b8.jpg', 20),
(106, '1e785520f-b9c5-4023-aded-6898e2da0e81.jpg', 20),
(107, '2257a70a6-1067-4893-a9cc-c6bf679fcbd7.jpg', 20),
(108, '34dc64c7d-be3a-49b5-971c-4e358c037d92.jpg', 20),
(109, '41985e95a-8bdd-4616-834a-b3c4cbc442e0.jpg', 20),
(110, '00cf0ac00-2ff8-420a-ab06-f4dba59b4a15.jpeg', 21),
(111, '191e99e55-23bc-44b8-bcf0-dbb5ea5a7070.jpeg', 21),
(112, '2d428ff5d-a2c6-4094-965a-8b0f230e69bf.jpeg', 21),
(113, '32b8878af-53d8-4ad7-b76f-352c7350824a.jpeg', 21),
(114, '4eb9a5ca5-10bf-4306-bec8-240a4f849fbe.jpeg', 21),
(115, '0d2514042-021b-4bae-9e55-96d404059098.jpeg', 22),
(116, '15f1dbf9a-63f1-446c-bcbc-694bf2623776.jpeg', 22),
(117, '248951319-8b6d-4f83-8e4c-4abca1ca3eeb.jpeg', 22),
(118, '39c60ce75-76ad-4f35-8353-02cd0d8d0146.jpeg', 22),
(119, '45248f638-b1a5-4c79-ae42-87fad7b0ff8d.jpeg', 22),
(120, '063103553-b64b-4bc0-9442-c53e23b9d520.jpeg', 23),
(121, '1fe329884-174b-4d9e-8b83-29c1135ccef2.jpeg', 23),
(122, '225aaf5ac-24da-473d-9e6f-951176d50360.png', 23),
(123, '3f6c852e0-5c6c-4305-81cc-17aabe2412f9.jpg', 23),
(124, '4bf0cd8ba-c1dc-4081-8228-03a7b0f0ee13.jpeg', 23),
(125, '03e86d37c-28a8-4aef-a23e-4d9cfd362288.jpeg', 24),
(126, '1688aa21a-44ff-436c-83bf-0cfec0ed1fe9.jpg', 24),
(127, '25b75cb33-d570-4a21-8e94-233331a25ffd.jpg', 24),
(128, '30182379e-9e27-4c2a-bf0a-658c0ef7b68b.jpg', 24),
(129, '46186d63f-abbd-476e-8472-84537a5d94ea.jpg', 24),
(130, '0e2185aeb-de7a-43b6-8b88-6e2101b4e205.jpeg', 25),
(131, '1d75061db-680a-4f23-8469-5f42711a8321.jpg', 25),
(132, '299770b94-512b-41f3-9104-54e02a4eda27.jpg', 25),
(133, '304f69892-89f7-435b-b3af-da66c5ff4a27.jpg', 25),
(134, '4fab59e7c-bb2e-4c1c-99ed-4f8399f7bf7e.jpg', 25),
(135, '0704b7e25-c091-4dc6-a2b6-7760f0411076.jpeg', 26),
(136, '1ee6f3882-515c-4961-8240-a21fc040799b.jpg', 26),
(137, '23765a75c-684c-4d35-a411-14e07d0a5777.jpg', 26),
(138, '327c7282a-30d5-4da4-a20c-53ff8ca5d750.jpg', 26),
(139, '4439c6fb0-723e-4205-9166-eef11b8a8fcc.jpg', 26),
(140, '058d43277-bf62-403e-8163-fb4f9ffbbe81.jpeg', 27),
(141, '11b7ee178-431d-4e42-95de-8dd01f916b70.png', 27),
(142, '2d1fdb27c-e41e-489e-a2eb-219823f9414b.png', 27),
(143, '3fce54b20-dde8-4279-a998-7e1b547d91c5.png', 27),
(144, '4b114a3ba-865b-4a6f-8c34-1cbf7b988f0b.png', 27),
(145, '0bcc1ed95-17cd-4bab-b741-d682bba260b0.jpeg', 28),
(146, '1d8131e3c-7c86-47aa-aebb-1547f0257b76.jpg', 28),
(147, '29123170b-4779-4609-8ee2-84b6d1cb4e7c.jpg', 28),
(148, '3b4933721-ae5b-43b9-bf2e-6629eb86617b.jpeg', 28),
(149, '4608c5230-c7f3-408e-bf6f-5ea03faa324a.jpeg', 28),
(150, '0eadad3e5-4b56-419b-8a7d-58ebfa6cc638.jpeg', 29),
(151, '11e8dd75a-b9e4-4aa9-ae89-4a7b7fa0a6c7.jpeg', 29),
(152, '2101f4119-e904-4a17-b6e3-f4cfa198f383.jpeg', 29),
(153, '36a19c85d-4429-4b55-bd6b-f68a080d32ba.jpg', 29),
(154, '4351cbd5b-e534-4f7e-9711-4443c599c960.jpg', 29),
(155, '0062925a1-f2ad-45e4-9c81-9e418cb0666d.jpeg', 30),
(156, '1cb09a09f-e4e7-4fe1-809b-28a6e924865b.jpeg', 30),
(157, '27ae93333-d254-48a3-b256-8277d042105c.jpeg', 30),
(158, '3eafa72b3-d2ae-4a6a-97d7-7d4a9825851c.jpeg', 30),
(159, '453f1ec5f-e0c9-48a3-a18c-6684665d3552.jpeg', 30),
(160, '00afb07c6-8290-4397-996b-8f28b0d1a036.jpg', 31),
(161, '1aaef8bc6-ec70-438a-84b7-ba5f3aa0c837.jpeg', 31),
(162, '2b05b12b9-cc64-43e9-949a-73fc95eb7adb.jpg', 31),
(163, '3fb4699d6-69a5-40e3-a2d1-e6555814a64e.jpg', 31),
(164, '402668bd9-08af-4bfa-9fda-a7ade6940c70.jpg', 31),
(165, '014477f54-f621-47a4-8286-ccd37f8887c3.jpeg', 32),
(166, '1ba0cbfff-d024-4855-b1fb-739b878cb6ef.jpg', 32),
(167, '25609128b-da10-4c66-b867-6b8ddfceca9e.jpg', 32),
(168, '3bb53c60f-c3f6-4d9e-8d43-faed18c7a5b7.jpg', 32),
(169, '4f1b62ecb-22f8-4788-9a61-767bec2edcd9.jpg', 32),
(170, '05d222616-944f-4668-b07c-664c29b0149c.jpeg', 33),
(171, '1f732ad37-9806-4b9f-b5be-1ce835b8cb93.jpeg', 33),
(172, '218a7ddb1-9fda-4758-b063-a7b6510c8b37.jpeg', 33),
(173, '3fda871ea-bbba-4234-b4fb-92499ed0df2b.jpeg', 33),
(174, '49950b1f6-a0f6-4915-84c4-47ebd3c71713.jpeg', 33),
(175, '0bc82a2f2-d13a-46e0-9e4b-ddf0cbf28dea.jpeg', 34),
(176, '13d6f16ae-14f6-4401-ac76-a48cc225f837.jpg', 34),
(177, '29c8509c7-f9a0-4148-a837-962620d566a1.jpg', 34),
(178, '388443cf8-7b95-43bf-b71f-e7b101a5ecb2.jpg', 34),
(179, '4d892bfb0-8d63-490d-b31d-292ff2ef169d.jpg', 34),
(180, '04b5495e1-1b04-4ed2-944d-78f14d7bda47.jpeg', 35),
(181, '1095bc966-b394-447c-874b-c9308b85f5ea.jpg', 35),
(182, '2dfa6b539-a4c5-416b-a2dc-53144fdbd0c7.jpg', 35),
(183, '3f88d37b8-c98b-41f2-b8f1-a1b7f972998b.jpg', 35),
(184, '4444e8587-7fab-4167-b5ea-1c984eeab29d.jpg', 35),
(185, '05a1fc51f-d78a-459b-9200-cace6b9fb60f.jpeg', 36),
(186, '1bf624397-1335-4433-a1bf-17b9bcfe96b7.jpg', 36),
(187, '2f5f987e3-c59a-4452-8aa3-e4ca83cf8c60.jpg', 36),
(188, '3b589fc38-f72c-479d-a64c-9e3c38c7139e.jpg', 36),
(189, '4016707d2-59f3-4c74-8b9d-32a299271976.jpg', 36),
(190, '0fda87de1-e4dc-4d47-906a-a42209fac1d6.jpeg', 37),
(191, '1dc3d2b4b-c5b2-4f73-9c49-544ea7684c32.jpeg', 37),
(192, '21ed0a1f4-5f75-4945-a7bf-6bf6fc798dc5.jpeg', 37),
(193, '314caa99e-e559-4ed9-9874-d000eee3d529.jpeg', 37),
(194, '4f465414b-7b04-40a6-8fa8-cb716dca17c2.jpeg', 37),
(195, '00bde22db-ef8b-4373-b2cc-1194407a0c84.jpeg', 38),
(196, '1283fc191-eb85-4dc2-a3dd-8f76b3f19b0b.jpeg', 38),
(197, '2b3863424-2f42-4778-8602-8f39b0440e21.jpeg', 38),
(198, '3095811be-0cdf-430c-8137-77f68d7d65d3.png', 38),
(199, '4d31894e3-04df-4d33-92d3-a3c9316e361c.jpeg', 38),
(200, '0343b5a44-faeb-4272-aabf-d0f4e975a08e.jpeg', 39),
(201, '169447b7b-3b71-4257-8dd8-1a8e5a84dce3.jpg', 39),
(202, '2c5c3d6b5-618a-4b58-ba73-8b5525f43906.jpeg', 39),
(203, '352577e78-2c7e-4c8c-9d50-0ce46d4d4562.jpg', 39),
(204, '4c4ab0597-2f0b-43d2-be44-480f638e56be.jpg', 39),
(205, '03302a8fb-aea7-42b4-b959-160d016d4ce8.jpeg', 40),
(206, '10c87c486-6c48-4439-bb68-91124603fe7b.jpg', 40),
(207, '29e7d5558-2f70-4f22-b4c6-be00c39950d5.jpg', 40),
(208, '31a659cf2-2e43-43d0-bcf1-aca29a7629b0.png', 40),
(209, '41a488915-367b-4421-ad6b-9ef5381a14e7.png', 40),
(210, '0a0a9dd4f-66c3-49bf-9e95-684eb0f12034.jpeg', 41),
(211, '0e991a1f1-3042-4fe5-b41f-4c9c82ee99a4.jpg', 42),
(212, '04329f931-4223-4856-952d-1c2a7651c3d9.jpeg', 43),
(213, '06d71c372-f2fe-4e50-8e92-74894ecc68d8.jpg', 44),
(214, '03a5d774d-bfec-4e20-95be-1df986f3b100.jpg', 45);

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
  `payment_method` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `total_discount` int(11) NOT NULL,
  `total_price` double DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `address`, `order_approved_at`, `created_at`, `order_delivered_carrier_date`, `order_delivered_customer_date`, `email`, `first_name`, `last_name`, `payment_method`, `phone`, `status`, `total_discount`, `total_price`, `user_id`, `user_name`) VALUES
(505, 'asas', '2024-06-04 00:00:00.000000', '2024-06-04 00:00:00.000000', '2024-06-04 00:00:00.000000', '2024-06-04 00:00:00.000000', 'huy@gmail.com', 'Hiếu', 'Hà', 'shipcod', '0701216485', 'Chưa thanh toán', 0, 28000000, '1', 'Hà Minh Hiếu'),
(552, 'Sài Gòn', '2024-06-04 00:00:00.000000', '2024-06-04 00:00:00.000000', '2024-06-04 00:00:00.000000', '2024-06-04 00:00:00.000000', 'hieu@gmail.com', 'Hiếu', 'Hà', 'shipcod', '0896402374', 'Chưa thanh toán', 0, 10500000, '1', 'Hà Minh Hiếu'),
(553, 'Sài Gòn', '2024-06-04 00:00:00.000000', '2024-06-04 00:00:00.000000', '2024-06-04 00:00:00.000000', '2024-06-04 00:00:00.000000', 'tieuphu142003@gmail.com', 'trung', 'Hà', 'shipcod', '0896402374', 'Chưa thanh toán', 0, 22400000, '1', 'Huỳnh Phúc Tân'),
(602, 'Phú Yên', '2024-06-10 00:00:00.000000', '2024-06-10 00:00:00.000000', '2024-06-10 00:00:00.000000', '2024-06-10 00:00:00.000000', 'trung@gmail.com', 'trung', 'Hà', 'shipcod', '0234796489', 'Chưa thanh toán', 0, 5600000, '111571195230575799989', 'Hà Minh Hiếu');

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
(701),
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
  `product_id` bigint(20) DEFAULT NULL,
  `color_id` bigint(20) DEFAULT NULL,
  `size_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order_items`
--

INSERT INTO `order_items` (`id`, `price`, `quantity`, `order_id`, `product_id`, `color_id`, `size_id`) VALUES
(405, NULL, 10, 505, 7, 2, NULL),
(452, NULL, 3, 552, 30, 1, NULL),
(453, NULL, 7, 553, 9, 1, NULL),
(502, NULL, 2, 602, 7, 4, 3);

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
(601),
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
  `title` varchar(255) DEFAULT NULL,
  `color_id` bigint(20) DEFAULT NULL,
  `cart_id` bigint(20) DEFAULT NULL,
  `size_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `description`, `discount`, `price`, `quantity`, `short_description`, `title`, `color_id`, `cart_id`, `size_id`) VALUES
(1, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa.', 8, 2800000, 10, 'Mã SP: FD2292 100', 'NIKE INTERACT RUN', 5, NULL, 3),
(2, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa. ', 10, 2900000, 10, 'Mã SP: CD5432 121', 'NIKE AIR MAX EXCEE', 4, NULL, 4),
(3, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa. ', 10, 3200000, 10, 'Mã SP: DZ5993 001', 'NIKE PEGASUS 40', 5, NULL, NULL),
(4, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa. ', 10, 3600000, 10, 'Mã SP: FD0736 003', 'NIKE V2K RUN', 4, NULL, NULL),
(5, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa. ', 10, 3200000, 10, 'Mã SP: CT3839 100', 'NIKE AIR FORCE 1 BLACK SWOOSH', 2, NULL, NULL),
(6, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa. ', 10, 3900000, 10, 'Mã SP: CZ0375 100', 'AIR FORCE 1 SHADOW', NULL, NULL, NULL),
(7, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa. ', 10, 2800000, 10, 'Mã SP: DC3432 125', 'TENNIS NIKECOURT VAPOR LITE HC', NULL, NULL, NULL),
(8, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa. ', 10, 3600000, 10, 'Mã SP: DZ1847 100', 'NIKE AIR FORCE 1 SHADOW \'GUNDAM', NULL, NULL, NULL),
(9, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa. ', 10, 3200000, 10, 'Mã SP: DV3853 001', 'NIKE AIR ZOOM PEGASUS 40', NULL, NULL, NULL),
(10, 'Sản phẩm giày Nike là biểu tượng của phong cách, sự thoải mái và hiệu suất. Với một lịch sử dày đặc trong ngành thể thao và thời trang, giày Nike không chỉ là một phần của trang phục mà còn là biểu tượng văn hóa. ', 10, 3600000, 10, 'Mã SP: FZ3650 053', 'NIKE STRUCTURE 25 PREMIUM', NULL, NULL, NULL),
(11, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 2200000, 5, 'Mã SP: IF4317', 'ADIDAS X_PLRPHASE', NULL, NULL, NULL),
(12, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 1950000, 5, 'Mã SP: IF4317', 'ADIDAS CLIMAWARM BOUNCE \'BLACK\'', NULL, NULL, NULL),
(13, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 2200000, 5, 'Mã SP: HP7567', 'ADIDAS RUN FALCON 3.0', NULL, NULL, NULL),
(14, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 1850000, 5, 'Mã SP:  IF4311', 'ADIDAS CLIMAWARM BOUNCE \'BLACK WHITE\'', NULL, NULL, NULL),
(15, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 2900000, 5, 'Mã SP:  ID0544', 'ADIDAS PROPHERE GREY', NULL, NULL, NULL),
(16, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 2900000, 5, 'Mã SP:  FZ6294', 'ADIDAS FORUM 84 LOW', NULL, NULL, NULL),
(17, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 2800000, 5, 'Mã SP:  IG8660', 'ADIDAS CAMPUS 00S', NULL, NULL, NULL),
(18, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 1800000, 5, 'Mã SP:  IG7347', 'ADIDAS RACER TR23', NULL, NULL, NULL),
(19, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 2200000, 5, 'Mã SP:  IF5416', 'ADIDAS SUPERSTAR', NULL, NULL, NULL),
(20, 'Giày Adidas là biểu tượng của phong cách và hiệu suất, kết hợp giữa thiết kế đẹp mắt và công nghệ tiên tiến.Giày Adidas không chỉ là một sản phẩm thời trang mà còn là sự lựa chọn hoàn hảo cho mọi hoạt động từ thể thao đến hàng ngày.', 20, 2700000, 5, 'Mã SP:  IG8660', 'ADIDAS CAMPUS 00S', NULL, NULL, NULL),
(21, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 4800000, 5, 'Mã SP: FN8903 111', 'AIR JORDAN 1 LOW \'JADE SMOKE\'', NULL, NULL, NULL),
(22, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 3200000, 5, 'Mã SP: FN8903 111', 'JORDAN 1 LOW NU RETRO', NULL, NULL, NULL),
(23, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 3500000, 5, 'Mã SP:  DV5141 102', 'JORDAN 1 LOW NU RETRO', NULL, NULL, NULL),
(24, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 3900000, 5, 'Mã SP: FB2269 106', 'JORDAN STADIUM 90', NULL, NULL, NULL),
(25, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 4200000, 5, 'Mã SP: 553560 140', 'AIR JORDAN 1 LOW', NULL, NULL, NULL),
(26, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 5800000, 5, 'Mã SP: 554725 078', 'JORDAN 1 MID LIGHT SMOKE GREY', NULL, NULL, NULL),
(27, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 4200000, 5, 'Mã SP: FV3622 141', 'JORDAN 1 LOW SASHIKO', NULL, NULL, NULL),
(28, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 3600000, 5, 'Mã SP:  553560 515', 'JORDAN 1 LOW SKY J PURPLE', NULL, NULL, NULL),
(29, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 3600000, 5, 'Mã SP: FD9092 300', 'AIR JORDAN 1 LOW SE CRAFT', NULL, NULL, NULL),
(30, 'Giày Jordan không chỉ là một đôi giày, mà là biểu tượng của sự đam mê, phong cách và sự độc đáo. Giày Jordan không chỉ mang lại sự thoải mái và hỗ trợ cho mọi hoạt động thể thao mà còn là biểu tượng của phong cách đường phố và cái mới mẻ.', 20, 3500000, 5, 'Mã SP: AR1002 100 - AR1000 100', 'AIR JORDAN COURTSIDE 23', NULL, NULL, NULL),
(31, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 20, 15000000, 5, 'Mã SP: EF2829', 'YEEZY BOOST 350 PIRATE BLACK', NULL, NULL, NULL),
(32, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 20, 12000000, 5, 'Mã SP: EF2829', 'YEEZY BOOST 700 V2 STATIC', NULL, NULL, NULL),
(33, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 20, 9000000, 5, 'Mã SP: FZ5240', 'YEEZY BOOST 350 V2 SAND TAUPE', NULL, NULL, NULL),
(34, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 15, 8000000, 5, 'Mã SP: GY4109', 'YEEZY BOOST 700 V3', NULL, NULL, NULL),
(35, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 15, 12000000, 5, 'Mã SP: GW1229', 'YEEZY BOOST 350 V2 BELUGA REFLECTIVE', NULL, NULL, NULL),
(36, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 15, 13000000, 5, 'Mã SP: BY1604', 'YEEZY BOOST 350 V2 OREO', NULL, NULL, NULL),
(37, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 15, 10000000, 5, 'Mã SP: GY7164', 'YEEZY BOOST 350 V2 DAZZLING BLUE', NULL, NULL, NULL),
(38, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 15, 8000000, 5, 'Mã SP: GZ8668', 'YEEZY BOOST 380', NULL, NULL, NULL),
(39, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 15, 9000000, 5, 'Mã SP: HQ4540', 'YEEZY BOOST 350 V2 ONYX', NULL, NULL, NULL),
(40, 'Giày YEEzy không chỉ là một sản phẩm thời trang, mà còn là biểu tượng của phong cách và sự cá nhân hóa. Với thiết kế độc đáo và hiện đại, giày YEEzy đem lại cảm giác thoải mái và phong cách cho người mặc.', 20, 12000000, 5, 'Mã SP: CP9654', 'YEEZY BOOST 350 V2 ZEBRA', NULL, NULL, NULL),
(41, 'Tại Kingshoes, chúng tôi cung cấp một bộ sưu tập phụ kiện giày đa dạng và chất lượng, giúp bạn bảo quản, nâng cao sự thoải mái và tăng thêm phong cách cho đôi giày của mình.', 5, 550000, 2, 'Mã SP: lót-giày-sport', 'CREP INSOLE SPORT | LÓT GIÀY THỂ THAO', NULL, NULL, NULL),
(42, 'KING SHOES đơn vị cung cấp bộ vệ sinh giày CREP PROTECT CURE | Bộ kit vệ sinh giày là một bộ sản phẩm cao cấp làm sạch, chăm sóc và bảo vệ giày một cách TUYỆT VỜI - NHANH CHÓNG', 5, 490000, 2, 'Mã SP: Bộ-kit-vệ-sinh-giày', 'CREP CURE KIT | BỘ KIT VỆ SINH GIÀY', NULL, NULL, NULL),
(43, 'KING SHOES đơn vị cung cấp bộ vệ sinh giày CREP MARK ON - Bút lông  là một bộ sản phẩm cao cấp làm sạch, chăm sóc và bảo vệ giày một cách TUYỆT VỜI', 5, 480000, 2, 'Mã SP: DAFW12', 'CREP MARK ON | BÚT TÔ ĐẾ GIÀY', NULL, NULL, NULL),
(44, 'KING SHOES đơn vị cung cấp bộ vệ sinh giày CREP ERASER - Gôm tẩy vết bẩn là một bộ sản phẩm cao cấp làm sạch, chăm sóc và bảo vệ giày một cách TUYỆT VỜI', 5, 320, 2, 'Mã SP: Gôm-tẩy-vết-bẩn', 'CREP ERASER | GÔM TẨY VẾT BẨN', NULL, NULL, NULL),
(45, 'Tại Kingshoes, chúng tôi cung cấp một bộ sưu tập phụ kiện giày đa dạng và chất lượng, giúp bạn bảo quản, nâng cao sự thoải mái và tăng thêm phong cách cho đôi giày của mình.', 5, 1250000, 2, 'Mã SP: Crep-Protect-Box-Pack', 'CREP PROTECT BOX PACK | BỘ KIT HỘP 4 Ô', NULL, NULL, NULL);

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
(41, 5),
(42, 5),
(43, 5),
(44, 5),
(45, 5);

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
(31, 52),
(32, 52),
(33, 52),
(34, 52),
(35, 52),
(36, 52),
(37, 52),
(38, 52),
(39, 52),
(40, 52),
(41, 2),
(42, 3),
(43, 1),
(44, 2),
(45, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sizes`
--

CREATE TABLE `sizes` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sizes`
--

INSERT INTO `sizes` (`id`, `name`) VALUES
(1, '37'),
(2, '38'),
(3, '39'),
(4, '40'),
(5, '41');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sizes_seq`
--

CREATE TABLE `sizes_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sizes_seq`
--

INSERT INTO `sizes_seq` (`next_val`) VALUES
(101);

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
(3, 'SẢN PHẨM NỔI BẬT', 'SẢN PHẨM NỔI BẬT'),
(52, 'SẢN PHẨM PHỔ BIẾN', 'SẢN PHẨM PHỔ BIẾN');

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
(151),
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
  `phone_number` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `address`, `created_at`, `email`, `fullname`, `password`, `phone_number`) VALUES
(1, 'Sài Gòn', '2024-06-04', 'trung@gmail.com', 'haminhtrung', '$2a$10$eaHAWIdfYS6I3wTzlT4Uuu6F/Rx0eoQk0xXaiKH5HYnLSDloYi2Q2', '0703456963');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `visitor`
--

CREATE TABLE `visitor` (
  `id` bigint(20) NOT NULL,
  `visit_date` date NOT NULL,
  `visitor_count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `visitor`
--

INSERT INTO `visitor` (`id`, `visit_date`, `visitor_count`) VALUES
(1, '2024-06-03', 1),
(2, '2024-06-03', 1),
(3, '2024-06-03', 2),
(4, '2024-06-03', 2),
(5, '2024-06-04', 3),
(6, '2024-06-04', 3),
(7, '2024-06-04', 4),
(8, '2024-06-04', 4),
(9, '2024-06-04', 4),
(10, '2024-06-04', 4),
(11, '2024-06-04', 4),
(12, '2024-06-04', 4),
(13, '2024-06-04', 4),
(14, '2024-06-04', 4),
(15, '2024-06-04', 4),
(16, '2024-06-04', 4),
(17, '2024-06-04', 4),
(18, '2024-06-04', 4),
(19, '2024-06-04', 4),
(20, '2024-06-04', 4),
(21, '2024-06-04', 4),
(22, '2024-06-04', 4),
(23, '2024-06-04', 4),
(24, '2024-06-04', 4),
(25, '2024-06-04', 4),
(26, '2024-06-04', 4),
(27, '2024-06-04', 4),
(28, '2024-06-04', 4),
(29, '2024-06-04', 4),
(30, '2024-06-04', 4),
(31, '2024-06-04', 4),
(32, '2024-06-04', 4),
(33, '2024-06-04', 4),
(34, '2024-06-04', 4),
(35, '2024-06-04', 4),
(36, '2024-06-04', 4),
(37, '2024-06-04', 4),
(38, '2024-06-04', 4),
(39, '2024-06-04', 4),
(40, '2024-06-04', 4),
(41, '2024-06-04', 4),
(42, '2024-06-04', 4),
(43, '2024-06-04', 4),
(44, '2024-06-04', 4),
(45, '2024-06-04', 4),
(46, '2024-06-04', 4),
(47, '2024-06-04', 4),
(48, '2024-06-04', 4),
(49, '2024-06-04', 4),
(50, '2024-06-04', 4),
(51, '2024-06-04', 4),
(52, '2024-06-04', 4),
(53, '2024-06-04', 4),
(54, '2024-06-04', 4),
(55, '2024-06-04', 4),
(56, '2024-06-04', 4),
(57, '2024-06-04', 4),
(58, '2024-06-04', 4),
(59, '2024-06-04', 4),
(60, '2024-06-04', 4),
(61, '2024-06-04', 4),
(62, '2024-06-04', 4),
(63, '2024-06-04', 4),
(64, '2024-06-04', 4),
(65, '2024-06-04', 4),
(66, '2024-06-04', 4),
(67, '2024-06-04', 4),
(68, '2024-06-04', 4),
(69, '2024-06-04', 4),
(70, '2024-06-04', 4),
(71, '2024-06-04', 4),
(72, '2024-06-04', 4),
(73, '2024-06-04', 4),
(74, '2024-06-04', 4),
(75, '2024-06-04', 4),
(76, '2024-06-04', 4),
(77, '2024-06-04', 4),
(78, '2024-06-04', 4),
(79, '2024-06-04', 4),
(80, '2024-06-04', 4),
(81, '2024-06-04', 4),
(82, '2024-06-04', 4),
(83, '2024-06-04', 4),
(84, '2024-06-04', 4),
(85, '2024-06-04', 4),
(86, '2024-06-04', 4),
(87, '2024-06-04', 4),
(88, '2024-06-04', 4),
(89, '2024-06-04', 4),
(90, '2024-06-04', 4),
(91, '2024-06-04', 4),
(92, '2024-06-04', 4),
(93, '2024-06-04', 4),
(94, '2024-06-04', 4),
(95, '2024-06-04', 4),
(96, '2024-06-04', 4),
(97, '2024-06-04', 4),
(98, '2024-06-04', 4),
(99, '2024-06-04', 4),
(100, '2024-06-04', 4),
(101, '2024-06-04', 4),
(102, '2024-06-04', 4),
(103, '2024-06-04', 4),
(104, '2024-06-04', 4),
(105, '2024-06-04', 4),
(106, '2024-06-04', 4),
(107, '2024-06-04', 4),
(108, '2024-06-04', 4),
(109, '2024-06-04', 4),
(110, '2024-06-04', 4),
(111, '2024-06-04', 4),
(112, '2024-06-04', 4),
(113, '2024-06-04', 4),
(114, '2024-06-04', 4),
(115, '2024-06-04', 4),
(116, '2024-06-04', 4),
(117, '2024-06-04', 4),
(118, '2024-06-04', 4),
(119, '2024-06-04', 4),
(120, '2024-06-04', 4),
(121, '2024-06-04', 4),
(122, '2024-06-04', 4),
(123, '2024-06-04', 4),
(124, '2024-06-04', 4),
(125, '2024-06-04', 4),
(126, '2024-06-04', 4),
(127, '2024-06-04', 4),
(128, '2024-06-04', 4),
(129, '2024-06-04', 4),
(130, '2024-06-04', 4),
(131, '2024-06-04', 4),
(132, '2024-06-04', 4),
(133, '2024-06-04', 4),
(134, '2024-06-04', 4),
(135, '2024-06-04', 4),
(136, '2024-06-04', 4),
(137, '2024-06-04', 4),
(138, '2024-06-04', 4),
(139, '2024-06-04', 4),
(140, '2024-06-04', 4),
(141, '2024-06-04', 4),
(142, '2024-06-04', 4),
(143, '2024-06-04', 4),
(144, '2024-06-04', 4),
(145, '2024-06-04', 4),
(146, '2024-06-04', 4),
(147, '2024-06-04', 4),
(148, '2024-06-04', 4),
(149, '2024-06-04', 4),
(150, '2024-06-04', 4),
(151, '2024-06-04', 4),
(152, '2024-06-04', 4),
(153, '2024-06-04', 4),
(154, '2024-06-04', 4),
(155, '2024-06-04', 4),
(156, '2024-06-04', 4),
(157, '2024-06-04', 4),
(158, '2024-06-04', 4),
(159, '2024-06-04', 4),
(160, '2024-06-04', 4),
(161, '2024-06-04', 4),
(162, '2024-06-04', 4),
(163, '2024-06-04', 4),
(164, '2024-06-04', 4),
(165, '2024-06-04', 4),
(166, '2024-06-04', 4),
(167, '2024-06-04', 4),
(168, '2024-06-04', 4),
(169, '2024-06-04', 4),
(170, '2024-06-04', 4),
(171, '2024-06-04', 4),
(172, '2024-06-04', 4),
(173, '2024-06-04', 4),
(174, '2024-06-04', 4),
(175, '2024-06-04', 4),
(176, '2024-06-04', 4),
(177, '2024-06-04', 4),
(178, '2024-06-04', 4),
(179, '2024-06-04', 4),
(180, '2024-06-04', 4),
(181, '2024-06-04', 4),
(182, '2024-06-04', 4),
(183, '2024-06-04', 4),
(184, '2024-06-04', 4),
(185, '2024-06-04', 4),
(186, '2024-06-04', 4),
(187, '2024-06-04', 4),
(188, '2024-06-04', 4),
(189, '2024-06-04', 4),
(190, '2024-06-04', 4),
(191, '2024-06-04', 4),
(192, '2024-06-04', 4),
(193, '2024-06-04', 4),
(194, '2024-06-04', 4),
(195, '2024-06-04', 4),
(196, '2024-06-04', 4),
(197, '2024-06-04', 4),
(198, '2024-06-04', 4),
(199, '2024-06-04', 4),
(200, '2024-06-04', 4),
(201, '2024-06-04', 4),
(202, '2024-06-04', 4),
(203, '2024-06-04', 4),
(204, '2024-06-04', 4),
(205, '2024-06-04', 4),
(206, '2024-06-04', 4),
(207, '2024-06-04', 4),
(208, '2024-06-04', 4),
(209, '2024-06-04', 4),
(210, '2024-06-04', 4),
(211, '2024-06-04', 4),
(212, '2024-06-04', 4),
(213, '2024-06-04', 4),
(214, '2024-06-04', 4),
(215, '2024-06-04', 4),
(216, '2024-06-04', 4),
(217, '2024-06-04', 4),
(218, '2024-06-04', 4),
(219, '2024-06-04', 4),
(220, '2024-06-04', 4),
(221, '2024-06-04', 4),
(222, '2024-06-04', 4),
(223, '2024-06-04', 4),
(224, '2024-06-04', 4),
(225, '2024-06-04', 4),
(226, '2024-06-04', 4),
(227, '2024-06-04', 4),
(228, '2024-06-04', 4),
(229, '2024-06-04', 4),
(230, '2024-06-04', 4),
(231, '2024-06-04', 4),
(232, '2024-06-04', 4),
(233, '2024-06-04', 4),
(234, '2024-06-04', 4),
(235, '2024-06-04', 4),
(236, '2024-06-04', 4),
(237, '2024-06-04', 4),
(238, '2024-06-04', 4),
(239, '2024-06-04', 4),
(240, '2024-06-04', 4),
(241, '2024-06-04', 4),
(242, '2024-06-04', 4),
(243, '2024-06-04', 4),
(244, '2024-06-04', 4),
(245, '2024-06-04', 4),
(246, '2024-06-04', 4),
(247, '2024-06-04', 4),
(248, '2024-06-04', 4),
(249, '2024-06-04', 4),
(250, '2024-06-04', 4),
(251, '2024-06-04', 4),
(252, '2024-06-04', 4),
(253, '2024-06-04', 4),
(254, '2024-06-04', 4),
(255, '2024-06-04', 4),
(256, '2024-06-04', 4),
(257, '2024-06-04', 4),
(258, '2024-06-04', 4),
(259, '2024-06-04', 4),
(260, '2024-06-04', 4),
(261, '2024-06-04', 4),
(262, '2024-06-04', 4),
(263, '2024-06-04', 4),
(264, '2024-06-04', 4),
(265, '2024-06-04', 4),
(266, '2024-06-04', 4),
(267, '2024-06-04', 4),
(268, '2024-06-04', 4),
(269, '2024-06-04', 4),
(270, '2024-06-04', 4),
(271, '2024-06-04', 4),
(272, '2024-06-04', 4),
(273, '2024-06-04', 4),
(274, '2024-06-04', 4),
(275, '2024-06-04', 4),
(276, '2024-06-04', 4),
(277, '2024-06-04', 4),
(278, '2024-06-04', 4),
(279, '2024-06-04', 4),
(280, '2024-06-04', 4),
(281, '2024-06-04', 4),
(282, '2024-06-04', 4),
(283, '2024-06-04', 4),
(284, '2024-06-04', 4),
(285, '2024-06-04', 4),
(286, '2024-06-04', 4),
(287, '2024-06-04', 4),
(288, '2024-06-04', 4),
(289, '2024-06-04', 4),
(290, '2024-06-04', 4),
(291, '2024-06-04', 4),
(292, '2024-06-04', 4),
(293, '2024-06-04', 4),
(294, '2024-06-04', 4),
(295, '2024-06-04', 4),
(296, '2024-06-04', 4),
(297, '2024-06-04', 4),
(298, '2024-06-04', 4),
(299, '2024-06-04', 4),
(300, '2024-06-04', 4),
(301, '2024-06-04', 4),
(302, '2024-06-04', 4),
(303, '2024-06-04', 4),
(304, '2024-06-04', 4),
(305, '2024-06-04', 4),
(306, '2024-06-04', 4),
(307, '2024-06-04', 4),
(308, '2024-06-04', 4),
(309, '2024-06-04', 4),
(310, '2024-06-04', 4),
(311, '2024-06-04', 4),
(312, '2024-06-04', 4),
(313, '2024-06-04', 4),
(314, '2024-06-04', 4),
(315, '2024-06-04', 4),
(316, '2024-06-04', 4),
(317, '2024-06-04', 4),
(318, '2024-06-04', 4),
(319, '2024-06-04', 4),
(320, '2024-06-04', 4),
(321, '2024-06-04', 4),
(322, '2024-06-04', 4),
(323, '2024-06-04', 4),
(324, '2024-06-04', 4),
(325, '2024-06-04', 4),
(326, '2024-06-04', 4),
(327, '2024-06-04', 4),
(328, '2024-06-04', 4),
(329, '2024-06-04', 4),
(330, '2024-06-04', 4),
(331, '2024-06-04', 4),
(332, '2024-06-04', 4),
(333, '2024-06-04', 4),
(334, '2024-06-04', 4),
(335, '2024-06-04', 4),
(336, '2024-06-04', 4),
(337, '2024-06-04', 4),
(338, '2024-06-04', 4),
(339, '2024-06-04', 4),
(340, '2024-06-04', 4),
(341, '2024-06-04', 4),
(342, '2024-06-04', 4),
(343, '2024-06-04', 4),
(344, '2024-06-04', 4),
(345, '2024-06-04', 4),
(346, '2024-06-04', 4),
(347, '2024-06-04', 4),
(348, '2024-06-04', 4),
(349, '2024-06-04', 4),
(350, '2024-06-04', 4),
(351, '2024-06-04', 4),
(352, '2024-06-04', 4),
(353, '2024-06-04', 4),
(354, '2024-06-04', 4),
(355, '2024-06-04', 4),
(356, '2024-06-04', 4),
(357, '2024-06-04', 4),
(358, '2024-06-04', 4),
(359, '2024-06-04', 4),
(360, '2024-06-04', 4),
(361, '2024-06-04', 4),
(362, '2024-06-04', 4),
(363, '2024-06-04', 4),
(364, '2024-06-04', 4),
(365, '2024-06-04', 4),
(366, '2024-06-04', 4),
(367, '2024-06-04', 4),
(368, '2024-06-04', 4),
(369, '2024-06-04', 4),
(370, '2024-06-04', 4),
(371, '2024-06-04', 4),
(372, '2024-06-04', 4),
(373, '2024-06-04', 4),
(374, '2024-06-04', 4),
(375, '2024-06-04', 4),
(376, '2024-06-04', 4),
(377, '2024-06-04', 4),
(378, '2024-06-04', 4),
(379, '2024-06-04', 4),
(380, '2024-06-04', 4),
(381, '2024-06-04', 4),
(382, '2024-06-04', 4),
(383, '2024-06-04', 4),
(384, '2024-06-04', 4),
(385, '2024-06-04', 4),
(386, '2024-06-04', 4),
(387, '2024-06-04', 4),
(388, '2024-06-04', 4),
(389, '2024-06-04', 4),
(390, '2024-06-04', 4),
(391, '2024-06-04', 4),
(392, '2024-06-04', 4),
(393, '2024-06-04', 4),
(394, '2024-06-04', 4),
(395, '2024-06-04', 4),
(396, '2024-06-04', 4),
(397, '2024-06-04', 4),
(398, '2024-06-04', 4),
(399, '2024-06-04', 4),
(400, '2024-06-04', 4),
(401, '2024-06-04', 4),
(402, '2024-06-04', 4),
(403, '2024-06-04', 4),
(404, '2024-06-04', 4),
(405, '2024-06-04', 4),
(406, '2024-06-04', 4),
(407, '2024-06-04', 4),
(408, '2024-06-04', 4),
(409, '2024-06-04', 4),
(410, '2024-06-04', 4),
(411, '2024-06-04', 4),
(412, '2024-06-04', 4),
(413, '2024-06-04', 4),
(414, '2024-06-04', 4),
(415, '2024-06-04', 4),
(416, '2024-06-04', 4),
(417, '2024-06-04', 4),
(418, '2024-06-04', 4),
(419, '2024-06-04', 4),
(420, '2024-06-04', 4),
(421, '2024-06-04', 4),
(422, '2024-06-04', 4),
(423, '2024-06-04', 4),
(424, '2024-06-04', 4),
(425, '2024-06-04', 4),
(426, '2024-06-04', 4),
(427, '2024-06-04', 4),
(428, '2024-06-04', 4),
(429, '2024-06-04', 4),
(430, '2024-06-04', 4),
(431, '2024-06-04', 4),
(432, '2024-06-04', 4),
(433, '2024-06-10', 4),
(434, '2024-06-10', 5),
(435, '2024-06-10', 6),
(436, '2024-06-10', 7),
(437, '2024-06-10', 8),
(438, '2024-06-10', 9),
(439, '2024-06-10', 10),
(440, '2024-06-10', 11),
(441, '2024-06-10', 12),
(442, '2024-06-10', 13),
(443, '2024-06-10', 14),
(444, '2024-06-10', 15),
(445, '2024-06-10', 16),
(446, '2024-06-10', 17);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKabiusefg4pyfvhylukflf0a9n` (`color_id`),
  ADD KEY `FKsmgakq64ai8l9b2igmgwfspb8` (`size_id`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK2y94svpmqttx80mshyny85wqr` (`parent_id`);

--
-- Chỉ mục cho bảng `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`id`);

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
  ADD KEY `FKlf6f9q956mt144wiv6p1yko16` (`product_id`),
  ADD KEY `FKchffs58x14kwi90r55o0c5vub` (`color_id`),
  ADD KEY `FK9t2qyxv7hnjv24ox49t7oyga2` (`size_id`);

--
-- Chỉ mục cho bảng `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK7j8aci4xn0sahyhxk0fvqql6e` (`color_id`),
  ADD KEY `FKcphshtyvovyumdtro57d7rndt` (`cart_id`),
  ADD KEY `FKo7berm1iw3swyrjasyt17ttup` (`size_id`);

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
-- Chỉ mục cho bảng `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

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
-- Chỉ mục cho bảng `visitor`
--
ALTER TABLE `visitor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1355;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `color`
--
ALTER TABLE `color`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `galleries`
--
ALTER TABLE `galleries`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=232;

--
-- AUTO_INCREMENT cho bảng `payment`
--
ALTER TABLE `payment`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT cho bảng `tags`
--
ALTER TABLE `tags`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `visitor`
--
ALTER TABLE `visitor`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=447;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `FKabiusefg4pyfvhylukflf0a9n` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`),
  ADD CONSTRAINT `FKsmgakq64ai8l9b2igmgwfspb8` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`);

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
-- Các ràng buộc cho bảng `order_cart_items`
--
ALTER TABLE `order_cart_items`
  ADD CONSTRAINT `FK43cgy9em7hy55stkecgw7nti9` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `FKdyxwb1cp33fujmfh5jskwk9va` FOREIGN KEY (`cart_item_id`) REFERENCES `carts` (`id`);

--
-- Các ràng buộc cho bảng `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `FK9t2qyxv7hnjv24ox49t7oyga2` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`),
  ADD CONSTRAINT `FKbioxgbv59vetrxe0ejfubep1w` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `FKchffs58x14kwi90r55o0c5vub` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`),
  ADD CONSTRAINT `FKlf6f9q956mt144wiv6p1yko16` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK7j8aci4xn0sahyhxk0fvqql6e` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`),
  ADD CONSTRAINT `FKcphshtyvovyumdtro57d7rndt` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`),
  ADD CONSTRAINT `FKo7berm1iw3swyrjasyt17ttup` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`);

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
