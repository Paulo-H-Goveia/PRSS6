CREATE TABLE measure (
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	type VARCHAR(20) NOT NULL,
	messure_date DATETIME NOT NULL,
	measure_value DOUBLE NOT NULL,
	user_id BIGINT(20) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO measure (type, messure_date, measure_value, user_id ) values ('ALMOCO', '2023-08-18 12:00:00', 110, 1);
INSERT INTO measure (type, messure_date, measure_value, user_id ) values ('JEJUM', '2023-08-16 08:00:00', 105, 1);
INSERT INTO measure (type, messure_date, measure_value, user_id ) values ('CORRECAO', '2023-08-18 14:00:00', 135, 2);