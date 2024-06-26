-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2024 at 06:54 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `job_portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth`
--

CREATE TABLE `auth` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth`
--

INSERT INTO `auth` (`id`, `email`, `mobile`, `password`) VALUES
(1, 'user1@gmail.com', '1234567890', '$2a$10$MVdoC/EU0I9JaII46J6Jwe0d2lsCfFO92keMeyTnzBbj/wOxJ5dki'),
(2, 'user2@gmail.com', '9876543210', 'hashed_password2');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `mobile` varchar(10) NOT NULL CHECK (octet_length(`mobile`) = 10),
  `email` varchar(255) NOT NULL,
  `message` varchar(1000) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `mobile`, `email`, `message`, `timestamp`) VALUES
(1, 'Lomash Rishi', '9977679866', 'jkjoi@jj.com', 'Hiiii', '2024-05-18 08:00:34'),
(2, 'Lomash Rishi', '9977679866', 'jkjoi@jj.com', 'hiiiii', '2024-05-18 08:14:18'),
(3, 'Lomash Rishi', '9977679866', 'jkjoi@jj.com', 'hiii', '2024-05-18 08:17:24'),
(4, 'Lomash Rishi', '9977679866', 'jkjoi@jj.com', 'huiui', '2024-05-18 08:26:14'),
(5, 'Lomash Rishi', '9977679866', 'jkjoi@jj.com', 'hiii', '2024-05-18 08:28:30'),
(6, 'Lomash Rishi', '9977679866', 'jkjoi@jj.com', 'hiiii', '2024-05-18 08:29:09'),
(7, 'Lomash Rishi', '9977679866', 'jkjoi@jj.com', 'HI', '2024-05-18 08:40:05'),
(8, 'Lomash Rishi', '9977679866', 'jkjoi@jj.com', 'hiii', '2024-05-18 08:53:52');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `Registration_No` varchar(15) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Dob` date NOT NULL,
  `Gender` varchar(30) NOT NULL,
  `Category` varchar(100) NOT NULL,
  `Marital_Status` varchar(30) NOT NULL,
  `Age` int(11) NOT NULL,
  `Relative_Type` varchar(60) NOT NULL,
  `Relative_Name` varchar(100) NOT NULL,
  `Mother_Name` varchar(100) NOT NULL,
  `Nationality` varchar(50) NOT NULL,
  `Domicile_CG` varchar(50) NOT NULL,
  `Domecile_District` varchar(200) NOT NULL,
  `Disabilities` varchar(100) NOT NULL,
  `Family_Yearly_Income` decimal(15,2) NOT NULL,
  `Email` varchar(200) NOT NULL,
  `Mobile` varchar(15) NOT NULL,
  `Password` varchar(300) NOT NULL,
  `Profile_Image_URL` varchar(255) DEFAULT NULL,
  `Signature_Image_URL` varchar(255) DEFAULT NULL,
  `HouseNo` varchar(50) NOT NULL,
  `Street` varchar(100) NOT NULL,
  `City_Village` varchar(100) NOT NULL,
  `State` varchar(200) NOT NULL,
  `District` varchar(200) NOT NULL,
  `PinCode` varchar(10) NOT NULL,
  `Time_Stamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Triggers `users`
--
DELIMITER $$
CREATE TRIGGER `before_insert_users` BEFORE INSERT ON `users` FOR EACH ROW BEGIN
    SET NEW.Registration_No = CONCAT('KRP', LPAD(NEW.ID, 10, '0'));
END
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Registration_No` (`Registration_No`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth`
--
ALTER TABLE `auth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
