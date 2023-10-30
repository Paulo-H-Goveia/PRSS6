CREATE TABLE user (
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(150) NOT NULL,
	CPF VARCHAR(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO user (id, name, email, password, CPF) values (1, 'Fernando Duarte', 'fernandoduarte@ifsp.edu.br', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', '12345678910');
INSERT INTO user (id, name, email, password, CPF) values (2, 'Gislaine Rosales', 'gislainerosales@ifsp.edu.br', '$2a$10$Ot4XGuyPP7r82nN3WXA0bOL1Qk9gShKDlVuPoyp89HoFnHcwO4Tji', '98745632102');