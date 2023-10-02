CREATE TABLE user (
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	CPF VARCHAR(11) NOT NULL,
	phone VARCHAR (15),
	password VARCHAR(150) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO user (id, name, CPF, phone, password) values (1, 'Fernando Duarte', '11111111111', '+55011999999999', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji');
INSERT INTO user (id, name, CPF, phone, password) values (2, 'Gislaine Rosales', '11111111112','+55011999999999', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji');
