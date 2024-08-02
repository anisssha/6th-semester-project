import { Grid, Typography } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-alice-carousel";

function Footer() {
  return (
    <div>
      <Grid
        className="bg-shade-red text-white text-center mt-10"
        container
        sx={{ bgcolor: "shade-red", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Company{" "}
          </Typography>
          <div>
            <Button className="pb=5" variant="h6" gutterBotton>
              {" "}
              About
            </Button>
          </div>

          <div>
            <Button className="pb=5" variant="h6" gutterBotton>
              {" "}
              Blog{" "}
            </Button>
          </div>

          <div>
            <Button className="pb=5" variant="h6" gutterBotton>
              {" "}
              Jobs
            </Button>
          </div>

          <div>
            <Button className="pb=5" variant="h6" gutterBotton>
              {" "}
              Press
            </Button>
          </div>

          <div>
            <Button className="pb=5" variant="h6" gutterBotton>
              {" "}
              Patners
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Solutions{" "}
          </Typography>
          <div>
            <Button className="pb=5" variant="h6" gutterBotton>
              {" "}
              Marketing
            </Button>
          </div>

          <div>
            <Button className="pb=5" variant="h6" gutterBotton>
              {" "}
              Analytics{" "}
            </Button>
          </div>

          <div>
            <Button className="pb=5" variant="h6" gutterBotton>
              {" "}
              Insights
            </Button>
          </div>

          <div>
            <Button className="pb=5" variant="h6" gutterBotton>
              {" "}
              Supports
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Documentation{" "}
          </Typography>
          <div>
            <Button className="pb=5" variant="h6" gutterBotton>
              {" "}
              Guides
            </Button>
          </div>

          <div>
            <Button className="pb=5" variant="h6" gutterBotton>
              {" "}
              API Status
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {" "}
            Legal{" "}
          </Typography>
          <div>
            <Button className="pb=5" variant="h6" gutterBotton>
              {" "}
              Clalm
            </Button>
          </div>

          <div>
            <Button className="pb=5" variant="h6" gutterBotton>
              {" "}
              Privacy
            </Button>
          </div>

          <div>
            <Button className="pb=5" variant="h6" gutterBotton>
              {" "}
              Terms
            </Button>
          </div>
          </Grid>

          <Grid  item
          xs={12}
          sx={{ display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', mt: 3 }}>
            <Typography variant="body2" component="p" align="center">
              &copy;2023 My Company. All rights reserved.
            </Typography>

            <Typography variant="body2" component="p" align="center">
              Made with love by Me.
            </Typography>

            <Typography variant="body2" component="p" align="center">
              Icons made by{' '}
              <Link
                href="https://www.freepik.com"
                color="inherit"
                underline="always"
              >
                Freepik
              </Link>{' '}
              from{' '}
              <Link
                href="https://www.flaticon.com/"
                color="inherit"
                underline="always"
              >
                www.flaticon.com
              </Link>
            </Typography>
          </Grid>
        
      </Grid>
    </div>
  );
}

export default Footer;
