select t.id , t.tanggal_order , t.status_pelunasan , t.tanggal_pembayaran , dt.total , dt.jumlah, ' ' as " "
from transaksi t 
left join detail_transaksi dt on dt.id_transaksi = t.id 