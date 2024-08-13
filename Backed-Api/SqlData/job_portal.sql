-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 01, 2024 at 09:57 AM
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
(8, 'Lomash Rishi', '9977679866', 'jkjoi@jj.com', 'hiii', '2024-05-18 08:53:52'),
(9, 'Lomash Rishi', '1234567890', 'ok@gmail.com', 'Hii', '2024-07-24 08:23:17'),
(10, 'Rishi', '1234567890', 'user1@gmail.com', 'jhgjhg', '2024-07-24 08:48:53'),
(11, 'Lomash', '9977679866', 'Ok@gmail.com', 'HIiii', '2024-07-24 16:39:26'),
(12, 'Lomash Rishi', '8827846412', 'user1@gmail.com', 'hiii ', '2024-07-28 07:36:54'),
(13, 'Rishi', '8827846412', 'Rishi99@gmail.com', 'hiii', '2024-07-28 08:13:05'),
(14, 'Jon Stewart Doe', '6019521325', 'test@example.us', 'hiii', '2024-07-28 08:33:47'),
(15, 'Jon Stewart Doe', '6019521325', 'test@example.us', 'hiii', '2024-07-28 08:34:57'),
(16, 'Jon Stewart Doe', '6019521325', 'test@example.us', 'hii', '2024-07-28 08:35:22'),
(17, 'Jon Stewart Doe', '6019521325', 'test@example.us', 'hii', '2024-07-28 08:35:24'),
(18, 'Jon Stewart Doe', '6019521325', 'test@example.us', 'hii', '2024-07-28 08:35:29'),
(19, 'Jon Stewart Doe', '6019521325', 'test@example.us', 'hii', '2024-07-28 08:35:30'),
(20, 'Jon Stewart Doe', '6019521325', 'test@example.us', 'hii', '2024-07-28 08:35:30'),
(21, 'Jon Stewart Doe', '6019521325', 'test@example.us', 'hii', '2024-07-28 08:42:28');

-- --------------------------------------------------------

--
-- Table structure for table `notice_board`
--

