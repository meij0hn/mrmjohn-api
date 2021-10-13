select	distinct tph.transno, tpd.ket
from    TR_Paymentheader tph
join    TR_PaymentDetail tpd ON tph.id = tpd.paymentheaderid
where	transno = @transno
