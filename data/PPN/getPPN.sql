select  tbh.bookcode, ud.UNIT, i.itemName, tbd.pctTax
from	TR_BookingHeader tbh
join	TR_BookingDetail tbd ON tbh.id = tbd.bookingheaderid
join	LK_item i ON tbd.itemId = i.id
join	v_unitdetail ud ON tbh.unitid = ud.id
where	bookcode = @bookcode
order by tbh.bookcode, ud.UNIT, 
        case    when i.itemName = 'Bangunan' then 0
                when i.itemName = 'Tanah' then 1
                else 2
        end
