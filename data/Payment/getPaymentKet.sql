select	distinct tbh.bookcode, tph.transno, tpd.ket
from    TR_Paymentheader tph
join    TR_PaymentDetail tpd ON tph.id = tpd.paymentheaderid
left join TR_bookingheader tbh ON tph.bookingheaderid = tbh.id
where	transno = @transno
