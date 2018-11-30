-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1
-- 產生時間： 2018 年 11 月 28 日 07:51
-- 伺服器版本: 10.1.36-MariaDB
-- PHP 版本： 7.2.10

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
-- 資料表結構 `members`
--

CREATE TABLE `members` (
  `sid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `nick_name` varchar(255) NOT NULL,
  `account` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `profile` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `postal_code` int(11) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `blog` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `introduction` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `members`
--

INSERT INTO `members` (`sid`, `name`, `nick_name`, `account`, `password`, `email`, `profile`, `address`, `postal_code`, `gender`, `mobile`, `blog`, `birthday`, `introduction`, `created_at`) VALUES
(48, '', '管理員', '', '123', 'ckhtpe@gmail.com', '', '', 0, '', '', '', '0000-00-00', '', '0000-00-00 00:00:00'),
(49, '', '123', '', '123', '7ee@fee.com', '', '', 0, '', '', '', '0000-00-00', '', '0000-00-00 00:00:00'),
(50, '', '456', '', '456789', '456@gmail.com', '', '', 0, '', '', '', '0000-00-00', '', '0000-00-00 00:00:00'),
(51, '', '噴火龍!!', '', '123', 'erw@dfg.com', 'photo-1542692422-5cb6fc2cf737.jpg', '', 0, '', '', '', '0000-00-00', '', '0000-00-00 00:00:00'),
(52, '', '使用者A', '', '123', 'dvsd@fwiof.com', 'photo-1460103841677-11ff72e1f0b9.jpg', '', 0, '', '', '', '0000-00-00', '', '0000-00-00 00:00:00'),
(53, '', 'nice', '', '123', 'nice@gmail.com', '', '', 0, '', '', '', '0000-00-00', '', '0000-00-00 00:00:00'),
(54, '', '123', '', '123', 'weqqwe@asd.com', '', '', 0, '', '', '', '0000-00-00', '', '0000-00-00 00:00:00'),
(55, '', '哈囉!!!', '', '123', '123@ee.com', '', '', 0, '', '', '', '0000-00-00', '', '0000-00-00 00:00:00'),
(57, '', 'helloee', '', '123', 'weqdd@ww.com', '', '', 0, '', '', '', '0000-00-00', '', '2018-11-26 15:37:41'),
(58, '', 'only15925', '', '123', 'only@gmail.com', '', '', 0, '', '', '', '0000-00-00', '', '2018-11-26 17:44:04'),
(59, '', '123', '', '123', '7@fee.com', '', '', 0, '', '', '', '0000-00-00', '', '2018-11-27 11:53:06'),
(60, '', '你好', '', '123', '123@ok.com', '', '', 0, '', '', '', '0000-00-00', '', '2018-11-27 12:24:59'),
(61, '', '123erw', '', '123', 'erw@dfg.comee', '', '', 0, '', '', '', '0000-00-00', '', '2018-11-27 13:56:07'),
(62, '', 'hellobbbb', '', '123', 'ok@ok.com', 'photo-1486062066719-9da5979bcd75.jpg', '', 0, '', '', '', '0000-00-00', '', '2018-11-27 17:05:09'),
(63, '', '111', '', '111', '111@qq.qq', 'photo-1542869725-8321662bc3f2.jpg', '', 0, '', '', '', '0000-00-00', '', '2018-11-27 17:13:47');

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`sid`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `members`
--
ALTER TABLE `members`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
