update a set a.canceldate = NULL
from	TR_bookingheader a
where	bookcode = @bookcode

update a set a.remarks = a.remarks + ' | Request Rollback Tiket Melita ' + @tiket
from	LOG_TR_bookingheader a
where	bookcode = @bookcode
and		execMode = 'UPDATE'
and		cast(execTime as date) = cast(getdate() as date)
and		execUN = 'usrMSU'

delete
from	TR_BookingCancel
where	bookingHeaderID in (select id from TR_bookingheader where bookcode = @bookcode)

update	a set a.remarks = a.remarks + ' | Request Rollback Tiket Melita ' + @tiket
from	LOG_TR_BookingCancel a
where	bookingHeaderID in (select id from TR_bookingheader where bookcode = @bookcode)
and		execMode = 'DELETE'
and		cast(execTime as date) = cast(getdate() as date)
and     execUN = 'usrMSU'

update	b set b.unitstatusId = 6
from	TR_bookingheader a
join	MS_Unit b ON a.unitID = b.Id
where	a.bookcode = @bookcode

delete
from	TR_PaymentHeader where id in (
	select	PaymentIDHeader
	from	v_TR_Payment
	where	othersTypeCode in ('AD4','AD7')
	and		bookingHeaderID in (select id from TR_bookingheader where bookcode = @bookcode)
)

update a set a.ket = a.ket + ' | Request Rollback Tiket Melita ' + @tiket
from	LOG_TR_PaymentHeader a
where	bookingHeaderID in (select id from TR_bookingheader where bookcode = @bookcode)
and		execMode = 'DELETE'
and		cast(execTime as date) = cast(getdate() as date)
and     execUN = 'usrMSU'

update a set a.ket = a.ket + ' | Request Rollback Tiket Melita ' + @tiket
from	LOG_TR_PaymentDetail a
where	execMode = 'DELETE'
and     execUN = 'usrMSU'
and		cast(execTime as date) = cast(getdate() as date)
and		paymentHeaderID in (
	select	id
	from	LOG_TR_PaymentHeader
	where	bookingHeaderID in (select id from TR_bookingheader where bookcode = @bookcode)
	and		execMode = 'DELETE'
	and		cast(execTime as date) = cast(getdate() as date)
    and     execUN = 'usrMSU'
)

update a set a.canceldate = NULL, a.status = 'NEW'
from	e3newcomm..TR_SoldUnit a
where	bookNo = @bookcode

insert into MSUdb..History_RollbackUnit
select	@bookcode, getdate(), @tiket


select	a.bookcode, a.bookdate, a.cancelDate, unit, unitStatusCode, c.bookCode as bookcodeExistsNotCancel
from	TR_bookingheader a
join	v_unitDetail b ON a.unitID = b.Id
left join TR_BookingHeader c ON b.id = c.unitID and c.cancelDate is null
where	a.bookcode = @bookcode

select	bookingHeaderID, cancelDate, remarks
from	TR_BookingCancel
where	bookingHeaderID in (select id from TR_bookingheader where bookcode = @bookcode)






