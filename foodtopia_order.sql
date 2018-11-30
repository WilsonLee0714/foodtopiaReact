-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1
-- 產生時間： 2018 年 11 月 14 日 09:53
-- 伺服器版本: 10.1.36-MariaDB
-- PHP 版本： 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `foodtopia`
--

-- --------------------------------------------------------

--
-- 資料表結構 `orders`
--

CREATE TABLE `orders` (
  `order_sid` int(11) NOT NULL,
  `num_sid` int(11) NOT NULL,
  `order_amont` int(11) NOT NULL,
  `order_date` datetime NOT NULL,
  `order_ invoice` varchar(255) NOT NULL,
  `order_note` varchar(255) DEFAULT NULL,
  `ship_name` varchar(255) NOT NULL,
  `ship_tel` varchar(255) DEFAULT NULL,
  `ship_phone` varchar(255) NOT NULL,
  `ship_address` varchar(255) NOT NULL,
  `ship_time` datetime NOT NULL,
  `ship_mod` varchar(255) NOT NULL,
  `ship_express` varchar(255) DEFAULT NULL,
  `ship_code` varchar(255) DEFAULT NULL,
  `use_points` varchar(255) NOT NULL,
  `pay` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 資料表結構 `orders_details`
--

CREATE TABLE `orders_details` (
  `sid` int(11) NOT NULL,
  `order_sid` int(11) NOT NULL,
  `product_sid` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_sid`),
  ADD UNIQUE KEY `num_sid` (`num_sid`);

--
-- 資料表索引 `orders_details`
--
ALTER TABLE `orders_details`
  ADD PRIMARY KEY (`sid`),
  ADD UNIQUE KEY `order_sid` (`order_sid`),
  ADD UNIQUE KEY `product_sid` (`product_sid`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `orders`
--
ALTER TABLE `orders`
  MODIFY `order_sid` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表 AUTO_INCREMENT `orders_details`
--
ALTER TABLE `orders_details`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
