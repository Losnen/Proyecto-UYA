CREATE TABLE usuarios (
    Conductor VARCHAR(45) NOT NULL PRIMARY KEY,
    Modelo VARCHAR(45) NOT NULL,
    Antigüedad SMALLINT(6) NULL,
    Rutinas VARCHAR(45) NOT NULL,
    Otros_viajeros VARCHAR(45) NULL,
    Zonas VARCHAR(45) NOT NULL
);

INSERT INTO usuarios VALUES('Rafael David', 'Opel Corsa', 10, 'Tacoronte-Puerto', 'José', 'La Laguna');
