
CREATE TABLE public.detail_transaksi (
	id serial NOT NULL DEFAULT nextval('detail_transaksi_id_seq'::regclass),
	id_transaksi int4 NOT NULL,
	harga int4 NOT NULL,
	jumlah int4 NOT NULL,
	total int4 NULL,
	CONSTRAINT detail_transaksi_pk PRIMARY KEY (id),
	CONSTRAINT detail_transaksi_fk FOREIGN KEY (id_transaksi) REFERENCES transaksi(id)
);

insert into public.detail_transaksi 
(id, id_transaksi, harga, jumlah, total)
values 
(1, 1, 10000, 2, 20000)

insert into public.detail_transaksi 
(id, id_transaksi, harga, jumlah, total)
values 
(2, 2, 6250, 4, 25000)