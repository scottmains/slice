-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2022 at 11:42 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sliceboro`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `bookingid` int(10) NOT NULL,
  `userid` int(10) DEFAULT NULL,
  `guestid` int(10) DEFAULT NULL,
  `bookingStart` varchar(25) NOT NULL,
  `bookingDate` varchar(20) NOT NULL,
  `dateBooked` varchar(25) NOT NULL,
  `partysize` int(2) NOT NULL,
  `active` int(10) NOT NULL DEFAULT 1,
  `notes` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`bookingid`, `userid`, `guestid`, `bookingStart`, `bookingDate`, `dateBooked`, `partysize`, `active`, `notes`) VALUES
(111, NULL, 24, '20:00', '2022/04/30', '2022-04-30 22:18:38', 8, 1, ''),
(112, 14, NULL, '18:30', '2022/04/30', '2022-04-30 22:19:09', 4, 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `guest`
--

CREATE TABLE `guest` (
  `guestid` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phonenumber` varchar(255) NOT NULL,
  `comment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `guest`
--

INSERT INTO `guest` (`guestid`, `name`, `email`, `phonenumber`, `comment`) VALUES
(1, 'scottmains@hotmail.co.uk', 'Scott Mains', '+447530576557', ''),
(2, 'keith@lemon', 'Keith Lemon', '+44273462734', ''),
(3, 'danielmcslurp@gmail.com', 'Daniel Slurp', '+447523293843', ''),
(4, 'scottmains4@googlemail.com', 'scott', '+447530576557', ''),
(5, 'scottmains4@googlemail.com', 'Scott Mains', '+447530576557', ''),
(6, 'scottmains4@googlemail.com', 'Scott Mains', '+447530576557', ''),
(7, 'scottmains@hotmail.co.uk', 'Scott Mains', '+447530576557', ''),
(8, 'keith@beans.co.uk', 'Keith Beans', '+447376427343', ''),
(9, 'keith@beans.com', 'Keith Beans', '+447530576557', ''),
(10, 'keith@beans.com', 'Keith Beans', '+47623874232', ''),
(11, 'chris.smith@googlemail.com', 'Chris Smith', '+44754563233', ''),
(12, 'Garry Levan', 'gary.levan@gmail.com', '+44736436447', ''),
(13, 'Keith Wallop', 'keith.wallop@gmail.com', '+44738274834', ''),
(14, 'Keith Richards', 'keith.richards@gmail.com', '+4475378623', ''),
(15, 'Keith Lemon', 'keith.lemon@aol.com', '+44879368923', ''),
(16, 'Keith Tragic', 'Keith.mctragicson@beans.com', '+44734873423', ''),
(17, 'Keith Beans', 'keith.beans@aol.com', '+43726387423', ''),
(18, 'Kenneth Badger', 'kenneth.badger@aol.com', '+3478623423', ''),
(19, 'Damien Boris', 'damien.boris@gmail.com', '+44738238743', ''),
(20, 'Travis Dinkle', 'travis.dinkle@gmail.com', '+447530576557', ''),
(21, 'Boris Johnson', 'borisjohnson@hmc.co.uk', '+34876324323', ''),
(22, 'Brian Fernandez', 'brian.fernandez@rockstar.com', '+398732423324', ''),
(23, 'Nigel Beanflicker', 'nigel.beanflicker@gmail.com', '+4473874298', ''),
(24, 'Sargent Wallop', 'sargent.wallop@gmail.com', '+44758473843', '');

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

CREATE TABLE `restaurant` (
  `restaurantid` int(11) NOT NULL,
  `max_occupancy` int(11) NOT NULL,
  `hours_open` varchar(10) NOT NULL,
  `hours_closed` varchar(10) NOT NULL,
  `timeInterval` time(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `restaurant`
--

INSERT INTO `restaurant` (`restaurantid`, `max_occupancy`, `hours_open`, `hours_closed`, `timeInterval`) VALUES
(1, 50, '17:00', '21:00', '00:30:00.00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phonenumber` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `loyaltyPoints` int(100) NOT NULL,
  `isAdmin` int(1) NOT NULL DEFAULT 0,
  `comment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `name`, `phonenumber`, `email`, `password`, `loyaltyPoints`, `isAdmin`, `comment`) VALUES
(14, 'Scott Mains', '+447530576557', 'scottmains@hotmail.co.uk', '$2y$12$64K.XTxPM9uKimhR4yL6BuNrIbXK5iJYx9C0wD3n8.RRIdTWrYbke', 6, 1, 'Loves the window seat'),
(17, 'Test', '+447530576557', 'test@test.com', '$2y$12$yOoSn4aTPIC1y5UrCFwameseadBIxs/ugwPuziV7YpPcF3ValnKli', 0, 0, ''),
(18, 'Keith Tragic', '+44739832423', 'Keith.tragic@aol.com', 'test', 0, 0, 'Yes guys!'),
(41, 'Keith Chegwin', '+447549374583', 'keith.chegwin@gmail.com', '$2y$12$YIRlUWXPdl4xsnSDf6g2Ze.if/ql6g0Y6ShQAq.CbgTBxzo477pr.', 0, 0, ''),
(42, 'Keith McBalls', '+44897348973', 'keith.balls@gmail.com', '$2y$12$dW2DZnBSZ1ciNM69kXhE6.Pbmfw1Jj7FG/Mp7Zd387UhKu96R2Hgu', 0, 0, ''),
(43, 'Damien McKeith', '+44567893465', 'damien.mckeith@gmail.com', '$2y$12$EEqmeV5eZxZ8EEX8zbd8Ge1FNfvHNsRDjb4nl09tjGLHpYIJQ93AK', 0, 0, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`bookingid`),
  ADD UNIQUE KEY `userid` (`userid`);

--
-- Indexes for table `guest`
--
ALTER TABLE `guest`
  ADD PRIMARY KEY (`guestid`);

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`restaurantid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `bookingid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

--
-- AUTO_INCREMENT for table `guest`
--
ALTER TABLE `guest`
  MODIFY `guestid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`localhost` EVENT `bookings_delete` ON SCHEDULE EVERY 1 DAY STARTS '2022-04-30 21:30:17' ON COMPLETION NOT PRESERVE ENABLE DO DELETE FROM bookings where bookingDate < now()$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
