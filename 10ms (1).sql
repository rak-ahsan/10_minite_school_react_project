-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2023 at 07:34 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `10ms`
--

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `class_id` int(50) NOT NULL,
  `class_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`class_id`, `class_name`) VALUES
(1, 'এইচএসসি\'২৫'),
(2, '১০ম শ্রেনি'),
(3, '৯ম শ্রেনি'),
(4, '৮ম শ্রেনি'),
(5, '৭ম শ্রেনি'),
(6, '৬ষ্ঠ শ্রেনি');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `course_id` int(15) NOT NULL,
  `coursename` varchar(50) NOT NULL,
  `coursefee` int(55) NOT NULL,
  `courseduretion` varchar(40) NOT NULL,
  `couseclass` int(15) NOT NULL,
  `coursesubject` int(15) NOT NULL,
  `courseimg` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`course_id`, `coursename`, `coursefee`, `courseduretion`, `couseclass`, `coursesubject`, `courseimg`) VALUES
(1, 'hsc', 50, '3', 6, 8, 'user_1694014671_1570245.webp'),
(2, 't', 50, 'f', 5, 8, 'user_1694015698_2570606.ico');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` int(15) NOT NULL,
  `role_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`role_id`, `role_name`) VALUES
(1, 'Admin'),
(2, 'Teacher'),
(3, 'Manager'),
(4, 'Student');

-- --------------------------------------------------------

--
-- Table structure for table `student_add`
--

CREATE TABLE `student_add` (
  `stu_id` int(50) NOT NULL,
  `studentname` varchar(50) NOT NULL,
  `studentnumber` varchar(20) NOT NULL,
  `studentemail` varchar(40) NOT NULL,
  `studentaddress` varchar(100) DEFAULT NULL,
  `studentusername` varchar(50) NOT NULL,
  `studentpassword` varchar(50) NOT NULL,
  `studentclass` int(10) NOT NULL,
  `studentrole` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_add`
--

INSERT INTO `student_add` (`stu_id`, `studentname`, `studentnumber`, `studentemail`, `studentaddress`, `studentusername`, `studentpassword`, `studentclass`, `studentrole`) VALUES
(8, 'kamrul islam', '1', 'cloudysky121@gmail.com', 'a', 'f', 'f', 6, 4);

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `sub_id` int(50) NOT NULL,
  `sub_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`sub_id`, `sub_name`) VALUES
(1, 'বাংলা ১ম পত্র'),
(2, 'বাংলা ২য় পত্র'),
(3, 'সাধারণ গণিত'),
(4, 'উচ্চতর গণিত'),
(5, 'English 1st Paper'),
(6, ' English 2nd Paper'),
(7, 'পদার্থবিজ্ঞান'),
(8, ' রসায়ন'),
(9, 'জীববিজ্ঞান');

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `tea_id` int(11) NOT NULL,
  `tea_name` varchar(50) NOT NULL,
  `tea_fee` int(15) NOT NULL,
  `tea_class` int(11) NOT NULL,
  `tea_subject` varchar(15) NOT NULL,
  `tea_role` int(15) NOT NULL,
  `tea_number` int(50) NOT NULL,
  `tea_username` varchar(11) NOT NULL,
  `tea_password` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`tea_id`, `tea_name`, `tea_fee`, `tea_class`, `tea_subject`, `tea_role`, `tea_number`, `tea_username`, `tea_password`) VALUES
(25, 'MD RAKIBUL ISLAM', 5000, 4, '9', 2, 1775566772, 'user', 1),
(26, 'MD RAKIBUL ', 5000, 4, '5', 1, 1775566772, 'Khaleda', 22);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`class_id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `student_add`
--
ALTER TABLE `student_add`
  ADD PRIMARY KEY (`stu_id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`sub_id`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`tea_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `class_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `course_id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `student_add`
--
ALTER TABLE `student_add`
  MODIFY `stu_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `sub_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `tea_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
