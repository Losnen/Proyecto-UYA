SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Coches`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Coches` (
  `Modelo` VARCHAR(45) NOT NULL,
  `Conductor` VARCHAR(45) NOT NULL,
  `Antigüedad` SMALLINT(6) NULL,
  `Rutinas` VARCHAR(45) NOT NULL,
  `Otros viajeros` VARCHAR(45) NULL,
  `Zonas` VARCHAR(45) NULL,
  PRIMARY KEY (`Conductor`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci;

CREATE USER 'user' IDENTIFIED BY 'user';

GRANT ALL ON `mydb`.* TO 'user';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mydb`.`Coches`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`Coches` (`Modelo`, `Conductor`, `Antigüedad`, `Rutinas`, `Otros viajeros`, `Zonas`) VALUES ('Seat Leon', 'Nieves Fuentes', 13, 'La Laguna', 'Sara García', 'Tenerife Norte');
INSERT INTO `mydb`.`Coches` (`Modelo`, `Conductor`, `Antigüedad`, `Rutinas`, `Otros viajeros`, `Zonas`) VALUES ('Citroen C2', 'Candelaria González', 2, 'Los Realejos', '', 'Tenerife Norte');

COMMIT;

