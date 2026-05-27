CREATE DATABASE nike_jordan_PI;

USE nike_jordan_PI;

CREATE TABLE Usuario (
  idUsuario INT AUTO_INCREMENT PRIMARY KEY,
  Nome VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL
);


CREATE TABLE Look (
  idLook INT AUTO_INCREMENT PRIMARY KEY,
  tentativa INT,
  nota DECIMAL(3,1),
  compatibilidade INT,
  categoria VARCHAR(30),
  fkUsuario INT NOT NULL,
  dtHora DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

select * from Usuario;
select * from Look;
drop table Look;

