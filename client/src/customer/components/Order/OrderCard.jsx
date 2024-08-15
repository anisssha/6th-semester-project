import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';

function OrderCard() {
  return (
    <div className="p-5 shadow-md hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://miro.medium.com/v2/resize:fit:1000/1*4l2-3dwaVMA7mflVNv5DLQ.jpeg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Black Lengha</p>
              <p className="opacity-50 text-xs font-semibold">Size:M</p>
              <p className="opacity-50 text-xs font-semibold">Color:Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
            <p>Rs2677</p>

        </Grid>
        <Grid item xs={4}>
          {true && <div>
            <p>
             <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/> 
                <span>
                    Delivered on march 03
                </span>
             
            </p>
            <p className="text-xs">
              Your Item Has Been Delivered

            </p>
             

          </div>}
            {false &&
            <p>
                <span>
                    Expected Delivery on March 03
                </span>
            </p>}

        </Grid>
      </Grid>
    </div>
  );
}

export default OrderCard;
