/*
Navicat MySQL Data Transfer

Source Server         : 1103
Source Server Version : 80016
Source Host           : localhost:3306
Source Database       : huayue

Target Server Type    : MYSQL
Target Server Version : 80016
File Encoding         : 65001

Date: 2019-05-09 22:31:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `project`
-- ----------------------------
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `deadline` varchar(100) DEFAULT NULL,
  `style` varchar(255) DEFAULT NULL,
  `people` int(11) DEFAULT '0',
  `projectId` int(11) NOT NULL AUTO_INCREMENT,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `size` varchar(255) DEFAULT NULL,
  `colour` varchar(255) DEFAULT NULL,
  `introduce` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`projectId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of project
-- ----------------------------
INSERT INTO `project` VALUES ('1111', null, null, null, null, null, '1', '2019-05-08 15:57:51', null, null, null);
INSERT INTO `project` VALUES ('小赤佬', '800-1500', 'undefined', '2019-5-16', 'undefined', null, '2', '2019-05-08 18:25:59', '100x100', 'undefined', '放大版的发表发电部发电部');
INSERT INTO `project` VALUES ('小赤佬', '400-800', '头像', '2019-5-9', '无风格', null, '3', '2019-05-08 18:27:25', '100x100', 'RGB', '灌灌灌灌灌灌灌灌灌灌灌灌灌灌灌灌');
