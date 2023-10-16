ALTER TABLE user ADD COLUMN active BOOLEAN NOT NULL;

UPDATE user SET `active` = '1' WHERE (`id` = '1');
UPDATE user SET `active` = '1' WHERE (`id` = '2');
UPDATE user SET `active` = '1' WHERE (`id` = '3');