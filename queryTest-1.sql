CREATE TABLE public.transaksi (
	id serial NOT NULL DEFAULT nextval('transaksi_id_seq'::regclass),
	tanggal_order timestamp NOT NULL,
	status_pelunasan varchar(50) NOT NULL,
	tanggal_pembayaran timestamp NULL,
	CONSTRAINT transaksi_pk PRIMARY KEY (id)
);

insert into public.transaksi 
(id, tanggal_order, status_pelunasan, tanggal_pembayaran)
values 
(1, '2020-12-01 11:30:00'::timestamp, 'lunas', '2020-12-01 12:00:00'::timestamp)

insert into public.transaksi 
(id, tanggal_order, status_pelunasan)
values 
(2, '2020-12-02 10:30:00'::timestamp, 'pending')