CREATE TABLE activity (
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	type VARCHAR(20) NOT NULL,
	activity_date DATE NOT NULL,
	distance DOUBLE NOT NULL,
	duration INT NOT NULL,
	user_id BIGINT(20) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO activity (type, activity_date, distance, duration, user_id ) values ('CORRIDA', '2023-08-18', 8.0, 42, 1);
INSERT INTO activity (type, activity_date, distance, duration, user_id ) values ('CORRIDA', '2023-08-16', 8.0, 43, 1);
INSERT INTO activity (type, activity_date, distance, duration, user_id ) values ('CAMINHADA', '2023-08-18', 5.0, 55, 2);