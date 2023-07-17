CREATE TYPE "PATMENT_METHODS" AS ENUM('debito', 'credito');

CREATE TABLE IF NOT EXISTS payment_infos(
    id SERIAL PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    number VARCHAR(16) NOT NULL,
    dueDate DATE NOT NULL,
    code VARCHAR(3) NOT NULL,
    method "PAYMENT_METHODS" NOT NULL
);

CREATE TABLE IF NOT EXISTS clients(
	id SERIAL PRIMARY KEy,
    name VARCHAR(45) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    "paymentId" INTEGER UNIQUE,
    FOREIGN KEY("paymentId") REFERENCES payment_infos("id")
);