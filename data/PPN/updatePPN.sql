update tbd set tbd.pctTax = @pctTax
from	TR_BookingHeader tbh
join	TR_BookingDetail tbd ON tbh.id = tbd.bookingheaderid
where	bookcode = @bookcode

insert into Msudb..History_DBInsertUpdateDelete 
select	@bookcode, getdate(), 'Update', 'Update TR_bookingDetail pctTax menjadi ' + CAST(@pctTax AS NVARCHAR(10)), @tiket