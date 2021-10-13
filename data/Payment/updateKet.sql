update tpd set tpd.ket = @remarks
from    TR_Paymentheader tph
join    TR_PaymentDetail tpd ON tph.id = tpd.paymentheaderid
where	transno = @transno

update tpd set tpd.ket = tpd.ket + ' | Request Update Ket Tiket Melita ' + @tiket
from    TR_Paymentheader tph
join    LOG_TR_PaymentDetail tpd ON tph.id = tpd.paymentheaderid
where	transno = @transno
and execUN = 'usrMSU'
and	cast(execTime as date) = cast(getdate() as date)

select 'Done Update Remarks' as remark