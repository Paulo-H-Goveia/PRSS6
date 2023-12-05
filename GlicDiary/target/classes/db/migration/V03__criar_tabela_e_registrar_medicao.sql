CREATE TABLE measure (
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	type VARCHAR(20) NOT NULL,
	measure_date DATE NOT NULL,
	measure DOUBLE NOT NULL,
	user_id BIGINT(20) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO measure (type, measure_date, measure, user_id ) values ('JEJUM', '2023-08-18', 99, 1);
INSERT INTO measure (type, measure_date, measure, user_id ) values ('ALMOCO', '2023-08-18', 120, 1);
INSERT INTO measure (type, measure_date, measure, user_id ) values ('JANTA', '2023-08-18', 88, 1);
INSERT INTO measure (type, measure_date, measure, user_id ) values ('JEJUM', '2023-08-19', 170, 1);
INSERT INTO measure (type, measure_date, measure, user_id ) values ('ALMOCO', '2023-08-19', 102, 1);
INSERT INTO measure (type, measure_date, measure, user_id ) values ('JANTA', '2023-08-19', 130, 1);
INSERT INTO measure (type, measure_date, measure, user_id ) values ('JEJUM', '2023-08-20', 95, 1);
INSERT INTO measure (type, measure_date, measure, user_id ) values ('ALMOCO', '2023-08-20', 155, 1);
INSERT INTO measure (type, measure_date, measure, user_id ) values ('JANTA', '2023-08-20', 100, 1);
INSERT INTO measure (type, measure_date, measure, user_id ) values ('ALMOCO', '2023-08-18', 70, 2);