CREATE TABLE `notice_board` (
  `id` int(11) NOT NULL COMMENT 'What`s New Home Page \r\n',
  `notice_title` varchar(100) NOT NULL,
  `notice_description` varchar(100) NOT NULL,
  `notice_date` date NOT NULL,
  `notice_file_url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notice_board`
--

INSERT INTO `notice_board` (`id`, `notice_title`, `notice_description`, `notice_date`, `notice_file_url`) VALUES
(1, 'Annual General Meeting', 'The Annual General Meeting (AGM) will be held on August 15th, 2024 at 10:00 AM in the conference hal', '2024-08-01', 'http://localhost:4200/notifications'),
(2, 'Holiday Announcement', 'The office will remain closed on August 18th, 2024, on account of Independence Day.', '2024-07-29', 'http://localhost:4200/notifications'),
(3, 'New Policy Update', 'Please review the updated company policies on the intranet. These changes will take effect from Sept', '2024-07-25', 'http://localhost:4200/notifications'),
(4, 'Maintenance Notice', 'There will be scheduled maintenance on the server from 12:00 AM to 2:00 AM on August 5th, 2024. Plea', '2024-07-28', 'http://localhost:4200/notifications');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `S_No` int(11) NOT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Start_Date` date DEFAULT NULL,
  `End_Date` date DEFAULT NULL,
  `PDF_File` varchar(255) DEFAULT NULL,
  `Apply_Now` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`S_No`, `Title`, `Description`, `Start_Date`, `End_Date`, `PDF_File`, `Apply_Now`) VALUES
(1, 'Job Opening: Software Developer', 'We are looking for a Software Developer to join our team.', '2024-01-01', '2024-01-31', 'job_software_developer.pdf', 'https://apply.example.com/job1'),
(2, 'Training Program: Data Science', 'Join our Data Science training program starting in February.', '2024-02-01', '2024-02-28', 'training_data_science.pdf', 'https://apply.example.com/training1'),
(3, 'Webinar: Modern Web Development', 'Attend our webinar on modern web development practices.', '2024-03-01', '2024-03-15', 'webinar_modern_web_dev.pdf', 'https://apply.example.com/webinar1'),
(4, 'Conference: AI and Machine Learning', 'Participate in our AI and Machine Learning conference.', '2024-04-01', '2024-04-30', 'conference_ai_ml.pdf', 'https://apply.example.com/conference1'),
(5, 'Workshop: Cloud Computing', 'Register for our hands-on cloud computing workshop.', '2024-05-01', '2024-05-10', 'workshop_cloud_computing.pdf', 'https://apply.example.com/workshop1'),
(6, 'Hackathon: Innovation Challenge', 'Join our innovation challenge hackathon.', '2024-06-01', '2024-06-02', 'hackathon_innovation_challenge.pdf', 'https://apply.example.com/hackathon1'),
(7, 'Course: Full Stack Development', 'Enroll in our full stack development course.', '2024-07-01', '2024-07-31', 'course_full_stack_dev.pdf', 'https://apply.example.com/course1'),
(8, 'Job Fair: Technology Careers', 'Visit our technology careers job fair.', '2024-08-01', '2024-08-05', 'job_fair_tech_careers.pdf', 'https://apply.example.com/jobfair1'),
(9, 'Seminar: Cybersecurity Awareness', 'Attend our seminar on cybersecurity awareness.', '2024-09-01', '2024-09-15', 'seminar_cybersecurity.pdf', 'https://apply.example.com/seminar1'),
(10, 'Event: Tech Expo 2024', 'Join us for the annual Tech Expo 2024.', '2024-10-01', '2024-10-03', 'event_tech_expo.pdf', 'https://apply.example.com/tech_expo1'),
(11, 'Programmer', 'Programmer For Office Project  Devlapment.', '2024-07-01', '2024-07-10', 'path/to/pdf/file', 'ApplyLink');

-- --------------------------------------------------------

--
-- Table structure for table `resetpass`
--

CREATE TABLE `resetpass` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `reset_password_token` varchar(255) DEFAULT NULL,
  `reset_password_expires` bigint(20) DEFAULT NULL,
  `mobile` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `resetpass`
--

INSERT INTO `resetpass` (`id`, `email`, `password`, `created_at`, `updated_at`, `reset_password_token`, `reset_password_expires`, `mobile`) VALUES
(7, 'arpitdhiwar99@gmail.com', '$2b$10$cvuw5xAjvdU96xN/QXJqEe2/q/64755TWbF1PUumyHuwuybgc/zzS', '2024-07-18 05:58:00', '2024-07-18 06:00:50', NULL, NULL, '0'),
(8, 'sahunikhil099@gmail.com', '$2b$10$4ZXWTp/CnAA1nsC8AsOqE.Bn/MAZZO.aw1bGYlJnZzetaTjvUhE86', '2024-07-18 06:02:30', '2024-07-18 06:04:50', '1d63364e3f24a398d2ccca6f993a9b4b97551868', 1721306090851, '0'),
(10, 'smcscdmt@gmail.com', '$2b$10$SpBK5M.GYGK7Ji4rQosoWOVOwX8G.DXHSsllmCwwkkVsiNcJkrByW', '2024-07-22 11:03:26', '2024-08-01 05:03:46', '5b02a1a1773a2472cc5afeaca9c443067db3f1ed', 1722492226829, '9977679866'),
(11, 'devrx200@gmail.com', '$2b$10$0BB6eWC7cFGpg4dJiUdEmeUomCDJ0cmtRbZnYBfp5P6raHivLjU5q', '2024-07-23 10:35:50', '2024-07-23 11:06:10', NULL, NULL, '0');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `Registration_No` varchar(10) NOT NULL,
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
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `Registration_No`, `Name`, `Dob`, `Gender`, `Category`, `Marital_Status`, `Age`, `Relative_Type`, `Relative_Name`, `Mother_Name`, `Nationality`, `Domicile_CG`, `Domecile_District`, `Disabilities`, `Family_Yearly_Income`, `Email`, `Mobile`, `Password`, `Profile_Image_URL`, `Signature_Image_URL`, `HouseNo`, `Street`, `City_Village`, `State`, `District`, `PinCode`, `Time_Stamp`) VALUES
(1, 'KJP0000001', 'Lomash', '2006-07-13', 'Male', 'GENERAL', 'Married', 18, 'Father', 'Ram', 'Rani', 'Indian', 'Yes', 'Dhamtari', 'No', 80000.00, 'Cg05@gmail.com', '8877679869', '$2b$10$Z5COl.oGbQK1xJZpRhbxFeglZpZULbtB2QN4Qgd57.HPbYy5LlsVC', 'ProfileImage-1720963618217.png', 'SignatureImage-1720963618225.jpg', '900', 'Raipur', 'Dhamtari', 'Chattisgarh', 'Dhamtari', '493773', '2024-07-14 07:56:58'),
(2, 'KJP0000002', 'Lomash', '2006-07-13', 'Male', 'GENERAL', 'Married', 18, 'Father', 'Ram', 'Rani', 'Indian', 'Yes', 'Dhamtari', 'No', 80000.00, 'Cg5@gmail.com', '9977679866', '$2b$10$IvRgHiJgH5VwNP/rmJstfeDW/DjwiruzhFYu7qYbYp4sRbqwT9NAe', 'ProfileImage-1720964796651.jpg', 'SignatureImage-1720964796656.jpg', '900', 'Raipur', 'Dhamtari', 'Chattisgarh', 'Dhamtari', '493773', '2024-07-14 08:16:37'),
(3, 'KJP0000003', 'Syam', '2006-07-14', 'Male', 'GENERAL', 'Married', 18, 'Father', 'Ram', 'Rani', 'Indian', 'Yes', 'Dhamtari', 'No', 80000.00, 'Syam@gmail.com', '9977679899', '$2b$10$caC8AEBvq.vYniBLz43K9uP67/fMw0xWLAjsk5s47eCD5seO1slHS', 'ProfileImage-1721057909348.png', 'SignatureImage-1721057909350.png', '900', 'Raipur', 'Dhamtari', 'Chattisgarh', 'Dhamtari', '493773', '2024-07-15 10:08:29'),
(4, 'KJP0000004', 'Lomash Rishi', '2006-07-14', 'Male', 'GENERAL', 'Married', 18, 'Father', 'Ram', 'Rani', 'Indian', 'Yes', 'Dhamtari', 'No', 80000.00, 'Raipur@gmail.com', '9977679850', '$2b$10$6lKAXnYYuaUhstJ3./7uIOwA3F2Pi6QiiAiPHkPj0y0xXE4V1AmxC', 'ProfileImage-1721059491201.png', 'SignatureImage-1721059491203.png', '900', 'Raipur', 'Dhamtari', 'Chattisgarh', 'Dhamtari', '493773', '2024-07-15 10:34:51'),
(5, 'KJP0000005', 'Deepak', '2006-07-14', 'Male', 'GENERAL', 'Married', 18, 'Father', 'Ram', 'Rani', 'Indian', 'Yes', 'Dhamtari', 'No', 80000.00, 'deepak@gmail.com', '9977679800', '$2b$10$rQ7Mv/QhadiKTU0Wkd7VlO09ojWxxPXt5kXXzB1nf7HT64q8ygap2', 'ProfileImage_undefined.png', 'SignatureImage_undefined.png', '900', 'Raipur', 'Dhamtari', 'Chattisgarh', 'Dhamtari', '493773', '2024-07-15 10:39:57'),
(6, 'KJP0000006', 'narendra', '2006-07-13', 'Male', 'GENERAL', 'Married', 18, 'Father', 'Ram', 'Rani', 'Indian', 'Yes', 'Dhamtari', 'No', 80000.00, 'Oksbi@gmail.com', '9977979866', '$2b$10$b4fWuK85RZuU3x0U7K11Iui8XaKIxQc5RG82rbCANxNsPKoHB3WSm', 'ProfileImage_9977679811.png', 'SignatureImage_9977679811.png', '900', 'Raipur', 'Dhamtari', 'Chattisgarh', 'Raigarh', '496001', '2024-07-15 10:49:02'),
(7, 'KJP0000007', 'Sinha', '2006-07-14', 'Male', 'GENERAL', 'Married', 18, 'Father', 'Ram', 'Rani', 'Indian', 'Yes', 'Dhamtari', 'No', 80000.00, 'India23@gmail.com', '9977779866', '$2b$10$UWHDLuaSRkeOTAlRUbWUcOP3gAE42WD/g1QQ6xN1NzdL7wlYtqOli', 'ProfileImage_9977779866.png', 'SignatureImage_9977779866.png', '900', 'Raipur', 'Dhamtari', 'Chattisgarh', 'Dhamtari', '493773', '2024-07-15 11:45:08'),
(8, 'KJP0000008', 'Lomash', '2006-07-14', 'Male', 'GENERAL', 'Married', 18, 'Father', 'Ram', 'Rani', 'Indian', 'Yes', 'Dhamtari', 'No', 80000.00, 'smcscdmt@gmail.com', '6268071125', '$2y$10$7nrFzNDWtky8H6iiqYL0Qe/XbXkirEL.UtoE.ZqVA18JpgWK.Hwv.$2b$10$b4fWuK85RZuU3x0U7K11Iui8XaKIxQc5RG82rbCANxNsPKoHB3WSm', 'ProfileImage_6268071125.png', 'SignatureImage_6268071125.png', '900', 'Raipur', 'Dhamtari', 'cg', 'dmt', '493773', '2024-07-23 10:03:03'),
(9, 'KJP0000009', 'Lomash', '2006-07-01', 'Male', 'GENERAL', 'Married', 18, 'Father', 'Ram', 'Rani', 'Indian', 'Yes', 'Dhamtari', 'No', 80000.00, 'Rishi99@gmail.com', '8827846412', '$2b$10$TP.BHAq.CYPeeSGSm/PcKeyW4Y4wRtkMkz16Gy8M0uEEBlSSexw7q', 'ProfileImage_8827846412.png', 'SignatureImage_8827846412.png', '900', 'Raipur', 'Dhamtari', 'Chattisgarh', 'Dhamtari', '493773', '2024-07-24 06:17:58'),
(10, 'KJP0000010', 'Lomash Rishi', '2006-07-03', 'Male', 'GENERAL', 'Married', 18, 'Father', 'Ram', 'Rani', 'Indian', 'Yes', 'Dhamtari', 'No', 80000.00, 'prsu@gmail.com', '0987654321', '$2b$10$LC956sJUvAtq8yyJFCY4DefmtHMNpjweSrAsV1d4feQB.rUS8pXzq', 'ProfileImage_0987654321.jpg', 'SignatureImage_0987654321.jpg', '900', 'Raipur', 'Dhamtari', 'Chattisgarh', 'Dhamtari', '493773', '2024-07-28 05:58:23'),
(11, 'KJP0000011', 'aNIL', '2006-07-27', 'Male', 'GENERAL', 'Married', 18, 'Father', 'Ram', 'Rani', 'Indian', 'Yes', 'Dhamtari', 'No', 80000.00, 'aNIL@gmail.com', '9966985025', '$2b$10$Ab1bQ.uJz6YTYISXxvO1p.VJyH.BLxm6QwsHVJ5AtPuELr1aY6GHa', 'ProfileImage_9966985025.png', 'SignatureImage_9966985025.jpg', '900', 'Raipur', 'Dhamtari', 'Chattisgarh', 'Raigarh', '496001', '2024-07-28 06:16:16'),
(12, 'KRP0000012', 'Lomash', '2006-07-19', 'Male', 'GENERAL', 'Married', 18, 'Father', 'Ram', 'Rani', 'Indian', 'Yes', 'Dhamtari', 'No', 80000.00, 'Arpit@gmail.com', '9098665099', '$2b$10$pkfQn487Mq1JsrapyZf.GuL/Tq.tWbotAWuLlLvCNBN75Np/7Vwwy', 'ProfileImage_9098665099.png', 'SignatureImage_9098665099.png', '900', 'Raipur', 'Dhamtari', 'Chattisgarh', 'Dhamtari', '493773', '2024-07-28 09:12:56'),
(13, 'KJP0000013', 'Lomash', '2006-07-13', 'Male', 'GENERAL', 'Married', 18, 'Father', 'Ram', 'Rani', 'Indian', 'Yes', 'Dhamtari', 'No', 80000.00, 'Pk@gmail.com', '9977679999', '$2b$10$Wmh4WQ5gVIUXKnWjSgsdfO24u8BEVx8Koaibm6pZNMSxfHuyb8K0S', 'ProfileImage_9977679999.png', 'SignatureImage_9977679999.png', '900', 'Raipur', 'Dhamtari', 'Chattisgarh', 'Dhamtari', '493773', '2024-07-28 09:29:07');

-- --------------------------------------------------------

--
-- Table structure for table `user_feedback`
--

CREATE TABLE `user_feedback` (
  `id` int(11) NOT NULL,
  `Registration_No` varchar(11) NOT NULL,
  `user_name` varchar(200) NOT NULL,
  `user_email` varchar(200) NOT NULL,
  `User_mobile` varchar(200) NOT NULL,
  `user_feedback` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_feedback`
--

INSERT INTO `user_feedback` (`id`, `Registration_No`, `user_name`, `user_email`, `User_mobile`, `user_feedback`) VALUES
(1, '', 'Rishi', 'Rishi99@gmail.com', '8827846412', 'hiii'),
(2, '', 'Rishi', 'Rishi99@gmail.com', '8827846412', 'hiii'),
(3, '', 'Jon Stewart Doe', 'test@example.us', '6019521325', 'hiii'),
(4, '', 'Jon Stewart Doe', 'test@example.us', '6019521325', 'hii'),
(5, '', 'Rishi', 'user1@gmail.com', '8827846412', 'hjjyukuy'),
(6, '', 'Rishi', 'user1@gmail.com', '8827846412', 'thh');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notice_board`
--
ALTER TABLE `notice_board`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`S_No`);

--
-- Indexes for table `resetpass`
--
ALTER TABLE `resetpass`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `Mobile` (`Mobile`),
  ADD UNIQUE KEY `Registration_No` (`Registration_No`),
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indexes for table `user_feedback`
--
ALTER TABLE `user_feedback`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `notice_board`
--
ALTER TABLE `notice_board`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'What`s New Home Page \r\n', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `S_No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `user_feedback`
--
ALTER TABLE `user_feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
