'use strict'
const querysDB = [
  {
    script: `CREATE TABLE IF NOT EXISTS roulette
    (
        idroulette integer,
        status boolean,
        date_created date DEFAULT NOW(),
        CONSTRAINT pk_idroulette PRIMARY KEY (idroulette)
    );`
  },
  {
    script: `CREATE TABLE IF NOT EXISTS bet_on_roulette
    (
        idbet integer,
        isred boolean,
        isblack boolean,
        number_bet smallint,
        date_created date DEFAULT NOW(),
        money smallint,
        userid character varying(60),
        idroulette integer,
        CONSTRAINT pk_betonroulette PRIMARY KEY (idbet),
        CONSTRAINT fk_betonroulette FOREIGN KEY (idroulette)
            REFERENCES roulette (idroulette) MATCH SIMPLE
            ON UPDATE RESTRICT
            ON DELETE RESTRICT
            NOT VALID
    );`
  }
]

module.exports = querysDB
