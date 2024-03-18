DROP DATABASE IF EXISTS `pokemon_db`;
CREATE DATABASE `pokemon_db`;
USE `pokemon_db`;

DROP TABLE IF EXISTS `pokemon_ratings`;
CREATE TABLE `pokemon_ratings` (
    `rating_id` bigint NOT NULL AUTO_INCREMENT,
    `pokemon_name` varchar(25) DEFAULT NULL,
    `rating` int DEFAULT NULL,
    `create_date` datetime(6) DEFAULT NULL,
    PRIMARY KEY (`rating_id`),
    CONSTRAINT rating_check CHECK (rating >= 1 AND rating <= 10)
);

DROP TABLE IF EXISTS `pokemon_ratings_summary`;
CREATE TABLE `pokemon_ratings_summary` (
    `pokemon_name` varchar(25) NOT NULL,
    `average_rating` decimal(4, 2) DEFAULT NULL,
    `total_ratings` int DEFAULT NULL,
    PRIMARY KEY (`pokemon_name`)
);

-- Trigger to update `pokemon_summary`
DELIMITER //
CREATE TRIGGER `update_pokemon_ratings_summary`
AFTER INSERT ON `pokemon_ratings`
FOR EACH ROW
BEGIN
    DECLARE total_ratings INT;
    DECLARE avg_rating DECIMAL(5, 2);

    -- Calculate total ratings for the Pokémon
    SELECT COUNT(*) INTO total_ratings FROM `pokemon_ratings` WHERE `pokemon_name` = NEW.`pokemon_name`;

    -- Calculate average rating for the Pokémon
    SELECT AVG(`rating`) INTO avg_rating FROM `pokemon_ratings` WHERE `pokemon_name` = NEW.`pokemon_name`;

    -- Update or insert into pokemon_summary
    INSERT INTO `pokemon_ratings_summary` (`pokemon_name`, `average_rating`, `total_ratings`)
    VALUES (NEW.`pokemon_name`, avg_rating, total_ratings)
    ON DUPLICATE KEY UPDATE
        `average_rating` = avg_rating,
        `total_ratings` = total_ratings;
END;
//
DELIMITER ;

CREATE USER IF NOT EXISTS 'pokemon_db_user' @'localhost' IDENTIFIED BY 'pokemon_db_user';
GRANT SELECT,
    INSERT,
    UPDATE,
    DELETE,
    EXECUTE on `pokemon_db`.* TO 'pokemon_db_user' @'localhost';

INSERT INTO `pokemon_ratings` (`pokemon_name`, `rating`, `create_date`) VALUES ('Pikachu', 8, NOW());
