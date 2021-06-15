select	a.bookcode, a.bookdate, a.cancelDate, unit, unitStatusCode, c.bookCode as bookcodeExistsNotCancel, d.remarks
from	TR_bookingheader a
join	v_unitDetail b ON a.unitID = b.Id
left join TR_BookingHeader c ON b.id = c.unitID and c.cancelDate is null
left join TR_BookingCancel d ON a.id = d.bookingheaderid
where	a.bookcode = @bookcode